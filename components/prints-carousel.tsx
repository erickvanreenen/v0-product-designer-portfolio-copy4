"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Icon } from "@/components/material-icon";

const prints = [
  { src: "/prints/print-1.jpg", alt: "Squirrel in flight — cream, indigo ink" },
  { src: "/prints/print-2.jpg", alt: "Honeybees and hexagons — teal and gold" },
  { src: "/prints/print-3.jpg", alt: "Yin Yang — energy diagram" },
  { src: "/prints/print-4.jpg", alt: "Pigeon — teal on gold circle" },
  { src: "/prints/print-5.jpg", alt: "Bird on branch — grey, red enso" },
  { src: "/prints/print-6.jpg", alt: "Print 06" },
  { src: "/prints/print-7.jpg", alt: "Print 07" },
];

export function PrintsCarousel() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isOpen = lightboxIndex !== null;

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + prints.length) % prints.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % prints.length));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, prev, next]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Carousel */}
      <div className="relative">
        {/* Scroll track */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-4 scroll-smooth"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {prints.map((print, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="flex-shrink-0 group relative overflow-hidden rounded-lg bg-[#F7EDDA]/40 cursor-zoom-in"
              style={{
                width: "clamp(160px, 22vw, 220px)",
                aspectRatio: "3/4",
                scrollSnapAlign: "start",
              }}
              aria-label={`Open print: ${print.alt}`}
            >
              <Image
                src={print.src}
                alt={print.alt}
                fill
                sizes="(max-width: 768px) 180px, 220px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#09332C]/0 group-hover:bg-[#09332C]/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                  <Icon name="zoom_in" size={16} className="text-[#09332C]" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Fade edge — right */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#FDFAF5] to-transparent" />
      </div>

      {/* Print count */}
      <p className="text-xs text-foreground/35 mt-3">{prints.length} prints</p>

      {/* Lightbox */}
      {isOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Print viewer"
        >
          {/* Stop propagation on inner container */}
          <div
            className="relative flex items-center justify-center w-full h-full px-16"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center text-white"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Counter */}
            <p className="absolute top-5 left-5 text-xs text-white/50 font-medium tabular-nums">
              {lightboxIndex + 1} / {prints.length}
            </p>

            {/* Prev */}
            <button
              onClick={prev}
              className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center text-white"
              aria-label="Previous print"
            >
              <Icon name="arrow_back" size={20} className="text-white" />
            </button>

            {/* Image */}
            <div className="relative max-h-[88vh] max-w-[80vw] md:max-w-[60vw] lg:max-w-[48vw]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={prints[lightboxIndex].src}
                alt={prints[lightboxIndex].alt}
                className="max-h-[88vh] w-auto object-contain rounded-lg shadow-2xl"
                style={{ maxWidth: "min(80vw, 640px)" }}
              />
            </div>

            {/* Next */}
            <button
              onClick={next}
              className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center text-white"
              aria-label="Next print"
            >
              <Icon name="arrow_forward" size={20} className="text-white" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
              {prints.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`rounded-full transition-all duration-200 ${
                    i === lightboxIndex
                      ? "w-4 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"
                  }`}
                  aria-label={`Go to print ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
