import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function CartSheet() {
    const data = [
        {
            id: "prod-1",
            title: "Computador Gamer GTX 1080 i7 16GB SSD 500GB",
            price: 1299.99,
            totalPrice: 2000,
            quantity: 1
        },
        {
            id: "prod-2",
            title: "Monitor Gamer 27\" 144Hz",
            price: 299.99,
            totalPrice: 2000,
            quantity: 2
        },
        {
            id: "prod-3",
            title: "Teclado Mecânico RGB",
            price: 149.99,
            totalPrice: 2000,
            quantity: 1
        }
    ]

    const buildProducts = () => {
       const products = data.map(prod => (
            <Card >
                <CardHeader>
                    <CardTitle>{prod.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <h2>Preco: {prod.price}</h2>
                    <h2>Quantidade: {prod.quantity}</h2>
                    <h2>Total: {prod.totalPrice}</h2>
                </CardContent>
            </Card>
        ))

        return products
    }
    return (
        <Sheet>
            <SheetTrigger className="cursor-pointer"><ShoppingBag /></SheetTrigger>
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
                    <Button variant="outline" className="cursor-pointer">Esvaziar</Button>
                    <Button variant="default" className="cursor-pointer">Comprar</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}