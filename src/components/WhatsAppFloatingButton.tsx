import React, { useState } from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "919422382214"; // Indian country code prefix 91 for wa.me format
  const message = encodeURIComponent("Hello! I am interested in Shree Shakti water tanks & tarpaulins. Please share more details.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex items-center font-sans"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip Label */}
      <div
        className={`mr-3 px-4 py-2 bg-slate-900/95 backdrop-blur-sm text-white text-xs font-bold rounded-xl shadow-lg border border-slate-700 transition-all duration-300 transform origin-right ${
          showTooltip 
            ? "translate-x-0 opacity-100 scale-100" 
            : "translate-x-2 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <span className="flex items-center space-x-1.5 whitespace-nowrap">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
          <span>Need help? Chat with us!</span>
        </span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.45)] transition-all duration-300 group hover:shadow-[0_8px_30px_rgb(32,186,89,0.6)] focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Ambient Ring Glow Wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none scale-105" />

        {/* WhatsApp High Fidelity Tech Icon SVG */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.265 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.446L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.005 14.058.96 11.433.959c-5.412 0-9.82 4.372-9.824 9.798-.002 1.769.471 3.5 1.369 5.011l-.995 3.633 3.738-.971zm11.758-6.196c-.3-.15-1.774-.875-2.05-.976-.275-.1-.476-.15-.676.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.492-.893-.797-1.496-1.78-1.671-2.08-.175-.3-.018-.462.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.626-.925-2.226-.243-.585-.49-.507-.675-.516-.174-.008-.374-.01-.574-.01s-.525.075-.8.375c-.276.3-1.05 1.026-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.22 5.116 4.521.715.31 1.273.496 1.707.635.717.228 1.37.195 1.885.118.574-.085 1.774-.726 2.025-1.427.25-.7.25-1.3.175-1.427-.075-.13-.275-.2-.575-.35z" />
        </svg>
      </a>
    </div>
  );
}
