import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/fade-in";
import { HeroHeadline } from "@/components/hero-headline";
import { HowIWorkVisual } from "@/components/how-i-work-visual";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredSlugs = ["geo", "ucook", "faithful-to-nature", "flanksource"];
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

      {/* Proof strip */}
      <section className="border-y border-border/60 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
            {[
              { fig: "3.7 → 9.3%", label: "UCOOK sign-up completion" },
              { fig: "R1.3m", label: "Annual revenue recovered" },
              { fig: "15 yrs", label: "Designing and building" },
              { fig: "9", label: "Case studies, written up" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 70}>
                <div className="py-8 md:py-10 px-4 md:px-6 text-center">
                  <p className="text-xl md:text-3xl font-bold text-foreground tracking-tight tabular-nums">
                    {s.fig}
                  </p>
                  <p className="text-[11px] text-foreground/45 mt-2 leading-snug">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="bg-[#09332C]">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <FadeIn>
            <p className="text-xs text-[#F7EDDA]/35 font-medium uppercase tracking-widest mb-3">
              How I work
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#F7EDDA] tracking-tight max-w-xl leading-snug mb-14 md:mb-16">
              Most of the good work starts with something that looks slightly off.
            </h2>
          </FadeIn>

          <FadeIn delay={100}>
            <HowIWorkVisual />
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-sm text-[#F7EDDA]/50 leading-relaxed max-w-lg mt-14 md:mt-16">
              The UCOOK redesign started because a number in a dashboard did not sit right.
              Sixty people a week were dropping out of sign-up and nobody had asked why.
              I asked. That is usually the whole job.
            </p>
          </FadeIn>
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
              Got something that isn&apos;t working?
            </h2>
            <p className="text-foreground/50 mb-10 max-w-sm">
              Full-time, contract, or a problem you want a second opinion on. Cape Town and remote.
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
