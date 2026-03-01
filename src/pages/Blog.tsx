import Layout from "@/components/Layout";
import HeroBanner from "@/components/HeroBanner";
import SectionHeading from "@/components/SectionHeading";
import blogHero from "@/assets/blog-hero.jpg";
import heroGold from "@/assets/hero-gold.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";

const categories = ["All", "Gold Bars", "Gold Coins", "Investment Guides", "Market Trends", "News & Updates"];

const articles = [
  { id: "1", image: heroGold, category: "Investment", title: "Understanding Gold Purity: A Comprehensive Guide", excerpt: "Delve Into The Nuances Of Gold Purity Standards Like Karats And Fineness. Essential Insights For Serious Investors And Collectors.", date: "May 10, 2024" },
  { id: "2", image: blogHero, category: "Investment", title: "Navigating Market Volatility With Gold", excerpt: "Strategies To Safeguard Your Portfolio During Economic Uncertainties. Learn Why Gold Remains A Safe Haven Asset.", date: "May 10, 2024" },
  { id: "3", image: heroGold, category: "Gold Coins", title: "The Allure of Collectible Gold Coins", excerpt: "Explore The Dual Appeal Of Gold Coins As Both An Investment Vehicle And A Collector's Treasure.", date: "May 10, 2024" },
  { id: "4", image: blogHero, category: "Market Trends", title: "Gold's Performance in Q1 2024", excerpt: "An In-depth Review Of Gold's Market Movements And Key Factors Influencing Its Price In The First Quarter.", date: "May 10, 2024" },
  { id: "5", image: heroGold, category: "News & Updates", title: "NA Royal Diamonds Expands New Global Reach", excerpt: "Read About Our Latest Collaborations And How They Enhance Our Offerings And Global Reach For Our Valued Customers.", date: "May 10, 2024" },
  { id: "6", image: blogHero, category: "Gold Bars", title: "The Journey of Gold: From Mine to Market", excerpt: "Follow The Fascinating Process Of Gold Extraction, Refining, And Its Transformation Into Various Investment Products.", date: "May 10, 2024" },
];

const popularPosts = [
  "The History of Gold as Currency",
  "Top 5 Reasons to Invest in Physical Gold",
  "Spot Price vs. Premium: What You Need to Know",
  "Impact of Geopolitics on Gold Prices",
];

const tags = ["Investment", "PreciousMetals", "MarketAnalysis", "Diamonds", "Jewellery", "Gold Bars", "Economy", "Inflation", "News & Updates"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <Layout>
      <HeroBanner
        image={blogHero}
        subtitle="Stay Informed with Expert Analysis"
        title="Your Guide to Gold Investment"
        ctaText="Subscribe to Newsletter"
        ctaHref="#"
      />

      {/* Featured article */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded overflow-hidden aspect-[2/1]">
            <img src={heroGold} alt="Featured" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Investment Guide</span>
              <h2 className="font-heading text-xl md:text-3xl uppercase text-foreground mt-3">
                The Golden Rule: Why Gold Remains a Prudent Investment
              </h2>
              <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                In an ever-changing economic landscape, understanding the enduring value and stability of gold is crucial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-wrap gap-4 border-b border-border pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-wider transition-colors ${
                activeCategory === cat ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles grid + sidebar */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl grid lg:grid-cols-[1fr_280px] gap-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link to={`/blog/${article.id}`} key={article.id} className="group">
                <div className="aspect-[4/3] rounded overflow-hidden mb-3">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">{article.category}</span>
                <h3 className="font-heading text-sm uppercase text-foreground mt-2 group-hover:text-primary transition-colors">{article.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{article.excerpt}</p>
                <p className="text-xs text-primary mt-2">{article.date}</p>
                <span className="text-xs text-primary mt-1 inline-block">Read More →</span>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">Search</h4>
              <div className="flex border border-border rounded overflow-hidden">
                <input placeholder="Search articles..." className="flex-1 bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none" />
                <button className="px-3 text-primary"><Search className="w-4 h-4" /></button>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">Popular Posts</h4>
              <div className="space-y-3">
                {popularPosts.map((post) => (
                  <p key={post} className="text-sm text-muted-foreground hover:text-foreground cursor-pointer transition-colors">{post}</p>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">Tags Cloud</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">{tag}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">Latest Updates</h4>
              <div className="space-y-3">
                {["New Diamond Collection Launch", "Webinar: Future of Gold in Digital Age", "NA Royal at Dubai Expo"].map((item) => (
                  <div key={item}>
                    <p className="text-sm text-foreground">{item}</p>
                    <p className="text-xs text-muted-foreground">May 10, 2024</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="text-center mt-10">
          <button className="btn-gold">Load More Articles →</button>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
