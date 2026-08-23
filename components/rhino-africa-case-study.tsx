"use client";

import { Project } from "@/lib/projects";
import { Icon } from "@/components/material-icon";
import {
  SearchShiftDiagram,
  GeoLayerStack,
  PlatformIADiagram,
  MultilingualBreakDiagram,
  CompetitorMatrix,
  FaqBeforeAfter,
  GeoSignals,
} from "@/components/rhino-geo-diagrams";
import {
  CaseShell, CaseHero, Premise, CaseBody, Section, Figure,
  Prose, Lead, Findings, Metrics, Steps, Pullquote,
  Outcome, Reflection, CaseNav,
} from "@/components/case/parts";

interface Props {
  project: Project;
  nextProject?: Project;
  prevProject?: Project;
}

const personas = [
  { key: "A", name: "The Bucket-Lister", profile: "Affluent, 50+, often couples", need: "Hand-holding and education. They do not know where to start.", primary: true },
  { key: "B", name: "The Milestone Celebrator", profile: "Honeymoon and anniversary travellers", need: "To feel special and seen. Formulaic responses break trust.", primary: false },
  { key: "C", name: "The Experienced Repeat Traveller", profile: "Has visited Africa four or more times", need: "Depth and credibility. They come to go deeper.", primary: false },
  { key: "D", name: "The Family Organiser", profile: "Parent planning a first family trip", need: "Confidence and simplicity. Decision paralysis is high.", primary: false },
  { key: "E", name: "The Solo Adventurer", profile: "Solo traveller, a growing segment", need: "Autonomy with support. Guidance without being managed.", primary: false },
];

const opportunities = [
  { title: "Aspiration-first planning", body: "Only one competitor attempts experience-led discovery. Starting with how you want to feel maps to how luxury travellers actually begin planning, and it is largely unoccupied." },
  { title: "Transparent enquiry process", body: "The anxiety of what happens after clicking Enquire is unaddressed by five of six competitors. A clear three-step human process reduces drop-off before first contact." },
  { title: "Modern technical foundation", body: "Three of six run WordPress. A headless or Next.js architecture delivers speed, personalisation headroom, and SEO advantages that compound, and are perceptible to users calibrated to the best of the web." },
  { title: "Itinerary visualisation", body: "No competitor offers an interactive itinerary builder or shareable journey map. Once a user is in consultation, a living collaborative plan is the highest-impact investment available in this space." },
];

const implications = [
  { icon: "person", title: "Surface the consultant early", body: "It is the product, not a support feature. Across all five persona buckets, the named human relationship drives trust, conversion, and review." },
  { icon: "verified", title: "Distribute trust signals", body: "Awards, press, named consultants, and testimonials belong at every decision point, not quarantined on dedicated pages." },
  { icon: "bolt", title: "Remove friction from enquiry", body: "One clear step, not a form. High-net-worth users have money and no patience for doubt." },
  { icon: "language", title: "Extend multilingual continuity", body: "Language must carry from the blog through to the enquiry form. Discovery and conversion cannot speak different languages." },
  { icon: "map", title: "Add a spatial orientation layer", body: "For a platform that sells geography as the product, a map-based entry point is a structural gap, not a feature request." },
  { icon: "tune", title: "Build personalisation cues", body: "Every touchpoint should signal the user is known and their trip is being considered individually." },
];

