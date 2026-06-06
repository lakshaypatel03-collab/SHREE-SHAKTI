import { BRAND_INFO } from "../data";
import { ArrowRight, Droplets, Shield, Award, Calendar } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

interface HeroProps {
  // No action button props needed
}

export default function Hero({}: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-gray-100"
    >
      {/* Decorative Blueprint or Water Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-full w-full bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 bg-cyan-50 border border-cyan-100 px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-800 tracking-wide uppercase">
              <Droplets className="w-4 h-4 text-cyan-600 animate-pulse" />
              <span>{BRAND_INFO.brandName} Brand Quality</span>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-mono tracking-widest text-slate-500 uppercase font-bold">
                Manufactured by {BRAND_INFO.manufacturer}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Kyunki Is Ki <span className="text-cyan-600">Har Bund</span> Main Hai Jeevan
              </h1>
              <p className="text-sm sm:text-base font-medium text-slate-600 font-mono italic border-l-2 border-cyan-500 pl-4">
                "{BRAND_INFO.sloganTranslation}"
              </p>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Shivneri premium water storage tanks are synthesized using advanced German
                rotomolding technology. Configured in 2, 3, and 4 specialized layers to preserve
                unmatched freshness, biological purity, and optimal cooling for your entire family.
              </p>
            </div>

            {/* Strategic Slogan Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {BRAND_INFO.taglines.map((tag, idx) => (
                <div
                  key={idx}
                  id={`hero-tagline-badge-${idx}`}
                  className="bg-white border border-gray-200 shadow-sm rounded-xl py-2.5 px-3 flex flex-col justify-center items-center text-center transition-all hover:border-cyan-300 hover:shadow-md"
                >
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    {tag}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Actions Removed */}

            {/* Certification / Trust anchors */}
            <div className="pt-6 border-t border-gray-150 flex flex-wrap gap-y-3 gap-x-6 text-xs text-slate-500 font-mono">
              <div className="flex items-center space-x-1.5">
                <Shield className="w-4.5 h-4.5 text-emerald-600" />
                <span>100% FDA Food Grade Approved</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4.5 h-4.5 text-amber-500" />
                <span>Heavy Wall Thickness Guarantee</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Calendar className="w-4.5 h-4.5 text-cyan-600" />
                <span>Long Lasting Warranty Core</span>
              </div>
            </div>
          </div>

          {/* Large Primary Image Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Back Glow */}
            <div className="absolute w-72 h-72 md:w-80 md:h-80 bg-cyan-600/5 rounded-full filter blur-3xl -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative max-w-md w-full bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xl transition-all transform hover:scale-[1.01] hover:shadow-2xl">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full flex items-center justify-center rounded-2xl bg-gradient-to-tr from-slate-50 to-white py-6">
                <ImageWithFallback
                  id="primary-hero-tank-collage"
                  productId="2-layer-vertical"
                  src="/input_file_9.png"
                  alt="Shivneri Water Tanks (Orange, Blue, Black 2-Layer Series)"
                  className="object-contain max-h-[280px] w-auto transition-transform duration-700 hover:rotate-1"
                />
              </div>
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-gray-100 flex justify-between items-center">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase font-sans">
                    Shivneri Classic 2-Layer
                  </h4>
                  <p className="text-[10px] text-gray-500">
                    Product range: 300 Ltr to 5000 Ltr capacities
                  </p>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase py-1 px-2 bg-emerald-100 text-emerald-800 rounded-md">
                  Best Seller
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
