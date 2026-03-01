import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import ProductCard from "@/components/ProductCard";
import heroBanner from "@/assets/hero-banner.png";
import aboutHero from "@/assets/about-hero.jpg";
import goldBar from "@/assets/gold-bar-1.jpg";
import goldCoin from "@/assets/gold-coin-1.jpg";
import { Shield, Award, Gem, Globe, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "40+", label: "Countries Worldwide" },
  { value: "12+", label: "Years Experience" },
  { value: "5K+", label: "Happy Clients" },
  { value: "300+", label: "Products Available" },
];

const products = [
  { id: "1", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "2", image: goldCoin, name: "1G Gold Coin 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
  { id: "3", image: goldBar, name: "1G Gold Bar 1OZ", brand: "PAMP Suisse • Certified", purity: "999.9", price: 1388 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <HeroBanner
        image={heroBanner}
        subtitle="Premium Collection"
        title="Explore Our Exquisite Gold Collection"
        ctaText="Learn About Certification"
        ctaHref="/certification"
      />

      {/* Trust badges */}
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: <Shield className="w-6 h-6" />, title: "24K Pure Gold", desc: "999.9 Purity Verification On Every Single Coin" },
            { icon: <Award className="w-6 h-6" />, title: "LBMA-Approved", desc: "Sourced Globally Trusted & Certified Refineries" },
            { icon: <Gem className="w-6 h-6" />, title: "Insured Delivery", desc: "Secure, Fully Insured Shipments Across Gold" },
            { icon: <Globe className="w-6 h-6" />, title: "Real-Time Prices", desc: "Pricing Updates Live With Global Market" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3 px-4 py-3">
              <div className="text-primary">{item.icon}</div>
              <div>
                <p className="text-xs font-heading uppercase tracking-wider text-foreground">{item.title}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted by thousands */}
      <section className="py-16 px-4">
        <SectionHeading title="Trusted by Thousands" />
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center border border-border rounded p-6">
              <p className="font-heading text-3xl text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legacy section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">A Legacy Rooted In</p>
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-foreground italic">Craftsmanship</h2>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              For over a decade, NA Royal Diamonds has been at the forefront of the precious metals industry,
              delivering unmatched quality and authenticity. Our commitment to excellence has earned the trust
              of thousands of investors and collectors worldwide.
            </p>
            <div className="flex gap-8 mt-8">
              <div>
                <p className="text-primary font-heading text-xl">Est. 2012</p>
                <p className="text-xs text-muted-foreground">Founded in Dubai</p>
              </div>
              <div>
                <p className="text-primary font-heading text-xl">LBMA Certified</p>
                <p className="text-xs text-muted-foreground">Globally Trusted</p>
              </div>
            </div>
          </div>
          <div className="aspect-video rounded overflow-hidden">
            <img src={aboutHero} alt="Craftsmanship" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Our Mission / Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded overflow-hidden">
            <img src={heroBanner} alt="Our Mission" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase">Our Mission</h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                To provide the finest quality gold products backed by authenticity, transparency,
                and unmatched customer service, making precious metal investment accessible to everyone.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase">Our Vision</h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                To be the most trusted name in the global precious metals market,
                setting new standards for quality, service, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-16 bg-secondary px-4">
        <SectionHeading title="Our Core Strengths" />
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          <FeatureCard icon={<Star className="w-8 h-8" />} title="Uncompromised Quality" description="Every piece undergoes rigorous quality verification" />
          <FeatureCard icon={<Gem className="w-8 h-8" />} title="Master Craftsmanship" description="Sourced from the world's finest refineries" />
          <FeatureCard icon={<Users className="w-8 h-8" />} title="Exceptional Service" description="Dedicated support throughout your journey" />
          <FeatureCard icon={<Globe className="w-8 h-8" />} title="Global Reach & Trust" description="Serving clients in over 40 countries" />
        </div>
      </section>

      {/* Top Selling */}
      <section className="py-16 px-4">
        <SectionHeading title="Top Selling Gold Products" />
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="text-primary text-sm tracking-wide hover:underline">
            VIEW ALL →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-primary mb-4">
            <Shield className="w-10 h-10 mx-auto" />
          </div>
          <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground">
            Ready to Invest in Certified Gold?
          </h2>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            Every piece of gold is backed by our authentication promise. If you have any questions about
            certification or need assistance verifying your gold, our expert team is ready to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/products?category=bars" className="btn-gold">Browse Gold Bars →</Link>
            <Link to="/products?category=coins" className="btn-outline-gold">Explore Gold Coins</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
