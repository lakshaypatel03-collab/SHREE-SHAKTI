import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ShieldCheck } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Products", id: "products" },
    { label: "Water Calculator", id: "calculator" },
    { label: "About Us", id: "about" }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-white/85 backdrop-blur-sm py-4 border-b border-gray-200/50"
      }`}
    >
      {/* Top Banner for Contacts */}
      <div className="hidden sm:block border-b border-gray-100 pb-2 mb-2 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-600">
              <Phone className="w-3.5 h-3.5 mr-1 text-slate-500" />
              <a href="tel:+919422382214" className="hover:text-cyan-600 transition-colors font-bold text-slate-800 underline decoration-cyan-400 decoration-2 underline-offset-2">
                +91 94223 82214
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div
          id="brand-logo-container"
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          <div className="relative w-11 h-11 bg-white p-1 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden shadow-sm">
            <ImageWithFallback
              id="header-brand-logo-img"
              productId="logo"
              src="/images/shree-shakti-logo.jpeg"
              alt="Shree Shakti Logo"
              className="object-contain max-h-full max-w-full"
              fallbackType="logo"
            />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="text-lg font-bold tracking-tight text-slate-900 font-sans uppercase">
                Shree Shakti
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeSection === item.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-gray-600 hover:text-slate-900 hover:bg-gray-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-slate-950 p-1 bg-gray-100 rounded-md"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col pt-24 px-6 animate-fade-in"
        >
          <div className="flex justify-between items-center absolute top-4 right-4">
            <button
              id="mobile-drawer-close"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-slate-950 p-2 bg-gray-50 rounded-md"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-[11px] font-semibold text-gray-400 font-mono tracking-widest uppercase mb-4">
            Navigation Menu
          </p>

          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`py-3.5 px-4 rounded-xl text-left text-base font-semibold transition-all ${
                  activeSection === item.id
                    ? "bg-slate-900 text-white"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100">
            <div className="space-y-3">
              <a
                href="tel:+919422382214"
                className="flex items-center justify-center space-x-2 text-sm text-white bg-slate-900 py-3.5 rounded-xl hover:bg-slate-850 active:scale-[0.99] transition-all font-bold shadow-md shadow-slate-900/10"
              >
                <Phone className="w-4 h-4 text-cyan-400 font-bold" />
                <span>Call +91 94223 82214</span>
              </a>
              <div className="text-center text-xs text-gray-400 pt-1">
                Shri Shakti Cement Products
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
