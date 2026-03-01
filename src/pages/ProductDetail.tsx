import Layout from "@/components/Layout";
import goldBar from "@/assets/gold-bar-1.jpg";
import goldCoin from "@/assets/gold-coin-1.jpg";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { Star, Check, ShoppingCart, Phone } from "lucide-react";
import { useState } from "react";

const productImages = [goldCoin, goldBar, goldCoin, goldBar, goldCoin];

const relatedProducts = [
  { id: "r1", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "r2", image: goldCoin, name: "1G Gold Coin 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "r3", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "r4", image: goldCoin, name: "1G Gold Coin 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
];

const specs = [
  ["Product Weight", "1g"],
  ["Purity", "999.9"],
  ["Gross Weight", "1.00g"],
  ["Certification", "22 Karat Stamped, Certified By Swiss, For PAMP SA Geneva, Certified & LBMA Approved"],
  ["Material", "Gold"],
  ["Coin Type", "22 Karat Gold Coin"],
  ["Mint Source", "PAMP Suisse"],
];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState("1gram");
  const [qty, setQty] = useState(1);

  return (
    <Layout>
      <div className="pt-28 md:pt-32" />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-8">
        <p className="text-xs text-muted-foreground">
          Home &gt; Gold Bars &amp; Coins &gt; 22 Karat 916 Purity 1 Gram Flower Gold Coin
        </p>
      </div>

      {/* Product section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="bg-foreground/5 rounded aspect-square flex items-center justify-center p-8 mb-4">
              <img
                src={productImages[selectedImage]}
                alt="Product"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="flex gap-2">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 border rounded overflow-hidden ${
                    i === selectedImage ? "border-primary" : "border-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <span className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded font-body">22 KARAT 916 PURITY</span>
            <h1 className="font-heading text-2xl md:text-3xl uppercase text-foreground mt-4">
              22 Karat 916 Purity 1 Gram Flower Gold Coin Certified Authenticity
            </h1>
            <p className="text-sm text-muted-foreground mt-2">22 Karat 916 Pure Gold Coin, Premium Investment</p>
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
              </div>
              <span className="text-xs text-muted-foreground">8 Ratings</span>
            </div>

            {/* Weight options */}
            <div className="flex gap-2 mt-6">
              {["1gram", "2.5gram", "5gram", "10gram"].map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`px-4 py-2 text-xs border rounded transition-colors ${
                    selectedWeight === w
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:border-primary"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="font-heading text-3xl text-primary">AED 1,068.00</span>
              <span className="text-sm text-muted-foreground line-through ml-3">1,200.00</span>
            </div>

            <p className="text-sm text-muted-foreground mt-2">Get It By 4 Dec | Order In 14h52m</p>
            <p className="text-sm text-primary mt-1">Best Seller #9 In Gold Coins</p>

            {/* Qty & Add to cart */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm text-muted-foreground">Qty</span>
              <div className="flex items-center border border-border rounded">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-foreground hover:text-primary">-</button>
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3 py-2 text-foreground hover:text-primary">+</button>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="btn-gold flex-1 justify-center">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
              <button className="btn-outline-gold">
                <Phone className="w-4 h-4" /> Book a Consultation
              </button>
            </div>

            {/* Product tabs */}
            <div className="mt-8 flex gap-4 flex-wrap">
              {["Product Overview", "Specifications", "Certification & Assurance"].map((tab) => (
                <button key={tab} className="btn-outline-gold text-[10px] py-2">
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading title="Product Overview" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            The 22 Karat 916 Purity 1 Gram Flower Gold Coin is a beautifully crafted piece that combines the timeless allure of gold with exquisite floral artistry. Each coin is meticulously designed to showcase the elegance of nature's beauty, making it a perfect addition to any collection or a thoughtful gift for someone special.
          </p>

          <h3 className="font-heading text-lg uppercase text-foreground mt-8 mb-4">Highlights</h3>
          <ul className="space-y-2">
            {[
              "Purity: 22 Karat (916 Pure Gold)",
              "Weight: 1 Gram (Plus/Minus 0.1g Tolerance)",
              "Design: Elegant Floral (Symbolizes Prosperity and Grace)",
              "Free Shipping With Free UAE Delivery",
              "Available In Multiple Weights (1g, 2.5g, 5g, 10g)",
              "Tamper-Proof Packaging With Serial Number",
              "Investment-Grade Quality With LBMA Certification",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>

          <h3 className="font-heading text-lg uppercase text-foreground mt-8 mb-4">Specifications</h3>
          <div className="border border-border rounded overflow-hidden">
            {specs.map(([label, value], i) => (
              <div key={label} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? "bg-card" : "bg-secondary"}`}>
                <div className="px-4 py-3 text-muted-foreground">{label}</div>
                <div className="px-4 py-3 text-foreground">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related products */}
      <section className="py-16 px-4">
        <SectionHeading title="Customers Also Viewed" />
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading title="Product Ratings & Reviews" />
          <div className="grid md:grid-cols-[200px_1fr] gap-8">
            <div className="text-center">
              <p className="font-heading text-4xl text-foreground">4.8</p>
              <div className="flex justify-center text-primary mt-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary" />)}
              </div>
              <p className="text-xs text-muted-foreground mt-2">Overall Rating</p>
            </div>
            <div className="space-y-2">
              {[
                { stars: 5, pct: 85 },
                { stars: 4, pct: 10 },
                { stars: 3, pct: 3 },
                { stars: 2, pct: 1 },
                { stars: 1, pct: 1 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-4">{row.stars}★</span>
                  <div className="flex-1 h-2 bg-secondary rounded overflow-hidden">
                    <div className="h-full bg-primary rounded" style={{ width: `${row.pct}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-8">{row.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
