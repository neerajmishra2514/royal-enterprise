import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import FeatureCard from "@/components/FeatureCard";
import privacyHero from "@/assets/privacy-hero.png";
import { Shield, Eye, Settings, Share2 } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <Layout>
            <HeroBanner
                image={privacyHero}
                subtitle="Understanding How We Protect Your Information"
                title="Privacy Policy"
            />

            {/* Key Highlights */}
            <section className="py-16 px-4">
                <div className="text-center mb-10">
                    <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wide text-foreground">
                        Key Highlights
                    </h2>
                    <p className="text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
                        A Quick Overview Of How We Collect, Use, And Protect Your Personal Information
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
                        description="Your Personal Data Is Safeguarded Under International Data Protection Standards."
                    />
                    <FeatureCard
                        icon={<Eye className="w-8 h-8" />}
                        title="Data Transparency"
                        description="We Clearly Disclose What Information We Collect And How It's Used."
                    />
                    <FeatureCard
                        icon={<Settings className="w-8 h-8" />}
                        title="Caring & Control"
                        description="You Have Full Control Over Your Personal Data And Privacy Settings."
                    />
                    <FeatureCard
                        icon={<Share2 className="w-8 h-8" />}
                        title="Sharing Your Data"
                        description="We Never Sell Your Data And Only Share It When Absolutely Necessary."
                    />
                </div>
            </section>

            {/* Policy Sections */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-4xl space-y-12">
                    {/* What Information We Collect */}
                    <div>
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            What Information We Collect
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            At NA Royal Diamonds, we collect various types of information to provide you with the best possible service and ensure a secure shopping experience. The information we collect includes:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• <strong className="text-foreground">Personal Identification:</strong> Name, email address, phone number, and postal address provided during account registration or checkout.</li>
                            <li>• <strong className="text-foreground">Payment Information:</strong> Credit card details, billing address, and transaction history processed through our secure payment providers.</li>
                            <li>• <strong className="text-foreground">Device Information:</strong> IP address, browser type, operating system, and device identifiers collected automatically.</li>
                            <li>• <strong className="text-foreground">Browsing Data:</strong> Pages visited, products viewed, search queries, and interaction patterns on our website.</li>
                        </ul>
                    </div>

                    {/* How We Collect Information */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            How We Collect Information
                        </h2>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Direct Collection
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            We collect information directly from you when you create an account, place an order, subscribe to our newsletter, contact customer support, or participate in surveys and promotions. This includes any information you voluntarily provide through forms on our website.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Automatic Collection
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Certain information is collected automatically when you visit our website, including through cookies, web beacons, and similar tracking technologies. This helps us understand how you interact with our site and improve your browsing experience.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Third-Party Sources
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We may receive information about you from third parties, including payment processors, delivery partners, and marketing platforms, to verify transactions and enhance our services.
                        </p>
                    </div>

                    {/* How We Use Your Information */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            How We Use Your Information
                        </h2>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Order Processing & Management
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            We use your personal information to process and fulfill your orders, including verifying payment, arranging shipping, and sending order confirmations and updates.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Communication & Support
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Your contact information enables us to respond to inquiries, provide customer support, send important account notifications, and keep you informed about your orders.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Personalization & Marketing
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            With your consent, we may use your browsing and purchase history to personalize your shopping experience, recommend products, and send promotional offers that match your interests.
                        </p>
                    </div>

                    {/* Cookies & Tracking */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Cookies & Tracking
                        </h2>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            What Are Cookies?
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, understand how you use our site, and improve your overall experience. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Managing Your Cookie Preferences
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or set preferences for certain websites. Please note that disabling cookies may affect some functionality of our website.
                        </p>
                    </div>

                    {/* Payments & Security */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Payments & Security
                        </h2>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Secure Payment Processing
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            All payment transactions are processed through PCI-DSS compliant payment processors. We do not store your complete credit card information on our servers. Payment data is encrypted using industry-standard SSL/TLS encryption.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Data Protection Measures
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We implement robust security measures including firewalls, encryption, access controls, and regular security audits to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </div>

                    {/* Sharing & Third Parties */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Sharing & Third Parties
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            We value your privacy and only share your personal information when necessary to fulfill our services. We may share data with:
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Service Providers
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            Trusted third-party service providers who assist us with payment processing, shipping, marketing, and analytics. These providers are contractually bound to protect your data.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Legal Requirements
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            We may disclose your information if required by law, regulation, legal process, or governmental request, or to protect our rights, property, or safety.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            No Sale of Personal Data
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            We do not sell, rent, or trade your personal information to third parties for their marketing purposes under any circumstances.
                        </p>
                    </div>

                    {/* Data Retention */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Data Retention
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. Specifically:
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>• Account information is retained as long as your account remains active.</li>
                            <li>• Transaction records are kept for a minimum of 7 years for tax and legal compliance.</li>
                            <li>• Marketing preferences are retained until you withdraw your consent.</li>
                            <li>• Browsing data collected through cookies expires according to the cookie's lifespan.</li>
                        </ul>
                    </div>

                    {/* Your Rights & Choices */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Your Rights & Choices
                        </h2>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Access & Correction
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            You have the right to access, correct, or update your personal information at any time through your account settings or by contacting our support team.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Deletion & Portability
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                            You may request deletion of your personal data or receive a copy of your data in a portable format, subject to legal and contractual obligations.
                        </p>
                        <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">
                            Opt-Out
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails or adjusting your communication preferences in your account settings.
                        </p>
                    </div>

                    {/* Children's Privacy */}
                    <div className="border-t border-border pt-8">
                        <h2 className="font-heading text-xl md:text-2xl uppercase tracking-wider text-foreground mb-4">
                            Children's Privacy
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Our website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a minor, we will take immediate steps to delete such information from our records.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default PrivacyPolicy;
