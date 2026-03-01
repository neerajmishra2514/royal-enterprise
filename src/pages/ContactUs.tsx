import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import heroGold from "@/assets/hero-gold.jpg";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", subject: "", message: "", subscribe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Layout>
      <HeroBanner
        image={heroGold}
        subtitle="We're here to assist you with inquiries"
        title="Get in Touch With NA Royal"
      />

      {/* Why choose */}
      <section className="py-16 px-4">
        <SectionHeading
          title="Why Choose GoldHaven for Your Deliveries?"
          subtitle="A rigorous four-step verification process ensures every piece meets the highest standards"
        />
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          <FeatureCard icon={<Phone className="w-8 h-8" />} title="Call Us" description="+971 50 123 4567" />
          <FeatureCard icon={<Mail className="w-8 h-8" />} title="Email Us" description="info@naroyaldiamonds.com" />
          <FeatureCard icon={<MessageCircle className="w-8 h-8" />} title="WhatsApp" description="+971 50 123 4567" />
          <FeatureCard icon={<Clock className="w-8 h-8" />} title="Business Hours" description="Mon – Fri: 9:00 AM – 6:00 PM" />
        </div>
      </section>

      {/* Contact form + info */}
      <section className="py-12 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 max-w-5xl">
          {/* Form */}
          <div>
            <h2 className="font-heading text-xl uppercase tracking-wider text-foreground mb-6">Send Us a Message</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">First Name</label>
                  <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Last Name</label>
                  <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Email</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john.doe@example.com" className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">Phone</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+971 50 123 4567" className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Subject</label>
                <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Inquiry about custom jewelry" className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors" />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="I am interested in..." className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
                <input type="checkbox" className="accent-primary" />
                I receive updates and offers via email
              </label>
              <button type="submit" className="btn-gold">Send Message →</button>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="font-heading text-xl uppercase tracking-wider text-foreground mb-6">Our Contact Information</h2>
            <div className="space-y-6">
              {[
                { icon: <MapPin className="w-5 h-5" />, label: "Office Address", lines: ["Na Royal Diamond's Trading Llc.", "Building No. 1, Office 101, Dubai, UAE"] },
                { icon: <Phone className="w-5 h-5" />, label: "Phone", lines: ["+971 50 123 4567"] },
                { icon: <Mail className="w-5 h-5" />, label: "Email", lines: ["info@naroyaldiamonds.com"] },
                { icon: <Clock className="w-5 h-5" />, label: "Business Hours", lines: ["Monday – Friday: 9 AM – 6 PM", "Saturday: 10 AM – 2 PM", "Sunday: Closed"] },
                { icon: <MessageCircle className="w-5 h-5" />, label: "WhatsApp", lines: ["+971 50 123 4567"] },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="text-primary mt-1">{item.icon}</div>
                  <div>
                    <p className="text-primary text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-secondary rounded h-64 md:h-80 flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="bg-card border border-border rounded p-4">
                <h3 className="font-heading text-sm uppercase text-foreground">Our Location</h3>
                <p className="text-xs text-muted-foreground mt-1">NA Royal Diamonds Trading LLC.</p>
                <p className="text-xs text-muted-foreground">Building No. 1, Office 101, Dubai, UAE</p>
                <a href="#" className="btn-gold mt-3 text-[10px] py-2 inline-flex">Get Directions →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground">
            Ready to Invest in Certified Gold?
          </h2>
          <p className="text-sm text-muted-foreground mt-4">
            Every piece of gold is backed by our authentication promise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="/products" className="btn-gold">Browse Gold Bars →</a>
            <a href="/products" className="btn-outline-gold">Explore Gold Coins</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactUs;
