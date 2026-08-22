import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/fade-in";
import { HeroHeadline } from "@/components/hero-headline";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredSlugs = ["ucook", "faithful-to-nature", "flanksource", "edtech-interactive-learning"];
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <div className="page-entry">
      {/* Hero */}
      <section className="bg-[#FDFAF5]">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">

          {/* Headline */}
          <HeroHeadline />

          {/* CTAs */}
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

      {/* Dark section: what I actually do */}
      <section className="bg-[#09332C]">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                n: "01",
                title: "I notice things and follow through on them.",
                body: "The UCOOK sign-up investigation started because I spotted something in the data that hadn't been flagged. I scoped it, researched it, and delivered a redesign that moved completion from 3.7% to 9.3%.",
              },
              {
                n: "02",
                title: "Research shapes the work.",
                body: "Customer interviews, heatmaps, usability testing, internal surveys, competitive benchmarking. Understanding people before designing for them makes everything more considered.",
              },
              {
                n: "03",
                title: "Specs developers can work from.",
                body: "Annotated prototypes with scrollIntoView() behaviour, validation rules, and GTM triggers. The kind of handoff that reduces guesswork on both sides.",
              },
            ].map((item, i) => (
              <FadeIn key={item.n} delay={i * 100}>
                <div className="group">
                  <span className="text-xs text-[#F7EDDA]/25 font-bold block mb-5 tracking-widest">{item.n}</span>
                  <h3 className="text-base font-bold text-[#F7EDDA] mb-3 leading-snug group-hover:text-[#F0531C] transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-[#F7EDDA]/55 leading-relaxed">{item.body}</p>
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
            <div className="flex items-baseline justify-between mb-14 md:mb-16">
              <span className="text-xs text-foreground/40 font-medium uppercase tracking-widest">Selected work</span>
              <Link
                href="/projects"
                className="text-xs text-foreground/50 hover:text-[#F0531C] transition-colors duration-200 flex items-center gap-1 group"
              >
                All projects
                <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-16 md:gap-y-20">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 80}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <FadeIn>
        <section className="py-20 md:py-32 border-t border-border/50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.04] mb-8 max-w-2xl">
              Let&apos;s build delightful experiences together.
            </h2>
            <p className="text-foreground/50 mb-10 max-w-sm">
              Full-time, contract, or something interesting. Cape Town and remote.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#09332C] text-[#F7EDDA] text-sm font-medium px-6 py-3 hover:bg-[#F0531C] hover:text-white active:scale-[0.98] transition-all duration-200 group"
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
