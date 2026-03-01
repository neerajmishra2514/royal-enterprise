import { useState } from "react";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import faqHero from "@/assets/faq-hero.png";
import { Search, Phone, MessageSquare, Mail, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const topQuestions = [
    "Order Status",
    "Return Policy",
    "Product Warranty",
    "Payment Issues",
    "Shipping Times",
    "Account Management",
];

const categories = [
    "ORDERING & PAYMENTS",
    "SHIPPING & DELIVERY",
    "CERTIFICATION & AUTHENTICITY",
    "RETURNS & REFUNDS",
    "CORPORATE & B2B",
    "ACCOUNT & SUPPORT",
];

const faqData: Record<string, { question: string; answer: string }[]> = {
    "ORDERING & PAYMENTS": [
        {
            question: "How Do I Place An Order?",
            answer:
                "You Can Place An Order Directly Through Our Website By Browsing Products, Adding Them To Your Cart, And Following The Checkout Process. We Offer Various Secure Payment Methods.",
        },
        {
            question: "What Payment Methods Do You Accept?",
            answer:
                "We Accept All Major Credit And Debit Cards (Visa, MasterCard, American Express), Bank Transfers, Apple Pay, And PayTabs. All Transactions Are Secured With Advanced Encryption.",
        },
        {
            question: "Can I Modify Or Cancel My Order After It's Placed?",
            answer:
                "Orders Can Be Modified Or Cancelled Within 2 Hours Of Placement. After This Window, The Order Enters Processing And Cannot Be Changed. Please Contact Our Support Team Immediately If You Need Assistance.",
        },
        {
            question: "Is My Payment Information Secure?",
            answer:
                "Absolutely. We Use Industry-Standard SSL Encryption And PCI-DSS Compliant Payment Processors To Ensure Your Financial Information Is Fully Protected At All Times.",
        },
    ],
    "SHIPPING & DELIVERY": [
        {
            question: "How Long Does Shipping Take?",
            answer:
                "Domestic Shipping Within The UAE Typically Takes 1-3 Business Days. International Shipping May Take 5-10 Business Days Depending On The Destination.",
        },
        {
            question: "Do You Offer International Shipping?",
            answer:
                "Yes, We Ship To Over 40 Countries Worldwide. International Orders Are Fully Insured And Tracked For Your Peace Of Mind.",
        },
        {
            question: "Is Shipping Insured?",
            answer:
                "Yes, All Shipments Are Fully Insured Against Loss Or Damage. Our Tamper-Proof Packaging Ensures Your Gold Arrives In Perfect Condition.",
        },
    ],
    "CERTIFICATION & AUTHENTICITY": [
        {
            question: "Are Your Products Certified?",
            answer:
                "Yes, Every Gold Bar And Coin We Sell Comes With Full Certification From LBMA-Approved Refineries, Including Assay Certificates And Authenticity Documents.",
        },
        {
            question: "How Can I Verify My Product's Authenticity?",
            answer:
                "Each Product Comes With A Unique Serial Number And Certificate. You Can Verify Authenticity Through Our Website Or By Contacting Our Customer Support Team.",
        },
    ],
    "RETURNS & REFUNDS": [
        {
            question: "What Is Your Return Policy?",
            answer:
                "We Offer A 14-Day Return Window From The Date Of Delivery. Items Must Be In Original, Unopened Condition With All Seals And Documentation Intact.",
        },
        {
            question: "How Do I Initiate A Return?",
            answer:
                "Contact Our Customer Support Team Within 14 Days Of Delivery. They Will Guide You Through The Return Process And Arrange Insured Shipping.",
        },
    ],
    "CORPORATE & B2B": [
        {
            question: "Do You Offer Corporate Gifting Solutions?",
            answer:
                "Yes, We Offer Comprehensive Corporate Gifting Programs Including Custom Engraving, Bulk Pricing, And Dedicated Account Management For Business Clients.",
        },
        {
            question: "Can I Set Up A Wholesale Account?",
            answer:
                "Absolutely. Contact Our B2B Team To Discuss Wholesale Pricing, Minimum Order Requirements, And Partnership Opportunities.",
        },
    ],
    "ACCOUNT & SUPPORT": [
        {
            question: "How Do I Create An Account?",
            answer:
                "Click The User Icon In The Top Navigation Bar And Select 'Create Account'. You Can Also Create An Account During The Checkout Process.",
        },
        {
            question: "How Can I Contact Customer Support?",
            answer:
                "You Can Reach Us By Phone At +1 (555) 123-4567, WhatsApp At +1 (555) 987-6543, Or Email At support@naroyal.com. Our Team Is Available 24/7.",
        },
    ],
};

const FAQ = () => {
    const [activeCategory, setActiveCategory] = useState("ORDERING & PAYMENTS");
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState("");

    const currentFaqs = faqData[activeCategory] || [];

    const filteredFaqs = searchQuery
        ? Object.values(faqData)
            .flat()
            .filter(
                (faq) =>
                    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
            )
        : currentFaqs;

    return (
        <Layout>
            <HeroBanner
                image={faqHero}
                subtitle="Find Answers To Your Most Common Questions"
                title="Frequently Asked Questions"
            />

            <section className="py-16 px-4">
                <div className="container mx-auto flex flex-col lg:flex-row gap-12">
                    {/* Left content */}
                    <div className="flex-1">
                        {/* Search bar */}
                        <div className="relative mb-8">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search by keyword..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-card border border-border rounded px-10 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary transition-colors"
                            />
                        </div>

                        {/* Top Questions */}
                        <div className="mb-8">
                            <h2 className="font-heading text-xl uppercase tracking-wider text-foreground mb-4">
                                Top Questions
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {topQuestions.map((q) => (
                                    <button
                                        key={q}
                                        className="px-4 py-2 text-xs border border-border rounded text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Category tabs */}
                        <div className="flex flex-wrap gap-4 mb-8 border-b border-border pb-4">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        setOpenIndex(0);
                                        setSearchQuery("");
                                    }}
                                    className={`text-xs tracking-wider uppercase transition-colors ${activeCategory === cat && !searchQuery
                                            ? "text-primary"
                                            : "text-muted-foreground hover:text-primary"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Category Title */}
                        {!searchQuery && (
                            <h2 className="font-heading text-lg uppercase tracking-wider text-primary mb-6">
                                {activeCategory}
                            </h2>
                        )}

                        {/* Accordions */}
                        <div className="space-y-3">
                            {filteredFaqs.map((faq, index) => (
                                <div
                                    key={faq.question}
                                    className="bg-secondary border border-border rounded overflow-hidden"
                                >
                                    <button
                                        onClick={() =>
                                            setOpenIndex(openIndex === index ? null : index)
                                        }
                                        className="w-full flex items-center justify-between px-6 py-4 text-sm text-foreground text-left"
                                    >
                                        <span>{faq.question}</span>
                                        {openIndex === index ? (
                                            <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                                        )}
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right sidebar */}
                    <div className="lg:w-[320px] space-y-6">
                        {/* Book a Consultation */}
                        <div className="bg-card border border-border rounded p-6 text-center">
                            <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground mb-2">
                                Still have questions?
                            </p>
                            <p className="font-heading text-sm uppercase tracking-wider text-primary">
                                Book A Consultation
                            </p>
                        </div>

                        {/* Quick Contact */}
                        <div className="bg-card border border-border rounded p-6">
                            <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-4 border-b border-primary pb-2">
                                Quick Contact
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Phone className="w-4 h-4 text-primary mt-1" />
                                    <div>
                                        <p className="text-xs text-primary">Phone</p>
                                        <p className="text-sm text-foreground">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MessageSquare className="w-4 h-4 text-primary mt-1" />
                                    <div>
                                        <p className="text-xs text-primary">WhatsApp</p>
                                        <p className="text-sm text-foreground">+1 (555) 987-6543</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="w-4 h-4 text-primary mt-1" />
                                    <div>
                                        <p className="text-xs text-primary">Email</p>
                                        <p className="text-sm text-foreground">
                                            support@naroyal.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Helpful Resources */}
                        <div className="bg-card border border-border rounded p-6">
                            <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-4 border-b border-primary pb-2">
                                Helpful Resources
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    to="/products"
                                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Buyer's Guide
                                </Link>
                                <Link
                                    to="/certification"
                                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Certification Guide
                                </Link>
                                <Link
                                    to="/shipping"
                                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Shipping Policy
                                </Link>
                                <Link
                                    to="/privacy-policy"
                                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>

                        {/* Latest Articles & Guides */}
                        <div className="bg-card border border-border rounded p-6">
                            <h3 className="font-heading text-sm uppercase tracking-wider text-primary mb-4 border-b border-primary pb-2">
                                Latest Articles & Guides
                            </h3>
                            <div className="space-y-3">
                                <Link
                                    to="/blog"
                                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Understanding Our Craftsmanship
                                </Link>
                                <Link
                                    to="/blog"
                                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    The NA Royal Difference
                                </Link>
                                <Link
                                    to="/blog"
                                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    Care and Maintenance Tips
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default FAQ;
