import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* Newsletter */}
      <div className="border-b border-border py-10 px-4 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-lg md:text-xl tracking-wide uppercase text-foreground">
              Gain Exclusive Access to Deals and Updates
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Be The First To Receive The Latest Market Insights, Special Offers & Product Launches
            </p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground flex-1 md:w-64 outline-none focus:border-primary transition-colors"
            />
            <button className="btn-gold whitespace-nowrap">
              Subscribe →
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="container mx-auto py-12 px-4 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Almas Tower 22G</p>
              <p>Jumeirah Lake Towers</p>
              <p>Dubai</p>
              <p>Call: (064) 332-1233</p>
              <p>Mail: info@naroyaldiamonds.com</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">Get to Know Us</h4>
            <div className="space-y-2 text-sm">
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link to="/certification" className="block text-muted-foreground hover:text-primary transition-colors">Certification</Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/privacy-policy" className="block text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="block text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
              <Link to="/faq" className="block text-muted-foreground hover:text-primary transition-colors">FAQ's</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">Customer Care</h4>
            <div className="space-y-2 text-sm">
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
              <Link to="/shipping" className="block text-muted-foreground hover:text-primary transition-colors">Shipping & Delivery</Link>
              <Link to="/returns" className="block text-muted-foreground hover:text-primary transition-colors">Return And Exchange Policy</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wider text-foreground mb-4">Products</h4>
            <div className="space-y-2 text-sm">
              <Link to="/products?category=bars" className="block text-muted-foreground hover:text-primary transition-colors">Gold Bars</Link>
              <Link to="/products?category=coins" className="block text-muted-foreground hover:text-primary transition-colors">Gold Coins</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border py-6 px-4 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© Copyright NA Royal Diamonds 2025</p>
          <div className="flex items-center gap-4">
            <span>Apple Pay</span>
            <span>PayTabs</span>
            <span>VISA</span>
            <span>Mastercard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
