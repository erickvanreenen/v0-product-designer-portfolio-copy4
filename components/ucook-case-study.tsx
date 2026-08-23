"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/projects";
import { ImageLightbox } from "@/components/image-lightbox";
import { ModelComplexity } from "@/components/ucook-model-complexity";
import {
  ExpectationGap, FunnelComparison, DeadEnd, ShiftingNav, StateMismatch,
} from "@/components/case/diagrams";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Findings, Metrics, Compare, Steps, Pullquote,
  Outcome, Reflection, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const wireframes = [
  { src: "/images/ucook-wf-signup-flow.png", alt: "Full sign-up flow wireframe showing the six-step funnel", caption: "The full funnel. Six steps, one page." },
  { src: "/images/ucook-wf-address.png", alt: "Delivery address step with Google Places lookup", caption: "Delivery address. Validation before the delivery-day choice unlocks." },
  { src: "/images/ucook-wf-payment.png", alt: "Payment details step with R1 verification note", caption: "Payment details. The step that makes finishing feel like finishing." },
  { src: "/images/ucook-wf-confirmation.png", alt: "Confirmation page reviewing payment, address, and delivery", caption: "Confirmation. Every field editable before activation." },
];

const appScreens = [
  { src: "/ucook/app-screen-01.jpg", step: "1/5", label: "Entry" },
  { src: "/ucook/app-screen-02.jpg", step: "1/5", label: "Servings" },
  { src: "/ucook/app-screen-03.jpg", step: "2/5", label: "Pick a plan" },
  { src: "/ucook/app-screen-04.jpg", step: "3/5", label: "Delivery address" },
  { src: "/ucook/app-screen-05.jpg", step: "4/5", label: "Payment" },
  { src: "/ucook/app-screen-06.jpg", step: "5/5", label: "Confirm" },
  { src: "/ucook/app-screen-07.jpg", step: "done", label: "Welcome" },
  { src: "/ucook/app-screen-08.jpg", step: "next", label: "Meal kit menu" },
];

const progressBarSpec = [
  { title: "Visual design", items: ["Circular progress indicator", "Colour scheme matching the mobile app design system"] },
  { title: "Initial state", items: ["Hidden by default", "Triggered after the first interaction in the sign-up flow", "Appears with a soft fade-in"] },
  { title: "Persistent behaviour", items: ["Sticky at the top of the mobile viewport", "Visible throughout the whole sign-up process", "Lightweight and non-intrusive"] },
  { title: "Progress tracking", items: ["Circular segments for the five sign-up steps", "Current step highlighted in the primary colour", "Completed steps filled, upcoming steps outlined", "Independent step completion tracking", "Non-sequential completion allowed, which accounts for partial and abandoned sign-ups", "Real-time visual updates"] },
  { title: "Step 1 · People and dishes", items: ["Large tap targets for number selection", "Clear visual feedback on selection", "Completes when both people count and dish frequency are chosen"] },
  { title: "Step 2 · Plan selection", items: ["Full-width card-based plan options", "Clear visual hierarchy, tap to select", "Completes on plan category selection and enables the Next CTA", "Subscription selected by default and kept out of the progress bar. A one-week try-out is offered as a selectable option."] },
  { title: "Step 3 · Delivery address", items: ["Mobile-optimised form with large, tappable inputs", "Clear mandatory field indicators", "Address validation with mobile-friendly error handling", "Delivery day selection unlocks only once required fields validate", "Monday selected by default"] },
  { title: "Step 4 · Payment details", items: ["Mobile-optimised payment input", "Touch-friendly credit card entry", "Real-time validation feedback", "Keyboard optimisations per input type"] },
  { title: "Step 5 · Confirmation", items: ["Compact summary of every selection", "Any field editable from this step", "Confirmation requires reviewing all previous steps"] },
];

