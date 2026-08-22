"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";
import { LogoMark } from "@/components/logo-mark";
import { Icon, metaIcon } from "@/components/material-icon";
import {
  SearchShiftDiagram,
  GeoLayerStack,
  PlatformIADiagram,
  MultilingualBreakDiagram,
  CompetitorMatrix,
  FaqBeforeAfter,
  GeoSignals,
} from "@/components/geo-diagrams";

interface GeoCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const personas = [
  { key: "A", name: "The Bucket-Lister", profile: "Affluent, 50+, often couples", need: "Hand-holding and education. They do not know where to start.", primary: true },
  { key: "B", name: "The Milestone Celebrator", profile: "Honeymoon and anniversary travellers", need: "To feel special and seen. Formulaic responses break trust.", primary: false },
  { key: "C", name: "The Experienced Repeat Traveller", profile: "Has visited Africa 4+ times", need: "Depth and credibility. They come to go deeper.", primary: false },
  { key: "D", name: "The Family Organiser", profile: "Parent planning a first family trip", need: "Confidence and simplicity. Decision paralysis is high.", primary: false },
  { key: "E", name: "The Solo Adventurer", profile: "Solo traveller, growing segment", need: "Autonomy with support. Guidance without being managed.", primary: false },
];

const opportunities = [
  { n: "01", title: "Aspiration-first planning", body: "Only one competitor attempts experience-led discovery. A 'start with how you want to feel' approach maps to how luxury travellers actually begin planning. and is largely unoccupied." },
  { n: "02", title: "Transparent enquiry process", body: "The anxiety of 'what happens after I click Enquire?' is unaddressed by five of six competitors. A clear three-step human process reduces drop-off before first contact." },
  { n: "03", title: "Modern technical foundation", body: "Three of six run WordPress. A headless or Next.js architecture delivers speed, personalisation headroom, and SEO advantages that compound. and are perceptible to users calibrated to the best of the web." },
  { n: "04", title: "Itinerary visualisation", body: "No competitor offers an interactive itinerary builder or shareable journey map. Once a user is in consultation, a living collaborative plan is the highest-impact investment available in this space." },
];

const implications = [
  { icon: "person", title: "Surface the consultant early", body: "It is the product, not a support feature. Across all five persona buckets, the named human relationship drives trust, conversion, and review." },
  { icon: "verified", title: "Distribute trust signals", body: "Awards, press, named consultants, and testimonials belong at every decision point. not quarantined on dedicated pages." },
  { icon: "bolt", title: "Remove friction from enquiry", body: "One clear step, not a form. High-net-worth users have money and no patience for doubt." },
  { icon: "language", title: "Extend multilingual continuity", body: "Language must carry from the blog through to the enquiry form. Discovery and conversion cannot speak different languages." },
  { icon: "map", title: "Add a spatial orientation layer", body: "For a platform that sells geography as the product, a map-based entry point is a structural gap, not a feature request." },
  { icon: "tune", title: "Build personalisation cues", body: "Every touchpoint should signal the user is known and their trip is being considered individually." },
];

