import { Star, StarHalf } from "lucide-react";

const buildStars = (productData: any, variant: "full" | "compact" = "full") => {
  const stars = [];
  const rating = Number(productData?.rating ?? 0);
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  const size = variant === "compact" ? 14 : 18;
  const gapClass = variant === "compact" ? "gap-1" : "gap-2";
  const iconClass = "text-blue-500";

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={i} className="inline-flex items-center leading-none">
        <Star size={size} className={iconClass} />
      </span>
    );
  }
  if (halfStar) {
    stars.push(
      <span key="half" className="inline-flex items-center leading-none">
        <StarHalf size={size} className={iconClass} />
      </span>
    );
  }

  return (
    <div className={`flex items-baseline ${gapClass} select-none`} aria-hidden>
      {stars}
    </div>
  );
};

export default buildStars;