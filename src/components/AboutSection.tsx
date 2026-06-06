import { BRAND_INFO, GENERAL_FEATURES } from "../data";
import { ShieldCheck, Heart, Sparkles, Building, Layers, Droplet } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export default function AboutSection() {
  const values = [
    {
      title: "German-Grade Rotomolding",
      description: "Computed rotational mold speeds create entirely unified, jointless vessel hulls. Eliminates seam lines that split or rupture under high pressure storage.",
      icon: Layers
    },
    {
      title: "100% Virgin Food-Grade Polymers",
      description: "Synthesized without organic solvents or non-food plasticizers. Absolutely zero BPA leaching or odor transitions in stored drinking water.",
      icon: Droplet
    },
    {
      title: "True Structural Wall Weights",
      description: "We strictly refrain from down-gauging density. Shivneri tanks are built with heavy materials, reflecting real, solid weight that blocks high structural wind and weather.",
      icon: ShieldCheck
    },
    {
      title: "Sun-Shield Ultraviolet Armor",
      description: "Compounded carbon-loaded structures completely absorb and scatter solar wavelengths. Protects the polymer bounds and stops algae mold from seeding inside.",
      icon: Sparkles
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* About intro grid */}
        <div className="max-w-4xl mx-auto mb-16 text-center flex flex-col items-center">
          
          {/* Text Content */}
          <div className="space-y-6 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight text-center">
              Shree Shakti Cement Products: Trust Synthesized Over Decades
            </h2>
            <div className="h-1 w-20 bg-cyan-600 rounded animate-pulse" />
            <p className="text-sm font-semibold text-slate-705 text-cyan-700 italic">
              "Kyunki Is Ki Har Bund Main Hai Jeevan — safeguarding purity across generations."
            </p>
            <p className="text-base text-gray-500 leading-relaxed font-sans text-center">
              Founded as a high-density, resilient manufacturing house under <strong>Shri Shakti Cement Products</strong>, 
              we have evolved to address severe fluid containment issues faced by high-growth cities, factories, and farmlands. 
              Our brand <strong>Shivneri</strong> represents our unwavering standard of durable, heavy-weight polymers.
            </p>
            <p className="text-base text-gray-500 leading-relaxed font-sans text-center">
              Unlike common blow-moulded tanks that become brittle and crack within brief summer cycles, our vessels are 
              built for thermal expansion resistance, chemical inertia, and complete safety from biological algae.
            </p>
          </div>

        </div>

        {/* Corporate core pillars list */}
        <div className="border-t border-gray-150 pt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Four Pillars of Shivneri Product Quality
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Engineered with physical parameters and specifications built to last a lifetime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  id={`about-pillar-${i}`}
                  className="bg-slate-50 border border-gray-150 rounded-2xl p-6 hover:bg-slate-50/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 shadow-sm text-cyan-600">
                    <Icon className="w-5 h-5 pointer-events-none" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2 font-sans">
                    {v.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
