import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import buildPrice from "@/utils/buildPrice";
import buildStars from "@/utils/buildStars";
import {
  BadgeCheckIcon,
  CheckCircle,
  Codesandbox,
  Heart,
  RefreshCw,
  TextIcon,
  Share,
  Shield,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";

enum ProductCondition {
  PREMIUM,
  NEW,
  REFURBISHED,
  USED,
  DAMAGED,
}

enum WarrantyType {
  MANUFACTURER = "MANUFACTURER",
  EXTENDED = "EXTENDED",
  REFURBISHED = "REFURBISHED",
}

enum ShippingOption {
  FREE = "FREE",
  PAID = "PAID",
  EXPRESS = "EXPRESS",
}

enum ReturnPolicy {
  DAYS_30 = "30 days return policy",
  DAYS_60 = "60 days return policy",
  NO_RETURN = "No return",
}

export default function Product() {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const productData = {
    tags: [
      { tag: "PREMIUM", icon: Star },
      { tag: "SEGURO", icon: Shield },
      { tag: "Entrega Rapida", icon: Truck },
    ],
    isNew: true,
    condition: ProductCondition.PREMIUM,
    title: "Computador Gamer GTX 1080 i7 16GB SSD 500GB",
    description:
      "Computador gamer ideal para jogos de alta performance. Equipado com uma placa de vídeo NVIDIA GTX 1080, processador Intel i7-9700K, 16GB de RAM e armazenamento SSD de 500GB. Perfeito para quem busca qualidade gráfica e velocidade.",
    price: 1299.99,
    withoutDiscount: 1499.99,
    discountPercentage: 13,
    rating: 4.8,
    inStock: true,
    categorys: ["GAMER", "ELETRONICOS", "COMPUTADORES"],
    specifications: [
      {
        name: "GPU",
        value: "NVIDIA RTX 1080",
      },
      {
        name: "CPU",
        value: "Intel i7-9700K",
      },
      {
        name: "RAM",
        value: "16GB DDR4",
      },
      {
        name: "Storage",
        value: "500GB SSD",
      },
    ],
    mainFeatures: [
      {
        name: "Monitor",
        value: '27" 144Hz',
      },
      {
        name: "Teclado",
        value: "mecânico RGB",
      },
      {
        name: "Mouse",
        value: "gamer de alta precisão",
      },
      {
        name: "Headset",
        value: "com cancelamento de ruídod awd awdaw dwa d awdaw dawd a",
      },
    ],
    colors: ["#1a1a1a", "#f5f5f5", "#dc2626", "#2563eb"],
    freeShipping: ShippingOption.FREE,
    warranty: WarrantyType.MANUFACTURER,
    returnPolicy: ReturnPolicy.DAYS_30,
    includes: [
      {
        name: "Monitor",
        value: '27" 144Hz',
      },
      {
        name: "Teclado",
        value: "mecânico RGB",
      },
    ],
  };

  const buildTags = () => {
    const badges = [];

    if (productData.isNew) {
      badges.push(
        <Badge key="new" className="bg-blue-400 text-white font-mono">
          <BadgeCheckIcon className="mr-1 h-4 w-4" /> Novo Produto
        </Badge>
      );
    }

    const conditionNames = {
      [ProductCondition.PREMIUM]: "Premium",
      [ProductCondition.NEW]: "Novo",
      [ProductCondition.REFURBISHED]: "Reformado",
      [ProductCondition.USED]: "Usado",
      [ProductCondition.DAMAGED]: "Danificado",
    };

    const conditionName = conditionNames[productData.condition];
    if (conditionName) {
      badges.push(
        <Badge key="condition" variant="outline" className="text-black">
          {conditionName}
        </Badge>
      );
    }

    return badges;
  };

  const buildPolicies = () => {
    const policyConfig = {
      [ShippingOption.FREE]: { icon: Truck, text: "Frete Grátis" },
      [ShippingOption.PAID]: { icon: Truck, text: "Frete Pago" },
      [ShippingOption.EXPRESS]: { icon: Truck, text: "Entrega Expressa" },
      [WarrantyType.MANUFACTURER]: { icon: ShieldCheck, text: "Garantia do Fabricante" },
      [WarrantyType.EXTENDED]: { icon: ShieldCheck, text: "Garantia Estendida" },
      [WarrantyType.REFURBISHED]: { icon: RefreshCw, text: "Garantia para Produtos Reformados" },
      [ReturnPolicy.DAYS_30]: { icon: CheckCircle, text: "Devolução em 30 dias" },
      [ReturnPolicy.DAYS_60]: { icon: CheckCircle, text: "Devolução em 60 dias" },
      [ReturnPolicy.NO_RETURN]: { icon: CheckCircle, text: "Sem Devolução" },
    };

    const policyKeys = [
      productData.freeShipping,
      productData.warranty,
      productData.returnPolicy
    ];

    return policyKeys
      .map((key, index) => {
        const policy = policyConfig[key as keyof typeof policyConfig];
        if (!policy) return null;

        const Icon = policy.icon;
        return (
          <div key={index} className="flex items-center gap-2 flex-col">
            <Icon className="text-blue-500" />
            <span className="text-sm font-medium text-primary">
              {policy.text}
            </span>
          </div>
        );
      })
      .filter(Boolean);
  };

  const buildColors = () => {
    const colors = productData.colors.map((color, index) => (
      <div
        key={index}
        className="w-16 h-16 rounded-full cursor-pointer border-2 border-gray-200 data-[active='true']:border-4 data-[active='true']:border-blue-500"
        data-active={selectedColorIndex === index ? "true" : "false"}
        style={{ backgroundColor: color }}
        onClick={() => handleSelectColor(index)}
      ></div>
    ));

    return colors;
  };

  const handleSelectColor = (index: number) => {
    console.log(`Selected color: ${productData.colors[index]}`);
    setSelectedColorIndex(index);
  };

  return (
    <div className="flex flex-col gap-10 ">
      <div className="flex gap-10">
        <section className="flex gap-4 flex-col w-2/5">
          <Card className="w-full h-104 flex items-center justify-center   ">
            <Codesandbox width={64} height={64} />
          </Card>
          <div className="flex flex-row gap-4 justify-center items-center">
            {productData.tags.map((tag, index) => (
              <Card
                key={index}
                className="w-32 h-32 flex items-center justify-center"
              >
                <CardTitle>
                  <tag.icon />
                </CardTitle>
                <CardDescription className="font-bold">{tag.tag}</CardDescription>
              </Card>
            ))}
          </div>
        </section>
        <section className="flex gap-6 flex-col w-3/5">
          <div className="flex flex-row gap-2">{buildTags()}</div>
          <div className="text-sm flex gap-1 flex-col">
            <h1 className="font-bold text-3xl text-gray-800 tracking-tight">
              {productData.title}
            </h1>
            <div className="flex gap-2">
              {buildStars(productData)}{" "}
              <span className="text-muted-foreground">
                ({productData.rating})
              </span>
            </div>
          </div>
          {buildPrice(productData)}
          <Card className="flex flex-col gap-4">
            <CardHeader className="justify-start items-start mb-5">
              <CardTitle className="text-lg font-bold flex gap-2 items-center justify-start">
                <CheckCircle className="text-blue-500" />
                <h2>Principais Características</h2>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-5">
                {productData.mainFeatures.map((item, index) => (
                  <div key={index} className="flex">
                    <span className="text-muted-foreground">{item.name}: </span>
                    <span className="font-bold ml-auto overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          {productData.colors.length > 0 && (
            <div className="flex flex-col gap-2">
              <h2 className="font-bold text-lg">Cores Disponíveis</h2>
              <div className="flex gap-4">{buildColors()}</div>
            </div>
          )}
          <div className="flex gap-4 flex-col">
            <div className="flex gap-2 ">
              <Button
                className="grow-1 shrink-0 font-bold"
                size="lg"
                disabled={!productData.inStock}
              >
                {productData.inStock ? "Comprar Agora" : "Indisponível"}
              </Button>
              <Button className="" variant="outline">
                <Heart />
              </Button>
              <Button className="" variant="outline">
                <Share />
              </Button>
            </div>
            <Button
              className=" font-bold"
              variant="outline"
              size="lg"
              disabled={!productData.inStock}
            >
              {productData.inStock ? "Adicionar ao Carrinho" : "Indisponível"}
            </Button>
          </div>
          <div className="w-full h-[1px] bg-border"></div>
          <div className="flex self-center justify-center items-center gap-4">{buildPolicies()}</div>
        </section>
      </div>
      <div className="flex gap-10 h-full">
        <Card className="w-2/5 h-full flex flex-col">
          <CardHeader className="justify-start items-start mb-5">
            <CardTitle className="text-lg font-bold flex gap-2 items-center justify-start">
              <BadgeCheckIcon className="text-blue-500" />
              <h2>Especificações</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-3">
              {productData.specifications.map((item, index) => (
                <div key={index} className="flex">
                  <span className="text-muted-foreground">{item.name}: </span>
                  <span className="font-bold ml-auto overflow-hidden text-ellipsis whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="w-3/5 h-full flex flex-col">
          <CardHeader className="justify-start items-start mb-5">
            <CardTitle className="text-lg font-bold flex gap-2 items-center justify-start">
              <TextIcon className="text-primary" />
              <h2>Descrição</h2>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-justify">
              {productData.description}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
