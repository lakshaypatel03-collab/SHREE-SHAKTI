import React, { useState, useEffect } from "react";

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  productId: string;
  className?: string;
  fallbackType?: "logo" | "product";
}

export default function ImageWithFallback({
  productId,
  src,
  alt,
  className = "",
  fallbackType = "product",
  ...props
}: ImageWithFallbackProps) {
  const [errorStatus, setErrorStatus] = useState(false);

  useEffect(() => {
    setErrorStatus(false);
  }, [src]);

  if (errorStatus || !src) {
    if (fallbackType === "logo") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className={`w-full h-full object-contain ${className}`}
        >
          <defs>
            <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <rect width="100" height="100" rx="20" fill="url(#logo-grad)" />
          {/* Circular abstract crest */}
          <circle cx="50" cy="50" r="36" fill="none" stroke="#22d3ee" strokeWidth="3" strokeDasharray="4,2" />
          <path
            d="M50,22 C40,32 32,45 32,55 C32,65 40,73 50,73 C60,73 68,65 68,55 C68,45 60,32 50,22 Z"
            fill="#e2e8f0"
            opacity="0.9"
          />
          {/* Lettering SS */}
          <text
            x="50"
            y="56"
            fontFamily="Inter, sans-serif"
            fontSize="18"
            fontWeight="900"
            fill="#0369a1"
            textAnchor="middle"
          >
            SS
          </text>
        </svg>
      );
    }

    // High fidelity custom SVGs based on product ID
    return (
      <div 
        className={`w-full h-full min-h-[260px] flex flex-col items-center justify-center bg-gradient-to-tr from-slate-50 to-slate-100/90 p-6 rounded-2xl border border-gray-200 select-none relative overflow-hidden group ${className}`}
      >
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0891b2_1px,transparent_1px)] [background-size:12px_12px]" />
        
        {productId === "2-layer-vertical" && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-28 h-44 flex flex-col items-center justify-between">
              {/* Lid */}
              <div className="w-16 h-4.5 bg-zinc-900 rounded-t-lg border-b border-zinc-800 shadow-sm z-10" />
              {/* Main Tank Body - Deep Black 2 Layer */}
              <div className="w-24 h-38 bg-gradient-to-r from-zinc-850 via-zinc-900 to-zinc-950 rounded-2xl relative shadow-md flex flex-col justify-around py-4 overflow-hidden border border-zinc-800">
                {/* 2-layer notification tag */}
                <span className="absolute top-1.5 right-1.5 bg-cyan-600/90 text-white text-[6px] font-bold px-1 py-0.5 rounded uppercase font-mono">
                  2 LAYER
                </span>
                
                {/* Horizontal rib design rings */}
                <div className="w-full h-1 bg-zinc-950/80 shadow-sm" />
                <div className="w-full h-1 bg-zinc-950/80 shadow-sm" />
                <div className="w-full h-2 bg-zinc-950 hover:bg-zinc-850 flex items-center justify-center text-[7.5px] text-zinc-300 font-black tracking-widest overflow-hidden font-mono">
                  SHIVNERI
                </div>
                <div className="w-full h-1 bg-zinc-950/80 shadow-sm" />
                <div className="w-full h-1 bg-zinc-950/80 shadow-sm" />
              </div>
            </div>
            <span className="text-[10px] font-mono text-zinc-500 mt-3 font-bold uppercase tracking-wider">
              2-Layer Black Tank
            </span>
          </div>
        )}

        {productId === "3-layer-vertical" && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-28 h-44 flex flex-col items-center justify-between">
              {/* Lid */}
              <div className="w-16 h-4.5 bg-slate-900 rounded-t-lg border-b border-slate-800 shadow-sm z-10" />
              {/* Main Tank Body - Triple layer insulated blue */}
              <div className="w-24 h-38 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-2xl relative shadow-md flex flex-col justify-around py-4 overflow-hidden border border-blue-500">
                <span className="absolute top-1.5 right-1.5 bg-amber-500/90 text-slate-950 text-[6px] font-bold px-1 py-0.5 rounded uppercase font-mono">
                  INSULATED
                </span>
                {/* Ribbed highlights */}
                <div className="w-full h-1 bg-blue-800/30 shadow-sm" />
                <div className="w-full h-1 bg-blue-800/30 shadow-sm" />
                <div className="w-full h-2 bg-slate-950 flex items-center justify-center text-[7.5px] text-cyan-400 font-extrabold uppercase tracking-wide font-mono">
                  SHIVNERI 3L
                </div>
                <div className="w-full h-1 bg-blue-800/30 shadow-sm" />
                <div className="w-full h-1 bg-blue-800/30 shadow-sm" />
              </div>
            </div>
            <span className="text-[10px] font-mono text-blue-550 mt-3 font-bold uppercase tracking-wider">
              3-Layer Insulated Tank
            </span>
          </div>
        )}

        {productId === "4-layer-vertical" && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-28 h-44 flex flex-col items-center justify-between">
              {/* Lid */}
              <div className="w-16 h-4.5 bg-cyan-700 rounded-t-lg border-b border-cyan-800 shadow-sm z-10" />
              {/* Main Tank Body - Flagship Coool White/Marble */}
              <div className="w-24 h-38 bg-gradient-to-r from-cyan-100 via-cyan-50 to-slate-100 rounded-2xl relative shadow-md flex flex-col justify-around py-4 overflow-hidden border border-cyan-200">
                <span className="absolute top-1.5 right-1.5 bg-red-500 text-white text-[6.5px] font-bold px-1 py-0.5 rounded uppercase font-mono animate-pulse">
                  EXTRA COOOL
                </span>
                {/* Ribbed lines */}
                <div className="w-full h-1 bg-cyan-200" />
                <div className="w-full h-1 bg-cyan-200" />
                <div className="w-full h-2.5 bg-cyan-900 flex items-center justify-center text-[7px] text-white font-extrabold tracking-widest font-mono">
                  SHIVNERI 4-L
                </div>
                <div className="w-full h-1 bg-cyan-200" />
                <div className="w-full h-1 bg-cyan-200" />
              </div>
            </div>
            <span className="text-[10px] font-mono text-cyan-750 mt-3 font-bold uppercase tracking-wider">
              4-Layer Premium Tank
            </span>
          </div>
        )}

        {productId === "loft-tank" && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-44 h-24 flex items-center justify-center bg-gradient-to-r from-cyan-550 via-cyan-600 to-cyan-700 rounded-xl shadow-lg border border-cyan-400 p-2 overflow-hidden">
              <div className="absolute inset-0 opacity-15 bg-white flex flex-col justify-around py-2">
                <div className="w-full h-0.5 bg-slate-900" />
                <div className="w-full h-0.5 bg-slate-900" />
                <div className="w-full h-0.5 bg-slate-900" />
              </div>
              <div className="relative z-10 bg-slate-950/40 text-white rounded-lg px-3 py-1.5 flex flex-col items-center">
                <span className="text-[10px] font-extrabold tracking-widest">SHIVNERI LOFT</span>
                <span className="text-[7px] text-cyan-200 font-mono">Horizontal Tank</span>
              </div>
              <div className="absolute inset-0 border-2 border-dashed border-white/20 rounded-xl" />
            </div>
            <span className="text-[10px] font-mono text-cyan-700 mt-3 font-bold uppercase tracking-wider">
              Loft Horizontal Model
            </span>
          </div>
        )}

        {productId === "blue-barrels" && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-24 h-34 flex flex-col items-center justify-between">
              {/* Lid Cover ring */}
              <div className="w-22 h-3 bg-zinc-950 rounded-md shadow-sm z-10" />
              
              {/* Industrial Drum Body */}
              <div className="w-20 h-30 bg-gradient-to-r from-blue-700 via-blue-850 to-blue-900 rounded-b-xl rounded-t-md relative shadow-md flex flex-col justify-around py-4 overflow-hidden border border-blue-600">
                <div className="w-full h-2 bg-blue-950/70" />
                <div className="w-full h-2 bg-blue-950/70" />
                <span className="text-[7.5px] font-black font-mono text-blue-200 text-center uppercase tracking-widest">
                  HEAVY DRUM
                </span>
                <div className="w-full h-2 bg-blue-950/70" />
              </div>
            </div>
            <span className="text-[10px] font-mono text-blue-600 mt-3 font-bold uppercase tracking-wider">
              HDPE Blue Barrel
            </span>
          </div>
        )}

        {productId === "plastic-tarpaulins" && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-40 h-28 flex flex-col items-center justify-center">
              {/* Back Layer Sheet */}
              <div className="absolute w-36 h-22 bg-gradient-to-tr from-amber-500 to-amber-600 rounded-lg shadow-md transform rotate-3 border border-amber-450 p-1 flex items-start justify-end">
                <div className="w-1.5 h-1.5 bg-yellow-100 rounded-full border border-yellow-600" />
              </div>
              {/* Front Layer Sheet */}
              <div className="absolute w-36 h-22 bg-gradient-to-tr from-blue-600 via-blue-650 to-cyan-700 rounded-lg shadow-lg transform -rotate-3 border border-blue-500 p-2 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div className="w-1.5 h-1.5 bg-yellow-100 rounded-full border border-yellow-600" />
                  <div className="w-1.5 h-1.5 bg-yellow-100 rounded-full border border-yellow-600" />
                </div>
                <div className="text-[7px] font-mono font-bold text-center text-white/90 leading-tight">
                  PREMIUM MULTI-LAYER<br />REINFORCED SHEETS
                </div>
                <div className="flex justify-between">
                  <div className="w-1.5 h-1.5 bg-yellow-100 rounded-full border border-yellow-600" />
                  <div className="w-1.5 h-1.5 bg-yellow-100 rounded-full border border-yellow-600" />
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-blue-700 mt-3 font-bold uppercase tracking-wider">
              Reinforced Tarpaulins
            </span>
          </div>
        )}

        {productId === "premium-ropes" && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-36 h-30 flex flex-col items-center justify-center">
              <div className="w-26 h-26 bg-gradient-to-tr from-amber-400 via-amber-300 to-amber-500 rounded-full shadow-lg border-4 border-amber-200 p-1 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full border-4 border-dashed border-amber-700/60 flex items-center justify-center">
                  <div className="w-14 h-14 bg-slate-900 rounded-full border-2 border-amber-300 flex items-center justify-center p-1">
                    <span className="text-[6.5px] text-center font-black text-amber-405 text-white leading-tight font-mono">
                      VIRGIN PP
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-amber-600 mt-3 font-bold uppercase tracking-wider">
              PP Polypropylene Ropes
            </span>
          </div>
        )}

        {productId === "shade-nets" && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="relative w-40 h-28 bg-gradient-to-tr from-emerald-800 via-emerald-700 to-emerald-900 rounded-xl shadow-lg border-2 border-emerald-600 p-1 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:4px_4px]" />
              <div className="absolute inset-2 border-2 border-dashed border-yellow-500 rounded-lg pointer-events-none" />
              <div className="bg-slate-950/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-center z-10 border border-slate-700">
                <span className="block text-[8.5px] font-black text-yellow-400 uppercase tracking-widest font-mono">
                  GREEN SHADE NET
                </span>
                <span className="block text-[6px] font-semibold text-slate-350">
                  Agro Climate Control
                </span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-700 mt-3 font-bold uppercase tracking-wider">
              Green Agro Shade Nets
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => {
        setErrorStatus(true);
      }}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
