"use client";

import React from "react";
import { useState } from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Icon } from "@/components/material-icon";

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
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-8">
            Contact
          </h1>
          <blockquote className="max-w-2xl">
            <p className="text-xl md:text-2xl font-bold text-foreground leading-snug tracking-tight">
              "The world needs dreamers and the world needs doers. But above all, what the world needs most are dreamers that do."
            </p>
            <cite className="block text-sm text-foreground/65 mt-4 not-italic">Sarah Ban Breathnach</cite>
          </blockquote>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-20">
          {/* Form */}
          <div className="mb-16 lg:mb-0">
            {isSubmitted ? (
              <div className="py-16">
                <h2 className="text-2xl font-bold text-foreground mb-2">Message sent.</h2>
                <p className="text-foreground/65 mb-6">I will respond within 48 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-[#F0531C] underline underline-offset-4 hover:text-[#09332C]/60 transition-colors duration-200"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block text-sm text-foreground font-medium mb-2">Name</label>
                  <input
                    type="text" id="name" name="name"
                    value={formState.name} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#09332C] transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-foreground font-medium mb-2">Email</label>
                  <input
                    type="email" id="email" name="email"
                    value={formState.email} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#09332C] transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-foreground font-medium mb-2">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formState.message} onChange={handleChange} required rows={4}
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-[#09332C] transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project."
                  />
                </div>
                <button
                  type="submit" disabled={isSubmitting}
                  className="px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#09332C] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div>
              <h2 className="flex items-center gap-1.5 text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">
                <Icon name="send" size={13} />Direct
              </h2>
              <div className="space-y-4">
                <Link href="mailto:erickvanreenen@gmail.com" className="flex items-center gap-3 text-foreground hover:text-[#F0531C] transition-colors duration-200 group min-w-0">
                  <Mail size={16} className="text-foreground/65 shrink-0" />
                  <span className="text-sm truncate">erickvanreenen@gmail.com</span>
                  <ArrowUpRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
                <Link href="tel:+27620969497" className="flex items-center gap-3 text-foreground hover:text-[#F0531C] transition-colors duration-200">
                  <Phone size={16} className="text-foreground/65" />
                  <span className="text-sm">+27 620 969 497</span>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="flex items-center gap-1.5 text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">
                <Icon name="location_on" size={13} />Location
              </h2>
              <a
                href="https://maps.google.com/?q=Cape+Town,+South+Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-[#F0531C] transition-colors duration-200 group"
              >
                <Icon name="map" size={16} className="text-foreground/65 shrink-0" />
                <span className="text-sm">Cape Town, South Africa</span>
                <ArrowUpRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            </div>

            <div>
              <h2 className="flex items-center gap-1.5 text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">
                <Icon name="public" size={13} />Social
              </h2>
              <Link
                href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-[#F0531C] transition-colors duration-200 group"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-foreground/65 shrink-0" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn</span>
                <ArrowUpRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="flex items-center gap-1.5 text-xs text-foreground/65 font-medium uppercase tracking-widest mb-2">
                <Icon name="event_available" size={13} />Availability
              </p>
              <p className="text-sm text-foreground/65">
                Open to contract and full-time roles.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
