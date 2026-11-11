import Link from "next/link";
import { projects } from "@/lib/projects";
import { FadeIn } from "@/components/fade-in";
import { HeroHeadline } from "@/components/hero-headline";
import { AiWorkflowBand } from "@/components/home/ai-workflow-band";
import { WorkCard } from "@/components/home/work-card";
import { ArrowRight } from "lucide-react";

/*
  The four featured projects, each with the capability it shows. This replaces
  the old "What I do" list, which claimed six capabilities in the abstract.
*/
const FEATURED: { slug: string; shows: string }[] = [
  { slug: "ucook", shows: "Research" },
  { slug: "faithful-to-nature", shows: "UX strategy" },
  { slug: "rhino-africa-geo", shows: "Information architecture" },
  { slug: "kurtosys-rule-builder", shows: "Systems thinking" },
  { slug: "flanksource", shows: "Dashboard design" },
  { slug: "overture", shows: "App design" },
  { slug: "uni4-online", shows: "Leadership" },
  { slug: "edtech-interactive-learning", shows: "Visual design" },
];

export default function HomePage() {
  const featured = FEATURED.map((f) => ({ ...f, project: projects.find((p) => p.slug === f.slug) })).filter(
    (f): f is { slug: string; shows: string; project: (typeof projects)[number] } => Boolean(f.project)
  );

  return (
    <div className="page-entry">
      {/* Hero. Content and layout unchanged, background moved to white. */}
      <section className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <HeroHeadline />

          <div className="flex items-center gap-5">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#F0531C] text-white text-sm font-medium px-6 py-3 hover:bg-[#09332C] active:scale-[0.98] transition-all duration-200 group"
            >
              View work
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/82 hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/60"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* AI design workflows, in the green band where "What I do" used to sit */}
      <AiWorkflowBand />

      {/* Selected work */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <h2 className="t-h2 text-3xl md:text-[40px] text-ink mb-4">Selected work</h2>
            <p className="text-[15px] text-ink/82 measure mb-12 md:mb-14">
              Each one is named for the work it involved, not the company that paid for it.
            </p>
          </FadeIn>

          {/* Two rows of four on desktop, two across on a tablet, and the first
              four stacked on a phone, where See all work picks up the rest. */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((f, i) => (
              <FadeIn key={f.slug} delay={(i % 4) * 70} className={`h-full ${i >= 4 ? "hidden sm:block" : ""}`}>
                <WorkCard project={f.project} shows={f.shows} />
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 mt-12 border border-ink text-ink text-sm font-medium px-6 py-3 hover:bg-ink hover:text-paper transition-colors duration-200"
            >
              See all work
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="py-20 md:py-32 border-t border-line">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="t-display text-5xl md:text-6xl lg:text-7xl text-ink mb-8 max-w-2xl">
              Let&apos;s build delightful experiences together.
            </h2>
            <p className="text-ink/82 mb-10 max-w-sm">
              Full-time, contract, or something interesting. Cape Town and remote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ink text-paper text-sm font-medium px-6 py-3 hover:bg-ember transition-colors duration-200 group"
            >
              Get in touch
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