export function GeoCaseStudy({ project, nextProject, prevProject }: GeoCaseStudyProps) {
  return (
    <div className="page-entry">
      <div>

        {/* ── Hero ─────────────────────────────── */}
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 py-16 md:py-28">
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-foreground/65">{tag}</span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-3 max-w-2xl">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-foreground/50 max-w-xl leading-relaxed mb-2">
              Architecting content authority for AI-generated search
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 mt-12">
              {[
                { label: "Role", value: project.role },
                { label: "Company", value: "Rhino Africa" },
                { label: "Year", value: project.timeline },
                { label: "Methods", value: "IA · GEO · Benchmarking" },
              ].map((item, i) => (
                <div key={item.label} className={`p-5 md:p-6 min-w-0 overflow-hidden border-border ${
                  i === 1 || i === 3 ? "border-l" : i === 2 ? "md:border-l" : ""
                } ${
                  i === 2 || i === 3 ? "border-t md:border-t-0" : ""
                }`}>
                  <div className="flex items-center gap-1.5 text-foreground/35 mb-2">
                    <Icon name={metaIcon(item.label)} size={14} />
                    <span className="text-xs font-medium uppercase tracking-widest">{item.label}</span>
                  </div>
                  <p className="text-sm text-foreground break-words">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The question ─────────────────────── */}
        <section className="bg-[#E2F5EF]">
          <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
            <p className="flex items-center gap-1.5 text-xs text-foreground/50 font-medium uppercase tracking-widest mb-6">
              <Icon name="help" size={13} />The question
            </p>
            <p className="text-xl md:text-3xl font-bold text-foreground tracking-tight leading-snug max-w-3xl">
              How do you architect the information hierarchy of a page so that an AI agent can
              extract a company&apos;s authority and cite them as the expert source?
            </p>
          </div>
        </section>

        {/* ── Content ──────────────────────────── */}
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-28">

          {/* Overview */}
          <section className="mb-20 md:mb-24">
            <p className="text-lg md:text-xl text-foreground font-medium leading-snug mb-8">
              Generative Engine Optimisation is widely treated as a content problem. It is not.
              It is an information architecture problem wearing a content marketing costume.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed mb-5">
              Rhino Africa is Africa&apos;s most awarded safari company. 5,300+ Trustpilot reviews
              at a 5.0 rating, destination coverage across twelve African countries, and a
              consultant relationship that customers name personally in almost every review.
              The authority is real and hard-won.
            </p>
            <p className="text-base text-foreground/70 leading-relaxed">
              But authority a machine cannot read is authority that does not exist. This project
              maps the platform as a system, establishes how AI agents actually extract and
              attribute expertise, and architects the hierarchy that makes it legible.
            </p>
          </section>

          {/* Why GEO */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Why This Matters Now
              </h2>
            </div>
            <p className="text-sm text-foreground/65 mb-10 max-w-2xl leading-relaxed">
              Search behaviour is shifting from scanning results to reading answers. Perplexity,
              ChatGPT Search, and Google AI Overviews synthesise a response and cite two or three
              sources. The economics of visibility change completely.
            </p>

            <div className="bg-white rounded-lg p-5 md:p-8 border border-border/40">
              <SearchShiftDiagram />
            </div>

            <p className="text-sm text-foreground/70 leading-relaxed mt-8">
              In the old model, being on page one gave you a chance. In the new one, being
              structurally legible determines whether you are in the answer at all. The
              competition is no longer for attention. It is for extraction.
            </p>
          </section>

          {/* Method */}
          <section className="mb-20 md:mb-24 bg-white rounded-lg p-6 md:p-10">
            <h2 className="flex items-center gap-1.5 text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">
              <Icon name="account_tree" size={13} />How I approached it
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed mb-8">
              Before designing anything, I need to understand where a feature or page lives
              within the ecosystem. the dependencies and interdependencies of every element.
              Only then does a page-level decision become defensible.
            </p>
            <div className="space-y-0">
              {[
                { n: "01", t: "Platform information architecture", d: "Map the system: how information is organised, how it flows, where the seams are." },
                { n: "02", t: "GEO performance analysis", d: "Taxonomy depth, locale declarations, multilingual continuity, spatial orientation." },
                { n: "03", t: "Persona research", d: "Conversation mining across six review platforms and the client feedback page." },
                { n: "04", t: "HNW consumer behaviour", d: "Behavioural psychology and conversion patterns specific to the luxury segment." },
                { n: "05", t: "Competitive benchmarking", d: "Six competitors, five UX dimensions, consistently scored." },
              ].map((s, i, arr) => (
                <div key={s.n} className="flex gap-5 md:gap-6">
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-foreground/35 font-bold shrink-0 w-6 text-center pt-0.5">{s.n}</span>
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-7 md:pb-8">
                    <h3 className="text-base font-bold text-foreground">{s.t}</h3>
                    <p className="text-sm text-foreground/65 mt-1.5">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Platform IA */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                The Platform as a System
              </h2>
            </div>
            <p className="text-sm text-foreground/65 mb-10 max-w-2xl leading-relaxed">
              Six primary pillars, all funnelling toward a single outcome: the human Travel
              Expert relationship. The platform is fundamentally a content-to-conversion machine.
            </p>

            <div className="bg-white rounded-lg p-5 md:p-8 border border-border/40">
              <PlatformIADiagram />
            </div>

            <div className="mt-10 space-y-6">
              {[
                { t: "The blog is a separate system", d: "It runs on a WordPress subdomain, mirrors the main taxonomy, and cross-links back. Critical top-of-funnel value. and a content consistency risk." },
                { t: "Tours and Destinations are entangled", d: "Tours are multi-destination packages; destination pages surface relevant tours. Any IA work has to start with this relationship." },
                { t: "Trust content is conversion infrastructure", d: "About Us, Price Guarantee, Client Feedback, and Financial Protection sit close to the booking funnel by design. They are not reference material." },
              ].map((item) => (
                <div key={item.t} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-2 shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-foreground">{item.t}</h3>
                    <p className="text-sm text-foreground/65 mt-1 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Findings */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                What the Analysis Found
              </h2>
            </div>
            <p className="text-sm text-foreground/65 mb-10 max-w-2xl leading-relaxed">
              Plenty works. The destination taxonomy goes deep, down to reserve level, so Sabi Sand
              sits under Kruger Private Game Reserve rather than under South Africa. You can land at
              country, region or park depending on how much you already know.
            </p>

            <div className="grid grid-cols-2 gap-px bg-[#09332C]/10 mb-12">
              <div className="bg-[#FDFAF5] p-6 md:p-8">
                <p className="text-4xl md:text-6xl font-bold text-foreground/30 leading-none tabular-nums">5</p>
                <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mt-4">
                  Blog languages
                </p>
              </div>
              <div className="bg-[#FDFAF5] p-6 md:p-8">
                <p className="text-4xl md:text-6xl font-bold text-[#F0531C] leading-none tabular-nums">1</p>
                <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mt-4">
                  Enquiry form language
                </p>
              </div>
            </div>

            <h3 className="text-base font-bold text-foreground mb-2">
              Where multilingual continuity breaks
            </h3>
            <p className="text-sm text-foreground/65 mb-8 leading-relaxed">
              The blog is available in five languages, reflecting real awareness of where the
              buyer markets sit. The main site declares two locale alternates. The enquiry form
              is English only.
            </p>

            <div className="bg-white rounded-lg p-5 md:p-8 border border-border/40">
              <MultilingualBreakDiagram />
            </div>

            <div className="mt-12 space-y-6">
              {[
                { t: "Authority is never declared machine-readably", d: "No entity block above the fold. No named consultant byline. No schema tying expertise to a person. A crawler reads a hero image and generic intro copy." },
                { t: "FAQ answers cannot be extracted", d: "They exist, but open with preamble and never name Rhino Africa as the source. An AI agent has nothing clean to lift." },
                { t: "Geography is the product, but there is no map", d: "Destination filtering is filter-driven. country, duration, budget. rather than spatial. For a platform selling place, that is a structural gap." },
              ].map((item) => (
                <div key={item.t} className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-2 shrink-0" />
                  <div>
                    <h3 className="text-base font-bold text-foreground">{item.t}</h3>
                    <p className="text-sm text-foreground/65 mt-1 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who this is for */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                Who This Is For
              </h2>
            </div>
            <p className="text-sm text-foreground/65 mb-10 max-w-2xl leading-relaxed">
              Five persona buckets emerged from conversation mining across Trustpilot,
              Travelstride, TripAdvisor, SafariBookings, Fodor&apos;s forums, and the client
              feedback page.
            </p>

            <div className="space-y-2">
              {personas.map((p) => (
                <div key={p.key}
                  className={`flex gap-4 rounded-md p-4 md:p-5 border ${
                    p.primary ? "bg-white border-[#F0531C]/30" : "bg-white border-border/40"
                  }`}>
                  <span className={`text-xs font-bold shrink-0 pt-0.5 ${
                    p.primary ? "text-[#F0531C]" : "text-foreground/30"
                  }`}>
                    {p.key}
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-sm font-bold text-foreground">{p.name}</h3>
                      {p.primary && (
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#F0531C]">
                          Primary
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-foreground/45 mt-1">{p.profile}</p>
                    <p className="text-sm text-foreground/75 mt-2 leading-relaxed">{p.need}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-[#E2F5EF] rounded-lg p-6 md:p-8">
              <p className="flex items-center gap-1.5 text-xs text-foreground/50 font-medium uppercase tracking-widest mb-4">
                <Icon name="key" size={13} />Key takeout
              </p>
              <p className="text-lg md:text-xl font-bold text-foreground tracking-tight leading-snug">
                The consultant is the product.
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed mt-3">
                Across all five buckets, the named human relationship is what drives trust,
                conversion, and review. The platform&apos;s primary job is to establish credibility
                and remove friction fast enough to reach that first human contact.
              </p>
            </div>
          </section>

          {/* The answer. GEO architecture */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                The Architecture
              </h2>
            </div>
            <p className="text-sm text-foreground/65 mb-10 max-w-2xl leading-relaxed">
              Seven layers, ordered by the sequence a crawler reads them. Each was tested against
              a single question: can an AI agent extract Rhino Africa&apos;s authority from this,
              unambiguously, without human interpretation?
            </p>

            <GeoLayerStack />
          </section>

          {/* Before / after */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                What Changes in Practice
              </h2>
            </div>
            <p className="text-sm text-foreground/65 mb-10 max-w-2xl leading-relaxed">
              Applied to the Kruger National Park destination page. The recommendations are
              structural, not cosmetic. the words change because the job of the words changes.
            </p>

            <FaqBeforeAfter />

            <div className="mt-10 bg-white rounded-lg p-6 md:p-8 border border-border/40">
              <h3 className="flex items-center gap-1.5 text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">
                <Icon name="edit_note" size={13} />Page identity
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-[10px] text-foreground/40 font-bold uppercase tracking-widest mb-2">Current</p>
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    &ldquo;Kruger National Park. A Transformative Luxury Safari&rdquo;
                  </p>
                  <p className="text-xs text-foreground/45 mt-2">
                    Rhino Africa is not named. No authority claim.
                  </p>
                </div>
                <div className="pt-5 border-t border-border/40">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-[#F0531C]">Recommended</p>
                  <p className="text-sm text-foreground/85 leading-relaxed font-medium">
                    &ldquo;Kruger National Park Safaris: Expert-Planned Luxury Big 5 Experiences
                    by Rhino Africa&rdquo;
                  </p>
                  <p className="text-xs text-foreground/60 mt-2">
                    Entity and authority in the first sentence a crawler reads.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* GEO signals */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                The Nine Signals
              </h2>
            </div>
            <p className="text-sm text-foreground/65 mb-8 max-w-2xl leading-relaxed">
              The framework the architecture is built on. Each signal is something a machine can
              detect, and something a designer can deliberately structure for.
            </p>

            <GeoSignals />

            <p className="text-xs text-foreground/40 mt-8 leading-relaxed">
              E-E-A-T began as E-A-T (Google, 2014). Experience was added in 2022 to reward
              genuine, lived involvement over aggregated or AI-generated content.
            </p>
          </section>

          {/* Competitive position */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                The Competitive Set
              </h2>
            </div>
            <p className="text-sm text-foreground/65 mb-10 max-w-2xl leading-relaxed">
              Six competitors, three local and three international, scored across five UX
              dimensions. The purpose was not ranking. it was finding the unoccupied ground.
            </p>

            <CompetitorMatrix />

            <h3 className="text-base font-bold text-foreground mt-14 mb-6">
              Four opportunities nobody has taken
            </h3>
            <div className="space-y-0">
              {opportunities.map((o, i, arr) => (
                <div key={o.n} className="flex gap-5 md:gap-6">
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-[#F0531C] font-bold shrink-0 w-6 text-center pt-0.5">{o.n}</span>
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-7 md:pb-8">
                    <h4 className="text-base font-bold text-foreground">{o.title}</h4>
                    <p className="text-sm text-foreground/65 mt-1.5 leading-relaxed">{o.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Recommendations. the outcome */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-4">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                The Deliverable
              </h2>
            </div>
            <p className="text-sm text-foreground/65 mb-10 max-w-2xl leading-relaxed">
              Six recommendations, in the order I would do them. These are the places where the
              work pays back fastest, for the user and for the business.
            </p>

            <div className="grid sm:grid-cols-2 gap-px bg-border/50 rounded-md overflow-hidden">
              {implications.map((imp, i) => (
                <div key={imp.title} className="bg-white p-5 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name={imp.icon} size={15} className="text-[#F0531C]" />
                    <span className="text-xs text-foreground/30 font-bold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{imp.title}</h3>
                  <p className="text-xs text-foreground/60 mt-2 leading-relaxed">{imp.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-border">
              <p className="text-lg md:text-xl text-foreground font-medium leading-snug">
                The output of this project is not a screen. It is a structure. one that makes
                fifteen years of earned expertise legible to a machine that has never met a
                consultant.
              </p>
            </div>
          </section>

          {/* Learnings */}
          <section className="mb-20 md:mb-24">
            <div className="flex items-center gap-3 mb-8 md:mb-10">
              <LogoMark size={16} opacity={0.25} />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                What I Learned
              </h2>
            </div>
            <div className="space-y-6">
              {project.learnings.map((learning, i) => (
                <div key={i} className="flex items-start gap-5 md:gap-6">
                  <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base text-foreground/85 leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* ── Navigation ───────────────────────── */}
        <div>
          <div className="max-w-3xl mx-auto px-6 py-10">
            <div className="flex justify-between">
              {prevProject ? (
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="group flex items-center gap-3 text-foreground/65 hover:text-foreground transition-colors duration-200"
                >
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                  <div>
                    <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest">Previous</p>
                    <p className="text-sm text-foreground group-hover:text-[#F0531C] transition-colors duration-200">{prevProject.title}</p>
                  </div>
                </Link>
              ) : <div />}
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex items-center gap-3 text-foreground/65 hover:text-foreground transition-colors duration-200 text-right"
                >
                  <div>
                    <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest">Next</p>
                    <p className="text-sm text-foreground group-hover:text-[#F0531C] transition-colors duration-200">{nextProject.title}</p>
                  </div>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
