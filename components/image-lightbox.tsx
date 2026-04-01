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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="group relative overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 aspect-video text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-200">
              <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Click to expand
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Caption row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
        {images.map((img, i) => (
          <p key={i} className="text-xs text-foreground/55 leading-snug">
            {img.caption}
          </p>
        ))}
      </div>

      {/* Lightbox modal */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full rounded-xl overflow-hidden bg-black aspect-video">
              <Image
                src={images[open].src}
                alt={images[open].alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-white/80 text-center leading-snug px-4">
              {images[open].caption}
            </p>
            <button
              onClick={() => setOpen(null)}
              className="absolute top-3 right-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/60 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
              }
