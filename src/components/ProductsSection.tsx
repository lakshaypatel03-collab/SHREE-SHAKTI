import { useState } from "react";
import { PRODUCTS_DATA } from "../data";
import { ProductDetails } from "../types";
import { Info, Check, Eye, ChevronDown, ChevronUp, Droplet, ArrowRight, Table } from "lucide-react";
import ImageWithFallback from "./ImageWithFallback";

export default function ProductsSection() {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});

  const filterTabs = [
    { label: "All Products", id: "all" },
    { label: "2-Layer", id: "2-layer-vertical" },
    { label: "3-Layer Thermal", id: "3-layer-vertical" },
    { label: "4-Layer Premium", id: "4-layer-vertical" },
    { label: "Loft Tanks", id: "loft-tank" },
    { label: "Barrels & Drums", id: "blue-barrels" },
    { label: "Tarpaulins", id: "plastic-tarpaulins" },
    { label: "PP Ropes", id: "premium-ropes" },
    { label: "Shade Nets", id: "shade-nets" }
  ];

  const filteredProducts = selectedTab === "all"
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.id === selectedTab);

  const toggleSpecs = (id: string) => {
    setExpandedSpecs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Color map for rendering custom swatch colors
  const getColorClasses = (colorName: string): string => {
    const formatted = colorName.toLowerCase();
    if (formatted.includes("black")) return "bg-slate-900 border-slate-700";
    if (formatted.includes("blue")) return "bg-blue-600 border-blue-400";
    if (formatted.includes("yellow")) return "bg-amber-400 border-amber-350";
    if (formatted.includes("green")) return "bg-emerald-600 border-emerald-400";
    if (formatted.includes("orange")) return "bg-orange-500 border-orange-400";
    if (formatted.includes("white")) return "bg-neutral-50 border-neutral-300";
    if (formatted.includes("sand") || formatted.includes("beige")) return "bg-amber-100 border-amber-200";
    if (formatted.includes("silver")) return "bg-slate-300 border-slate-400";
    if (formatted.includes("coal")) return "bg-zinc-800 border-zinc-650";
    if (formatted.includes("striped")) return "bg-gradient-to-r from-emerald-500 via-pink-500 to-blue-500 border-gray-300";
    return "bg-slate-450 border-gray-400";
  };

  return (
    <section id="products" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <p className="text-xs font-bold font-mono tracking-widest text-cyan-600 uppercase">
            Shivneri Product Catalog
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Engineered For Supreme Purity and Tensile Durability
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">
            From residential multi-unit vertical heat-barrier reservoirs to space-optimized lofts,
            heavy-duty industrial drums, and weatherproof tarpaulins — we build the best quality.
          </p>
        </div>

        {/* Tab Filters */}
        <div id="product-tabs" className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-gray-100 pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                selectedTab === tab.id
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-gray-500 hover:text-slate-900 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="space-y-16">
          {filteredProducts.map((product: ProductDetails) => {
            const isExpanded = expandedSpecs[product.id] || false;
            const isTarp = product.id === "plastic-tarpaulins";
            const isRope = product.id === "premium-ropes";
            const isNet = product.id === "shade-nets";

            return (
              <div
                key={product.id}
                id={`product-card-${product.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-slate-50/70 hover:bg-slate-50 border border-gray-100 rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-sm"
              >
                
                {/* Product Media - Left side (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                  <div className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-inner flex items-center justify-center relative group min-h-[300px]">
                    <ImageWithFallback
                      id={`img-product-${product.id}`}
                      productId={product.id}
                      src={product.imagePath}
                      alt={product.name}
                      className="object-contain max-h-[250px] w-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {product.layers && (
                      <span className="absolute top-4 right-4 bg-slate-900 text-white font-mono text-[10px] font-bold py-1 px-2.5 rounded-md uppercase tracking-wider">
                        {product.layers} Layers
                      </span>
                    )}
                  </div>

                  {product.galleryImagePaths && product.galleryImagePaths.length > 0 && (
                    <div className="grid grid-cols-1 gap-3">
                      {product.galleryImagePaths.map((imagePath, imageIndex) => (
                        <div
                          key={imagePath}
                          className="bg-white p-4 rounded-2xl border border-gray-100/80 shadow-inner flex items-center justify-center min-h-[180px]"
                        >
                          <ImageWithFallback
                            id={`img-product-${product.id}-gallery-${imageIndex}`}
                            productId={product.id}
                            src={imagePath}
                            alt={`${product.name} variant ${imageIndex + 1}`}
                            className="object-contain max-h-[170px] w-auto transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Swatches Color Circle selection indicator */}
                  <div>
                    <h4 className="text-xs font-bold text-slate-800 uppercase font-sans mb-2">
                      Available Colors
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.availableColors.map((color) => (
                        <div
                          key={color}
                          className="flex items-center space-x-1.5 bg-white border border-gray-250 py-1 px-2.5 rounded-md text-[10px] font-mono font-medium text-slate-700"
                          title={color}
                        >
                          <span className={`w-3.5 h-3.5 rounded-sm border ${getColorClasses(color)}`} />
                          <span>{color}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Detail Info - Right side (8 cols) */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  
                  {/* Product Title / Headers */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-cyan-600 uppercase tracking-widest">
                      {product.tagline}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans">
                      {product.description}
                    </p>
                  </div>

                  {/* Multi Layer Structure representation if available */}
                  {product.layerStructure && (
                    <div className="bg-white p-4.5 rounded-xl border border-gray-150 space-y-2">
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                        Cross-Layer Performance Barrier
                      </h4>
                      <div className="space-y-2">
                        {product.layerStructure.map((layerSpec, i) => (
                          <div key={i} className="flex items-start text-xs text-slate-600 gap-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-cyan-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-[9px]">
                              {i + 1}
                            </span>
                            <span className="font-medium">{layerSpec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Design Features Grid */}
                  <div className="space-y-2">
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                      Product Engineering Advantages
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specifications Accordion Container */}
                  <div className="border border-gray-200/80 rounded-xl bg-white overflow-hidden shadow-sm">
                    <button
                      id={`toggle-specs-${product.id}`}
                      onClick={() => toggleSpecs(product.id)}
                      className="w-full flex justify-between items-center py-3.5 px-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                    >
                      <div className="flex items-center space-x-2 text-xs font-extrabold text-slate-950 uppercase tracking-wider">
                        <Table className="w-4 h-4 text-cyan-500" />
                        <span>
                          {isRope ? "Standard Coil Specifications" : isNet ? "Shade Net Ratings" : "Technical Dimension Chart (Inches)"}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-xs text-slate-500">
                        <span>{isExpanded ? "Hide specs" : "Show specs"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-gray-200 overflow-x-auto p-4 bg-white animate-fade-in">
                        <table className="w-full text-left border-collapse text-xs font-sans min-w-[500px]">
                          <thead>
                            <tr className="border-b border-gray-200 bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider">
                              {isRope ? (
                                <>
                                  <th className="py-2.5 px-4 font-bold">Standard Packing</th>
                                  <th className="py-2.5 px-4 font-bold">Rope Diameter (mm)</th>
                                </>
                              ) : isNet ? (
                                <>
                                  <th className="py-2.5 px-4 font-bold">Model Layout</th>
                                  <th className="py-2.5 px-4 font-bold">Shading Factor</th>
                                </>
                              ) : (
                                <>
                                  <th className="py-2.5 px-4 font-bold">
                                    {isTarp ? "Fabric Reference" : "Capacity"}
                                  </th>
                                  {product.specifications[0].lengthInch !== undefined && (
                                    <th className="py-2.5 px-4 font-bold">Length (Inches)</th>
                                  )}
                                  {product.specifications[0].widthInch !== undefined && (
                                    <th className="py-2.5 px-4 font-bold">
                                      {isTarp ? "Width (Feet)" : "Width/Diameter (Inches)"}
                                    </th>
                                  )}
                                  {product.specifications[0].heightInch !== undefined && (
                                    <th className="py-2.5 px-4 font-bold">
                                      {isTarp ? "Length (Feet)" : "Height (Inches)"}
                                    </th>
                                  )}
                                </>
                              )}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-150">
                            {product.specifications.map((spec, sIdx) => (
                              <tr
                                key={sIdx}
                                className="hover:bg-slate-50/80 transition-colors text-slate-700 font-medium"
                              >
                                {isRope ? (
                                  <>
                                    <td className="py-3 px-4 text-slate-900 font-semibold font-mono">
                                      {spec.capacityLtr} Meters Coil
                                    </td>
                                    <td className="py-3 px-4 font-mono">{spec.ropeDiameterMm} mm</td>
                                  </>
                                ) : isNet ? (
                                  <>
                                    <td className="py-3 px-4 text-slate-900 font-semibold font-mono">
                                      Net - Grade {sIdx + 1}
                                    </td>
                                    <td className="py-3 px-4 font-mono font-bold text-emerald-600">
                                      {spec.shadePercentage}% Block
                                    </td>
                                  </>
                                ) : (
                                  <>
                                    <td className="py-3 px-4 text-slate-900 font-semibold font-mono">
                                      {isTarp
                                        ? `Tarp - Model ${sIdx + 1}`
                                        : `${spec.capacityLtr} Litres`}
                                    </td>
                                    {spec.lengthInch !== undefined && (
                                      <td className="py-3 px-4 font-mono">{spec.lengthInch}"</td>
                                    )}
                                    {spec.widthInch !== undefined && (
                                      <td className="py-3 px-4 font-mono">
                                        {spec.widthInch}
                                        {isTarp ? " Ft" : '"'}
                                      </td>
                                    )}
                                    {spec.heightInch !== undefined && (
                                      <td className="py-3 px-4 font-mono">
                                        {spec.heightInch}
                                        {isTarp ? " Ft" : '"'}
                                      </td>
                                    )}
                                  </>
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        
                        {product.id === "loft-tank" && (
                          <p className="text-[10px] text-amber-600 font-mono mt-2 flex items-center gap-1.5">
                            <Info className="w-3.5 h-3.5" />
                            <span>Note: Measurements of Loft Tanks are approximate. No replacement guarantee is offered.</span>
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Swatches Color Circle selection indicator footer */}
                  <div className="pt-2 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="text-xs text-gray-400 font-mono">
                      * Fabricated with state-of-the-art rotation molding and heavy rib-ring standards.
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
