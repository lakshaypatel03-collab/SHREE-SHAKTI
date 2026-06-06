import { BRAND_INFO } from "../data";
import { Phone, Mail, MapPin, ShieldAlert, Award, ShieldCheck } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-slate-950 text-white font-sans animate-fade-in text-left">
      {/* Upper informational area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand overview column (4 cols) */}
        <div className="md:col-span-4 space-y-5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white p-1 rounded-lg flex items-center justify-center">
              <ImageWithFallback
                id="footer-brand-logo"
                productId="logo"
                src="/images/shree-shakti-logo.jpeg"
                alt="Shree Shakti Corporate Seal"
                className="object-contain"
                fallbackType="logo"
              />
            </div>
            <div>
              <span className="text-md font-bold tracking-wider text-slate-100 block font-sans uppercase">
                {BRAND_INFO.brandName}
              </span>
              <span className="text-[9px] text-gray-500 font-mono tracking-widest block uppercase font-bold">
                Shri Shakti Products
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 font-sans leading-relaxed">
            Leading manufacturer of high-quality rotational molding water storage systems, 
            lofts, heavy industrial barrels, and weatherproofing sheets.
          </p>

          <p className="text-xs font-mono font-medium text-cyan-400 italic">
            "{BRAND_INFO.slogan} - {BRAND_INFO.sloganTranslation}"
          </p>
        </div>

        {/* Directory links column (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono font-extrabold text-slate-100 uppercase tracking-widest pl-2 border-l-2 border-cyan-500">
            Product Categories
          </h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <button
                id="footer-nav-2layer-btn"
                onClick={() => onNavigate("products")}
                className="hover:text-cyan-400 transition-colors"
              >
                Shivneri 2-Layer Series
              </button>
            </li>
            <li>
              <button
                id="footer-nav-3layer-btn"
                onClick={() => onNavigate("products")}
                className="hover:text-cyan-400 transition-colors"
              >
                Shivneri 3-Layer Thermal Series
              </button>
            </li>
            <li>
              <button
                id="footer-nav-4layer-btn"
                onClick={() => onNavigate("products")}
                className="hover:text-cyan-400 transition-colors"
              >
                Shivneri 4-Layer Extra Coool Premium
              </button>
            </li>
            <li>
              <button
                id="footer-nav-loft-btn"
                onClick={() => onNavigate("products")}
                className="hover:text-cyan-400 transition-colors"
              >
                Shivneri Indoor Loft Tanks
              </button>
            </li>
            <li>
              <button
                id="footer-nav-barrels-btn"
                onClick={() => onNavigate("products")}
                className="hover:text-cyan-400 transition-colors"
              >
                Industrial Blue Barrels & Drums
              </button>
            </li>
            <li>
              <button
                id="footer-nav-tarp-btn"
                onClick={() => onNavigate("products")}
                className="hover:text-cyan-400 transition-colors"
              >
                Virgin Multi-Layer Poly Tarpaulins
              </button>
            </li>
          </ul>
        </div>

        {/* Office Contact Coordinates (5 cols) */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-xs font-mono font-extrabold text-slate-100 uppercase tracking-widest pl-2 border-l-2 border-cyan-500">
            Corporate Coordinates
          </h4>
          
          <div className="space-y-4 text-xs text-slate-300">
            <a 
              href="https://maps.app.goo.gl/W6GUi7FnQ2x9t4cJ6?g_st=aw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-start space-x-3 group block hover:bg-slate-900/45 p-2 rounded-xl transition-all border border-transparent hover:border-slate-800"
            >
              <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-cyan-300 transition-all animate-pulse" />
              <div className="space-y-1">
                <span className="block font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  Works & Manufacturing Facility:
                </span>
                <span className="block text-slate-400 font-sans leading-relaxed group-hover:text-slate-350 transition-colors">
                  Shree Shakti Cement Products, near Pipeline Depot, Gunj Road, Maharashtra, India.
                </span>
                <span className="inline-flex items-center text-[10px] font-bold text-cyan-400 group-hover:text-cyan-300 mt-1 font-mono group-hover:underline">
                  View on Google Maps →
                </span>
              </div>
            </a>

            <div className="flex items-start space-x-3 p-2">
              <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div className="space-y-2 w-full">
                <span className="block font-bold text-slate-100 font-sans text-xs">
                  Sales Office Direct Mobiles:
                </span>
                <div className="flex flex-col gap-2 font-mono">
                  <a 
                    href="tel:+919422382214" 
                    className="inline-flex items-center justify-between w-full max-w-[200px] text-cyan-400 hover:text-cyan-300 bg-slate-900 hover:bg-slate-850 px-3 py-2 rounded-lg border border-cyan-500/30 hover:border-cyan-400 font-bold transition-all hover:translate-x-1 shadow-sm hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                  >
                    <span>+91 94223 82214</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1 text-cyan-400/80">Call</span>
                  </a>
                  <a 
                    href="tel:+917588671660" 
                    className="inline-flex items-center justify-between w-full max-w-[200px] text-cyan-400 hover:text-cyan-300 bg-slate-900 hover:bg-slate-850 px-3 py-2 rounded-lg border border-cyan-500/30 hover:border-cyan-400 font-bold transition-all hover:translate-x-1 shadow-sm hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                  >
                    <span>+91 75886 71660</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1 text-cyan-400/80">Call</span>
                  </a>
                  <a 
                    href="tel:+919420632714" 
                    className="inline-flex items-center justify-between w-full max-w-[200px] text-cyan-400 hover:text-cyan-300 bg-slate-900 hover:bg-slate-850 px-3 py-2 rounded-lg border border-cyan-500/30 hover:border-cyan-400 font-bold transition-all hover:translate-x-1 shadow-sm hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                  >
                    <span>+91 94206 32714</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1 text-cyan-400/80">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>



      {/* Bottom copyrights panel */}
      <div className="border-t border-slate-950 bg-slate-950 py-5 text-center text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p>© {currentYear} Shree Shakti Cement Products. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <span className="hover:text-slate-350 cursor-pointer">Quality Guarantee</span>
            <span>|</span>
            <span className="hover:text-slate-350 cursor-pointer">Factory Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
