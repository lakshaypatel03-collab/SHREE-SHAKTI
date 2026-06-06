import { useState, useEffect } from "react";
import { PRODUCTS_DATA } from "../data";
import { Ruler } from "lucide-react";

export default function CalculatorSection() {
  const [selectedProductId, setSelectedProductId] = useState<string>("2-layer-vertical");
  const [selectedCapacity, setSelectedCapacity] = useState<number>(1000);

  // Sync Dimension capacity list based on selected product ID
  const productData = PRODUCTS_DATA.find((p) => p.id === selectedProductId);
  const capacitiesList = productData ? productData.specifications.map((s) => s.capacityLtr) : [1000];

  useEffect(() => {
    if (!capacitiesList.includes(selectedCapacity)) {
      setSelectedCapacity(capacitiesList[0] || 1000);
    }
  }, [selectedProductId, capacitiesList, selectedCapacity]);

  const activeSpec = productData?.specifications.find((s) => s.capacityLtr === selectedCapacity) || {
    capacityLtr: 1000,
    widthInch: 42,
    heightInch: 47
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <p className="text-xs font-bold font-mono tracking-widest text-cyan-600 uppercase">
            Installation Tools
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tank Installation Size Calculator
          </h2>
          <p className="text-base text-gray-500">
            Browse the exact geometric blueprint footprints and heights to plan your installation space 
            and select the ideal size for your property.
          </p>
        </div>

        {/* Unified Lookup Tool */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-6 sm:p-8 rounded-3xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            
            {/* Controls Side */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 pb-4 border-b border-gray-100">
                  <Ruler className="w-5 h-5 text-cyan-600" />
                  <h3 className="text-lg font-bold text-slate-950 font-sans uppercase tracking-wider">
                    Dimension & Size Selector
                  </h3>
                </div>

                {/* Select Model Series */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700 uppercase">
                    Select Model Class
                  </label>
                  <select
                    id="calc-product-select"
                    value={selectedProductId}
                    onChange={(e) => setSelectedProductId(e.target.value)}
                    className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-xs font-bold text-slate-805 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {PRODUCTS_DATA.filter((p) => p.id !== "plastic-tarpaulins" && p.id !== "blue-barrels" && p.id !== "premium-ropes" && p.id !== "shade-nets").map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Select Capacities Pill Layout */}
                <div className="space-y-2 text-left">
                  <label className="block text-xs font-bold text-slate-700 uppercase">
                    Select Capacity (Litres)
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {capacitiesList.map((cap) => (
                      <button
                        key={cap}
                        id={`calc-cap-pill-${cap}`}
                        onClick={() => setSelectedCapacity(cap)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                          selectedCapacity === cap
                            ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                            : "bg-slate-50 border border-gray-200 text-slate-600 hover:border-gray-300"
                        }`}
                      >
                        {cap} L
                      </button>
                    ))}
                  </div>
                </div>

                {/* Exact Specifications values display */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 border border-slate-100 rounded-2xl text-xs text-left">
                  <div>
                    <span className="block text-[9px] text-gray-400 uppercase font-mono tracking-wider">
                      Diameter/Width
                    </span>
                    <span className="text-sm font-bold text-slate-900 font-mono">
                      {activeSpec.widthInch} Inches
                    </span>
                    <span className="block text-[9px] text-gray-400 font-mono">
                      ({Math.round(activeSpec.widthInch * 2.54)} cm)
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-gray-400 uppercase font-mono tracking-wider">
                      Height
                    </span>
                    <span className="text-sm font-bold text-slate-900 font-mono">
                      {activeSpec.heightInch} Inches
                    </span>
                    <span className="block text-[9px] text-gray-400 font-mono">
                      ({Math.round(activeSpec.heightInch * 2.54)} cm)
                    </span>
                  </div>
                  {activeSpec.lengthInch && (
                    <div className="col-span-2 pt-2 border-t border-gray-150">
                      <span className="block text-[9px] text-gray-400 uppercase font-mono tracking-wider">
                        Length
                      </span>
                      <span className="text-sm font-bold text-slate-900 font-mono">
                        {activeSpec.lengthInch} Inches
                      </span>
                      <span className="block text-[9px] text-gray-400 font-mono">
                        ({Math.round(activeSpec.lengthInch * 2.54)} cm)
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* SVG Visual blueprint of the selected water tank shape */}
            <div className="relative flex flex-col items-center justify-center border border-gray-150 rounded-2xl p-6 bg-slate-950 text-emerald-400 font-mono text-xs overflow-hidden h-[280px]">
              
              <div className="absolute inset-x-0 bottom-2 text-center text-[9px] text-emerald-500/60 font-mono uppercase tracking-widest">
                Shivneri Structural CAD Blueprint (Mock Scale)
              </div>

              <div className="absolute top-3 left-4 text-[9px] text-emerald-500/40 uppercase">
                MODEL: {selectedProductId.toUpperCase()} | VOL: {selectedCapacity}L
              </div>

              {/* Responsive SVG Container representing Tank Layout blueprint */}
              <svg
                viewBox="0 0 200 160"
                className="w-full h-36 max-w-[200px]"
                id="blueprint-svg"
              >
                {/* Grid guidelines */}
                <line x1="20" y1="130" x2="180" y2="130" stroke="rgba(16, 185, 129, 0.15)" strokeDasharray="2,2" />
                <line x1="100" y1="10" x2="100" y2="140" stroke="rgba(16, 185, 129, 0.15)" strokeDasharray="2,2" />

                {/* Vertical Dimension arrow */}
                <line x1="25" y1="20" x2="25" y2="130" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                <path d="M 23 23 L 25 20 L 27 23 L 25 20 M 23 127 L 25 130 L 27 127" fill="none" stroke="#10b981" strokeWidth="0.8" />
                <text x="13" y="75" fill="#10b981" fontSize="7" transform="rotate(-90 13 75)" textAnchor="middle">
                  HEIGHT: {activeSpec.heightInch}"
                </text>

                {/* Horizontal Dimension arrow */}
                <line x1="45" y1="145" x2="155" y2="145" stroke="#10b981" strokeWidth="0.8" strokeDasharray="2,2" />
                <path d="M 48 143 L 45 145 L 48 147 M 152 143 L 155 145 L 152 147" fill="none" stroke="#10b981" strokeWidth="0.8" />
                <text x="100" y="153" fill="#10b981" fontSize="7" textAnchor="middle">
                  WIDTH: {activeSpec.widthInch}"
                </text>

                {selectedProductId === "loft-tank" ? (
                  // Loft tank blueprint layout (horizontal box aspect)
                  <>
                    <rect x="45" y="40" width="110" height="90" rx="6" fill="none" stroke="#10b981" strokeWidth="1.5" />
                    {/* Horizontal ribs */}
                    <line x1="45" y1="60" x2="155" y2="60" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
                    <line x1="45" y1="80" x2="155" y2="80" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
                    <line x1="45" y1="100" x2="155" y2="100" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
                    {/* Inner layers line block */}
                    <rect x="48" y="43" width="104" height="84" rx="4" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="0.8" strokeDasharray="2,1" />
                    {/* Lid Cap */}
                    <rect x="85" y="32" width="30" height="8" rx="2" fill="none" stroke="#10b981" strokeWidth="1.2" />
                  </>
                ) : (
                  // Vertical cylindrical tank blueprint layout
                  <>
                    <rect x="55" y="35" width="90" height="95" rx="8" fill="none" stroke="#10b981" strokeWidth="1.5" />
                    {/* Horizontal reinforcement lines (ribs) of cylindrical tanks */}
                    <line x1="55" y1="52" x2="145" y2="52" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
                    <line x1="55" y1="64" x2="145" y2="64" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
                    <line x1="55" y1="76" x2="145" y2="76" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
                    <line x1="55" y1="88" x2="145" y2="88" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
                    <line x1="55" y1="100" x2="145" y2="100" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
                    <line x1="55" y1="112" x2="145" y2="112" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="0.8" />
                    {/* Lid Cap */}
                    <rect x="85" y="27" width="30" height="8" rx="2" fill="none" stroke="#10b981" strokeWidth="1.2" />
                    {/* Top shoulder curve detail */}
                    <path d="M 55 50 c 15 -10, 75 -10, 90 0" fill="none" stroke="#10b981" strokeWidth="1" />
                    {/* Rib structure side indicators */}
                    <line x1="52" y1="45" x2="55" y2="45" stroke="#10b981" strokeWidth="1" />
                    <line x1="145" y1="45" x2="148" y2="45" stroke="#10b981" strokeWidth="1" />
                  </>
                )}
              </svg>

              <div className="absolute top-3 right-4 flex items-center space-x-1.5 text-xs text-emerald-500/80 font-bold bg-emerald-950 px-2 py-0.5 rounded-md border border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Specs Loaded</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
