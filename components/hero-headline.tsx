"use client";

import { useEffect, useState } from "react";

const headlineLines = ["Fusing user needs", "with business outcomes."];

export function HeroHeadline() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const style = (i: number) => ({
    display: "block",
    transform: visible ? "translateY(0)" : "translateY(105%)",
    opacity: visible ? 1 : 0,
    transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${i * 800}ms, opacity 0.55s ease ${i * 800}ms`,
  });

  return (
    <>
      <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-foreground tracking-tight leading-[1.08] max-w-3xl mb-8 md:mb-10">
        {headlineLines.map((line, i) => (
          <span key={i} className="block overflow-hidden pb-1">
            <span style={style(i)}>{line}</span>
          </span>
        ))}
      </h1>

      {/* Context strip — 3rd beat */}
      <div className="overflow-hidden mb-10 md:mb-14">
        <p
          className="text-sm tracking-wide"
          style={style(2)}
        >
          <span className="font-bold" style={{ color: "#006A4E" }}>UX/UI Designer</span>
          <br/>
          <span className="font-normal" style={{ color: "#E8671A" }}>E-commerce, Omnichannel, EdTech</span>
        </p>
      </div>
    </>
  );
}
