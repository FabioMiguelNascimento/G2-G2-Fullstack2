import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import ConfirmDialog from "./ConfirmDialog";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

export default function CartSheet() {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogDescription, setDialogDescription] = useState("");
  const [onCancel, setOnCancel] = useState<() => void>(() => {});
  const [onContinue, setOnContinue] = useState<() => void>(() => {});

  const data = [
    {
      id: "prod-1",
      title: "Computador Gamer GTX 1080 i7 16GB SSD 500GB",
      price: 1299.99,
      totalPrice: 2000,
      quantity: 1,
    },
    {
      id: "prod-2",
      title: 'Monitor Gamer 27" 144Hz',
      price: 299.99,
      totalPrice: 2000,
      quantity: 2,
    },
    {
      id: "prod-3",
      title: "Teclado Mecânico RGB",
      price: 149.99,
      totalPrice: 2000,
      quantity: 1,
    },
  ];

  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const initialQuantities: Record<string, number> = {};
    data.forEach((prod) => {
      initialQuantities[prod.id] = prod.quantity;
    });
    return initialQuantities;
  });

  const increaseQuantity = (id: string) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQuantity = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    if (e.ctrlKey) {
      removeProduct(id);
      return;
    }

    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) - 1),
    }));
  };

  const confirmDelete = (
    title: string,
    description: string,
    onCancelCallback: () => void,
    onContinueCallback: () => void
  ) => {
    if (isDialogOpen) return;

    setDialogTitle(title);
    setDialogDescription(description);
    setOnCancel(() => onCancelCallback);
    setOnContinue(() => onContinueCallback);
    setDialogOpen(true);
  };

  const removeProduct = (id: string) => {
    confirmDelete(
      "Tem certeza que deseja excluir produto",
      "Essa ação vai excluir o produto por completo do seu carrinho",
      () => {
        setDialogOpen(false);
      },
      () => {
        setQuantities((prev) => {
          const newQuantities = { ...prev };
          delete newQuantities[id];
          return newQuantities;
        });
        setDialogOpen(false);
      }
    );
  };

  const clearCart = () => {
    confirmDelete(
      "Tem certeza que deseja esvaziar o carrinho?",
      "Essa ação vai remover todos os produtos do seu carrinho",
      () => {
        setDialogOpen(false);
      },
      () => {
        setQuantities({});
        setDialogOpen(false);
      }
    );
  };

  const buildProducts = () => {
    const products = data
      .map((prod) => {
        const quantity = quantities[prod.id] || 0;
        const totalPrice = prod.price * quantity;

        if (quantity === 0) return null;

        return (
          <Card key={prod.id}>
            <CardHeader>
              <CardTitle>{prod.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <h2>Preço: R$ {prod.price.toFixed(2)}</h2>
              <h2>Total: R$ {totalPrice.toFixed(2)}</h2>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              {quantity === 1 ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeProduct(prod.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={(e) => decreaseQuantity(e, prod.id)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
              )}
              <span className="font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => increaseQuantity(prod.id)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        );
      })
      .filter(Boolean);

    return products;
  };

  const hasItems = Object.values(quantities).some((qty) => qty > 0);

  const totalItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

  return (
    <>
      <Sheet>
        <SheetTrigger className="cursor-pointer relative">
          <ShoppingBag />
          {totalItems > 0 && (
            <Badge className="absolute bg-green-300 text-black top-[-10px] right-[-10px] flex items-center justify-center text-xs font-bold">
              {totalItems}
            </Badge>
          )}
        </SheetTrigger>
        <SheetContent className="pb-15">
          <SheetHeader>
            <SheetTitle>Carrinho de Produtos</SheetTitle>
            <SheetDescription>
              Aqui você vê, remove e altera produtos do seu carrinho
            </SheetDescription>
          </SheetHeader>
          <div className="overflow-y-scroll p-4 gap-4 flex flex-col">
            {buildProducts()}
          </div>
          <SheetFooter className="grid grid-cols-2 gap-4 absolute bottom-0 right-0 left-0">
            <Button
              variant="outline"
              className="cursor-pointer"
              disabled={!hasItems}
              onClick={clearCart}
            >
              Esvaziar
            </Button>
            <Button
              variant="default"
              className="cursor-pointer"
              disabled={!hasItems}
            >
              Comprar
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <ConfirmDialog
        open={isDialogOpen}
        title={dialogTitle}
        description={dialogDescription}
        onCancel={onCancel}
        onContinue={onContinue}
        onOpenChange={setDialogOpen}
      />
    </>
  );
}
