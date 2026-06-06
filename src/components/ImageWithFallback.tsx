import React, { useEffect, useState } from "react";

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
    const fallbackLabel = fallbackType === "logo" ? "Shree Shakti" : alt || productId;

    return (
      <div
        className={`w-full h-full min-h-[120px] flex items-center justify-center rounded-2xl border border-gray-200 bg-slate-50 p-4 text-center ${className}`}
        role="img"
        aria-label={fallbackLabel}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {fallbackLabel}
        </span>
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
