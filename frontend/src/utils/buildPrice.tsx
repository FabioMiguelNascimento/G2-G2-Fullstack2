import { Badge } from "@/components/ui/badge";

const buildPrice = (productData: any) => {
  if (productData.discountPercentage) {
    return (
      <div className="flex gap-4 items-center flex-nowrap">
        <span className="text-3xl font-bold text-blue-600">
          $ {productData.price.toFixed(2)}
        </span>

        <span className="text-lg font-medium text-muted-foreground line-through">
          $ {productData.withoutDiscount.toFixed(2)}
        </span>

        <Badge
          variant="secondary"
          className="font-bold place-self-center bg-green-200 text-green-800"
        >
          -{productData.discountPercentage}% OFF
        </Badge>
      </div>
    );
  }
  return (
    <span className="flex text-3xl font-bold text-blue-600 flex-nowrap whitespace-nowrap">
      $ {productData.price.toFixed(2)}
    </span>
  );
};

export default buildPrice
