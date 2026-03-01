import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroGold from "@/assets/hero-gold.jpg";
import blogHero from "@/assets/blog-hero.jpg";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const tags = ["Investment", "PreciousMetals", "MarketAnalysis", "Diamonds", "Jewellery", "Gold Bars", "Economy", "Inflation", "News & Updates"];

const relatedArticles = [
  { id: "1", image: heroGold, category: "Investment", title: "Understanding Gold Purity", date: "May 10, 2024" },
  { id: "2", image: blogHero, category: "Investment", title: "Navigating Market Volatility", date: "May 10, 2024" },
  { id: "3", image: heroGold, category: "Gold Coins", title: "The Allure of Collectible Gold Coins", date: "May 10, 2024" },
  { id: "4", image: blogHero, category: "Investment", title: "Navigating Market Volatility", date: "May 10, 2024" },
];

const BlogDetail = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img src={heroGold} alt="Blog" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="relative h-full flex items-end px-4 md:px-16 lg:px-24 pb-12">
          <div>
            <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Gold Bars</span>
            <h1 className="font-heading text-2xl md:text-4xl uppercase text-foreground mt-3 max-w-xl">
              Understanding Gold Purity: A Comprehensive Guide
            </h1>
            <p className="text-xs text-muted-foreground mt-3">By Dr. Evelyn Reed • December 05, 2025</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <p className="text-xs text-muted-foreground">
          Home &gt; Blog &gt; Gold Bars &gt; <span className="text-primary">The Golden Age Of AI: Reshaping Creativity And Work</span>
        </p>
      </div>

      {/* Content + Sidebar */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-5xl grid lg:grid-cols-[1fr_280px] gap-10">
          <article className="prose-sm">
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              As We Stand At The Precipice Of A New Technological Epoch, Artificial Intelligence Is Rapidly Evolving From A Futuristic Concept Into An Indispensable Facet Of Our Daily Lives. This Transformation Isn't Just About Efficiency Or Automation; It's About Fundamentally Reshaping How We Interact With The World, Challenging Our Notions Of Creativity, Work, And Even Consciousness.
            </p>

            <h2 className="font-heading text-lg uppercase text-foreground mt-8 mb-4">
              The Symbiotic Relationship Between AI and Human Creativity
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              One Of The Most Profound Impacts Of This Era Is The Evolving Relationship Between AI And Human Creativity. Far From Replacing Human Artists, Designers, And Writers, AI Is Emerging As A Powerful Collaborative Tool. Platforms Like DALL-E 3, Midjourney, And ChatGPT Are Not Just Generating Content; They Are Acting As Creative Partners, Offering New Avenues For Exploration, Iteration, And Ideation.
            </p>

            <blockquote className="border-l-4 border-primary pl-4 my-8 italic">
              <p className="text-sm text-primary leading-relaxed">
                "AI IS NOT HERE TO REPLACE HUMAN INGENUITY, BUT TO AMPLIFY IT, UNLOCKING NEW DIMENSIONS OF ARTISTIC EXPRESSION AND PROBLEM-SOLVING."
              </p>
            </blockquote>

            <h2 className="font-heading text-lg uppercase text-foreground mt-8 mb-4">
              Ethical Considerations and the Future Landscape
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              As AI Capabilities Expand, So Do The Ethical Considerations. Questions Surrounding Data Privacy, Algorithmic Bias, Job Displacement, And The Very Definition Of Authenticity Are Becoming More Pressing. Ensuring That AI Development Proceeds Responsibly, With A Focus On Fairness, Transparency, And Accountability, Is Paramount To Harnessing Its Full Potential For Societal Good.
            </p>

            <div className="bg-secondary rounded p-8 my-8 text-center">
              <p className="font-heading text-5xl text-primary">92%</p>
              <p className="text-sm text-muted-foreground mt-2">
                of businesses expect AI to play a significant role in their innovation strategy within the next 5 years.
              </p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              The Future Landscape Promises Even More Integration Of AI Into Our Lives. From Personalized Medicine And Smart Cities To Advanced Robotics And Space Exploration, AI Will Be At The Forefront Of Tackling Some Of Humanity's Greatest Challenges.
            </p>

            <div className="aspect-video rounded overflow-hidden my-8">
              <img src={blogHero} alt="AI" className="w-full h-full object-cover" />
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div>
              <h4 className="font-heading text-sm uppercase tracking-wider text-primary mb-3">Popular Posts</h4>
              <div className="space-y-3">
                {["The History of Gold as Currency", "Top 5 Reasons to Invest in Physical Gold", "Spot Price vs. Premium: What You Need to Know"].map((post) => (
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
      </section>

      {/* Related Articles */}
      <section className="py-16 px-4 border-t border-border">
        <SectionHeading title="Related Articles" />
        <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedArticles.map((article) => (
            <Link to={`/blog/${article.id}`} key={article.id} className="group">
              <div className="aspect-[4/3] rounded overflow-hidden mb-3">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded">{article.category}</span>
              <h3 className="font-heading text-sm uppercase text-foreground mt-2 group-hover:text-primary transition-colors">{article.title}</h3>
              <p className="text-xs text-primary mt-2">{article.date}</p>
              <span className="text-xs text-primary mt-1 inline-block">Read More →</span>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogDetail;