export function RhinoAfricaCaseStudy({ project, nextProject, prevProject }: Props) {
  return (
    <CaseShell project={project}>
      <CaseHero
        project={project}
        meta={[
          { label: "Role", value: "UX Architect" },
          { label: "Subject", value: "Rhino Africa" },
          { label: "Year", value: "June 2026" },
          { label: "Methods", value: "IA, GEO, benchmarking" },
        ]}
      />

      <Premise question={project.question} answer={project.answer} />

      <CaseBody>
        <Section>
          <Lead>
            Generative Engine Optimisation is widely treated as a content problem. It is not.
            It is an information architecture problem that gets filed under content marketing.
          </Lead>
          <div className="mt-8">
            <Prose>
              <p>
                Rhino Africa is Africa&apos;s most awarded safari company. Over 5,300 Trustpilot
                reviews at a 5.0 rating, destination coverage across twelve African countries,
                and a consultant relationship customers name personally in almost every review.
                The authority is real and hard-won.
              </p>
              <p>
                Authority a machine cannot read is authority that does not exist. This project
                maps the platform as a system, establishes how AI agents actually extract and
                attribute expertise, and architects the hierarchy that makes it legible.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="Why now"
          title="Ranking gets you on the list. Structure gets you in the answer."
          intro="Search behaviour is shifting from scanning results to reading answers. Perplexity, ChatGPT Search, and Google AI Overviews synthesise a response and cite two or three sources. The economics of visibility change completely."
        >
          <Figure caption="Ten ranked results against one synthesised answer with three citations">
            <SearchShiftDiagram />
          </Figure>
          <div className="mt-10">
            <Prose>
              <p>
                In the old model, being on page one gave you a chance. In the new one, being
                structurally legible determines whether you are in the answer at all. The
                competition is no longer for attention. It is for extraction.
              </p>
            </Prose>
          </div>
        </Section>

        <Section
          label="Method"
          title="Understand the ecosystem before touching a page"
          intro="Before designing anything I need to know where a feature or page lives inside the system, and what depends on what. Only then does a page-level decision become defensible."
        >
          <Steps
            items={[
              { title: "Platform information architecture", body: "Map the system. How information is organised, how it flows, and where the seams are." },
              { title: "GEO performance analysis", body: "Taxonomy depth, locale declarations, multilingual continuity, spatial orientation." },
              { title: "Persona research", body: "Conversation mining across six review platforms and the client feedback page." },
              { title: "HNW consumer behaviour", body: "Behavioural psychology and conversion patterns specific to the luxury segment." },
              { title: "Competitive benchmarking", body: "Six competitors, five UX dimensions, consistently scored." },
            ]}
          />
        </Section>

        <Section
          label="The system"
          title="Six pillars, one destination"
          intro="Everything funnels toward the human Travel Expert relationship. The platform is fundamentally a content-to-conversion machine, and the blog runs on a separate subdomain that mirrors the main taxonomy."
        >
          <Figure caption="Platform IA, with the WordPress blog subdomain marked as the seam">
            <PlatformIADiagram />
          </Figure>

          <div className="mt-12">
            <Findings
              label="Three structural facts"
              items={[
                { head: "The blog is a separate system", body: "It runs on a WordPress subdomain, mirrors the main taxonomy, and cross-links back. Critical top-of-funnel value, and a content consistency risk." },
                { head: "Tours and Destinations are entangled", body: "Tours are multi-destination packages, and destination pages surface relevant tours. Any IA work has to start with this relationship." },
                { head: "Trust content is conversion infrastructure", body: "About Us, Price Guarantee, Client Feedback, and Financial Protection sit close to the booking funnel by design. They are not reference material." },
              ]}
            />
          </div>
        </Section>

        <Section
          label="Findings"
          title="Where it breaks"
          intro="The platform does a great deal well. Destination taxonomy runs genuinely deep, down to reserve level, so Sabi Sand sits beneath Kruger Private Game Reserve rather than under South Africa. Users can arrive at country, region, or park level depending on how specific their intent is."
        >
          <Metrics
            items={[
              { value: "5", label: "blog languages" },
              { value: "2", label: "locale alternates", note: "On the main site" },
              { value: "1", label: "enquiry form language", lead: true },
              { value: "0", label: "map-based entry points" },
            ]}
          />

          <div className="mt-14">
            <h3 className="t-h2 text-2xl text-ink mb-3">
              The language drops away at the moment the user commits
            </h3>
            <p className="text-[16px] text-ink/65 leading-relaxed measure mb-8">
              The blog is available in five languages, which reflects real awareness of where
              the buyer markets sit. The main site declares two locale alternates. The enquiry
              form is English only.
            </p>
            <Figure caption="Discovery to conversion, with the multilingual break marked">
              <MultilingualBreakDiagram />
            </Figure>
          </div>

          <div className="mt-14">
            <Findings
              label="What a crawler actually sees"
              items={[
                { head: "Authority is never declared machine-readably", body: "No entity block above the fold. No named consultant byline. No schema tying expertise to a person. A crawler reads a hero image and generic intro copy." },
                { head: "FAQ answers cannot be extracted", body: "They exist, but open with preamble and never name Rhino Africa as the source. An AI agent has nothing clean to lift." },
                { head: "Geography is the product, but there is no map", body: "Destination filtering is filter-driven by country, duration, and budget rather than spatial. For a platform selling place, that is a structural gap." },
              ]}
            />
          </div>
        </Section>

        <Section
          label="Audience"
          title="Five persona buckets"
          intro="Drawn from conversation mining across Trustpilot, Travelstride, TripAdvisor, SafariBookings, Fodor's forums, and the client feedback page."
        >
          <div className="border-t border-line">
            {personas.map((p) => (
              <div
                key={p.key}
                className={`grid grid-cols-[2rem_1fr] gap-x-4 py-5 border-b border-line ${
                  p.primary ? "bg-accent-wash -mx-4 px-4" : ""
                }`}
              >
                <span
                  className={`t-num text-sm pt-1 ${p.primary ? "text-accent" : "text-ink/30"}`}
                >
                  {p.key}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[17px] font-bold text-ink">{p.name}</h3>
                    {p.primary && <span className="t-label text-accent">Primary</span>}
                  </div>
                  <p className="t-caption mt-1.5">{p.profile}</p>
                  <p className="text-[15px] text-ink/70 mt-2 leading-relaxed measure">{p.need}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Pullquote attribution="The finding that reorders every other decision">
              The consultant is the product.
            </Pullquote>
            <p className="text-[16px] text-ink/65 leading-relaxed measure mt-6">
              Across all five buckets, the named human relationship is what drives trust,
              conversion, and review. The platform&apos;s primary job is to establish credibility
              and remove friction fast enough to reach that first human contact.
            </p>
          </div>
        </Section>

        <Section
          label="The architecture"
          title="Seven layers, in crawler reading order"
          intro="Each layer was tested against a single question. Can an AI agent extract Rhino Africa's authority from this, unambiguously, without human interpretation?"
        >
          <GeoLayerStack />
        </Section>

        <Section
          label="Applied"
          title="What changes in practice"
          intro="Applied to the Kruger National Park destination page. The recommendations are structural rather than cosmetic. The words change because the job of the words changes."
        >
          <FaqBeforeAfter />

          <div className="mt-10 border border-line bg-surface p-6 md:p-8">
            <p className="t-label text-accent mb-6">Page identity</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="t-label text-ink/40 mb-3">Current</p>
                <p className="text-[15px] text-ink/60 leading-relaxed">
                  &ldquo;Kruger National Park, A Transformative Luxury Safari&rdquo;
                </p>
                <p className="text-[13px] text-ink/45 mt-3">
                  Rhino Africa is not named. No authority claim.
                </p>
              </div>
              <div className="md:border-l md:border-line md:pl-8">
                <p className="t-label text-accent mb-3">Recommended</p>
                <p className="text-[15px] text-ink font-medium leading-relaxed">
                  &ldquo;Kruger National Park Safaris: Expert-Planned Luxury Big 5 Experiences
                  by Rhino Africa&rdquo;
                </p>
                <p className="text-[13px] text-ink/60 mt-3">
                  Entity and authority in the first sentence a crawler reads.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          label="Framework"
          title="The nine signals"
          intro="What the architecture is built on. Each signal is something a machine can detect, and something a designer can deliberately structure for."
        >
          <GeoSignals />
          <p className="text-[13px] text-ink/45 mt-8 leading-relaxed measure">
            E-E-A-T began as E-A-T in 2014. Google added Experience in 2022 to reward genuine,
            lived involvement over aggregated or AI-generated content.
          </p>
        </Section>

        <Section
          label="Competitive set"
          title="Looking for the unoccupied ground"
          intro="Six competitors, three local and three international, scored across five UX dimensions. The purpose was not ranking. Singita, Abercrombie & Kent, and Extraordinary Journeys scored highest at 4.6 average."
        >
          <CompetitorMatrix />

          <div className="mt-14">
            <h3 className="t-h2 text-2xl text-ink mb-8">Four opportunities nobody has taken</h3>
            <Findings label="Unoccupied across the entire set" items={opportunities.map((o) => ({ head: o.title, body: o.body }))} />
          </div>
        </Section>

        <Section
          label="Deliverable"
          title="Six implications, ordered by leverage"
          intro="Where targeted architecture work has the greatest effect on both experience and commercial conversion."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
            {implications.map((imp, i) => (
              <div key={imp.title} className="border-r border-b border-line bg-surface p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon name={imp.icon} size={16} className="text-accent" />
                  <span className="t-num text-xs text-ink/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-[16px] font-bold text-ink leading-snug">{imp.title}</h3>
                <p className="text-[14px] text-ink/60 mt-2.5 leading-relaxed">{imp.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Outcome>
          <p>
            The output of this project is not a screen. It is a structure, one that makes
            fifteen years of earned expertise legible to a machine that has never met a
            consultant.
          </p>
        </Outcome>

        <Reflection items={project.learnings} />
      </CaseBody>

      <CaseNav prevProject={prevProject} nextProject={nextProject} />
    </CaseShell>
  );
}
