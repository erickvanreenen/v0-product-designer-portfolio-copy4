"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface LightboxImage {
  src: string;
  caption: string;
  alt: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
}

export function ImageLightbox({ images }: ImageLightboxProps) {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    if (open !== null) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-1 gap-6 mt-8">
        {images.map((img, i) => (
          <div key={i} className="group">
            <button
              onClick={() => setOpen(i)}
              className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 rounded-lg"
              aria-label={`Expand image: ${img.alt}`}
            >
              <div className="relative w-full overflow-hidden rounded-lg border border-border/60 bg-muted/30 transition-all duration-200 group-hover:border-foreground/20 group-hover:shadow-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
                  unoptimized
                />
                <div className="absolute top-3 right-3 bg-foreground/80 text-background text-xs font-medium px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none">
                  Click to expand
                </div>
              </div>
            </button>
            <p className="text-xs text-foreground/55 mt-3 leading-relaxed italic pl-1">
              {img.caption}
            </p>
          </div>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
          aria-label={images[open].alt}
        >
          <div
            className="relative max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white text-sm font-medium transition-colors"
              aria-label="Close"
            >
              Close ✕
            </button>
            <div className="rounded-xl overflow-hidden bg-black shadow-2xl">
              <Image
                src={images[open].src}
                alt={images[open].alt}
                width={1600}
                height={1000}
                className="w-full h-auto object-contain max-h-[80vh]"
                unoptimized
              />
            </div>
            <p className="text-white/60 text-sm mt-4 text-center italic leading-relaxed">
              {images[open].caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
