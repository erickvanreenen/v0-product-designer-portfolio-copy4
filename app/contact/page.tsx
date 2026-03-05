"use client";

import React from "react";
import { useState } from "react";
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
          <h1 className="text-4xl md:text-5xl font-bold text-[#09332C] tracking-tight mb-8">
            Contact
          </h1>
          <blockquote className="max-w-2xl">
            <p className="text-xl md:text-2xl font-bold text-[#09332C] leading-snug tracking-tight">
              "The world needs dreamers and the world needs doers. But above all, what the world needs most are dreamers that do."
            </p>
            <cite className="block text-sm text-foreground/40 mt-4 not-italic">— Sarah Ban Breathnach</cite>
          </blockquote>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-20">
          {/* Form */}
          <div className="mb-16 lg:mb-0">
            {isSubmitted ? (
              <div className="py-16">
                <h2 className="text-2xl font-bold text-[#09332C] mb-2">Message sent.</h2>
                <p className="text-foreground/50 mb-6">I will respond within 48 hours.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-sm text-[#F0531C] underline underline-offset-4 hover:text-[#09332C] transition-colors duration-200"
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
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-[#09332C] transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-foreground font-medium mb-2">Email</label>
                  <input
                    type="email" id="email" name="email"
                    value={formState.email} onChange={handleChange} required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-[#09332C] transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-foreground font-medium mb-2">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formState.message} onChange={handleChange} required rows={4}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-border text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-[#09332C] transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project."
                  />
                </div>
                <button
                  type="submit" disabled={isSubmitting}
                  className="px-6 py-3 bg-[#09332C] text-[#F7EDDA] text-sm font-medium rounded-full hover:bg-[#F0531C] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            <div>
              <h2 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-4">Direct</h2>
              <div className="space-y-4">
                <Link href="mailto:erickvanreenen@gmail.com" className="flex items-center gap-3 text-foreground hover:text-[#F0531C] transition-colors duration-200 group">
                  <Mail size={16} className="text-foreground/30" />
                  <span className="text-sm">erickvanreenen@gmail.com</span>
                  <ArrowUpRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </Link>
                <Link href="tel:+27620969497" className="flex items-center gap-3 text-foreground hover:text-[#F0531C] transition-colors duration-200">
                  <Phone size={16} className="text-foreground/30" />
                  <span className="text-sm">+27 620 969 497</span>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-4">Location</h2>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin size={16} className="text-foreground/30" />
                <span className="text-sm">Cape Town, South Africa</span>
              </div>
            </div>

            <div>
              <h2 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-4">Social</h2>
              <Link
                href="https://www.linkedin.com/in/erick-van-reenen-b549061a6/"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-[#F0531C] transition-colors duration-200 group"
              >
                <Linkedin size={16} className="text-foreground/30" />
                <span className="text-sm">LinkedIn</span>
                <ArrowUpRight size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-2">Availability</p>
              <p className="text-sm text-foreground/50">
                Open to contract and full-time roles.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
