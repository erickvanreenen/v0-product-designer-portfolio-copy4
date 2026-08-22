import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/fade-in";
import { HeroHeadline } from "@/components/hero-headline";
import { ArrowRight } from "lucide-react";

const principles = [
  {
    n: "01",
    title: "I notice things, then follow through",
    body: "The UCOOK sign-up investigation started because I spotted something in the data nobody had flagged. I scoped it, researched it, and delivered a redesign that took completion from 3.7% to 9.3%.",
  },
  {
    n: "02",
    title: "Research shapes the work",
    body: "Customer interviews, heatmaps, usability testing, internal surveys, competitive benchmarking. Understanding people before designing for them makes everything more considered.",
  },
  {
    n: "03",
    title: "Specs developers can work from",
    body: "Annotated prototypes with scrollIntoView() behaviour, validation rules, and GTM triggers. The kind of handoff that reduces guesswork on both sides.",
  },
];

export default function HomePage() {
  const featuredSlugs = ["rhino-africa-geo", "ucook", "faithful-to-nature", "flanksource"];
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <div className="page-entry">
      {/* Hero — unchanged */}
      <section className="bg-[#FDFAF5]">
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
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/60"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="bg-ink-deep text-paper">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-14">
            {principles.map((item, i) => (
              <FadeIn key={item.n} delay={i * 90}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="t-num text-sm font-semibold text-ember-lift">{item.n}</span>
                    <span className="h-px flex-1 bg-paper/15" />
                  </div>
                  <h2 className="text-[19px] font-bold text-paper leading-snug tracking-[-0.015em] mb-3">
                    {item.title}
                  </h2>
                  <p className="text-[14px] text-paper/55 leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-end justify-between mb-4">
              <h2 className="t-h2 text-3xl md:text-[40px] text-ink">Selected work</h2>
              <Link
                href="/projects"
                className="text-sm text-ink/55 hover:text-ember transition-colors duration-200 flex items-center gap-1.5 group pb-1.5"
              >
                All nine projects
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
            <p className="text-[15px] text-ink/55 measure mb-14 md:mb-16">
              Each one is named for the problem it solves, not the company that paid for it.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 70} className="h-full">
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="py-20 md:py-32 border-t border-line">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="t-display text-5xl md:text-6xl lg:text-7xl text-ink mb-8 max-w-2xl">
              Let&apos;s build delightful experiences together.
            </h2>
            <p className="text-ink/55 mb-10 max-w-sm">
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
