import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import shippingHero from "@/assets/shipping-hero.jpg";
import { Truck, Shield, Package, Radar, CheckSquare, Lock, Box, Send } from "lucide-react";
import { Link } from "react-router-dom";

const shippingZones = [
  { emirate: "Dubai", time: "1-2 Business Days", fee: "Free" },
  { emirate: "Abu Dhabi", time: "1-2 Business Days", fee: "Free" },
  { emirate: "Sharjah", time: "1-2 Business Days", fee: "Free" },
  { emirate: "Ajman", time: "2-3 Business Days", fee: "AED 50" },
  { emirate: "Ras Al Khaimah", time: "2-3 Business Days", fee: "AED 75" },
  { emirate: "Fujairah", time: "3-5 Business Days", fee: "AED 75" },
  { emirate: "Umm Al Quwain", time: "2-3 Business Days", fee: "AED 50" },
];

const Shipping = () => {
  return (
    <Layout>
      <HeroBanner
        image={shippingHero}
        subtitle="Your Precious Investments Delivered"
        title="Secure, Insured & Fast Delivery Across UAE"
        ctaText="View Delivery Charges"
        ctaHref="#zones"
      />

      {/* Why choose */}
      <section className="py-16 px-4">
        <SectionHeading
          title="Why Choose GoldHaven for Your Deliveries?"
          subtitle="A rigorous four-step verification process ensures every piece meets the highest standards"
        />
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          <FeatureCard icon={<Truck className="w-8 h-8" />} title="Fast UAE Delivery" description="Experience Expedited And Reliable Delivery Services Across All Emirates" />
          <FeatureCard icon={<Shield className="w-8 h-8" />} title="Fully Insured Shipping" description="Every Shipment Is Comprehensively Insured Against Loss Or Damage" />
          <FeatureCard icon={<Package className="w-8 h-8" />} title="Tamper-Proof Packaging" description="Your Gold Is Securely Encased In Discreet, Tamper-evident Packaging" />
          <FeatureCard icon={<Radar className="w-8 h-8" />} title="Real-Time Order Tracking" description="Your Gold Is Securely Encased In Discreet, Tamper-evident Packaging" />
        </div>
      </section>

      {/* Shipping Zones */}
      <section id="zones" className="py-16 px-4">
        <SectionHeading title="Shipping Zones & Delivery Timelines" subtitle="A rigorous four-step verification process ensures every piece meets the highest standards" />
        <div className="container mx-auto max-w-4xl">
          <div className="border border-border rounded overflow-hidden">
            <div className="grid grid-cols-3 bg-primary text-primary-foreground text-xs font-heading uppercase tracking-wider">
              <div className="px-4 py-3">Emirate</div>
              <div className="px-4 py-3">Delivery Time</div>
              <div className="px-4 py-3">Fee (AED)</div>
            </div>
            {shippingZones.map((zone, i) => (
              <div key={zone.emirate} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-secondary"}`}>
                <div className="px-4 py-3 text-foreground">{zone.emirate}</div>
                <div className="px-4 py-3 text-muted-foreground">{zone.time}</div>
                <div className={`px-4 py-3 ${zone.fee === "Free" ? "text-primary" : "text-muted-foreground"}`}>{zone.fee}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Process */}
      <section className="py-16 px-4 bg-secondary">
        <SectionHeading title="Our Meticulous Packaging & Security Process" subtitle="A rigorous four-step verification process ensures every piece meets the highest standards" />
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
          {[
            { num: "01", icon: <CheckSquare className="w-6 h-6" />, title: "Quality Inspection", desc: "Each Item Undergoes Rigorous Quality Checks To Ensure It Meets Our Exacting Standards" },
            { num: "02", icon: <Lock className="w-6 h-6" />, title: "Tamper-Proof Seal", desc: "Your Valuables Are Sealed With Advanced Tamper-evident Seals, Guaranteeing Untouched Contents" },
            { num: "03", icon: <Box className="w-6 h-6" />, title: "Double Protective Box", desc: "Items Are Placed In A Durable Inner Box, Then Encased Within A Discreet, Unbranded Outer Box" },
            { num: "04", icon: <Send className="w-6 h-6" />, title: "Insured Dispatch", desc: "Once Meticulously Packaged, Your Gold Is Fully Insured And Dispatched With Trusted Logistics" },
          ].map((step) => (
            <div key={step.num} className="feature-card">
              <div className="flex items-center justify-between mb-4">
                <span className="font-heading text-3xl text-foreground">{step.num}</span>
                <span className="text-primary">{step.icon}</span>
              </div>
              <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-2">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground">
            Ready to Invest in Certified Gold?
          </h2>
          <p className="text-sm text-muted-foreground mt-4">
            Every piece of gold is backed by our authentication promise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to="/products" className="btn-gold">Browse Gold Bars →</Link>
            <Link to="/products" className="btn-outline-gold">Explore Gold Coins</Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4">
        <SectionHeading title="Important Shipping Policies" />
        <div className="container mx-auto max-w-3xl space-y-3">
          {["Order Cut-Off Times", "No P.O. Box Deliveries", "Re-delivery Charges", "Holiday and Public Holiday Delays"].map((item) => (
            <details key={item} className="bg-secondary border border-border rounded group">
              <summary className="px-4 py-3 text-sm text-foreground cursor-pointer font-heading uppercase tracking-wider flex justify-between items-center">
                {item}
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
              </summary>
              <div className="px-4 pb-4 text-sm text-muted-foreground">
                Please contact our customer support team for details about {item.toLowerCase()}.
              </div>
            </details>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Shipping;
