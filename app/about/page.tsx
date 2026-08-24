import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/material-icon";
import { PrintsCarousel } from "@/components/prints-carousel";
import { FadeIn } from "@/components/fade-in";
import {
  DeliveryWorkflowDiagram,
  DesignSystemDiagram,
  SemanticLayerNote,
} from "@/components/workflow-diagrams";

export const metadata: Metadata = {
  title: "About | Erick van Reenen",
  description: "Senior UX Designer. E-commerce, omnichannel, EdTech. Cape Town.",
};

const experience = [
  { title: "UX/UI Designer", company: "Silvertree Brands", period: "Sep 2024 – Present", desc: "Designing across UCOOK, Faithful to Nature, and Pet Heaven. Omnichannel e-commerce, desktop and mobile." },
  { title: "Moderator, Content Design", company: "UX Design Institute", period: "Aug 2024 – Mar 2026", desc: "Reviewing student projects against the six Content Design principles." },
  { title: "Content Writer, Digital & Web Design", company: "Eduvos", period: "Apr 2024 – Sep 2025", desc: "Consolidating UX and UI modules into a unified strand within the three-year Digital Design degree." },
  { title: "Lecturer, UX Design", company: "Academy of Digital Arts", period: "Feb 2024 – Mar 2025", desc: "Delivering the UX Design module: instruction, workshops, and assessment." },
  { title: "UX Designer", company: "YumEase", period: "Jul 2023 – Aug 2024", desc: "Sole designer. Took the product from inception to launch." },
  { title: "Visual Team Lead", company: "UNi4 Online", period: "May 2021 – Aug 2024", desc: "Led the design team. Built the aggregator UX." },
  { title: "Design Director", company: "Poly Nation", period: "Jun 2018 – Apr 2020", desc: "Owned full production. Drove a 40% increase in turnover." },
  { title: "Visual Designer", company: "Stories & Science", period: "Feb 2018 – Feb 2019", desc: "Delivered visual design across brand and digital." },
  { title: "Clothing Designer & Production Lead", company: "Lucky Friday", period: "Apr 2010 – Oct 2017", desc: "Managed end-to-end design and production." },
  { title: "Retail Owner", company: "Lucky Friday", period: "Feb 2001 – Apr 2012", desc: "Founded and operated the retail business." },
];

const education = [
  { title: "AI Fundamentals for UX", institution: "UX Design Institute", year: "2025" },
  { title: "Developing a Systems Mindset", institution: "University of Colorado Boulder", year: "2025" },
  { title: "Professional Diploma in UX Design", institution: "UX Design Institute / Glasgow Caledonian University", year: "2022" },
  { title: "Akimbo: The Creative's Workshop", institution: "Seth Godin", year: "2021" },
  { title: "UX Design Fundamentals", institution: "California Institute of the Arts", year: "2020" },
  { title: "Visual Elements of UI Design", institution: "California Institute of the Arts", year: "2020" },
  { title: "Introduction to Data Science", institution: "IBM", year: "2019" },
  { title: "Cost & Management Accounting + Financial Accounting", institution: "Institute of Administration and Commerce", year: "1997 – 2000" },
];

const skills = [
  "User research", "UX strategy", "Information architecture",
  "Prototyping", "UI design", "Design systems",
  "Usability testing", "Content design", "CX design",
];

const tools = ["Figma", "Adobe Creative Suite", "Miro", "Jira", "Articulate 360", "Google Suite"];
const aiTools = ["Perplexity", "ChatGPT", "Claude", "NotebookLM", "Figma Make", "Stitch by Google"];

const contact = [
  { label: "Location", value: "Cape Town, South Africa", icon: "location_on", href: "https://maps.google.com/?q=Cape+Town,+South+Africa" },
  { label: "Email", value: "erickvanreenen@gmail.com", icon: "mail", href: "mailto:erickvanreenen@gmail.com" },
  { label: "Phone", value: "+27 620 969 497", icon: "phone", href: "tel:+27620969497" },
  { label: "Status", value: "Full time, contract, freelance", icon: "work", href: undefined },
];

