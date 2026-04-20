"use client";
import { LogoMark } from "@/components/logo-mark";

import React, { useState, useCallback, useEffect } from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Icon, metaIcon } from "@/components/material-icon";
import { ImageLightbox } from "@/components/image-lightbox";

interface UCookCaseStudyProps {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const wireframes = [
  { src: "/images/ucook-wf-signup-flow.png", alt: "Full sign-up flow wireframe showing 6-step funnel", caption: "Redesigned sign-up funnel. Six steps. Single page.", w: 780, h: 1520 },
  { src: "/images/ucook-wf-address.png", alt: "Step 5: Delivery address form with Google Places", caption: "Step 5. Delivery address.", w: 1040, h: 1140 },
  { src: "/images/ucook-wf-payment.png", alt: "Step 6: Payment details form with R1 verification note", caption: "Step 6. Payment details.", w: 1040, h: 1040 },
  { src: "/images/ucook-wf-confirmation.png", alt: "Confirmation page showing payment, address, and delivery review", caption: "Confirmation. Review before activating subscription.", w: 1000, h: 1160 },
];

const annotations = [
  {
    title: "Visual design",
    items: [
      "Circular progress indicator",
      "Colour scheme matching mobile app design system",
    ],
  },
  {
    title: "Initial state",
    items: [
      "Hidden by default",
      "Triggered after first user interaction in sign-up flow",
      "Appears with soft fade-in animation",
    ],
  },
  {
    title: "Persistent behaviour",
    items: [
      "Sticky positioning at top of mobile viewport",
      "Remains visible throughout entire sign-up process",
      "Lightweight, non-intrusive design",
    ],
  },
  {
    title: "Progress tracking",
    items: [
      "Circular segments representing 5 sign-up steps",
      "Current step highlighted with primary colour",
      "Completed steps filled/coloured; upcoming steps outlined/muted",
      "Independent step completion tracking",
      "Non-sequential step completion allowed (accounts for partial and abandoned sign-ups — see user journeys)",
      "Real-time visual updates",
    ],
  },
  {
    title: "Step 1 · People & dishes",
    items: [
      "Large tap targets for number selection",
      "Clear visual feedback on selection",
      "Step completes when both people count and dish frequency are selected",
    ],
  },
  {
    title: "Step 2 · Plan selection",
    items: [
      "Card-based plan options, full-width",
      "Clear visual hierarchy, tap-to-select",
      "Step completes on plan category selection",
      "Enables 'Next' CTA on completion",
      "Subscription selected by default — not part of progress bar. 1-week try-out offered as a selectable option.",
    ],
  },
  {
    title: "Step 3 · Delivery address",
    items: [
      "Mobile-optimised form layout with large, tappable input fields",
      "Clear mandatory field indicators",
      "Address validation with mobile-friendly error handling",
      "Delivery day selection via radio buttons — only available after all required fields are completed and validated",
      "Monday selected by default",
    ],
  },
  {
    title: "Step 4 · Payment details",
    items: [
      "Mobile-optimised payment input",
      "Touch-friendly credit card entry",
      "Real-time validation feedback",
      "Keyboard optimisations per input type",
    ],
  },
  {
    title: "Step 5 · Confirmation",
    items: [
      "Compact summary of all selections",
      "Any field can be edited from this step",
      "Confirmation requires reviewing all previous steps",
    ],
  },
];

export function UCookCaseStudy({ project, nextProject, prevProject }: UCookCaseStudyProps) {
  const [showModal, setShowModal] = useState(false);
  const [showAnnotations, setShowAnnotations] = useState(false);

  const closeModal = useCallback(() => setShowModal(false), []);
  const closeAnnotations = useCallback(() => setShowAnnotations(false), []);

  useEffect(() => {
    if (!showModal) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, [showModal, closeModal]);

  useEffect(() => {
    if (!showAnnotations) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeAnnotations(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, [showAnnotations, closeAnnotations]);

  return (
    <div>
    {/* Annotations overlay */}
    {showAnnotations && (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={closeAnnotations}>
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={closeAnnotations}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close annotations"
          >
            <X size={20} />
          </button>
        </div>
        <div
          className="h-full overflow-y-auto py-12 px-4 md:px-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-2xl mx-auto space-y-10">
            <div>
              <p className="text-xs text-white/40 font-medium uppercase tracking-widest mb-1">Developer annotations</p>
              <h2 className="text-xl font-bold text-white">Mobile Progress Bar Component</h2>
              <p className="text-sm text-white/50 mt-1">Visual design specifications</p>
            </div>
            {annotations.map((section, i) => (
              <div key={i}>
                <h3 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">{section.title}</h3>
                <div className="space-y-3">
                  {section.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-white/30 mt-[0.45rem] shrink-0" />
                      <p className="text-sm text-white/75 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

    {/* Modal */}
    {showModal && (
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={closeModal}>
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={closeModal}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close wireframes"
          >
            <X size={20} />
          </button>
        </div>
        <div
          className="h-full overflow-y-auto py-12 px-4 md:px-8"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-2xl mx-auto space-y-10">
            {wireframes.map((wf, i) => (
              <div key={i}>
                <div className="bg-white overflow-hidden">
                  <Image src={wf.src} alt={wf.alt} width={wf.w} height={wf.h} className="w-full h-auto" />
                </div>
                <p className="text-xs text-white/40 mt-3">{wf.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
    <div>
      {/* Hero */}
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
            Improving conversion by removing friction in the first user journey
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 mt-12">
            {[
              { label: "Role", value: project.role },
              { label: "Company", value: "Silvertree (UCOOK)" },
              { label: "Year", value: project.timeline },
              { label: "Methods", value: "Mixed methods" },
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

      {/* Key metrics */}
      <section className="bg-[#E2F5EF]">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-3 gap-px bg-[#09332C]/10">
            <div className="bg-[#E2F5EF] p-5 md:p-8 text-center">
              <p className="text-3xl md:text-5xl font-bold text-foreground/35">3.7%</p>
              <p className="text-xs text-foreground/70 font-medium uppercase tracking-widest mt-2">old completion rate</p>
            </div>
            <div className="bg-[#E2F5EF] p-5 md:p-8 text-center">
              <p className="text-3xl md:text-5xl font-bold text-[#F0531C]">9.3%</p>
              <p className="text-xs text-foreground/70 font-medium uppercase tracking-widest mt-2">new completion rate</p>
            </div>
            <div className="bg-[#E2F5EF] p-5 md:p-8 text-center">
              <p className="text-3xl md:text-5xl font-bold text-foreground/35">~R1.3M</p>
              <p className="text-xs text-foreground/70 font-medium uppercase tracking-widest mt-2">annual revenue at risk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-28">

        {/* Overview */}
        <section className="mb-20 md:mb-24">
          <p className="text-lg md:text-xl text-foreground font-medium leading-snug mb-8">
            UCOOK's sign-up flow was identified as a key drop-off point in the customer journey, directly impacting conversion and revenue. The goal was to reduce friction, improve clarity, and increase successful account creation on desktop.
          </p>
          <div className="grid grid-cols-2 gap-px bg-[#09332C]/10 mb-8">
            <div className="bg-[#FDFAF5] p-6 md:p-8">
              <p className="text-4xl md:text-6xl font-bold text-foreground/30 leading-none tabular-nums">60+</p>
              <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mt-4">Incomplete sign-ups per week</p>
            </div>
            <div className="bg-[#FDFAF5] p-6 md:p-8">
              <p className="text-4xl md:text-6xl font-bold text-foreground/30 leading-none tabular-nums">1.43%</p>
              <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mt-4">Retention through the sign-up path</p>
            </div>
          </div>
          <p className="text-base text-foreground/65">
            This was not on the roadmap. I initiated the investigation.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">The Problem</h2>
          </div>
          <p className="text-base text-foreground/75 leading-relaxed mb-8">
            Users were abandoning the sign-up process before completing account creation. Through initial data and internal feedback, we identified that:
          </p>
          <div className="space-y-5">
            {[
              "The flow felt long and unclear",
              "Users lacked confidence in what happens next",
              "Key decisions (plan, meals, delivery) were introduced too early and without context",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.45rem] shrink-0" />
                <p className="text-base text-foreground/85 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-foreground/55 mt-6 leading-relaxed">
            This created hesitation at the exact moment we needed commitment.
          </p>

          {/* Supporting data */}
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div>
              <h3 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-5">User pain</h3>
              <ul className="space-y-4">
                <li className="text-sm text-foreground/85 leading-relaxed">Users confused sign-up with account creation.</li>
                <li className="text-sm text-foreground/85 leading-relaxed">Could not find meals or navigate back.</li>
                <li className="text-sm text-foreground/85 leading-relaxed">Subscription vs on-demand was unclear.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs text-[#09332C]/60 font-medium uppercase tracking-widest mb-5">Business pain</h3>
              <ul className="space-y-4">
                <li className="text-sm text-foreground/85 leading-relaxed">60+ incomplete sign-ups per week.</li>
                <li className="text-sm text-foreground/85 leading-relaxed">~R1.3M/year revenue leaking through funnel.</li>
                <li className="text-sm text-foreground/85 leading-relaxed">56% of first billings 1–5 days post sign-up.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* My Role */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">My Role</h2>
          </div>
          <p className="text-base font-semibold text-foreground mb-6">Product Designer</p>
          <div className="space-y-4">
            {[
              "Led UX research and synthesis",
              "Conducted usability testing (moderated & unmoderated)",
              "Delivered interaction and UI redesign",
              "Defined scroll and interaction behaviour for dev handoff",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/25 mt-[0.45rem] shrink-0" />
                <p className="text-base text-foreground/85 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Goals */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Goals</h2>
          </div>
          <div className="space-y-6">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-5 md:gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-base text-foreground/85 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Constraints */}
        <section className="mb-20 md:mb-24 bg-white rounded-lg p-6 md:p-10">
          <h2 className="flex items-center gap-1.5 text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">
            <Icon name="warning_amber" size={13} />
            Constraints
          </h2>
          <div className="space-y-5">
            {[
              "No baseline funnel existed for testing.",
              "Billing logic was complex and misaligned with user mental models.",
              "Earlier payment introduced operational refund risk.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.4rem] shrink-0" />
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research & Insights */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Research & Insights</h2>
          </div>
          <p className="text-sm text-foreground/65 mb-8">We used a combination of:</p>

          <div className="space-y-0">
            {[
              { step: "01", title: "Customer service interviews", desc: "Tracked complaint categories. Flagged incomplete sign-ups." },
              { step: "02", title: "Internal survey (n=16)", desc: "55% flagged unclear communication. Sign-up scored 6/10." },
              { step: "03", title: "Competitive benchmarking", desc: "Marley Spoon, Taste Box, Hello Fresh. Clear step patterns." },
              { step: "04", title: "Heuristic evaluation", desc: "Nielsen's 10. Three theme clusters identified." },
              { step: "05", title: "Unmoderated testing (Maze)", desc: "Blocked. No defined happy path to test against." },
              { step: "06", title: "Moderated usability testing", desc: "Three sessions. Navigation and pricing clarity issues surfaced." },
              { step: "07", title: "Heatmaps & session recordings", desc: "Validated drop-off points and interaction patterns." },
            ].map((step, i, arr) => (
              <div key={step.step} className="flex gap-5 md:gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-foreground/35 font-bold flex-shrink-0 w-6 text-center pt-0.5">{step.step}</span>
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-7 md:pb-8">
                  <h3 className="text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-foreground/65 mt-1.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Heuristic Evaluation — Screenshots */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-2">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Heuristic Evaluation</h2>
          </div>
          <p className="text-sm text-foreground/65 mb-6">Nielsen&apos;s 10 heuristics — three theme clusters identified across the sign-up and reactivation flows.</p>
          <ImageLightbox
            images={[
              { src: "/ucook/heuristic-eval-1.png", alt: "Activate Now pop-up with no address associated error", caption: "When users clicked on \"Activate Now\" a pop-up appeared saying there is no address associated with this account and nothing happens beyond this — there’s no efficiency of use." },
              { src: "/ucook/heuristic-eval-2.png", alt: "Inconsistent global navigation during sign-up", caption: "Inconsistent navigation — global nav changes at least three times during the sign-up process, as well as inaccurate information, although this was flagged and fixed as a quick win." },
              { src: "/ucook/heuristic-eval-3.png", alt: "Order summary showing wrong configuration after phone verification", caption: "The system is broken and inaccurate — after phone number verification the order summary showed the wrong configuration." },
            ]}
          />
        </section>
        {/* Key Insights */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Key Insights</h2>
          </div>
          <div className="space-y-6">
            {[
              { headline: "Users didn't understand the journey upfront", detail: "\"What am I signing up for?\" was unclear early on" },
              { headline: "Too many decisions too soon", detail: "Cognitive overload before users felt invested" },
              { headline: "Weak sense of progress", detail: "Users couldn't tell how far they were or what remained" },
              { headline: "Trust gaps at critical moments", detail: "Pricing, commitment, and flexibility weren't communicated clearly" },
            ].map((insight, i) => (
              <div key={i} className="flex items-start gap-5 md:gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-base font-semibold text-foreground leading-snug">{insight.headline}</p>
                  <p className="text-sm text-foreground/65 mt-1">{insight.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Approach */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Design Approach</h2>
          </div>

          {/* Principle */}
          <div className="mb-10 border-l-2 border-[#09332C]/20 pl-6">
            <p className="text-xs text-foreground/45 font-medium uppercase tracking-widest mb-2">Guiding principle</p>
            <p className="text-lg md:text-xl font-bold text-[#09332C] leading-snug">
              Commitment should follow clarity, not precede it
            </p>
          </div>

          {/* Key Changes */}
          <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6">Key changes</h3>
          <div className="space-y-8">
            {[
              {
                title: "Restructured the flow",
                points: ["Moved low-friction steps first (email, basics)", "Delayed complex decisions until users were more invested"],
              },
              {
                title: "Introduced clear progression",
                points: ["Step-based flow with visible progress", "Reduced perceived effort"],
              },
              {
                title: "Simplified decision points",
                points: ["Chunked choices into smaller, manageable steps", "Added contextual guidance"],
              },
              {
                title: "Improved trust and transparency",
                points: ["Clear pricing breakdown", "Reinforced flexibility: skip or cancel anytime", "Reduced anxiety at checkout"],
              },
              {
                title: "Defined scroll & interaction behaviour",
                points: ["Eliminated hidden content", "Ensured key actions were always visible", "Reduced missed CTAs"],
              },
            ].map((change, i) => (
              <div key={i} className="flex items-start gap-5 md:gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-base font-semibold text-foreground mb-3">{change.title}</p>
                  <div className="space-y-2">
                    {change.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-foreground/25 mt-[0.5rem] shrink-0" />
                        <p className="text-sm text-foreground/70 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic option explored */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <LogoMark size={16} opacity={0.25} />
            <div>
              <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-1">Option considered</p>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">Pay on Sign Up</h2>
            </div>
          </div>
          <p className="text-base text-foreground/85 leading-relaxed mb-8 md:mb-10">
            <strong>Move payment to the start.</strong> Use the cart as the entry point. Auto-deduce customer profile from order.
          </p>

          {/* Flow */}
          <div className="mb-8 md:mb-10">
            <div className="grid grid-cols-3 gap-px bg-border rounded-lg overflow-hidden mb-px">
              {["Meal Kit Page", "Add to Cart", "Checkout"].map((step, i) => (
                <div key={step} className="bg-white p-4 md:p-5">
                  <p className="text-xs text-foreground/35 font-bold mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <p className="text-xs md:text-sm text-foreground/80">{step}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
              {[
                { label: "Address + Banking", step: 4 },
                { label: "Pay", step: 5, accent: true },
                { label: "Auto-profile", step: 6 },
              ].map(({ label, step, accent }) => (
                <div key={label} className={`p-4 md:p-5 ${accent ? "bg-[#E2F5EF]" : "bg-white"}`}>
                  <p className={`text-xs font-bold mb-2 ${accent ? "text-[#F0531C]" : "text-foreground/35"}`}>{String(step).padStart(2, "0")}</p>
                  <p className={`text-xs md:text-sm ${accent ? "text-foreground font-semibold" : "text-foreground/80"}`}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risks */}
          <div className="bg-white rounded-lg p-6 md:p-10">
            <p className="flex items-center gap-1.5 text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">
              <Icon name="warning_amber" size={13} />Risks identified
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-5 md:gap-6">
                <span className="text-xs text-[#F0531C]/30 font-bold mt-0.5 shrink-0">01</span>
                <p className="text-sm text-foreground/80 leading-relaxed">Subscription model not communicated before payment. Users commit without understanding recurring billing.</p>
              </div>
              <div className="flex items-start gap-5 md:gap-6">
                <span className="text-xs text-[#F0531C]/30 font-bold mt-0.5 shrink-0">02</span>
                <p className="text-sm text-foreground/80 leading-relaxed">Pause and cancel functionality unclear at point of commitment.</p>
              </div>
              <div className="flex items-start gap-5 md:gap-6">
                <span className="text-xs text-[#F0531C]/30 font-bold mt-0.5 shrink-0">03</span>
                <p className="text-sm text-foreground/80 leading-relaxed">Solves acquisition only. The retention problem remains unresolved.</p>
              </div>
              <div className="flex items-start gap-5 md:gap-6">
                <span className="text-xs text-[#F0531C]/30 font-bold mt-0.5 shrink-0">04</span>
                <p className="text-sm text-foreground/80 leading-relaxed">Order changes post-payment introduce refund risk. Reduced orders take 2+ days to reflect, creating billing confusion at the point of highest user trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Solution</h2>
          </div>

          <p className="text-base text-foreground/85 leading-relaxed mb-8 md:mb-10">
            <strong>Two workstreams.</strong> Quick wins shipped independently. <strong>The structural redesign tackled the funnel itself.</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-white p-6 md:p-8">
              <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">Quick wins</h3>
              <p className="text-sm text-foreground/65">Communication, navigation, UI clarity.</p>
            </div>
            <div className="bg-white p-6 md:p-8">
              <h3 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">Structural redesign</h3>
              <p className="text-sm text-foreground/65">Measurable funnel with payment decision.</p>
            </div>
          </div>

          {/* Journey map */}
          <div className="mt-12 md:mt-16 mb-12 md:mb-16">
            <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6">Revised user journeys</h3>
            <div className="border border-border rounded-lg overflow-hidden bg-[#E2F5EF]">
              {[
                ["Homepage", "Sign Up"],
                ["Homepage", "Sign Up", "Get Started"],
                ["Homepage", "Sign Up", "Meal Kits", "Get Started"],
                ["Homepage", "Let's Get Started"],
              ].map((steps, i, arr) => (
                <div key={i} className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-4 md:px-5 py-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex items-center gap-2 flex-wrap min-w-0">
                    {steps.map((step, j) => (
                      <React.Fragment key={j}>
                        <span className="text-sm text-foreground/90 font-medium">{step}</span>
                        <span className="text-foreground/30 text-xs">→</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs px-3 py-1.5 bg-[#09332C] text-white rounded font-medium">Plans</span>
                    <span className="text-foreground/30 text-xs">→</span>
                    <span className="text-xs px-3 py-1.5 bg-[#F0531C] text-white rounded font-medium">Activated</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground/65 mt-4">Four paths. One outcome. No dead ends.</p>
          </div>

          {/* Wireframes */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6">Wireframes</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {wireframes.map((wf, i) => (
                <div key={i} className="border border-border overflow-hidden bg-white aspect-[3/4]">
                  <Image src={wf.src} alt={wf.alt} width={wf.w} height={wf.h} className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 text-xs font-medium text-[#F0531C] hover:text-[#09332C]/60 transition-colors duration-200"
            >
              View wireframes
            </button>
          </div>

          {/* Live app screens */}
          <div className="mt-12 md:mt-16">
            <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-2">Live app screens</h3>
            <p className="text-xs text-foreground/45 mb-6">The redesigned funnel in production — 5 steps, single flow.</p>
            <div className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory">
              {[
                { src: "/ucook/app-screen-01.jpg", step: "1/5", label: "Entry" },
                { src: "/ucook/app-screen-02.jpg", step: "1/5", label: "Servings" },
                { src: "/ucook/app-screen-03.jpg", step: "2/5", label: "Pick a plan" },
                { src: "/ucook/app-screen-04.jpg", step: "3/5", label: "Delivery address" },
                { src: "/ucook/app-screen-05.jpg", step: "4/5", label: "Payment" },
                { src: "/ucook/app-screen-06.jpg", step: "5/5", label: "Confirm" },
                { src: "/ucook/app-screen-07.jpg", step: "✓", label: "Welcome" },
                { src: "/ucook/app-screen-08.jpg", step: "→", label: "Meal kit menu" },
              ].map((screen, i) => (
                <div key={i} className="flex-none w-[160px] md:w-[180px] snap-start">
                  <div className="rounded-xl overflow-hidden border border-border bg-white aspect-[9/19]">
                    <Image
                      src={screen.src}
                      alt={`${screen.label} — step ${screen.step}`}
                      width={540}
                      height={1140}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-foreground/30">{screen.step}</span>
                    <span className="text-[10px] text-foreground/55">{screen.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowAnnotations(true)}
              className="mt-4 text-xs font-medium text-[#F0531C] hover:text-[#09332C]/60 transition-colors duration-200"
            >
              View progress bar annotations
            </button>
          </div>

          <div className="mt-8 md:mt-10">
            <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6">Handoff specifications</h3>
            <div className="grid sm:grid-cols-2 gap-px bg-border">
              {[
                { title: "scrollIntoView()", desc: "Step transitions, error states." },
                { title: "Sticky header", desc: "Keeps users oriented during sign-up." },
                { title: "Form validation", desc: "Inline errors. Prevent incomplete submits." },
                { title: "Progress tracking", desc: "GTM triggers per funnel step." },
              ].map((spec) => (
                <div key={spec.title} className="bg-white p-5 md:p-6">
                  <p className="text-sm font-bold text-foreground">{spec.title}</p>
                  <p className="text-xs text-foreground/65 mt-1">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Outcome</h2>
          </div>

          <p className="text-base text-foreground/75 leading-relaxed mb-8">
            While final metrics are still being validated, early indicators showed:
          </p>

          <div className="space-y-4 mb-12">
            {[
              "Improved task completion in usability testing",
              "Reduced hesitation at key decision points",
              "Increased user confidence and clarity",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.45rem] shrink-0" />
                <p className="text-base text-foreground/85 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Funnel comparison */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 mb-12">
            {/* Old */}
            <div>
              <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-5 md:mb-6">Old funnel</h3>
              <div className="space-y-4">
                {[
                  { label: "Entered", users: 405, pct: 100 },
                  { label: "Step 2", users: 36, pct: 8.9 },
                  { label: "Completed", users: 15, pct: 3.7 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs text-foreground/65 mb-1">
                      <span>{row.label}</span>
                      <span>{row.users}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground/15 rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-bold text-foreground/35 mt-6">3.7%</p>
            </div>

            {/* New */}
            <div>
              <h3 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-5 md:mb-6">New funnel</h3>
              <div className="space-y-4">
                {[
                  { label: "Entered", users: 1994, pct: 100 },
                  { label: "Step 2", users: 499, pct: 25 },
                  { label: "Step 3", users: 236, pct: 11.8 },
                  { label: "Completed", users: 185, pct: 9.3 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs text-foreground/65 mb-1">
                      <span>{row.label}</span>
                      <span>{row.users}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-[#F0531C] rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-bold text-[#09332C]/60 mt-6">9.3%</p>
            </div>
          </div>

          {/* Net result */}
          <div className="border-t border-border pt-10">
            <p className="text-4xl md:text-5xl font-bold text-[#F0531C]">+5.6%</p>
            <p className="text-sm text-foreground/65 mt-2 max-w-lg">
              Absolute increase. Abandonment at the top of the funnel dropped from 91.1% to 75%. More users reached later stages.
            </p>
          </div>

          {/* ROI context */}
          <div className="border-t border-border pt-10 mt-10">
            <p className="text-4xl md:text-5xl font-bold text-[#F0531C]">~R255k</p>
            <p className="flex items-center gap-1.5 text-xs text-foreground/65 font-medium uppercase tracking-widest mt-2 mb-6">
              <Icon name="trending_up" size={13} />6-month redesign impact ROI · Aug 2025 – Jan 2026
            </p>
            <p className="text-sm text-foreground/50 leading-relaxed break-words">
              R405k × 63% (3.7% → 9.3%) = ~R255k
            </p>
          </div>

          {/* Pending */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="flex items-center gap-1.5 text-xs text-foreground/65 font-medium uppercase tracking-widest mb-4">
              <Icon name="pending" size={13} />Pending
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-foreground/65">Payment timing decision outcomes.</li>
              <li className="text-sm text-foreground/65">A/B testing results.</li>
              <li className="text-sm text-foreground/65">Post-release refund and billing impact.</li>
            </ul>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <LogoMark size={16} opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">What I Learned</h2>
          </div>
          <div className="space-y-6">
            {[
              "Users don't drop off because of one problem. It's cumulative friction.",
              "Clarity early in a journey is more valuable than persuasion",
              "Small interaction decisions (like scroll behaviour) have outsized impact",
            ].map((learning, i) => (
              <div key={i} className="flex items-start gap-5 md:gap-6">
                <span className="text-xs text-foreground/35 font-bold mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-base text-foreground/85 leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Navigation */}
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
