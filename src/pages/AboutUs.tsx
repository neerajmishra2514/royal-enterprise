import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import aboutHero from "@/assets/about-hero.jpg";
import heroBanner from "@/assets/hero-banner.png";
import heroGold from "@/assets/hero-gold.jpg";
import { Star, Gem, Users, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "40+", label: "Countries Worldwide" },
  { value: "12+", label: "Years Experience" },
  { value: "5K+", label: "Happy Clients" },
  { value: "300+", label: "Products Available" },
];

const AboutUs = () => {
  return (
    <Layout>
      <HeroBanner
        image={aboutHero}
        subtitle="Trusted by Thousands"
        title="A Legacy Rooted in Craftsmanship & Excellence"
      />

      {/* Stats */}
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

      {/* Legacy */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">A Legacy Rooted In</p>
            <h2 className="font-heading text-3xl md:text-4xl uppercase text-foreground italic">Craftsmanship</h2>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              For over a decade, NA Royal Diamonds has been at the forefront of the precious metals industry, delivering unmatched quality and authenticity. Our commitment to excellence has earned the trust of thousands of investors and collectors worldwide.
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
            <img src={heroGold} alt="Craftsmanship" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded overflow-hidden">
            <img src={heroBanner} alt="Mission" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase">Our Mission</h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                To provide the finest quality gold products backed by authenticity, transparency, and unmatched customer service.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl text-primary uppercase">Our Vision</h2>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                To be the most trusted name in the global precious metals market, setting new standards for quality, service, and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality */}
      <section className="py-16 px-4 bg-secondary">
        <SectionHeading title="Exquisite Solutions for Hospitality" subtitle="Let us understand how our gifting solutions can fit into your corporate, luxury or gifting strategy" />
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          {[
            { title: "Hotel Boutiques", image: aboutHero },
            { title: "VIP Gifting", image: heroGold },
            { title: "Corporate B2B", image: heroBanner },
          ].map((item) => (
            <div key={item.title} className="relative aspect-[4/3] rounded overflow-hidden group cursor-pointer">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <p className="absolute bottom-4 left-4 font-heading text-sm uppercase text-foreground">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-4">
        <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground">
          Ready for Unrivaled Elegance?
        </h2>
        <p className="text-sm text-muted-foreground mt-2">Book a Private Consultation.</p>
        <Link to="/contact" className="btn-gold mt-6 inline-flex">Book a Consultation →</Link>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">Our Commitment To</p>
            <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground">
              Business Partnerships and Hospitality
            </h2>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              At NA Royal Diamonds, we understand the value of strong business partnerships. Our B2B solutions are designed to help luxury hotels, corporate gifting programs, and retail boutiques offer premium gold products to their discerning clientele.
            </p>
            <Link to="/contact" className="btn-gold mt-6 inline-flex">Partner With Us →</Link>
          </div>
          <div className="aspect-video rounded overflow-hidden">
            <img src={heroGold} alt="Partnerships" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-16 px-4">
        <SectionHeading title="Our Core Strengths" />
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          <FeatureCard icon={<Star className="w-8 h-8" />} title="Uncompromised Quality" description="Every piece meets the highest standards" />
          <FeatureCard icon={<Gem className="w-8 h-8" />} title="Master Craftsmanship" description="Sourced from the world's finest refineries" />
          <FeatureCard icon={<Users className="w-8 h-8" />} title="Exceptional Service" description="Dedicated support for every client" />
          <FeatureCard icon={<Globe className="w-8 h-8" />} title="Global Reach & Trust" description="Serving clients in over 40 countries" />
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-secondary px-4">
        <SectionHeading title="Certifications & Ethical Sourcing" />
        <div className="container mx-auto flex flex-wrap justify-center gap-4 max-w-3xl">
          {["LBMA Certified", "Swiss Made", "ISO 9001", "Conflict Free", "Ethical Sourcing & Hallmark"].map((cert) => (
            <div key={cert} className="border border-border rounded px-4 py-2 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer">
              ✓ {cert}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
