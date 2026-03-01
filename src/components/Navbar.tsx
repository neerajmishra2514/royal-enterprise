import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "/about" },
  {
    label: "Buy Gold",
    href: "/products",
    children: [
      { label: "Gold Bars", href: "/products?category=bars" },
      { label: "Gold Coins", href: "/products?category=coins" },
    ],
  },
  { label: "Certification", href: "/certification" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-background/80 border-b border-border text-xs py-2 px-4 hidden md:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-primary">✓</span>
          <span className="text-muted-foreground">Buyback Guarantee</span>
          <Link to="#" className="text-primary underline ml-1">Learn more</Link>
        </div>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span>🇦🇪 AED ▾</span>
          <span>🇬🇧 English ▾</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-4 md:px-8 lg:px-16 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="text-primary text-2xl font-heading font-bold">👑</div>
            <span className="text-primary font-heading text-sm font-bold tracking-wider">ROYAL</span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDropdownOpen(true)}
              onMouseLeave={() => link.children && setDropdownOpen(false)}
            >
              {link.children ? (
                <button
                  className={`flex items-center gap-1 text-sm tracking-wide transition-colors ${location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {link.label} <ChevronDown className={`w-3 h-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={`text-sm tracking-wide transition-colors ${location.pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              )}
              {link.children && dropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card border border-border rounded py-2 min-w-[160px] shadow-lg">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-secondary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/cart" className="text-foreground hover:text-primary transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </Link>
          <button className="text-foreground hover:text-primary transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                to={link.href}
                className="block text-sm tracking-wide text-foreground hover:text-primary py-2"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-4 space-y-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block text-sm text-muted-foreground hover:text-primary py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
