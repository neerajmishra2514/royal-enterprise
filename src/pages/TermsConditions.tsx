import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import FeatureCard from "@/components/FeatureCard";
import termsHero from "@/assets/terms-hero.png";
import { Shield, Award, UserCheck, Scale } from "lucide-react";

const TermsConditions = () => {
    return (
        <Layout>
            <HeroBanner
                image={termsHero}
                subtitle="Accessing Or Using Our Platform, You Acknowledge"
                title="Terms & Conditions"
            />

            {/* Key Highlights */}
            <section className="py-16 px-4">
                <div className="text-center mb-10">
                    <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide text-foreground">
                        Key Highlights
                    </h2>
                    <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
                        Important Points You Should Know Before Using Our Website And Services
                    </p>
                    <div className="section-divider mt-4">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span className="w-2 h-2 rounded-full bg-muted" />
                        <span className="w-2 h-2 rounded-full bg-muted" />
                    </div>
                </div>
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
                    <FeatureCard
                        icon={<Shield className="w-8 h-8" />}
                        title="Legal Protect"
                        description="These Terms Form A Legally Binding Agreement Between You And NA Royal Diamonds."
                    />
                    <FeatureCard
                        icon={<Award className="w-8 h-8" />}
                        title="Our Promise"
                        description="We Guarantee Authenticity And Quality For Every Product We Sell."
                    />
                    <FeatureCard
                        icon={<UserCheck className="w-8 h-8" />}
                        title="Buyer's Duties"
                        description="Understanding Your Responsibilities When Making Purchases On Our Platform."
                    />
                    <FeatureCard
                        icon={<Scale className="w-8 h-8" />}
                        title="Know Your Rights"
                        description="Your Consumer Rights Are Protected Under UAE And International Law."
                    />
                </div>
            </section>

            {/* Terms Sections */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl space-y-12">
                    {/* Definitions */}
                    <div>
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Definitions
                        </h2>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Interpretation & Key Terms
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            In these Terms and Conditions, the following definitions apply unless the context requires otherwise:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• <strong className="text-foreground">"Company"</strong> refers to NA Royal Diamonds, operating from Almas Tower 22G, Jumeirah Lake Towers, Dubai.</li>
                            <li>• <strong className="text-foreground">"Website"</strong> refers to naroyaldiamonds.com and all associated subdomains.</li>
                            <li>• <strong className="text-foreground">"Products"</strong> refers to all gold bars, coins, and precious metal items offered for sale.</li>
                            <li>• <strong className="text-foreground">"Customer"</strong> refers to any individual or entity that registers or makes a purchase through our platform.</li>
                            <li>• <strong className="text-foreground">"Services"</strong> refers to all services provided through the website, including sales, certification, and customer support.</li>
                        </ul>
                    </div>

                    {/* Acceptance Terms */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Acceptance Terms
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website or services.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website after any changes constitutes acceptance of the revised terms. It is your responsibility to review these terms periodically.
                        </p>
                    </div>

                    {/* Product Listings & Pricing */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Product Listings & Pricing
                        </h2>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Product Descriptions
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            We make every effort to ensure that product descriptions, images, and specifications on our website are accurate. However, we do not warrant that product descriptions or other content is entirely error-free, complete, or current. Colors and appearances may vary slightly due to screen settings.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Pricing
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            All prices are listed in AED (UAE Dirhams) unless otherwise specified. Gold prices are subject to market fluctuations and may change without notice. The price at the time of order confirmation is the price you will be charged. All prices are inclusive of applicable VAT unless stated otherwise.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Availability
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            All products are subject to availability. We reserve the right to limit quantities, discontinue products, or refuse orders at our sole discretion. In the event of a pricing error, we will notify you and provide the option to proceed at the correct price or cancel your order.
                        </p>
                    </div>

                    {/* Orders & Payments */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Orders & Payment Policy
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            When you place an order through our website, it constitutes an offer to purchase. We reserve the right to accept or decline your order for any reason. An order is confirmed only when you receive an order confirmation email from us.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Payment must be made in full at the time of order placement.</li>
                            <li>• We accept Visa, MasterCard, American Express, bank transfers, Apple Pay, and PayTabs.</li>
                            <li>• Orders are processed within 1-2 business days after payment confirmation.</li>
                            <li>• We reserve the right to cancel orders suspected of fraud or unauthorized payment.</li>
                        </ul>
                    </div>

                    {/* Shipping & Delivery */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Shipping & Delivery
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            We offer secure, insured delivery across the UAE and internationally. Delivery timelines are estimates and may vary due to external factors. Risk of loss and title for items purchased pass to you upon delivery to the carrier. For detailed shipping information, please refer to our Shipping Policy page.
                        </p>
                    </div>

                    {/* Returns & Cancellations */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Returns & Cancellations
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Returns are accepted within 14 calendar days of delivery, provided items are in original, unopened condition with all seals and documentation intact. Customized or engraved items are non-returnable. For full details, please refer to our Returns & Exchange Policy.
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Orders may be cancelled within 2 hours of placement. After this period, cancellation may not be possible as orders enter processing. Refunds for cancelled orders will be processed within 5-10 business days.
                        </p>
                    </div>

                    {/* Limitation of Liability */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Limitation of Liability
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            To the maximum extent permitted by applicable law, NA Royal Diamonds shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our website or products.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Our total liability shall not exceed the purchase price of the product(s) in question.</li>
                            <li>• We are not responsible for delays or failures caused by circumstances beyond our reasonable control.</li>
                            <li>• We do not guarantee uninterrupted or error-free access to our website.</li>
                        </ul>
                    </div>

                    {/* Intellectual Property */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Intellectual Property
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            All content on this website, including but not limited to text, graphics, logos, images, product designs, and software, is the property of NA Royal Diamonds and is protected by international copyright, trademark, and intellectual property laws. No content may be reproduced, distributed, modified, or used for commercial purposes without our prior written consent.
                        </p>
                    </div>

                    {/* Privacy & Data */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Privacy & Data
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Your use of our website is also governed by our Privacy Policy, which outlines how we collect, use, and protect your personal information. By using our website, you consent to the collection and use of information as described in our Privacy Policy. We encourage you to review it regularly.
                        </p>
                    </div>

                    {/* Changes to Terms */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Changes to Terms
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            NA Royal Diamonds reserves the right to revise these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. We will make reasonable efforts to notify registered users of significant changes via email. Your continued use of the website following any changes signifies your acceptance of the updated terms.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Contact Information
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            If you have any questions or concerns about these Terms and Conditions, please contact us:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• <strong className="text-foreground">Address:</strong> Almas Tower 22G, Jumeirah Lake Towers, Dubai</li>
                            <li>• <strong className="text-foreground">Phone:</strong> (064) 332-1233</li>
                            <li>• <strong className="text-foreground">Email:</strong> info@naroyaldiamonds.com</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TermsConditions;
