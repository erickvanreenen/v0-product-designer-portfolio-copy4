"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";

interface LightboxImage {
  src: string;
  caption: string;
  alt: string;
}

interface ImageLightboxProps {
  images: LightboxImage[];
  /** Columns on desktop. Defaults to the image count, capped at 3. */
  cols?: 1 | 2 | 3;
  /** Fit the whole image rather than cropping to the tile. */
  contain?: boolean;
}

const colClass: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

export function ImageLightbox({ images, cols, contain = false }: ImageLightboxProps) {
  const [open, setOpen] = useState<number | null>(null);
  const columns = cols ?? (Math.min(images.length, 3) as 1 | 2 | 3);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, images.length, close]);

  return (
    <>
      <div className={`grid grid-cols-1 ${colClass[columns]} gap-6`}>
        {images.map((img, i) => (
          <figure key={img.src}>
            <button
              onClick={() => setOpen(i)}
              aria-label={`Expand: ${img.caption}`}
              className="group relative block w-full overflow-hidden border border-line bg-surface aspect-[4/3] cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className={`${contain ? "object-contain p-4" : "object-cover object-top"} transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]`}
              />
              <span className="absolute bottom-0 right-0 w-8 h-8 bg-ink text-paper flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Maximize2 size={13} />
              </span>
            </button>
            <figcaption className="t-caption mt-3">{img.caption}</figcaption>
          </figure>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[open].caption}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-deep/95 p-4 md:p-10"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full max-h-[88vh] flex flex-col gap-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex-1 min-h-0 aspect-[4/3] max-h-[76vh]">
              <Image
                src={images[open].src}
                alt={images[open].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <p className="text-sm text-paper/75 text-center leading-snug">
              {images[open].caption}
            </p>
            <button
              onClick={close}
              className="absolute -top-2 right-0 md:-top-4 md:-right-4 text-paper/70 hover:text-paper w-9 h-9 flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
