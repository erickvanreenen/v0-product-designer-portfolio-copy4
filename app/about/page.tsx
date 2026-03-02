import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-4xl md:text-5xl font-bold text-[#09332C] tracking-tight mb-6">
            About
          </h1>
          <p className="text-lg text-[#F0531C] max-w-2xl">
            Senior UX Designer. Cape Town.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Bio */}
        <section className="mb-24 max-w-2xl">
          <p className="text-base text-foreground leading-relaxed mb-6">
            I bring a diverse background spanning entrepreneurship, business development, branding, product design, education design, and UX/UI.
          </p>
          <p className="text-base text-foreground leading-relaxed mb-6">
            I work research-first — uncovering user needs and shaping experiences that align with business goals.
          </p>
          <p className="text-base text-foreground/50 leading-relaxed">
            Beyond work: father, trail runner, ocean swimmer.
          </p>
        </section>

        {/* Contact details */}
        <section className="mb-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Location", value: "Cape Town, South Africa" },
            { label: "Email", value: "erickvanreenen@gmail.com" },
            { label: "Phone", value: "+27 620 969 497" },
            { label: "Status", value: "Open to opportunities" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-2">{item.label}</p>
              <p className="text-sm text-foreground">{item.value}</p>
            </div>
          ))}
        </section>

        {/* Skills & Tools */}
        <section className="mb-24 pb-24 border-b border-border">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-full bg-[#09332C] text-[#F7EDDA]">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-6">Tools</h2>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool} className="text-sm px-3 py-1.5 rounded-full border border-border text-foreground/60">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Tools */}
        <section className="mb-24 pb-24 border-b border-border">
          <h2 className="text-xs text-foreground/30 font-medium uppercase tracking-widest mb-6">AI Tools</h2>
          <div className="flex flex-wrap gap-2">
            {aiTools.map((tool) => (
              <span key={tool} className="text-sm px-3 py-1.5 rounded-full border border-border text-foreground/60">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-24 pb-24 border-b border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-[#09332C] tracking-tight mb-12">Experience</h2>
          <div className="space-y-0">
            {experience.map((exp, i, arr) => (
              <div key={`${exp.company}-${exp.title}`} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F0531C] flex-shrink-0 mt-1.5" />
                  {i < arr.length - 1 && <div className="w-px flex-1 bg-border" />}
                </div>
                <div className="pb-10">
                  <p className="text-xs text-foreground/30 font-medium mb-1">{exp.period}</p>
                  <h3 className="text-base font-bold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-[#F0531C] mb-1">{exp.company}</p>
                  <p className="text-sm text-foreground/50">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-24 pb-24 border-b border-border">
          <h2 className="text-3xl md:text-4xl font-bold text-[#09332C] tracking-tight mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.title} className="flex items-start gap-8">
                <span className="text-xs text-foreground/30 font-medium w-12 flex-shrink-0 pt-0.5">{edu.year}</span>
                <div>
                  <h3 className="text-base font-bold text-foreground">{edu.title}</h3>
                  <p className="text-sm text-foreground/50">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="border-t border-border pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#09332C] tracking-tight mb-4">
              Open to opportunities.
            </h2>
            <p className="text-foreground/50 mb-8">
              Let's discuss a project or just say hello.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#09332C] text-[#F7EDDA] text-sm font-medium rounded-full hover:bg-[#F0531C] transition-all duration-200 group"
            >
              Get in touch
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}