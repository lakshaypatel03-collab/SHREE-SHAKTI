import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";
import CalculatorSection from "./components/CalculatorSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Smooth scroll helper
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset scrolling slightly to account for the sticky header
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Scroll watcher to sync active navbar category highlight live as user reviews the site
  useEffect(() => {
    const sections = ["home", "products", "calculator", "about"];
    
    const handleScrollWatcher = () => {
      const scrollPos = window.scrollY + 140; // anchor buffer offsets for header

      for (const sectId of sections) {
        const el = document.getElementById(sectId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollWatcher);
    return () => window.removeEventListener("scroll", handleScrollWatcher);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Dynamic Navigation Header */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Single-screen viewport sections */}
      <main className="flex-grow">
        
        {/* Banner entrance */}
        <Hero />

        {/* Dynamic products catalogs */}
        <ProductsSection />

        {/* Smart Calculators and blueprints blueprint viewport */}
        <CalculatorSection />

        {/* Corporate biography credentials */}
        <AboutSection />

      </main>

      {/* Information credits footers */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating contact call to action */}
      <WhatsAppFloatingButton />
    </div>
  );
}
