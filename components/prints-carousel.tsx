"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
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

const SCROLL_STEP = 232; // card width (~220px) + gap (12px)

export function PrintsCarousel() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isOpen = lightboxIndex !== null;

  // Portal needs document to exist
  useEffect(() => { setMounted(true); }, []);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + prints.length) % prints.length));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % prints.length));
  }, []);

  const scrollCarousel = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? SCROLL_STEP : -SCROLL_STEP, behavior: "smooth" });
  };

  // Update arrow visibility on scroll
  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

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

  const lightbox = isOpen && lightboxIndex !== null && (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
      onClick={closeLightbox}
      role="dialog"
      aria-modal="true"
      aria-label="Print viewer"
    >
      {/* Counter */}
      <p className="absolute top-5 left-5 text-xs text-white/50 font-medium tabular-nums pointer-events-none">
        {lightboxIndex + 1} / {prints.length}
      </p>

      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center text-white"
        aria-label="Close"
      >
        <X size={16} />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center text-white"
        aria-label="Previous print"
      >
        <Icon name="arrow_back" size={20} className="text-white" />
      </button>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={lightboxIndex}
        src={prints[lightboxIndex].src}
        alt={prints[lightboxIndex].alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "block",
          width: "auto",
          height: "auto",
          maxHeight: "88vh",
          maxWidth: "min(80vw, 640px)",
          borderRadius: "0.5rem",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)",
        }}
      />

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-center text-white"
        aria-label="Next print"
      >
        <Icon name="arrow_forward" size={20} className="text-white" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {prints.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
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
  );

  return (
    <>
      {/* Carousel */}
      <div className="relative">

        {/* Scroll left — only visible once user has scrolled right */}
        {canScrollLeft && (
          <button
            onClick={() => scrollCarousel("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-sm border border-border/30 flex items-center justify-center hover:bg-[#F7EDDA] transition-colors duration-200 text-foreground/60 hover:text-foreground"
            aria-label="Scroll left"
          >
            <Icon name="chevron_left" size={18} />
          </button>
        )}

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

        {/* Scroll right — hidden once fully scrolled */}
        {canScrollRight && (
          <button
            onClick={() => scrollCarousel("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white shadow-sm border border-border/30 flex items-center justify-center hover:bg-[#F7EDDA] transition-colors duration-200 text-foreground/60 hover:text-foreground"
            aria-label="Scroll right"
          >
            <Icon name="chevron_right" size={18} />
          </button>
        )}

      </div>

      {/* Print count */}
      <p className="text-xs text-foreground/35 mt-3">{prints.length} prints</p>

      {/* Lightbox — portalled to document.body to escape any parent transform context */}
      {mounted && createPortal(lightbox, document.body)}
    </>
  );
}
