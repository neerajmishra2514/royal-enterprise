import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import shippingHero from "@/assets/shipping-hero.jpg";
import { Clock, Lock, Award, Headphones, MessageSquare, Package, Search, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const Returns = () => {
  return (
    <Layout>
      <HeroBanner
        image={shippingHero}
        subtitle="Accessing or using our platform, you acknowledge"
        title="Returns & Exchange Policy"
      />

      {/* Key Highlights */}
      <section className="py-16 px-4">
        <SectionHeading title="Key Highlights" subtitle="A rigorous four-step verification process ensures every piece meets the highest standards" />
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          <FeatureCard icon={<Clock className="w-8 h-8" />} title="14-day Inspection Window" description="You Have 14 Days From Delivery To Inspect Your Item For Eligibility." />
          <FeatureCard icon={<Lock className="w-8 h-8" />} title="Tamper Proof Packaging" description="All Returns Must Retain Original, Untampered Security Seals And Packaging." />
          <FeatureCard icon={<Award className="w-8 h-8" />} title="Certified Items Only" description="Only Items Accompanied By Valid Certification And Authenticity Documents Are Eligible." />
          <FeatureCard icon={<Headphones className="w-8 h-8" />} title="Contact Support First" description="Always Reach Out To Our Customer Service Before Initiating Any Return." />
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-6">Eligibility & Conditions</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            To Be Eligible For A Return Or Exchange, Items Must Be Returned Within 14 Calendar Days Of Delivery. The Item Must Be In Its Original, Unused Condition, With All Original Security Seals, Tags, And Packaging Intact. Any Accompanying Certification Documents, Such As Authenticity Certificates, Must Also Be Returned.
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Original Condition: Item Must Be Unworn, Unaltered, And Free From Any Damage.</li>
            <li>• Security Seals: All Tamper-proof Seals Must Remain Unbroken And Undisturbed.</li>
            <li>• Documentation: Original Certificates, Invoices, And Any Other Provided Documentation Must Be Included.</li>
            <li>• Excluded Items: Customized Or Engraved Items Are Not Eligible For Return Or Exchange.</li>
          </ul>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">The Easy Return Process</h2>
          <p className="text-sm text-muted-foreground mb-8">Follow These Simple Steps To Ensure A Smooth Return Or Exchange:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <FeatureCard icon={<MessageSquare className="w-8 h-8" />} title="Contact Us" description="Initiate Your Return By Contacting Our Customer Support Within 14 Days." />
            <FeatureCard icon={<Package className="w-8 h-8" />} title="Prepare Item" description="Securely Package Your Item With All Original Certifications And Seals." />
            <FeatureCard icon={<Search className="w-8 h-8" />} title="Ship Safely" description="Arrange Insured Shipping As Per Our Guidance To Ensure Safe Delivery." />
            <FeatureCard icon={<RefreshCw className="w-8 h-8" />} title="Inspection & Refund" description="Upon Receipt And Verification, Your Refund Or Exchange Will Be Processed." />
          </div>
        </div>
      </section>

      {/* Inspection */}
      <section className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-6">Inspection & Verification</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Upon Receiving Your Returned Item, Our Expert Team Will Conduct A Thorough Inspection To Verify Its Condition And Authenticity. This Process Typically Takes 3-5 Business Days. We Will Confirm That The Item Meets All Eligibility Criteria, Including Intact Seals And Accompanying Documentation. Any Item Found To Be Tampered With, Damaged, Or Missing Documentation Will Not Be Eligible For A Refund Or Exchange And Will Be Returned To The Sender At Their Expense.
          </p>
        </div>
      </section>

      {/* Refund */}
      <section className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-6">Refund Methods & Timelines</h2>
          <p className="text-sm text-muted-foreground mb-4">Approved Refunds Will Be Processed Using The Original Method Of Payment.</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Credit/debit Card: Refunds Typically Appear On Your Statement Within 5-10 Business Days After Processing.</li>
            <li>• Bank Transfer: Funds Will Be Transferred To Your Nominated Bank Account Within 3-7 Business Days. Please Ensure Correct Bank Details Are Provided.</li>
            <li>• Store Credit: You May Opt For Store Credit, Which Will Be Issued Immediately Upon Approval And Can Be Used For Future Purchases.</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Returns;
