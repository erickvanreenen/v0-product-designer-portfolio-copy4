import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Erick van Reenen",
  description: "Senior UX Designer. E-commerce, omnichannel, EdTech.",
};

const experience = [
  { title: "UX/UI Designer", company: "Silvertree Brands", period: "Sep 2024 - Present", desc: "Designing across UCOOK, Faithful to Nature, and Pet Heaven." },
  { title: "UX Designer", company: "YumEase", period: "Jul 2023 - Aug 2024", desc: "Sole designer. Took the product from inception to launch." },
  { title: "Visual Team Lead", company: "UNi4 Online", period: "May 2021 - Aug 2024", desc: "Led the design team. Built the aggregator UX." },
  { title: "Design Director", company: "Poly Nation", period: "Jun 2018 - Apr 2020", desc: "Owned full production. Drove a 40% increase in turnover." },
  { title: "Visual Designer", company: "Stories & Science", period: "Feb 2018 - Feb 2019", desc: "Delivered visual design across brand and digital." },
  { title: "Clothing Designer & Production Lead", company: "Lucky Friday", period: "Apr 2010 - Oct 2017", desc: "Managed end-to-end design and production." },
  { title: "Retail Owner", company: "Lucky Friday", period: "Feb 2001 - Apr 2012", desc: "Founded and operated the retail business." },
];

const education = [
  { title: "AI Fundamentals for UX Design", institution: "UX Design Institute / GCU", year: "2025" },
  { title: "Professional Diploma in UX Design", institution: "UX Design Institute / GCU", year: "2022" },
  { title: "The Creative's Workshop", institution: "Akimbo, Seth Godin", year: "2021" },
  { title: "UX Design Fundamentals", institution: "CalArts", year: "2020" },
  { title: "Visual Elements of UI Design", institution: "CalArts", year: "2020" },
  { title: "Introduction to Data Science", institution: "IBM", year: "2019" },
  { title: "Cost & Management Accounting + Financial Accounting", institution: "Institute of Administration and Commerce", year: "1997 - 2000" },
];

const skills = [
  "User Research", "UX Strategy", "Information Architecture",
  "Prototyping", "UI Design", "Design Systems",
  "Usability Testing", "Content Design", "CX Design",
];

const tools = [
  "Figma", "Adobe Creative Suite", "Miro", "Jira",
  "Articulate 360", "Google Suite",
];

const aiTools = [
  "Perplexity", "ChatGPT", "Claude", "NotebookLM",
  "Figma AI (Pencil)", "Figma Make", "Stitch by Google",
];

function LogoMark({ size = 28, opacity = 1 }: { size?: number; color?: string; opacity?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/erick-logo.svg" width={size} height={size} alt="" style={{ opacity }} />
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">

          {/* Logo mark + headline */}
          <div className="flex items-start gap-5 mb-10">
            <div className="mt-2 shrink-0">
              <LogoMark size={44} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-none">
              Follow the curiosity.
            </h1>
          </div>

          <p className="text-lg text-foreground/75 max-w-xl leading-relaxed mb-14">
            UX-first. Strategic thinking. Fifteen years building things people actually use.
          </p>

          {/* Contact details — meta tile style */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Location", value: "Cape Town, South Africa" },
              { label: "Email", value: "erickvanreenen@gmail.com" },
              { label: "Phone", value: "+27 620 969 497" },
              { label: "Status", value: "Full Time, Contract, Freelance" },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`p-6 min-w-0 overflow-hidden border-border ${
                  i === 1 || i === 3 ? "border-l" : i === 2 ? "md:border-l" : ""
                } ${
                  i === 2 || i === 3 ? "border-t md:border-t-0" : ""
                }`}
              >
                <p className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm text-foreground break-all">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Bio */}
        <section className="mb-24">
          <div className="max-w-2xl">
            <p className="text-xl text-foreground font-medium leading-relaxed mb-6">
              I came to UX through a longer route than most.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-5">
              I am an experienced designer with a diverse background in entrepreneurship, business development, branding, product design, visual and online education design, and UX/UI.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-5">
              I have a passion for how exceptional design impacts users' lives, blending creativity, empathy, and kindness in everything I create. My work is driven by a deep curiosity and an endless desire to understand the intricacies of design, focusing on the people I design for and with.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-5">
              I embrace research as an essential tool for uncovering user needs, shaping experiences that resonate with their motivations and aspirations. I'm a dedicated problem-solver and advocate for quality design, balancing innovation with practical solutions.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Beyond design, I'm a proud father who draws inspiration and solace from nature, Tai Chi, meditation, breathwork, trail running, and early morning swims in the Atlantic Ocean, infusing my work with a sense of calm and reflection.
            </p>
          </div>
        </section>

        {/* Beyond work — with dot motif */}
        <section className="mb-24 pb-24 border-b border-border">
          <div className="flex items-center gap-3 mb-8">
            <LogoMark size={16} color="#09332C" opacity={0.25} />
            <h2 className="text-xs text-foreground/65 font-medium uppercase tracking-widest">Beyond work</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Father", "Nature", "Tai Chi", "Meditation", "Breathwork", "Trail runner", "Ocean swimmer"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 text-sm text-foreground/85 border border-border rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C] shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24 pb-24 border-b border-border">
          <div className="flex items-center gap-3 mb-12">
            <LogoMark size={16} color="#09332C" opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Experience</h2>
          </div>
          <div className="space-y-0">
            {experience.map((exp, i, arr) => (
              <div key={`${exp.company}-${exp.title}`} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-[#F0531C] flex-shrink-0 mt-1.5" />
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                </div>
                <div className="pb-10">
                  <p className="text-xs text-foreground/65 font-medium mb-1">{exp.period}</p>
                  <h3 className="text-base font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-[#F0531C] mb-1">{exp.company}</p>
                  <p className="text-sm text-foreground/65">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-24 pb-24 border-b border-border">
          <div className="flex items-center gap-3 mb-12">
            <LogoMark size={16} color="#09332C" opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Education</h2>
          </div>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.title} className="flex items-start gap-8">
                <span className="text-xs text-foreground/65 font-medium w-12 flex-shrink-0 pt-0.5">{edu.year}</span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{edu.title}</h3>
                  <p className="text-sm text-foreground/65">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Skills + Tooling */}
        <section className="mb-0 pb-24 border-b border-border">
          <div className="flex items-center gap-3 mb-12">
            <LogoMark size={16} color="#09332C" opacity={0.25} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">Skills + Tooling</h2>
          </div>
          <div className="space-y-12">
            <div>
              <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-full bg-[#E2F5EF] text-[#09332C]/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="text-sm px-3 py-1.5 rounded-full bg-[#F7EDDA] text-[#09332C]/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs text-foreground/65 font-medium uppercase tracking-widest mb-6">AI Tools</h3>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span key={tool} className="text-sm px-3 py-1.5 rounded-full bg-[#F7DFBA] text-[#09332C]/80">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Get in Touch — white bg, full width */}
      <section className="bg-white border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-start gap-5">
            <div className="mt-1 shrink-0">
              <LogoMark size={28} color="#F0531C" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4">
                Open to opportunities.
              </h2>
              <p className="text-foreground/65 mb-8 max-w-md">
                Available for full-time roles, contract work, and interesting problems. Let's talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F0531C] text-white text-sm font-medium rounded-full hover:bg-[#09332C] transition-all duration-200 group"
              >
                Get in touch
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
