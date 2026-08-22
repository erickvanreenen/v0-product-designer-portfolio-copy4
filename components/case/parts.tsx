import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

/*
  Case study primitives.

  The rhythm every study follows: name the problem, answer it in one line,
  show the shape of the answer as a diagram, then earn the detail. Section
  treatments alternate deliberately so no two neighbours look alike.
*/

export function CaseShell({
  project,
  children,
}: {
  project: Project;
  children: React.ReactNode;
}) {
  return (
    <div className="page-entry" data-accent={project.accent}>
      {children}
    </div>
  );
}

/* ── Hero ─────────────────────────────────────────── */

export function CaseHero({
  project,
  meta,
}: {
  project: Project;
  meta?: { label: string; value: string }[];
}) {
  const rows =
    meta ??
    [
      { label: "Role", value: project.role },
      { label: "Client", value: project.client },
      { label: "Timeline", value: project.timeline },
      { label: "Tools", value: project.tools.slice(0, 3).join(", ") },
    ];

  return (
    <section className="border-b border-line">
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-14 md:pt-16 md:pb-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 t-label text-ink/45 hover:text-accent transition-colors duration-200 mb-12 group py-2.5 -my-2.5 pr-3"
        >
          <ArrowLeft size={13} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
          All work
        </Link>

        <p className="t-label text-accent mb-4">{project.client}</p>

        <h1 className="t-display text-6xl md:text-8xl text-ink mb-6">
          {project.title}
        </h1>

        <p className="text-xl md:text-2xl text-ink/70 measure leading-[1.35] font-light">
          {project.subtitle}
        </p>

        <dl className="grid grid-cols-2 md:grid-cols-4 mt-14 border-t border-line">
          {rows.map((item, i) => (
            <div
              key={item.label}
              className={`py-5 md:pr-6 min-w-0 ${i > 0 ? "md:pl-6 md:border-l border-line" : ""} ${
                i % 2 === 1 ? "pl-5 border-l border-line md:pl-6" : ""
              }`}
            >
              <dt className="t-label text-ink/40 mb-2">{item.label}</dt>
              <dd className="text-sm text-ink/85 break-words leading-snug">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ── The question, then the answer ────────────────── */

export function Premise({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <section className="bg-accent-wash border-b border-line">
      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-10 items-start">
          <div>
            <p className="t-label text-ink/45 mb-4">The problem</p>
            <p className="text-lg md:text-xl text-ink leading-snug font-medium">
              {question}
            </p>
          </div>

          <div className="hidden md:block w-px self-stretch bg-ink/12" />

          <div>
            <p className="t-label text-accent mb-4">What it turned out to be</p>
            <p className="text-lg md:text-xl text-ink leading-snug font-medium">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Layout wrappers ──────────────────────────────── */

export function CaseBody({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">{children}</div>
  );
}

export function Section({
  label,
  title,
  intro,
  children,
  wide = false,
}: {
  label?: string;
  title?: string;
  intro?: string;
  children?: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className="mb-20 md:mb-28">
      {(label || title || intro) && (
        <header className={wide ? "" : "measure"}>
          {label && <p className="t-label text-accent mb-4">{label}</p>}
          {title && (
            <h2 className="t-h2 text-3xl md:text-[42px] text-ink mb-5">{title}</h2>
          )}
          {intro && (
            <p className="text-[17px] text-ink/65 leading-relaxed measure">{intro}</p>
          )}
        </header>
      )}
      {children && <div className={label || title || intro ? "mt-10" : ""}>{children}</div>}
    </section>
  );
}

/* ── Figure: a diagram, framed and captioned ──────── */

export function Figure({
  caption,
  children,
  flush = false,
}: {
  caption?: string;
  children: React.ReactNode;
  flush?: boolean;
}) {
  return (
    <figure>
      <div
        className={`bg-surface border border-line ${flush ? "" : "p-5 md:p-8"}`}
      >
        {children}
      </div>
      {caption && <figcaption className="t-caption mt-3">{caption}</figcaption>}
    </figure>
  );
}

/* ── Prose ────────────────────────────────────────── */

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="measure space-y-5 text-[17px] text-ink/75 leading-relaxed">
      {children}
    </div>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xl md:text-2xl text-ink leading-[1.4] font-medium measure">
      {children}
    </p>
  );
}

/* ── Findings: insights with real weight ──────────── */

export function Findings({
  items,
  label = "What we found",
}: {
  items: { head: string; body?: string }[] | string[];
  label?: string;
}) {
  const normalised = items.map((it) =>
    typeof it === "string" ? splitFinding(it) : it
  );

  return (
    <div>
      <p className="t-label text-ink/40 mb-6">{label}</p>
      <ol className="border-t border-line">
        {normalised.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[2.5rem_1fr] md:grid-cols-[4rem_1fr] gap-x-4 py-6 border-b border-line"
          >
            <span className="t-num text-sm text-accent pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-[17px] text-ink font-medium leading-snug">
                {item.head}
              </p>
              {item.body && (
                <p className="text-[15px] text-ink/60 leading-relaxed mt-2 measure">
                  {item.body}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* Splits "Claim. Supporting detail" into a head and a body so a flat
   string list still gets typographic hierarchy. */
function splitFinding(text: string): { head: string; body?: string } {
  const match = text.match(/^(.+?[.。])\s+(.+)$/);
  if (match && match[1].length < 90) {
    return { head: match[1].replace(/\.$/, ""), body: match[2] };
  }
  const comma = text.indexOf(", ");
  if (comma > 24 && comma < 84) {
    return { head: text.slice(0, comma), body: text.slice(comma + 2) };
  }
  return { head: text };
}

/* ── Numbers ──────────────────────────────────────── */

export function Metrics({
  items,
}: {
  items: { value: string; label: string; note?: string; lead?: boolean }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-line">
      {items.map((m) => (
        <div key={m.label} className="border-r border-b border-line p-5 md:p-7">
          <p
            className={`t-num text-3xl md:text-[40px] font-semibold leading-none ${
              m.lead ? "text-accent" : "text-ink/85"
            }`}
          >
            {m.value}
          </p>
          <p className="t-label text-ink/45 mt-4">{m.label}</p>
          {m.note && (
            <p className="text-[13px] text-ink/50 mt-2 leading-relaxed">{m.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Two-column comparison ────────────────────────── */

export function Compare({
  before,
  after,
}: {
  before: { label: string; title?: string; body: React.ReactNode; notes?: string[] };
  after: { label: string; title?: string; body: React.ReactNode; notes?: string[] };
}) {
  return (
    <div className="grid md:grid-cols-2 border-t border-l border-line">
      {[
        { ...before, accent: false },
        { ...after, accent: true },
      ].map((col) => (
        <div
          key={col.label}
          className={`border-r border-b border-line p-6 md:p-8 ${
            col.accent ? "bg-accent-wash" : "bg-surface"
          }`}
        >
          <p
            className={`t-label mb-5 ${col.accent ? "text-accent" : "text-ink/40"}`}
          >
            {col.label}
          </p>
          {col.title && (
            <p className="text-base font-bold text-ink mb-3">{col.title}</p>
          )}
          <div className="text-[15px] text-ink/75 leading-relaxed">{col.body}</div>
          {col.notes && (
            <ul className="mt-6 pt-5 border-t border-line space-y-2">
              {col.notes.map((n) => (
                <li key={n} className="text-[13px] text-ink/60 flex gap-2.5">
                  <span
                    className={`mt-[7px] w-1 h-1 shrink-0 rounded-full ${
                      col.accent ? "bg-accent" : "bg-ink/30"
                    }`}
                  />
                  {n}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

/* ── Sequenced steps ──────────────────────────────── */

export function Steps({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-line">
      {items.map((s, i) => (
        <li key={s.title} className="border-r border-b border-line p-6 md:p-7">
          <span className="t-num text-sm text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-base font-bold text-ink mt-4 leading-snug">
            {s.title}
          </h3>
          <p className="text-[14px] text-ink/60 leading-relaxed mt-2">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/* ── A statement worth stopping on ────────────────── */

export function Pullquote({ children, attribution }: { children: React.ReactNode; attribution?: string }) {
  return (
    <blockquote className="border-l-0 py-2">
      <div className="accent-rule mb-7" />
      <p className="text-2xl md:text-[34px] t-h2 text-ink measure leading-[1.2]">
        {children}
      </p>
      {attribution && (
        <p className="t-label text-ink/40 mt-6">{attribution}</p>
      )}
    </blockquote>
  );
}

/* ── Outcome band ─────────────────────────────────── */

export function Outcome({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-ink-deep text-paper mb-20 md:mb-28 -mx-6 px-6 md:mx-0 md:px-0">
      <div className="md:p-12 py-12 md:py-14">
        <p className="t-label text-ember-lift mb-6">Outcome</p>
        <div className="text-lg md:text-xl text-paper/85 leading-relaxed measure">
          {children}
        </div>
      </div>
    </section>
  );
}

/* ── Reflection ───────────────────────────────────── */

export function Reflection({ items }: { items: string[] }) {
  return (
    <Section label="Reflection" title="What I took from it">
      <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
        {items.map((l, i) => (
          <li key={i} className="flex gap-4">
            <span className="t-num text-sm text-accent pt-1 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-[16px] text-ink/75 leading-relaxed">{l}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* ── Live link ────────────────────────────────────── */

export function LiveLink({ href, label = "See it live" }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-6 py-3 hover:bg-accent transition-colors duration-200 group"
    >
      {label}
      <ArrowUpRight
        size={16}
        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
      />
    </a>
  );
}

/* ── Prev / next ──────────────────────────────────── */

export function CaseNav({
  prevProject,
  nextProject,
}: {
  prevProject?: Project;
  nextProject?: Project;
}) {
  return (
    <nav className="border-t border-line" aria-label="Project navigation">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-2">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group py-8 md:py-10 pr-4 border-r border-line"
          >
            <span className="t-label text-ink/40 flex items-center gap-2 mb-3">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Previous
            </span>
            <span className="block text-xl md:text-2xl t-h2 text-ink group-hover:text-ember transition-colors duration-200">
              {prevProject.title}
            </span>
            <span className="t-label text-ink/35">{prevProject.client}</span>
          </Link>
        ) : (
          <div className="border-r border-line" />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group py-8 md:py-10 pl-4 text-right"
          >
            <span className="t-label text-ink/40 flex items-center justify-end gap-2 mb-3">
              Next
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
            </span>
            <span className="block text-xl md:text-2xl t-h2 text-ink group-hover:text-ember transition-colors duration-200">
              {nextProject.title}
            </span>
            <span className="t-label text-ink/35">{nextProject.client}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
}
