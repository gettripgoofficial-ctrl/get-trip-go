"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  image: string;
  title: string;
  alt?: string;
  label?: string;
  meta?: string;
  reverse?: boolean;
  wide?: boolean;
  children: ReactNode;
};

export default function GuideFeature({
  image, title, alt, label, meta, reverse, wide, children,
}: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      if (img.naturalWidth === 0) setFailed(true);
      else setLoaded(true);
    }
  }, []);

  return (
    <section
      className={`flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${
        wide ? "md:!col-span-2 md:flex-row" : "md:!col-span-1"
      } ${wide && reverse ? "md:flex-row-reverse" : ""}`}
    >
      {!failed && (
        <div
          className={`relative bg-slate-100 ${
            wide ? "aspect-[16/10] md:aspect-auto md:min-h-[300px] md:w-1/2 md:shrink-0" : "aspect-[16/10]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            ref={imgRef}
            src={image}
            alt={alt ?? title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {label && (
            <span className="absolute left-3 top-3 rounded-md bg-[#f5c518] px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-black">
              {label}
            </span>
          )}
        </div>
      )}
      <div className="flex-1 p-5">
        {failed && label && <p className="mb-1 text-xs font-bold uppercase text-orange-600">{label}</p>}
        <h3 className="text-xl font-bold leading-tight text-slate-900">{title}</h3>
        {meta && <p className="mt-0.5 text-sm text-slate-500">{meta}</p>}
        <div className="mt-2 space-y-2 text-[0.95rem] leading-7">{children}</div>
      </div>
    </section>
  );
}
