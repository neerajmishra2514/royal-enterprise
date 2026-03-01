import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import certHero from "@/assets/certification-hero.png";
import heroGold from "@/assets/hero-gold.jpg";
import heroBanner from "@/assets/hero-banner.png";
import aboutHero from "@/assets/about-hero.jpg";
import goldBar from "@/assets/gold-bar-1.jpg";
import goldCoin from "@/assets/gold-coin-1.jpg";
import {
    Shield,
    Award,
    FileCheck,
    Search,
    CheckCircle,
    Lock,
    Stamp,
    Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const certificationTypes = [
    {
        icon: <FileCheck className="w-8 h-8" />,
        title: "Assay Certification",
        description:
            "Independent Laboratory Testing That Verifies The Exact Purity, Weight, And Composition Of Every Gold Product.",
        image: heroGold,
    },
    {
        icon: <Stamp className="w-8 h-8" />,
        title: "Mint Certification",
        description:
            "Official Documentation From The Minting Facility Confirming Product Authenticity And Serial Numbers.",
        image: heroBanner,
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "LBMA Stamp & Seal",
        description:
            "The London Bullion Market Association Good Delivery Certification — The Global Gold Standard.",
        image: aboutHero,
    },
];

const authSteps = [
    {
        num: "01",
        icon: <Search className="w-6 h-6" />,
        title: "Visual Inspection",
        desc: "Each Piece Undergoes Thorough Visual Examination By Trained Experts For Surface Quality And Markings.",
    },
    {
        num: "02",
        icon: <FileCheck className="w-6 h-6" />,
        title: "Precision Weighing",
        desc: "Advanced Scales Verify Weight Down To 0.001 Grams, Ensuring Exact Match With Stated Specifications.",
    },
    {
        num: "03",
        icon: <Award className="w-6 h-6" />,
        title: "Purity Analysis",
        desc: "Non-Destructive XRF Testing Confirms Metal Purity Without Damaging The Product In Any Way.",
    },
    {
        num: "04",
        icon: <CheckCircle className="w-6 h-6" />,
        title: "Certificate Issuance",
        desc: "Upon Passing All Checks, A Unique Certificate Of Authenticity Is Generated And Linked To The Product.",
    },
];

const galleryImages = [
    { src: heroGold, alt: "Gold certification 1" },
    { src: heroBanner, alt: "Gold certification 2" },
    { src: aboutHero, alt: "Gold certification 3" },
    { src: goldBar, alt: "Gold bar certified" },
    { src: goldCoin, alt: "Gold coin certified" },
    { src: heroGold, alt: "Gold certification 6" },
    { src: heroBanner, alt: "Certification process" },
    { src: aboutHero, alt: "Quality assurance" },
];

const Certification = () => {
    return (
        <Layout>
            {/* Hero */}
            <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
                <img
                    src={certHero}
                    alt="Certification"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
                <div className="relative h-full flex items-center px-4 md:px-16 lg:px-24">
                    <div className="max-w-xl">
                        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 font-body font-medium">
                            Trusted Worldwide
                        </p>
                        <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight uppercase">
                            Crafting Excellence in Gold & Diamonds Since 2010
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            <Link to="/products" className="btn-gold">
                                Explore Collection →
                            </Link>
                            <Link to="/contact" className="btn-outline-gold">
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Every Gold Bar Certified */}
            <section className="py-16 px-4 bg-secondary">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-primary text-xs tracking-[0.3em] uppercase mb-2">
                            Quality Assurance
                        </p>
                        <h2 className="font-heading text-2xl md:text-4xl uppercase text-foreground leading-tight">
                            Every Gold Bar & Coin Comes Fully Certified
                        </h2>
                        <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                            At NA Royal Diamonds, we believe that every precious metal
                            investment should come with absolute peace of mind. That's why
                            every gold bar and coin we offer is accompanied by comprehensive
                            certification documents from internationally recognized
                            authorities.
                        </p>
                        <Link to="/products" className="btn-gold mt-6 inline-flex">
                            View Certified Products →
                        </Link>
                    </div>
                    <div className="relative aspect-video rounded overflow-hidden">
                        <img
                            src={heroBanner}
                            alt="Certificate"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded text-xs font-heading uppercase tracking-wider">
                            Certificate
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Certification Matters */}
            <section className="py-16 px-4">
                <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="font-heading text-2xl md:text-3xl uppercase tracking-wider text-foreground">
                            Why Gold Certification Matters
                        </h2>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">
                                        Authenticity Guarantee
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Certification Provides Third-Party Verification That Your
                                        Gold Is Genuine And Meets International Purity Standards.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Lock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">
                                        Investment Security
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Certified Gold Commands Higher Resale Value And Is Accepted
                                        By Banks And Financial Institutions Worldwide.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Globe className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-1">
                                        Global Recognition
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        LBMA And Other International Certifications Are Recognized
                                        Across Global Markets For Trade And Investment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aspect-video rounded overflow-hidden border border-border">
                        <img
                            src={heroGold}
                            alt="Why certification matters"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Types of Certification */}
            <section className="py-16 px-4 bg-secondary">
                <SectionHeading
                    title="Types of Certification"
                    subtitle="Every piece of gold we sell is backed by one or more of these internationally recognized certifications"
                />
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
                    {certificationTypes.map((cert) => (
                        <div
                            key={cert.title}
                            className="bg-card border border-border rounded overflow-hidden group hover:border-primary transition-colors"
                        >
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="text-primary mb-3">{cert.icon}</div>
                                <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-2">
                                    {cert.title}
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    {cert.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Global Refinery Partners */}
            <section className="py-16 px-4">
                <SectionHeading
                    title="Global Refinery Partners"
                    subtitle="We source our gold from the world's most reputable LBMA-approved refineries"
                />
                <div className="container mx-auto flex flex-wrap justify-center gap-4 max-w-4xl">
                    {[
                        "PAMP Suisse",
                        "Valcambi",
                        "Argor-Heraeus",
                        "Perth Mint",
                        "Royal Canadian Mint",
                        "United States Mint",
                    ].map((partner) => (
                        <div
                            key={partner}
                            className="border border-border rounded px-6 py-4 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer"
                        >
                            ✓ {partner}
                        </div>
                    ))}
                </div>
            </section>

            {/* Certification Gallery */}
            <section className="py-16 px-4 bg-secondary">
                <SectionHeading title="Certification Gallery" />
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            className="aspect-square rounded overflow-hidden group cursor-pointer"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Authentication Process */}
            <section className="py-16 px-4">
                <SectionHeading
                    title="Authentication Process"
                    subtitle="Our rigorous four-step verification process ensures every piece meets the highest standards"
                />
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
                    {authSteps.map((step) => (
                        <div key={step.num} className="feature-card">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-heading text-3xl text-primary">
                                    {step.num}
                                </span>
                                <span className="text-primary">{step.icon}</span>
                            </div>
                            <h3 className="font-heading text-sm uppercase tracking-wider text-foreground mb-2">
                                {step.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Invest CTA */}
            <section className="py-16 bg-secondary px-4">
                <div className="container mx-auto text-center">
                    <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground">
                        Invest With Confidence. Buy Fully Certified Gold.
                    </h2>
                    <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
                        Every piece of gold is backed by our authentication promise.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                        <Link to="/products?category=bars" className="btn-gold">
                            Browse Gold Bars →
                        </Link>
                        <Link
                            to="/products?category=coins"
                            className="btn-outline-gold"
                        >
                            Explore Gold Coins
                        </Link>
                    </div>
                    <div className="flex justify-center gap-6 mt-10">
                        <div className="w-24 h-24 rounded overflow-hidden border border-border">
                            <img
                                src={goldBar}
                                alt="Gold Bar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-24 h-24 rounded overflow-hidden border border-border">
                            <img
                                src={goldCoin}
                                alt="Gold Coin"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 100% Guarantee */}
            <section className="py-16 bg-card text-center px-4">
                <div className="container mx-auto max-w-2xl">
                    <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="font-heading text-2xl md:text-3xl uppercase text-foreground">
                        100% Certified Guarantee
                    </h2>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                        Every product sold by NA Royal Diamonds comes with an unconditional
                        certification guarantee. If any product does not meet the
                        specifications stated in its accompanying certificate, we will
                        provide a full refund or replacement — no questions asked.
                    </p>
                    <Link to="/contact" className="btn-gold mt-8 inline-flex">
                        Contact Us for Verification →
                    </Link>
                </div>
            </section>
        </Layout>
    );
};

export default Certification;
