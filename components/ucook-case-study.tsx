"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Project } from "@/lib/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

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

export function UCookCaseStudy({ project, nextProject, prevProject }: UCookCaseStudyProps) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = useCallback(() => setShowModal(false), []);

  useEffect(() => {
    if (!showModal) return;
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", handleKey); };
  }, [showModal, closeModal]);

  return (
    <div>
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
      <section className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs text-foreground/40">{tag}</span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#09332C] tracking-tight mb-4 max-w-2xl">
            {project.title}
          </h1>
          <p className="text-lg text-foreground/55 max-w-xl leading-relaxed">
            Sign-up funnel redesign.
          </p>

          {/* Meta grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-14">
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-2">Role</p>
              <p className="text-sm text-foreground">{project.role}</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-2">Company</p>
              <p className="text-sm text-foreground">Silvertree (UCOOK)</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-2">Year</p>
              <p className="text-sm text-foreground">{project.timeline}</p>
            </div>
            <div className="bg-background p-6">
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-2">Methods</p>
              <p className="text-sm text-foreground">Mixed methods</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key metrics */}
      <section className="bg-white border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-px bg-border">
            <div className="bg-white p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-foreground/20">3.7%</p>
              <p className="text-xs text-foreground/55 font-medium uppercase tracking-widest mt-2">old completion rate</p>
            </div>
            <div className="bg-white p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#F0531C]">9.3%</p>
              <p className="text-xs text-foreground/55 font-medium uppercase tracking-widest mt-2">new completion rate</p>
            </div>
            <div className="bg-white p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-[#09332C]">~R1.3M</p>
              <p className="text-xs text-foreground/55 font-medium uppercase tracking-widest mt-2">annual revenue at risk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Opening */}
        <section className="mb-24">
          <p className="text-lg text-foreground leading-relaxed">
            Customer service data showed users completing what they believed was sign-up, then contacting support expecting deliveries.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.45rem] shrink-0" />
              <p className="text-lg text-foreground leading-relaxed">Over 60 incomplete sign-ups in one week.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.45rem] shrink-0" />
              <p className="text-lg text-foreground leading-relaxed">Retention through the path: 1.43%.</p>
            </div>
          </div>
          <p className="text-base text-foreground/50 mt-6">
            This was not on the roadmap. I initiated the investigation.
          </p>
        </section>

        {/* Problem */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">The Problem</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">User pain</h3>
              <ul className="space-y-6">
                <li className="text-sm text-foreground/70 leading-relaxed">Users confused sign-up with account creation.</li>
                <li className="text-sm text-foreground/70 leading-relaxed">Could not find meals or navigate back.</li>
                <li className="text-sm text-foreground/70 leading-relaxed">Subscription vs on-demand was unclear.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs text-[#09332C] font-medium uppercase tracking-widest mb-6">Business pain</h3>
              <ul className="space-y-6">
                <li className="text-sm text-foreground/70 leading-relaxed">60+ incomplete sign-ups per week.</li>
                <li className="text-sm text-foreground/70 leading-relaxed">~R1.3M/year revenue leaking through funnel.</li>
                <li className="text-sm text-foreground/70 leading-relaxed">56% of first billings 1–5 days post sign-up.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Goals</h2>
          <div className="space-y-6">
            {project.goals.map((goal, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-[#F0531C] font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Constraints */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <h2 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">Constraints</h2>
          <div className="space-y-5">
            {[
              "No baseline funnel existed for testing.",
              "Billing logic was complex and misaligned with user mental models.",
              "Earlier payment introduced operational refund risk.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] mt-[0.4rem] shrink-0" />
                <p className="text-sm text-foreground/65 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-4">Research</h2>
          <p className="text-sm text-foreground/40 mb-10">Seven stages. Mixed methods.</p>

          <div className="space-y-0">
            {[
              { step: "01", title: "Customer service interviews", desc: "Tracked complaint categories. Flagged incomplete sign-ups." },
              { step: "02", title: "Internal survey (n=16)", desc: "55% flagged unclear communication. Sign-up scored 6/10." },
              { step: "03", title: "Competitive benchmarking", desc: "Marley Spoon, Taste Box, Hello Fresh. Clear step patterns." },
              { step: "04", title: "Heuristic evaluation", desc: "Nielsen's 10. Three theme clusters identified." },
              { step: "05", title: "Unmoderated testing (Maze)", desc: "Blocked. No defined happy path to test against." },
              { step: "06", title: "Moderated usability testing", desc: "Three sessions. Navigation and pricing clarity issues surfaced." },
              { step: "07", title: "Measurement planning", desc: "Set up GTM triggers per funnel step. GA, PostHog, heatmaps." },
            ].map((step, i, arr) => (
              <div key={step.step} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-[#F0531C] font-bold flex-shrink-0 w-6 text-center pt-0.5">{step.step}</span>
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-sm font-bold text-[#09332C]">{step.title}</h3>
                  <p className="text-sm text-foreground/50 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key insight callout */}
        <section className="mb-24 border-l-2 border-[#F0531C] pl-6">
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-3">Critical finding</p>
          <p className="text-base text-[#09332C] font-bold leading-relaxed">
            All participants expected to pay immediately. Payment was the task completion signal.
          </p>
          <p className="text-sm text-foreground/50 mt-3">
            This single insight reshaped the solution.
          </p>
        </section>

        {/* Insights */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Insights</h2>
          <div className="space-y-6">
            {project.insights.map((insight, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-[#F0531C] font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{insight}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategic option explored */}
        <section className="mb-24">
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">Option considered</p>
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-4">Pay on Sign Up</h2>
          <p className="text-base text-foreground/70 leading-relaxed mb-10">
            Move payment to the start. Use the cart as the entry point. Auto-deduce customer profile from order.
          </p>

          {/* Flow */}
          <div className="mb-10">
            <div className="grid grid-cols-3 gap-px bg-border rounded-lg overflow-hidden mb-px">
              {["Meal Kit Page", "Add to Cart", "Checkout"].map((step, i) => (
                <div key={step} className="bg-white p-5">
                  <p className="text-xs text-[#F0531C] font-bold mb-2">{String(i + 1).padStart(2, "0")}</p>
                  <p className="text-sm text-foreground/60">{step}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-px bg-border rounded-lg overflow-hidden">
              {[
                { label: "Address + Banking", step: 4 },
                { label: "Pay", step: 5, accent: true },
                { label: "Auto-profile", step: 6 },
              ].map(({ label, step, accent }) => (
                <div key={label} className={`p-5 ${accent ? "bg-[#F0531C]/5" : "bg-background"}`}>
                  <p className={`text-xs font-bold mb-2 ${accent ? "text-[#F0531C]/30" : "text-foreground/20"}`}>{String(step).padStart(2, "0")}</p>
                  <p className={`text-sm ${accent ? "text-[#F0531C]/60" : "text-foreground/60"}`}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Risks */}
          <div className="bg-white rounded-lg p-8 md:p-10">
            <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-8">Risks identified</p>
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                <span className="text-xs text-[#F0531C]/30 font-bold mt-0.5">01</span>
                <p className="text-sm text-foreground/65 leading-relaxed">Subscription model not communicated before payment. Users commit without understanding recurring billing.</p>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-xs text-[#F0531C]/30 font-bold mt-0.5">02</span>
                <p className="text-sm text-foreground/65 leading-relaxed">Pause and cancel functionality unclear at point of commitment.</p>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-xs text-[#F0531C]/30 font-bold mt-0.5">03</span>
                <p className="text-sm text-foreground/65 leading-relaxed">Solves acquisition only. The retention problem remains unresolved.</p>
              </div>
              <div className="flex items-start gap-6">
                <span className="text-xs text-[#F0531C]/30 font-bold mt-0.5">04</span>
                <p className="text-sm text-foreground/65 leading-relaxed">Order changes post-payment introduce refund risk. Reduced orders take 2+ days to reflect — creating billing confusion at the point of highest user trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Solution</h2>

          <p className="text-base text-foreground/70 leading-relaxed mb-10">
            Two workstreams. Quick wins shipped independently. The structural redesign tackled the funnel itself.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-border">
            <div className="bg-white p-8">
              <h3 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-4">Quick wins</h3>
              <p className="text-sm text-foreground/50">Communication, navigation, UI clarity.</p>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-4">Structural redesign</h3>
              <p className="text-sm text-foreground/50">Measurable funnel with payment decision.</p>
            </div>
          </div>

          {/* Journey map */}
          <div className="mt-16 mb-16">
            <h3 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-6">Revised user journeys</h3>
            <div className="border border-border rounded-lg overflow-hidden">
              {[
                ["Homepage", "Sign Up"],
                ["Homepage", "Sign Up", "Get Started"],
                ["Homepage", "Sign Up", "Meal Kits", "Get Started"],
                ["Homepage", "Let's Get Started"],
              ].map((steps, i, arr) => (
                <div key={i} className={`flex items-center justify-between gap-4 px-5 py-4 ${i < arr.length - 1 ? "border-b border-border" : ""}`}>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {steps.map((step, j) => (
                      <React.Fragment key={j}>
                        <span className="text-xs text-foreground/40">{step}</span>
                        <span className="text-foreground/15 text-xs">→</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-xs px-3 py-1.5 bg-[#09332C] text-[#F7EDDA]/70 rounded font-medium">Plans</span>
                    <span className="text-foreground/15 text-xs">→</span>
                    <span className="text-xs px-3 py-1.5 border border-[#F0531C]/25 text-[#F0531C] rounded font-medium">Activated</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-foreground/25 mt-4">Four paths. One outcome. No dead ends.</p>
          </div>

          {/* Wireframes */}
          <div className="mt-16">
            <h3 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-6">Wireframes</h3>
            <div className="grid grid-cols-4 gap-3">
              {wireframes.map((wf, i) => (
                <div key={i} className="border border-border overflow-hidden bg-white aspect-[3/4]">
                  <Image src={wf.src} alt={wf.alt} width={wf.w} height={wf.h} className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 text-xs font-medium text-[#F0531C] hover:text-[#09332C] transition-colors duration-200"
            >
              View wireframes
            </button>
          </div>

          <div className="mt-10">
            <h3 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-6">Handoff specifications</h3>
            <div className="grid sm:grid-cols-2 gap-px bg-border">
              {[
                { title: "scrollIntoView()", desc: "Step transitions, error states." },
                { title: "Sticky header", desc: "Keeps users oriented during sign-up." },
                { title: "Form validation", desc: "Inline errors. Prevent incomplete submits." },
                { title: "Progress tracking", desc: "GTM triggers per funnel step." },
              ].map((spec) => (
                <div key={spec.title} className="bg-white p-6">
                  <p className="text-sm font-mono font-bold text-[#09332C]">{spec.title}</p>
                  <p className="text-xs text-foreground/40 mt-1">{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Results</h2>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Old */}
            <div>
              <h3 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-6">Old funnel</h3>
              <div className="space-y-4">
                {[
                  { label: "Entered", users: 405, pct: 100 },
                  { label: "Step 2", users: 36, pct: 8.9 },
                  { label: "Completed", users: 15, pct: 3.7 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs text-foreground/30 mb-1">
                      <span>{row.label}</span>
                      <span>{row.users}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-foreground/15 rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-3xl font-bold text-foreground/20 mt-6">3.7%</p>
            </div>

            {/* New */}
            <div>
              <h3 className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">New funnel</h3>
              <div className="space-y-4">
                {[
                  { label: "Entered", users: 1994, pct: 100 },
                  { label: "Step 2", users: 499, pct: 25 },
                  { label: "Step 3", users: 236, pct: 11.8 },
                  { label: "Completed", users: 185, pct: 9.3 },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex justify-between text-xs text-foreground/30 mb-1">
                      <span>{row.label}</span>
                      <span>{row.users}</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-[#F0531C] rounded-full" style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-3xl font-bold text-[#09332C] mt-6">9.3%</p>
            </div>
          </div>

          {/* Net result */}
          <div className="border-t border-border pt-10">
            <p className="text-4xl md:text-5xl font-bold text-[#F0531C]">+5.6%</p>
            <p className="text-sm text-foreground/50 mt-2 max-w-lg">
              Absolute increase. Abandonment at the top of the funnel dropped from 91.1% to 75%. More users reached later stages.
            </p>
          </div>

          {/* ROI context */}
          <div className="border-t border-border pt-10 mt-10">
            <p className="text-4xl md:text-5xl font-bold text-[#F0531C]">~R255k</p>
            <p className="text-sm text-foreground/50 mt-2 max-w-lg">
              6-month ROI (Aug–Jan). 10% of users who started sign-up completed it — constituting 100% of new clients and R405k in revenue. The old funnel at 3.7% would have captured only 37% of that cohort. The redesign unlocked the remaining 63%.
            </p>
          </div>

          {/* Pending */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-4">Pending</h3>
            <ul className="space-y-2">
              <li className="text-sm text-foreground/40">Payment timing decision outcomes.</li>
              <li className="text-sm text-foreground/40">A/B testing results.</li>
              <li className="text-sm text-foreground/40">Post-release refund and billing impact.</li>
            </ul>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#09332C] tracking-tight mb-10">Reflection</h2>
          <div className="space-y-6">
            {project.learnings.map((learning, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-[#F0531C] font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{learning}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Navigation */}
      <div className="border-t border-border">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="flex justify-between">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-3 text-foreground/30 hover:text-foreground transition-colors duration-200"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
                <div>
                  <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest">Previous</p>
                  <p className="text-sm text-foreground group-hover:text-[#F0531C] transition-colors duration-200">{prevProject.title}</p>
                </div>
              </Link>
            ) : <div />}
            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-3 text-foreground/30 hover:text-foreground transition-colors duration-200 text-right"
              >
                <div>
                  <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest">Next</p>
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