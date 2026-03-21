"use client";

import React from "react";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/components/material-icon";
import { FadeIn } from "@/components/fade-in";

const inputClass =
  "w-full px-4 py-3 bg-white border border-border text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-[#F0531C] focus:ring-2 focus:ring-[#F0531C]/15 transition-all duration-200 text-sm";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="page-entry">
      {/* Hero */}
      <section className="bg-[#FDFAF5]">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <p className="text-xs text-foreground/35 font-medium uppercase tracking-widest mb-6">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-10 md:mb-14">
            Let&apos;s talk.
          </h1>
          <blockquote className="max-w-2xl border-l-2 border-[#F0531C] pl-6">
            <p className="text-base md:text-lg font-medium text-foreground leading-relaxed">
              &ldquo;The world needs dreamers and the world needs doers. But above all, what the world needs most are dreamers that do.&rdquo;
            </p>
            <cite className="block text-sm text-foreground/40 mt-3 not-italic">Sarah Ban Breathnach</cite>
          </blockquote>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 pb-20 md:pb-28">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-20 xl:gap-28">

          {/* Form */}
          <FadeIn>
            <div className="mb-16 lg:mb-0">
              {isSubmitted ? (
                <div className="py-10">
                  <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-3">Sent</p>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Message received.</h2>
                  <p className="text-foreground/50 mb-8 text-sm">I&apos;ll respond within 48 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-200 underline underline-offset-4"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  <div>
                    <label htmlFor="name" className="block text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Name</label>
                    <input
                      type="text" id="name" name="name"
                      value={formState.name} onChange={handleChange} required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Email</label>
                    <input
                      type="email" id="email" name="email"
                      value={formState.email} onChange={handleChange} required
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      id="message" name="message"
                      value={formState.message} onChange={handleChange} required rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project or role."
                    />
                  </div>
                  <button
                    type="submit" disabled={isSubmitting}
                    className="relative px-6 py-3 bg-[#F0531C] text-white text-sm font-medium hover:bg-[#09332C] active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden group"
                  >
                    <span className={`transition-opacity duration-200 ${isSubmitting ? "opacity-0" : "opacity-100"}`}>
                      Send message
                    </span>
                    {isSubmitting && (
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-white/80">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn delay={120}>
            <aside className="space-y-10">
              <div>
                <h2 className="text-xs text-foreground/35 font-medium uppercase tracking-widest mb-4">Direct</h2>
                <div className="space-y-4">
                  <Link href="mailto:erickvanreenen@gmail.com" className="flex items-center gap-3 text-foreground/70 hover:text-[#F0531C] transition-colors duration-200 group min-w-0">
                    <Mail size={15} className="shrink-0" />
                    <span className="text-sm truncate">erickvanreenen@gmail.com</span>
                  </Link>
                  <Link href="tel:+27620969497" className="flex items-center gap-3 text-foreground/70 hover:text-[#F0531C] transition-colors duration-200">
                    <Phone size={15} className="shrink-0" />
                    <span className="text-sm">+27 620 969 497</span>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-xs text-foreground/35 font-medium uppercase tracking-widest mb-4">Location</h2>
                <a
                  href="https://maps.google.com/?q=Cape+Town,+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-[#F0531C] transition-colors duration-200"
                >
                  Cape Town, South Africa
                </a>
              </div>

              <div>
                <h2 className="text-xs text-foreground/35 font-medium uppercase tracking-widest mb-4">Social</h2>
                <Link
                  href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
                  target="_blank" rel="noopener noreferrer"
                  className="text-sm text-foreground/70 hover:text-[#F0531C] transition-colors duration-200"
                >
                  LinkedIn
                </Link>
              </div>

              <div className="pt-8 border-t border-border/60">
                <p className="text-xs text-foreground/35 font-medium uppercase tracking-widest mb-2">Availability</p>
                <p className="text-sm text-foreground/55 leading-relaxed">
                  Open to full-time roles, contract work, and interesting problems.
                </p>
              </div>
            </aside>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
