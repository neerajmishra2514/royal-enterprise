import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  brand: string;
  purity: string;
  price: number;
  originalPrice?: number;
}

const ProductCard = ({ id, image, name, brand, purity, price, originalPrice }: ProductCardProps) => {
  return (
    <div className="bg-card border border-border rounded overflow-hidden group">
      <div className="relative aspect-square bg-foreground/5 flex items-center justify-center p-4">
        <Link to={`/product/${id}`}>
          <img src={image} alt={name} className="w-full h-full object-contain" />
        </Link>
        <button className="absolute top-3 right-3 text-muted-foreground hover:text-primary transition-colors">
          <Heart className="w-5 h-5" />
        </button>
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded font-body font-semibold">
          {purity}
        </span>
      </div>
      <div className="p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-heading text-sm uppercase text-foreground hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground mt-1">{brand}</p>
        <p className="text-xs text-primary mt-1">Real Time</p>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-primary font-heading text-lg">AED {price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-muted-foreground text-xs line-through">
              AED {originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 mt-3">
          <button className="btn-gold text-[10px] py-2 px-3 flex-1">Add to Cart →</button>
          <div className="flex items-center border border-border">
            <button className="px-2 py-1 text-primary text-sm hover:bg-secondary transition-colors">+</button>
            <span className="px-3 py-1 text-sm text-foreground bg-primary text-primary-foreground">1</span>
            <button className="px-2 py-1 text-primary text-sm hover:bg-secondary transition-colors">-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
