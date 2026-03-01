import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import goldBar from "@/assets/gold-bar-1.jpg";
import goldCoin from "@/assets/gold-coin-1.jpg";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const recommended = [
  { id: "r1", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "r2", image: goldCoin, name: "1G Gold Coin 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "r3", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "r4", image: goldCoin, name: "1G Gold Coin 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
];

const Cart = () => {
  const [qty, setQty] = useState(1);

  return (
    <Layout>
      <div className="pt-28 md:pt-32" />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-4">
        <p className="text-xs text-muted-foreground">
          Home &gt; Gold Bars Coins &gt; <span className="text-primary">2 Gram Flower Gold Coin</span>
        </p>
      </div>

      <section className="container mx-auto px-4 pb-16">
        <h1 className="font-heading text-lg md:text-xl uppercase text-foreground mb-8">
          Cart (1 Item) 22 Karat 916 Purity 1 Gram Flower Gold Coin Certified Authenticity
        </h1>

        <div className="grid lg:grid-cols-[1fr_380px] gap-8">
          {/* Cart item */}
          <div className="border border-border rounded p-4 md:p-6">
            <div className="flex gap-4 md:gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-foreground/5 rounded flex items-center justify-center flex-shrink-0">
                <img src={goldCoin} alt="Product" className="w-full h-full object-contain p-2" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-sm text-foreground font-body">22 Karat 916 Purity 1 Gram Flower Gold Coin Certified Authenticity</h3>
                    <p className="text-xs text-muted-foreground mt-1">Order in 15 h 59 m</p>
                    <p className="text-xs text-foreground mt-0.5">Get it by <span className="font-semibold">Thu, Dec 4</span></p>
                    <p className="text-xs text-muted-foreground mt-0.5">Sold by Gold and Diamonds</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg text-foreground font-heading">549</p>
                    <p className="text-xs text-muted-foreground line-through">550</p>
                    <p className="text-xs text-primary">0% OFF</p>
                    <p className="text-xs text-muted-foreground mt-1">EXPRESS</p>
                    <p className="text-xs text-primary">FREE DELIVERY</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <span className="text-xs text-muted-foreground">■ Prepaid only</span>
                  <span className="text-xs text-muted-foreground">ⓘ This Item Cannot Be Exchanged Or Returned.</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 className="w-3 h-3" /> Remove
                  </button>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">QTY</span>
                    <div className="flex items-center border border-border rounded">
                      <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-1 text-foreground hover:text-primary">-</button>
                      <span className="px-3 py-1 bg-primary text-primary-foreground text-sm">{qty}</span>
                      <button onClick={() => setQty(qty + 1)} className="px-3 py-1 text-foreground hover:text-primary">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="border border-border rounded p-6 h-fit">
            <h2 className="font-heading text-lg uppercase text-foreground mb-6">Order Summary</h2>
            <div className="flex gap-2 mb-4">
              <input placeholder="Coupon Code" className="flex-1 bg-card border border-border px-3 py-2 text-sm text-foreground outline-none focus:border-primary" />
              <button className="btn-outline-gold text-[10px] py-2">Apply</button>
            </div>
            <button className="w-full text-left text-sm text-muted-foreground border border-border px-4 py-3 rounded mb-4 flex justify-between items-center hover:border-primary transition-colors">
              <span>✦ View Available Offers</span>
              <span>&gt;</span>
            </button>
            <div className="space-y-3 border-t border-border pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal (1 item)</span>
                <span className="text-foreground">549.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping Fee</span>
                <span className="text-primary">FREE</span>
              </div>
              <div className="flex justify-between text-lg font-heading border-t border-border pt-3">
                <span className="text-foreground">Total <span className="text-xs text-muted-foreground font-body">(Inclusive of VAT)</span></span>
                <span className="text-foreground">549.00</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3">💳 Monthly Payment Plans From 250. <span className="text-primary cursor-pointer">View more details</span></p>
            <button className="btn-gold w-full justify-center mt-4">Checkout →</button>
            <p className="text-xs text-center text-muted-foreground mt-3">
              💰 Earn 5% Cashback With Na Royal. <span className="text-primary cursor-pointer">T&C apply.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section className="py-16 px-4">
        <SectionHeading title="Recommended for You" />
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommended.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Cart;