export function UCookCaseStudy({ project, nextProject, prevProject }: Props) {
  const [specOpen, setSpecOpen] = useState(false);

  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Client", value: "UCOOK, via Silvertree" },
          { label: "Year", value: "2025" },
          { label: "Origin", value: "Self-initiated" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Lead>
            Customer service kept logging the same call. People were waiting for meal boxes
            against subscriptions that had never activated.
          </Lead>
          <div className="mt-10">
            <Metrics
              items={[
                { value: "60+", label: "incomplete sign-ups", note: "In a single week" },
                { value: "1.43%", label: "retention through sign-up" },
                { value: "56%", label: "of first billings", note: "Landed 1 to 5 days after sign-up" },
                { value: "~R1.3m", label: "a year", note: "Revenue leaking through the funnel", lead: true },
              ]}
            />
          </div>
          <div className="mt-10">
            <Prose>
              <p>
                This was not on the roadmap. I started looking because the pattern in the
                complaints did not match the pattern in the data, and that gap usually means
                the interface is telling people something untrue.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="The gap"
          title="They thought they had finished"
          intro="Every test participant expected to pay immediately. Payment is what completion feels like. In the old flow it arrived days later, so the moment they left the screen there was nothing to tell them otherwise."
        >
          <Figure caption="Sign-up completion against actual first billing">
            <ExpectationGap />
          </Figure>
        </Section>

        <Section label="The problem" title="What it looked like from each side" wide>
          <Compare
            before={{
              label: "User pain",
              body: "Hesitation at the moment the flow needed commitment.",
              notes: [
                "Sign-up was confused with simple account creation",
                "Meals could not be found, and there was no way back a step",
                "Subscription against on-demand ordering was unclear",
                "Plan, meals, and delivery decisions arrived early and without context",
              ],
            }}
            after={{
              label: "Business pain",
              body: "A measurable revenue problem with no measurement in place.",
              notes: [
                "Over 60 incomplete sign-ups in a single week",
                "Roughly R1.3m a year leaking through the funnel",
                "56% of first billings landed 1 to 5 days after sign-up",
                "No defined baseline funnel, so nothing could be tested against it",
              ],
            }}
          />
        </Section>

        <Section
          label="Constraints"
          title="Why payment could not simply move"
          intro="The obvious fix is to charge at sign-up. Delivery and billing run on different cycles that do not align, and that mismatch is where the expectation gap comes from."
        >
          <Figure>
            <ModelComplexity />
          </Figure>
          <div className="mt-10">
            <Prose>
              <p>
                Billing logic was complex and did not match the user&apos;s mental model. Moving
                payment earlier brought a refund risk, because reduced orders take more than
                two days to reflect. That creates billing confusion at the point of highest
                user trust.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="Research"
          title="Seven ways of asking the same question"
          intro="Mixed methods, because a single source would not have survived the roadmap conversation. Qualitative told me what was happening, quantitative told me how much of it there was."
        >
          <Steps
            items={[
              { title: "Customer service interviews", body: "Tracked complaint categories and flagged incomplete sign-ups." },
              { title: "Internal survey, 16 respondents", body: "55% flagged unclear communication. Sign-up scored 6 out of 10." },
              { title: "Competitive benchmarking", body: "Marley Spoon, Taste Box, Hello Fresh. All use clear step patterns." },
              { title: "Heuristic evaluation", body: "Against Nielsen's 10. Findings clustered into three themes." },
              { title: "Unmoderated testing in Maze", body: "Blocked. There was no defined happy path to test against." },
              { title: "Moderated usability testing", body: "Three sessions. Navigation and pricing clarity issues surfaced." },
              { title: "Heatmaps and session recordings", body: "Validated the drop-off points and interaction patterns." },
              { title: "Measurement planning", body: "Tag Manager triggers defined across each step of the funnel." },
            ]}
          />
        </Section>

        <Section
          label="Evidence"
          title="Heuristic evaluation"
          intro="Nielsen's 10 heuristics across the sign-up and reactivation flows. Three theme clusters came out of it: communication, navigation, and UI optimisation."
        >
          {/*
            The findings, drawn rather than screenshotted. Each is tagged with
            the theme cluster it fed, so the three pictures and the three
            clusters named above are visibly the same three things.
          */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-5">
            {[
              {
                cluster: "UI optimisation",
                Visual: DeadEnd,
                finding: "Clicking Activate Now returned a no-address-associated error, and nothing happened beyond it. No efficiency of use.",
              },
              {
                cluster: "Navigation",
                Visual: ShiftingNav,
                finding: "Global navigation changed at least three times during sign-up, alongside inaccurate information. Flagged and fixed as a quick win.",
              },
              {
                cluster: "Communication",
                Visual: StateMismatch,
                finding: "After phone verification, the order summary showed the wrong configuration.",
              },
            ].map(({ cluster, Visual, finding }) => (
              <figure key={cluster} className="flex flex-col">
                <div className="bg-surface border border-line p-4 md:p-5">
                  <Visual />
                </div>
                <figcaption className="mt-4">
                  <span className="t-label text-accent">{cluster}</span>
                  <p className="text-[14px] text-ink/65 leading-relaxed mt-2">{finding}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section label="Insights" title="Four things that decided the redesign">
          <Findings
            label="Synthesis"
            items={[
              { head: "Users did not understand the journey upfront", body: "\"What am I signing up for?\" was unclear from the start." },
              { head: "Too many decisions, too soon", body: "Cognitive overload arrived before users felt invested." },
              { head: "Weak sense of progress", body: "No way to tell how far in they were, or what remained." },
              { head: "Trust gaps at the critical moments", body: "Pricing, commitment, and flexibility were not communicated clearly." },
            ]}
          />
        </Section>

        <Section>
          <Pullquote attribution="The principle everything else was measured against">
            Commitment should follow clarity, not precede it.
          </Pullquote>
        </Section>

        <Section label="Design" title="What changed">
          <Steps
            items={[
              { title: "Restructured the flow", body: "Low-friction steps first. Complex decisions delayed until users were more invested." },
              { title: "Introduced clear progression", body: "A step-based flow with visible progress, which reduces perceived effort." },
              { title: "Simplified decision points", body: "Choices chunked into smaller steps with contextual guidance." },
              { title: "Improved trust and transparency", body: "Clear pricing breakdown, and flexibility reinforced. Skip or cancel anytime." },
              { title: "Defined scroll and interaction behaviour", body: "No hidden content. Key actions always visible, so CTAs stop being missed." },
              { title: "Made payment the finish line", body: "A definitive payment action at the end, matching what every participant already expected." },
            ]}
          />
        </Section>

        <Section
          label="Option considered"
          title="Pay on sign-up"
          intro="Move payment to the start, use the cart as the entry point, and deduce the customer profile from the order. I worked it through, and here is why it was not the answer."
        >
          <div className="grid grid-cols-3 sm:grid-cols-6 border-t border-l border-line mb-10">
            {[
              "Meal kit page", "Add to cart", "Checkout",
              "Address and banking", "Pay", "Auto-profile",
            ].map((step, i) => (
              <div
                key={step}
                className={`border-r border-b border-line p-4 ${i === 4 ? "bg-accent-wash" : "bg-surface"}`}
              >
                <p className={`t-num text-xs mb-2 ${i === 4 ? "text-accent" : "text-ink/35"}`}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className={`text-[13px] leading-snug ${i === 4 ? "text-ink font-semibold" : "text-ink/70"}`}>
                  {step}
                </p>
              </div>
            ))}
          </div>

          <Findings
            label="Why it was rejected"
            items={[
              { head: "The subscription model is not communicated before payment", body: "Users commit without understanding recurring billing." },
              { head: "Pause and cancel are unclear at the point of commitment", body: "The moment that most needs reassurance offers the least." },
              { head: "It solves acquisition only", body: "The retention problem stays exactly where it was." },
              { head: "Post-payment order changes introduce refund risk", body: "Reduced orders take more than two days to reflect, creating billing confusion at the point of highest trust." },
            ]}
          />
        </Section>

        <Section
          label="Solution"
          title="Two workstreams"
          intro="Quick wins shipped independently while the structural work ran. Separating them meant the obvious fixes did not wait on the harder decision about payment timing."
        >
          <Compare
            before={{
              label: "Quick wins",
              body: "Communication, navigation, and UI clarity. Shipped as they were found.",
            }}
            after={{
              label: "Structural redesign",
              body: "A measurable funnel with a definitive payment action at the end.",
            }}
          />

          <div className="mt-14">
            <h3 className="t-h2 text-2xl text-ink mb-2">Four entry paths, one outcome</h3>
            <p className="text-[15px] text-ink/60 mb-8 measure">
              Users arrive at sign-up from different places. Every path now resolves to the same
              activated state, with no dead ends along the way.
            </p>
            <div className="border-t border-line">
              {[
                ["Homepage", "Sign up"],
                ["Homepage", "Sign up", "Get started"],
                ["Homepage", "Sign up", "Meal kits", "Get started"],
                ["Homepage", "Let's get started"],
              ].map((steps, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-4 border-b border-line"
                >
                  <div className="flex items-center gap-2 flex-wrap min-w-0">
                    {steps.map((step, j) => (
                      <React.Fragment key={j}>
                        <span className="text-[14px] text-ink/80">{step}</span>
                        <span className="text-ink/25 text-xs">→</span>
                      </React.Fragment>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="t-label px-2.5 py-1 bg-ink text-paper">Plans</span>
                    <span className="text-ink/25 text-xs">→</span>
                    <span className="t-label px-2.5 py-1 bg-accent text-white">Activated</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section label="Wireframes" title="The funnel, drawn">
          <ImageLightbox images={wireframes} cols={2} contain />
        </Section>

        <Section
          label="In production"
          title="The redesigned funnel, shipped"
          intro="Five steps in a single flow. These are live app screens, not mockups."
        >
          <div className="flex gap-3 overflow-x-auto pb-4 snap-x">
            {appScreens.map((screen) => (
              <figure key={screen.src} className="flex-none w-[136px] snap-start">
                <div className="overflow-hidden border border-line bg-surface aspect-[9/19] relative">
                  <Image
                    src={screen.src}
                    alt={`${screen.label}, step ${screen.step}`}
                    fill
                    sizes="136px"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-2 flex items-baseline gap-1.5">
                  <span className="t-num text-[10px] text-accent shrink-0">{screen.step}</span>
                  <span className="text-[11px] text-ink/55 truncate">{screen.label}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <Section
          label="Handoff"
          title="Specs developers can build from"
          intro="Annotated prototypes with the interaction detail written down, so the behaviour is decided in design rather than discovered in build."
        >
          <div className="grid sm:grid-cols-2 border-t border-l border-line mb-10">
            {[
              { title: "scrollIntoView()", desc: "Step transitions and error states." },
              { title: "Sticky header", desc: "Keeps users oriented throughout sign-up." },
              { title: "Form validation", desc: "Inline errors that prevent incomplete submits." },
              { title: "Progress tracking", desc: "GTM triggers on each funnel step." },
            ].map((spec) => (
              <div key={spec.title} className="border-r border-b border-line p-5 md:p-6 bg-surface">
                <p className="font-mono text-[14px] font-semibold text-ink">{spec.title}</p>
                <p className="text-[14px] text-ink/60 mt-1.5">{spec.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setSpecOpen((v) => !v)}
            aria-expanded={specOpen}
            className="t-label text-accent hover:underline underline-offset-4 py-2.5 -my-2.5 inline-block"
          >
            {specOpen ? "Hide" : "Read"} the progress bar component spec
          </button>

          {specOpen && (
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
              {progressBarSpec.map((s) => (
                <div key={s.title} className="border-r border-b border-line p-5 bg-surface">
                  <h3 className="t-label text-accent mb-4">{s.title}</h3>
                  <ul className="space-y-2.5">
                    {s.items.map((it) => (
                      <li key={it} className="text-[13px] text-ink/65 leading-relaxed flex gap-2.5">
                        <span className="mt-[7px] w-1 h-1 shrink-0 rounded-full bg-ink/25" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </Section>

        <Section label="Result" title="What moved">
          <FunnelComparison />

          <div className="grid sm:grid-cols-2 gap-10 mt-14">
            <div>
              <p className="t-num text-5xl md:text-6xl font-semibold text-accent leading-none">+5.6%</p>
              <p className="t-label text-ink/45 mt-5">Absolute increase in completion</p>
              <p className="text-[15px] text-ink/60 leading-relaxed mt-3">
                Top-of-funnel abandonment dropped from 91.1% to 75%, so more users reached
                the later stages.
              </p>
            </div>
            <div>
              <p className="t-num text-5xl md:text-6xl font-semibold text-accent leading-none">~R255k</p>
              <p className="t-label text-ink/45 mt-5">Six-month impact, Aug 2025 to Jan 2026</p>
              <p className="text-[15px] text-ink/60 leading-relaxed mt-3">
                R405k × 63%, the relative lift from 3.7% to 9.3%.
              </p>
            </div>
          </div>

          <div className="mt-14 pt-10 border-t border-line">
            <p className="t-label text-ink/40 mb-5">Still open</p>
            <ul className="space-y-2.5">
              {[
                "Payment timing decision outcomes",
                "A/B testing results",
                "Post-release refund and billing impact",
              ].map((p) => (
                <li key={p} className="text-[15px] text-ink/60 flex gap-3">
                  <span className="mt-[9px] w-1 h-1 shrink-0 rounded-full bg-ink/30" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Outcome>
          <p>
            Completion went from 3.7% to 9.3%. The old funnel saw 405 users enter step 1 with
            91.1% abandoning. The new funnel had 1,994 enter with abandonment down to 75%.
          </p>
        </Outcome>

        <Reflection
          items={[
            "Users do not drop off because of one problem. It is cumulative friction",
            "Clarity early in a journey is worth more than persuasion later",
            "Small interaction decisions, scroll behaviour included, matter more than you would think",
            "Self-initiated research can move a roadmap, if you bring the numbers with you",
          ]}
        />
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
