import Layout from "@/components/Layout";
import goldBar from "@/assets/gold-bar-1.jpg";
import goldCoin from "@/assets/gold-coin-1.jpg";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { Star, Check, ShoppingCart, Phone, ChevronLeft, ChevronRight, ThumbsUp } from "lucide-react";
import { useState } from "react";

const productImages = [goldCoin, goldBar, goldCoin, goldBar, goldCoin];

const customersAlsoViewed = [
  { id: "c1", image: goldCoin, name: "22 Karat Flower Gold Coin", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "c2", image: goldBar, name: "1G Gold Bar PAMP", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1068 },
  { id: "c3", image: goldCoin, name: "24K Gold Maple Coin", brand: "Royal Canadian Mint", purity: "999.9", price: 1920 },
  { id: "c4", image: goldBar, name: "5G Gold Bar Valcambi", brand: "Valcambi • LBMA", purity: "999.9", price: 2750 },
];

const relatedProducts = [
  { id: "r1", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "r2", image: goldCoin, name: "1G Gold Coin 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "r3", image: goldBar, name: "2.5G Gold Bar PAMP", brand: "PAMP Suisse • Certified", purity: "999.9", price: 2850 },
  { id: "r4", image: goldCoin, name: "10G Gold Coin Perth", brand: "Perth Mint • Certified", purity: "999.9", price: 8920 },
  { id: "r5", image: goldBar, name: "5G Gold Bar Heraeus", brand: "Heraeus • LBMA", purity: "999.9", price: 4350 },
];

const bestsellers = [
  { id: "b1", image: goldBar, name: "1G Gold Bar PAMP Lady", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1068 },
  { id: "b2", image: goldCoin, name: "1G Gold Coin Maple", brand: "Royal Canadian Mint", purity: "999.9", price: 1120 },
  { id: "b3", image: goldBar, name: "10G Gold Bar PAMP", brand: "PAMP Suisse • Certified", purity: "999.9", price: 8650 },
  { id: "b4", image: goldCoin, name: "5G Gold Coin Perth", brand: "Perth Mint • Certified", purity: "999.9", price: 4520 },
  { id: "b5", image: goldBar, name: "2.5G Gold Bar Valcambi", brand: "Valcambi • LBMA", purity: "999.9", price: 2350 },
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

const reviews = [
  {
    id: 1,
    name: "Ahmed Al Rashid",
    avatar: "A",
    date: "12 Nov 2024",
    rating: 5,
    title: "Excellent Quality Gold Coin",
    text: "The gold coin arrived in perfect condition with tamper-proof packaging. The floral design is absolutely stunning and the weight was verified on my own scale. Very satisfied with the purchase. Will definitely buy more from Royal Diamonds.",
    helpful: 12,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "S",
    date: "28 Oct 2024",
    rating: 5,
    title: "Perfect Gift",
    text: "Purchased this as a gift for my mother's birthday. The quality exceeded expectations. The certification card and beautiful packaging made it even more special. Delivery was within the promised timeframe.",
    helpful: 8,
  },
  {
    id: 3,
    name: "Mohammed Khan",
    avatar: "M",
    date: "15 Oct 2024",
    rating: 4,
    title: "Great Investment Piece",
    text: "Solid investment purchase. The purity is verified and the coin looks beautiful. Only reason for 4 stars is that I wish there were more design options available in this weight category.",
    helpful: 5,
  },
];

const ratingDistribution = [
  { stars: 5, pct: 85, count: 68 },
  { stars: 4, pct: 10, count: 8 },
  { stars: 3, pct: 3, count: 2 },
  { stars: 2, pct: 1, count: 1 },
  { stars: 1, pct: 1, count: 1 },
];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(0);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState("overview");

  const weightOptions = [
    { label: "1 Gram", price: "1,068.00" },
    { label: "2.5 Gram", price: "2,650.00" },
    { label: "5 Gram", price: "5,200.00" },
    { label: "10 Gram", price: "10,400.00" },
  ];

  const tabs = [
    { key: "overview", label: "Product Overview" },
    { key: "specs", label: "Specifications" },
    { key: "certification", label: "Certification & Assurance" },
  ];

  return (
    <Layout>
      <div className="pt-28 md:pt-32" />

      {/* ═══════════════════ PRODUCT HERO SECTION ═══════════════════ */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Images */}
          <div>
            <div className="bg-[hsl(0,0%,8%)] border border-border rounded-lg aspect-square flex items-center justify-center p-8 mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(43,30%,15%,0.15)] to-transparent pointer-events-none" />
              <img
                src={productImages[selectedImage]}
                alt="22 Karat 916 Purity Gold Coin"
                className="max-w-[75%] max-h-[75%] object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
            <div className="flex gap-2">
              {productImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-16 border rounded overflow-hidden transition-all duration-200 ${
                    i === selectedImage
                      ? "border-primary ring-1 ring-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <span className="inline-block text-xs bg-primary text-primary-foreground px-3 py-1 rounded font-body font-semibold tracking-wider">
              22 KARAT 916 PURITY
            </span>
            <h1 className="font-heading text-2xl md:text-3xl uppercase text-foreground mt-4 leading-tight">
              22 Karat 916 Purity 1 Gram Flower Gold Coin Certified Authenticity
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              22 Karat 916 Pure Gold Coin, Premium Investment Grade
            </p>

            {/* Star Ratings */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">80 Ratings</span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="font-heading text-3xl md:text-4xl text-primary">
                AED {weightOptions[selectedWeight].price}
              </span>
              <span className="text-sm text-muted-foreground ml-2">incl. VAT</span>
            </div>

            {/* Weight Options - Gold Circles */}
            <div className="mt-6">
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Select Weight</p>
              <div className="flex gap-3">
                {weightOptions.map((w, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedWeight(i)}
                    className={`flex flex-col items-center gap-1.5 group`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 flex items-center justify-center text-[10px] font-bold ${
                        selectedWeight === i
                          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_12px_hsl(43,72%,55%,0.4)]"
                          : "border-border bg-card text-muted-foreground group-hover:border-primary/60"
                      }`}
                    >
                      {w.label.split(" ")[0]}
                    </div>
                    <span className={`text-[10px] ${selectedWeight === i ? "text-primary" : "text-muted-foreground"}`}>
                      {w.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery & Best Seller */}
            <div className="mt-6 space-y-1">
              <p className="text-sm text-muted-foreground">
                <span className="text-primary">●</span> Get It By 4 Dec | Order In 14h 52m
              </p>
              <p className="text-sm text-primary font-medium">
                Best Seller #9 In Gold Coins
              </p>
            </div>

            {/* Buy Now / Consultation */}
            <div className="mt-4 p-3 bg-card border border-border rounded-lg">
              <p className="text-xs text-muted-foreground">
                <span className="text-primary mr-1">✓</span> Buy online and pick up in store
              </p>
            </div>

            {/* Qty & Add to cart */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm text-muted-foreground">Qty</span>
              <div className="flex items-center border border-border rounded overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-3 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  −
                </button>
                <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium min-w-[40px] text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-3 py-2 text-foreground hover:text-primary hover:bg-secondary transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="btn-gold flex-1 justify-center rounded">
                <ShoppingCart className="w-4 h-4" /> Add to Cart
              </button>
              <button className="btn-outline-gold rounded">
                <Phone className="w-4 h-4" /> Book a Consultation
              </button>
            </div>

            {/* Tab buttons */}
            <div className="mt-8 flex gap-3 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`text-[11px] py-2.5 px-4 font-heading tracking-[0.15em] uppercase transition-all duration-300 border rounded ${
                    activeTab === tab.key
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ TABBED CONTENT SECTION ═══════════════════ */}
      <section className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          {/* Product Overview Tab */}
          {activeTab === "overview" && (
            <div className="animate-in fade-in duration-300">
              <SectionHeading title="Product Overview" />
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The 22 Karat 916 Purity 1 Gram Flower Gold Coin is a beautifully crafted piece that combines the timeless allure of gold with exquisite floral artistry. Each coin is meticulously designed to showcase the elegance of nature's beauty, making it a perfect addition to any collection or a thoughtful gift for someone special.
                </p>
                <p>
                  Crafted from 22 karat gold with 916 purity, this coin guarantees authenticity and lasting value. The intricate flower motif symbolizes prosperity, growth, and the beauty of life, making it an ideal keepsake. Whether you're an avid gold collector or a first-time buyer, this gold coin represents both cultural significance and financial prudence.
                </p>
                <p>
                  Each coin comes in tamper-proof packaging with a unique serial number, ensuring that your investment is protected. The certification from LBMA-approved refineries provides additional assurance of the coin's purity and weight, making it a reliable choice for both gifting and investment purposes.
                </p>
              </div>

              <h3 className="font-heading text-lg uppercase text-foreground mt-10 mb-4">Highlights</h3>
              <ul className="space-y-3">
                {[
                  "Purity: 22 Karat (916 Pure Gold)",
                  "Weight: 1 Gram (Plus/Minus 0.1g Tolerance)",
                  "Design: Elegant Floral (Symbolizes Prosperity and Grace)",
                  "Free Shipping With Free UAE Delivery",
                  "Available In Multiple Weights (1g, 2.5g, 5g, 10g)",
                  "Tamper-Proof Packaging With Serial Number",
                  "Investment-Grade Quality With LBMA Certification",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="font-heading text-lg uppercase text-foreground mt-10 mb-4">Specifications</h3>
              <div className="border border-border rounded-lg overflow-hidden">
                {specs.map(([label, value], i) => (
                  <div
                    key={label}
                    className={`grid grid-cols-[180px_1fr] text-sm ${
                      i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                    } ${i !== specs.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <div className="px-4 py-3 text-muted-foreground font-medium">{label}</div>
                    <div className="px-4 py-3 text-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Specifications Tab */}
          {activeTab === "specs" && (
            <div className="animate-in fade-in duration-300">
              <SectionHeading title="Specifications" />
              <div className="border border-border rounded-lg overflow-hidden">
                {[
                  ...specs,
                  ["Dimensions", "16mm Diameter x 0.7mm Thickness"],
                  ["Fineness", "916/1000"],
                  ["Country of Origin", "Switzerland"],
                  ["Refiner", "PAMP SA Geneva"],
                  ["Serial Number", "Yes - Unique"],
                  ["Packaging", "Tamper-Proof Assay Card"],
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={`grid grid-cols-[200px_1fr] text-sm ${
                      i % 2 === 0 ? "bg-card" : "bg-secondary/50"
                    } ${i !== specs.length + 5 ? "border-b border-border" : ""}`}
                  >
                    <div className="px-4 py-3 text-muted-foreground font-medium">{label}</div>
                    <div className="px-4 py-3 text-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certification Tab */}
          {activeTab === "certification" && (
            <div className="animate-in fade-in duration-300">
              <SectionHeading title="Certification & Assurance" />
              <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Every gold product sold by Royal Diamonds comes with a guarantee of authenticity. Our gold coins and bars are sourced exclusively from LBMA (London Bullion Market Association) approved refineries, ensuring the highest standards of quality and purity.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  {[
                    {
                      title: "LBMA Certified",
                      desc: "All our products are certified by LBMA-approved refineries, ensuring global standards of purity and weight.",
                    },
                    {
                      title: "Tamper-Proof Packaging",
                      desc: "Each product is sealed in tamper-proof assay packaging with unique serial numbers for traceability.",
                    },
                    {
                      title: "Buyback Guarantee",
                      desc: "We offer a competitive buyback program, giving you confidence in the liquidity of your investment.",
                    },
                  ].map((cert) => (
                    <div key={cert.title} className="bg-card border border-border rounded-lg p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Check className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-heading text-sm uppercase text-foreground mb-2">{cert.title}</h4>
                      <p className="text-xs text-muted-foreground">{cert.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════ CUSTOMERS ALSO VIEWED ═══════════════════ */}
      <section className="py-16 px-4 border-t border-border">
        <SectionHeading title="Customers Also Viewed" />
        <div className="container mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {customersAlsoViewed.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
            {/* Navigation arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors hidden lg:flex">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors hidden lg:flex">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`w-2 h-2 rounded-full transition-colors ${
                  dot === 0 ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ PRODUCTS RELATED TO THIS ═══════════════════ */}
      <section className="py-16 px-4 border-t border-border">
        <SectionHeading title="Products Related To This" />
        <div className="container mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors hidden lg:flex">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors hidden lg:flex">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`w-2 h-2 rounded-full transition-colors ${
                  dot === 0 ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ BESTSELLERS IN THIS CATEGORY ═══════════════════ */}
      <section className="py-16 px-4 border-t border-border">
        <SectionHeading title="Bestsellers In This Category" />
        <div className="container mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {bestsellers.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors hidden lg:flex">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary transition-colors hidden lg:flex">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((dot) => (
              <span
                key={dot}
                className={`w-2 h-2 rounded-full transition-colors ${
                  dot === 0 ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ REVIEWS SECTION ═══════════════════ */}
      <section className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <SectionHeading title="Product Ratings & Reviews" />

          {/* Rating summary */}
          <div className="grid md:grid-cols-[220px_1fr_auto] gap-8 items-start">
            {/* Left: Overall score */}
            <div className="text-center md:text-left">
              <p className="font-heading text-5xl text-foreground">4.8</p>
              <div className="flex justify-center md:justify-start text-primary mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">Overall Rating</p>
              <p className="text-xs text-muted-foreground">80 verified ratings</p>
            </div>

            {/* Center: Star distribution bars */}
            <div className="space-y-2">
              {ratingDistribution.map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-4 text-right">{row.stars}</span>
                  <Star className="w-3 h-3 text-primary fill-primary" />
                  <div className="flex-1 h-2.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-12">{row.count} ({row.pct}%)</span>
                </div>
              ))}
            </div>

            {/* Right: Write a Review button */}
            <div className="text-center md:text-right">
              <button className="btn-gold rounded whitespace-nowrap">
                Write a Review
              </button>
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="mt-12 space-y-8">
            <h3 className="font-heading text-lg uppercase text-foreground">Customer Reviews</h3>

            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card border border-border rounded-lg p-6 transition-all duration-200 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-heading text-lg font-bold">
                      {review.avatar}
                    </span>
                  </div>

                  <div className="flex-1">
                    {/* Name & Date */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <h4 className="text-sm font-medium text-foreground">{review.name}</h4>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < review.rating ? "fill-primary" : "fill-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Review Title & Text */}
                    <h5 className="text-sm font-heading text-foreground mt-3">{review.title}</h5>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{review.text}</p>

                    {/* Helpful */}
                    <div className="flex items-center gap-4 mt-4">
                      <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="btn-outline-gold rounded">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════ NEWSLETTER / FOOTER (via Layout) ═══════════════════ */}
    </Layout>
  );
};

export default ProductDetail;
