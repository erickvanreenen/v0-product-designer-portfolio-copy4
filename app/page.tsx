import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { ArrowRight } from "lucide-react";

export default function HomePage() {
  const featuredSlugs = ["ucook", "faithful-to-nature", "flanksource", "edtech-interactive-learning"];
  const featuredProjects = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground max-w-2xl tracking-tight mb-6">
            Fusing user needs with business outcomes.
          </h1>
          <p className="text-sm text-[#F0531C] font-bold uppercase tracking-widest mb-6">
            UX Designer 75% / UI 25%
          </p>
          <p className="text-lg text-foreground/65 max-w-xl">
            Designing for e-commerce, omnichannel, and EdTech.
          </p>
          <div className="flex gap-4 mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#F0531C]/90 transition-all duration-200 group"
            >
              View work
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#09332C]/15 text-foreground/65 text-sm font-medium rounded-full hover:bg-[#09332C]/5 transition-all duration-200"
            >
              Get in touch
            </Link>
          </div>

        </div>
      </section>

      {/* Selected Work */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Selected work</h2>
            <Link
              href="/projects"
              className="text-sm text-foreground/58 hover:text-[#F0531C] transition-colors duration-200 flex items-center gap-1.5 group"
            >
              All projects
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 md:py-32 bg-[#E2F5EF]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-16">Process</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#09332C]/10">
            {[
              { step: "01", title: "Research", desc: "Dig into users, data, and context." },
              { step: "02", title: "Define", desc: "Turn insights into sharp problems." },
              { step: "03", title: "Ideate", desc: "Explore multiple directions." },
              { step: "04", title: "Prototype", desc: "Build tangible, testable concepts." },
              { step: "05", title: "Test", desc: "Validate with real users." },
              { step: "06", title: "Iterate", desc: "Refine through feedback." },
            ].map((step) => (
              <div key={step.step} className="bg-[#E2F5EF] p-8 relative overflow-hidden">
                <span className="absolute bottom-3 right-5 text-[88px] font-bold text-[#09332C]/[0.07] leading-none tabular-nums select-none pointer-events-none">{step.step}</span>
                <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-foreground/65 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-none mb-8">
            Open to<br />opportunities.
          </h2>
          <p className="text-foreground/65 mb-8">
            Let's discuss a project or just say hello.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#09332C] transition-all duration-200 group"
          >
            Get in touch
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
}
