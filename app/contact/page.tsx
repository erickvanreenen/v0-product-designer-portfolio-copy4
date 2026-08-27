"use client";

import React, { useState } from "react";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";

const inputClass =
  "w-full px-4 py-3 bg-surface border border-line text-ink placeholder:text-ink/75 focus:outline-none focus:border-ember focus:ring-2 focus:ring-ember/15 transition-all duration-200 text-[15px]";

const labelClass = "block t-label text-ink/75 mb-2.5";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch {
      setError("That did not send. Email me directly and it will reach me.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="page-entry">
      <section className="bg-surface border-b border-line">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <p className="t-label text-ember mb-6">Contact</p>
          <h1 className="t-display text-5xl md:text-7xl text-ink mb-10 md:mb-14">
            Let&apos;s connect.
          </h1>
          <blockquote className="measure">
            <div className="accent-rule mb-7" />
            <p className="text-lg md:text-xl text-ink leading-relaxed font-medium">
              &ldquo;The world needs dreamers and the world needs doers. But above all, what
              the world needs most are dreamers that do.&rdquo;
            </p>
            <cite className="block t-label text-ink/75 mt-5 not-italic">
              Sarah Ban Breathnach
            </cite>
          </blockquote>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20 pb-20 md:pb-28">
        <div className="lg:grid lg:grid-cols-[1fr_280px] lg:gap-20 xl:gap-28">

          <FadeIn>
            <div className="mb-16 lg:mb-0">
              {isSubmitted ? (
                <div className="border border-line bg-surface p-8 md:p-10">
                  <p className="t-label text-ember mb-4">Sent</p>
                  <h2 className="t-h2 text-3xl text-ink mb-3">Message received.</h2>
                  <p className="text-ink/82 mb-8">I&apos;ll respond within 48 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-sm text-ink/82 hover:text-ink transition-colors duration-200 underline underline-offset-4"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7" noValidate={false}>
                  <div>
                    <label htmlFor="name" className={labelClass}>Name</label>
                    <input
                      type="text" id="name" name="name" autoComplete="name"
                      value={formState.name} onChange={handleChange} required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email</label>
                    <input
                      type="email" id="email" name="email" autoComplete="email"
                      value={formState.email} onChange={handleChange} required
                      className={inputClass}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className={labelClass}>Message</label>
                    <textarea
                      id="message" name="message"
                      value={formState.message} onChange={handleChange} required rows={6}
                      className={`${inputClass} resize-none`}
                      placeholder="What are you working on, and where does it need a designer?"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="text-[15px] text-clay border-l-2 border-clay pl-4 py-1">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit" disabled={isSubmitting}
                    className="relative inline-flex items-center gap-2 px-6 py-3 bg-ember text-white text-sm font-medium hover:bg-ink active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed group"
                  >
                    <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
                      Send message
                    </span>
                    <ArrowRight
                      size={15}
                      className={`transition-transform duration-200 group-hover:translate-x-1 ${isSubmitting ? "opacity-0" : "opacity-100"}`}
                    />
                    {isSubmitting && (
                      <span className="absolute inset-0 flex items-center justify-center gap-2 text-white/85">
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

          <FadeIn delay={120}>
            <aside className="space-y-10">
              <div>
                <h2 className="t-label text-ink/75 mb-4">Direct</h2>
                <div className="space-y-3.5">
                  <Link
                    href="mailto:erickvanreenen@gmail.com"
                    className="flex items-center gap-3 text-ink/85 hover:text-ember transition-colors duration-200 min-w-0"
                  >
                    <Mail size={15} className="shrink-0" />
                    <span className="text-sm truncate">erickvanreenen@gmail.com</span>
                  </Link>
                  <Link
                    href="tel:+27620969497"
                    className="flex items-center gap-3 text-ink/85 hover:text-ember transition-colors duration-200"
                  >
                    <Phone size={15} className="shrink-0" />
                    <span className="text-sm">+27 620 969 497</span>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="t-label text-ink/75 mb-4">Location</h2>
                <a
                  href="https://maps.google.com/?q=Cape+Town,+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink/85 hover:text-ember transition-colors duration-200"
                >
                  Cape Town, South Africa
                </a>
              </div>

              <div>
                <h2 className="t-label text-ink/75 mb-4">Social</h2>
                <Link
                  href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
                  target="_blank" rel="noopener noreferrer"
                  className="text-sm text-ink/85 hover:text-ember transition-colors duration-200"
                >
                  LinkedIn
                </Link>
              </div>

              <div className="pt-8 border-t border-line">
                <p className="t-label text-ink/75 mb-3">Availability</p>
                <p className="text-sm text-ink/82 leading-relaxed">
                  Open to full-time roles, contract work, and interesting challenges.
                </p>
              </div>
            </aside>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