function SectionHead({ label, title, intro }: { label?: string; title: string; intro?: string }) {
  return (
    <header className="mb-12 md:mb-14">
      {label && <p className="t-label text-ember mb-4">{label}</p>}
      <h2 className="t-h2 text-3xl md:text-[42px] text-ink">{title}</h2>
      {intro && <p className="text-[16px] text-ink/60 leading-relaxed measure mt-5">{intro}</p>}
    </header>
  );
}

function Pills({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li key={s} className="text-sm px-3.5 py-2 bg-surface border border-line text-ink/75">
          {s}
        </li>
      ))}
    </ul>
  );
}

/*
  Section order matters here. The page used to run intro, personal, then three
  list sections in a row, with the workflow diagrams last. That put the least
  distinctive material in the middle and the most distinctive at the bottom.

  Now: who I am, how I work, where I have worked, what I hold, then the
  personal note as the close.
*/
export default function AboutPage() {
  return (
    <div className="page-entry">
      <section className="bg-surface border-b border-line">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <p className="t-label text-ember mb-6">About</p>

          <h1 className="t-display text-5xl md:text-7xl lg:text-8xl text-ink mb-8">
            Follow the curiosity.
          </h1>

          <p className="text-xl md:text-2xl text-ink/70 measure leading-[1.4] font-light mb-14 md:mb-16">
            Fifteen years making and building things people use.
          </p>

          <dl className="grid grid-cols-2 md:grid-cols-4 border-t border-line">
            {contact.map((item, i) => (
              <div
                key={item.label}
                className={`py-5 md:pr-6 min-w-0 ${i > 0 ? "md:pl-6 md:border-l border-line" : ""} ${
                  i % 2 === 1 ? "pl-5 border-l border-line md:pl-6" : ""
                }`}
              >
                <dt className="flex items-center gap-1.5 t-label text-ink/40 mb-2">
                  <Icon name={item.icon} size={13} />
                  {item.label}
                </dt>
                <dd className="text-sm text-ink/85 leading-snug min-w-0 [overflow-wrap:anywhere]">
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-ember transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* ── Who I am ─────────────────────────────── */}
        <FadeIn>
          <section className="mb-24 md:mb-28 pb-20 border-b border-line">
            <p className="text-xl md:text-2xl text-ink leading-[1.45] font-medium measure mb-8">
              I have worked in entrepreneurship, business development, branding, product
              design, visual and online education design, and UX/UI.
            </p>
            <div className="measure space-y-5 text-[17px] text-ink/70 leading-relaxed">
              <p>
                Most of what I do comes down to working out how the pieces fit together, and
                who they are for.
              </p>
              <p>
                Research is mostly how I check whether what I think is happening is what is
                actually happening. The rest is working out what can realistically ship, and
                arguing for the version still worth building.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* ── How I work, promoted ─────────────────── */}
        <FadeIn>
          <section className="mb-24 md:mb-28 pb-20 border-b border-line">
            <SectionHead
              label="Practice"
              title="Current design workflow"
              intro="From proof of concept through to developer handover, and how the design system keeps it consistent."
            />

            <div className="mb-16">
              <h3 className="text-xl font-bold text-ink tracking-[-0.015em]">Design and delivery</h3>
              <p className="text-[15px] text-ink/60 leading-relaxed mt-2 measure">
                HTML is included in handover where it saves build time.
              </p>
              <figure className="mt-7">
                <div className="bg-surface border border-line p-5 md:p-8">
                  <DeliveryWorkflowDiagram />
                </div>
              </figure>
            </div>

            <div>
              <h3 className="text-xl font-bold text-ink tracking-[-0.015em]">Design system</h3>
              <p className="text-[15px] text-ink/60 leading-relaxed mt-2 measure">
                Built in Figma and in code, then checked against itself.
              </p>
              <figure className="mt-7">
                <div className="bg-surface border border-line p-5 md:p-8">
                  <DesignSystemDiagram />
                  <SemanticLayerNote />
                </div>
              </figure>
            </div>
          </section>
        </FadeIn>

        {/* ── Track record ─────────────────────────── */}
        <FadeIn>
          <section className="mb-24 md:mb-28 pb-20 border-b border-line">
            <SectionHead label="Experience" title="Where I have worked" />
            <ol>
              {experience.map((exp, i, arr) => (
                <li key={`${exp.company}-${exp.title}`} className="flex gap-5 md:gap-7">
                  <div className="flex flex-col items-center pt-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember shrink-0" />
                    {i < arr.length - 1 && <span className="w-px flex-1 bg-line mt-2" />}
                  </div>
                  <div className="pb-10 grid md:grid-cols-[10rem_1fr] gap-x-8 gap-y-1 flex-1">
                    <p className="t-label text-ink/40 md:pt-1">{exp.period}</p>
                    <div>
                      <h3 className="text-[17px] font-bold text-ink">{exp.title}</h3>
                      <p className="text-sm text-ember mb-2">{exp.company}</p>
                      <p className="text-[15px] text-ink/60 leading-relaxed measure">{exp.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </FadeIn>

        {/*
          Education and tooling were two consecutive list sections. Merged into
          one, side by side on a wide screen, so the page has two list beats
          rather than three. The tooling id is kept because the home page links
          straight to it.
        */}
        <FadeIn>
          <section id="tooling" className="mb-24 md:mb-28 pb-20 border-b border-line scroll-mt-24">
            <SectionHead label="Credentials" title="What I studied, and what I work with" />

            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-16">
              <div>
                <p className="t-label text-ink/40 mb-5">Education</p>
                <dl className="border-t border-line">
                  {education.map((edu) => (
                    <div
                      key={edu.title}
                      className="grid grid-cols-[4.5rem_1fr] md:grid-cols-[6.5rem_1fr] gap-x-4 py-4 border-b border-line"
                    >
                      <dt className="t-num text-sm text-ink/40 pt-0.5">{edu.year}</dt>
                      <dd>
                        <p className="text-[15px] font-bold text-ink leading-snug">{edu.title}</p>
                        <p className="text-sm text-ink/55 mt-1">{edu.institution}</p>
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="space-y-10">
                <div>
                  <p className="t-label text-ink/40 mb-5">Skills</p>
                  <Pills items={skills} />
                </div>
                <div>
                  <p className="t-label text-ink/40 mb-5">Tools</p>
                  <Pills items={tools} />
                </div>
                <div>
                  <p className="t-label text-ink/40 mb-5">AI</p>
                  <Pills items={aiTools} />
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ── The close ────────────────────────────── */}
        <FadeIn>
          <section>
            <SectionHead label="Beyond work" title="What keeps the work steady" />
            <p className="text-[17px] text-ink/70 leading-relaxed measure mb-16">
              I am a proud father. The rest of it is nature, Tai Chi, meditation, breathwork,
              trail running, and early morning swims in the Atlantic.
            </p>
            <p className="text-[15px] text-ink/55 leading-relaxed mb-8 measure">
              I make prints for free play.
            </p>
            <PrintsCarousel />
          </section>
        </FadeIn>

      </div>

      <section className="bg-ink-deep">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <div>
              <p className="t-label text-ember-lift mb-5">Open to work</p>
              <h2 className="t-h2 text-3xl md:text-[42px] text-paper mb-4">
                Available for opportunities.
              </h2>
              <p className="text-paper/60 max-w-sm">
                Full-time roles, contract work, and interesting challenges. Let&apos;s talk.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ember text-white text-sm font-medium px-6 py-3 hover:bg-paper hover:text-ink-deep transition-colors duration-200 group shrink-0"
            >
              Get in touch
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
