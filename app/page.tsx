import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { FadeIn } from "@/components/fade-in";
import { HeroHeadline } from "@/components/hero-headline";
import { ArrowRight } from "lucide-react";

/*
  The five areas the work groups into. Every line here is drawn from an
  existing case study or the About page, so each one has somewhere real to
  point at.
*/
const capabilities = [
  {
    n: "01",
    name: "AI design workflows",
    body: "Perplexity, ChatGPT, Claude, NotebookLM, Figma Make and Stitch, used across research, synthesis and exploration. I studied AI Fundamentals for UX in 2025.",
    href: "/about#tooling",
    cue: "Tooling",
  },
  {
    n: "02",
    name: "GEO",
    body: "Generative Engine Optimisation is an information architecture discipline that gets filed under content marketing. For Rhino Africa I defined seven content layers, ordered by the sequence a crawler reads them.",
    href: "/projects/rhino-africa-geo",
    cue: "Rhino Africa",
  },
  {
    n: "03",
    name: "Research",
    body: "Customer interviews, heatmaps, usability testing, internal surveys and competitive benchmarking. It is how I uncover what people actually need, rather than what I assume they need.",
    href: "/projects/ucook",
    cue: "UCOOK",
  },
  {
    n: "04",
    name: "Systems thinking",
    body: "Mapping dependencies before designing solutions. At Faithful to Nature every decision carried downstream consequences across seventeen stores and two legacy systems.",
    href: "/projects/faithful-to-nature",
    cue: "Faithful to Nature",
  },
  {
    n: "05",
    name: "Design thinking",
    body: "Creativity and empathy in the making, balanced against what can practically ship. I teach the process too, across two academic terms at the Academy of Digital Arts.",
    href: "/projects/ada-ux-design",
    cue: "Academy of Digital Arts",
  },
];

export default function HomePage() {
  const featuredSlugs = ["rhino-africa-geo", "ucook", "faithful-to-nature", "flanksource"];
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <div className="page-entry">
      {/* Hero. Content and layout unchanged, background moved to white. */}
      <section className="bg-surface border-b border-line">
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

      {/* What I do */}
      <section className="bg-ink-deep text-paper">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <FadeIn>
            <p className="t-label text-ember-lift mb-5">What I do</p>
            <h2 className="t-h2 text-3xl md:text-[40px] text-paper mb-12 md:mb-16 max-w-xl">
              Five areas the work keeps returning to.
            </h2>
          </FadeIn>

          {/*
            A list rather than a card grid. Five items do not divide evenly into
            columns, and each one earns a full line of explanation anyway.
          */}
          <ul className="border-t border-paper/15">
            {capabilities.map((item, i) => (
              <FadeIn key={item.n} delay={i * 70}>
                <li>
                  <Link
                    href={item.href}
                    className="group grid md:grid-cols-[auto_1fr_1.5fr] gap-x-8 lg:gap-x-12 gap-y-3 py-7 md:py-8
                               border-b border-paper/15 items-baseline
                               focus-visible:outline-none focus-visible:bg-paper/5"
                  >
                    <span className="t-num text-sm font-semibold text-ember-lift md:pt-1">
                      {item.n}
                    </span>

                    <h3 className="text-[21px] md:text-[23px] font-bold text-paper leading-snug tracking-[-0.015em] group-hover:text-ember-lift transition-colors duration-200">
                      {item.name}
                    </h3>

                    <div>
                      <p className="text-[14.5px] text-paper/65 leading-relaxed">{item.body}</p>
                      <span className="inline-flex items-center gap-1.5 t-label text-paper/55 mt-3 group-hover:text-ember-lift transition-colors duration-200">
                        {item.cue}
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-0.5 transition-transform duration-200"
                        />
                      </span>
                    </div>
                  </Link>
                </li>
              </FadeIn>
            ))}
          </ul>
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
              Each one is named for the work it involved, not the company that paid for it.
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
