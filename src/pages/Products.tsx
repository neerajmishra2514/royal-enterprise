import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import heroGold from "@/assets/hero-gold.jpg";
import goldBar from "@/assets/gold-bar-1.jpg";
import goldCoin from "@/assets/gold-coin-1.jpg";
import { useState } from "react";
import { Shield, Award, Gem, Globe } from "lucide-react";

const categories = ["All", "Gold Bars", "Gold Coins", "Investment Guides", "Market Trends"];

const allProducts = [
  { id: "1", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "2", image: goldCoin, name: "1G Gold Coin 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "3", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "4", image: goldCoin, name: "1G Gold Coin 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "5", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "6", image: goldCoin, name: "1G Gold Coin 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <Layout>
      <HeroBanner
        image={heroGold}
        subtitle="Premium Collection"
        title="Explore Our Exquisite Gold Coins Collection"
        ctaText="Learn About Certification"
        ctaHref="/certification"
      />

      {/* Trust badges */}
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Shield className="w-5 h-5" />, title: "24K Pure Gold", desc: "999.9 Purity Verification" },
            { icon: <Award className="w-5 h-5" />, title: "LBMA-Approved", desc: "Globally Trusted" },
            { icon: <Gem className="w-5 h-5" />, title: "Insured Delivery", desc: "Secure Shipments" },
            { icon: <Globe className="w-5 h-5" />, title: "Real-Time Prices", desc: "Live Market Pricing" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 px-4 py-3">
              <div className="text-primary">{item.icon}</div>
              <div>
                <p className="text-xs font-heading uppercase tracking-wider text-foreground">{item.title}</p>
                <p className="text-[10px] text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4 text-xs text-muted-foreground">
            <span>ALL COINS</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
            {/* Sidebar filters */}
            <aside className="hidden lg:block space-y-6">
              <div>
                <h4 className="font-heading text-xs uppercase tracking-wider text-foreground mb-3 flex justify-between">
                  Weight <span>—</span>
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {["1g", "5g", "10g", "100g"].map((w) => (
                    <label key={w} className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="accent-primary" /> {w}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-heading text-xs uppercase tracking-wider text-foreground mb-3 flex justify-between">
                  Price Range <span>+</span>
                </h4>
              </div>
              <div>
                <h4 className="font-heading text-xs uppercase tracking-wider text-foreground mb-3 flex justify-between">
                  Product Category <span>—</span>
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {["Gold Coins", "Gold Bars"].map((c) => (
                    <label key={c} className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="accent-primary" /> {c}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-heading text-xs uppercase tracking-wider text-foreground mb-3 flex justify-between">
                  Mint Source <span>—</span>
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  {["PAMP Suisse", "Valcambi", "Engelhard", "Royal Mint", "MMTC"].map((m) => (
                    <label key={m} className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="accent-primary" /> {m}
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">Showing 6 of 24 Results</p>
                <select className="bg-card border border-border px-3 py-2 text-sm text-foreground">
                  <option>Sort by: Best Selling</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {allProducts.map((p) => (
                  <ProductCard key={p.id} {...p} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling */}
      <section className="py-16 px-4">
        <SectionHeading title="Top Selling Gold Products" />
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {allProducts.slice(0, 3).map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground">
            Ready to Own a Masterpiece?
          </h2>
          <p className="text-sm text-muted-foreground mt-4">
            Schedule A Private Consultation With Our Jewellery Experts Today.
          </p>
          <a href="/contact" className="btn-gold mt-6 inline-flex">Book a Consultation →</a>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
