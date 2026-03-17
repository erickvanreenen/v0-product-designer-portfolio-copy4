import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const exercises = [
  {
    week: "Week 1",
    label: "Exercise 1",
    title: "Research and Usability Audit",
    objective: "Identify the non-profit and evaluate its current website.",
    instructions: [
      "Research and select a non-profit organisation with a poorly designed website.",
      "Conduct a usability audit to document pain points, user interaction issues, and areas for improvement.",
    ],
    deliverable: "A one-page report detailing the current state of the website and your findings from the audit.",
    tools: "Word/Google Docs for the report, screenshots of the existing website.",
  },
  {
    week: "Week 2",
    label: "Exercise 2",
    title: "User Persona Development",
    objective: "Create detailed user personas to guide your design.",
    instructions: [
      "Develop 2 user personas representing the target audience of the non-profit.",
      "Include key demographics, goals, frustrations, and user needs that align with the non-profit's mission.",
    ],
    deliverable: "A user persona document with detailed profiles and visual aids.",
    tools: "Figma for visual layout and design, or Adobe Illustrator for customisation.",
  },
  {
    week: "Week 3",
    label: "Exercise 3",
    title: "Sitemap and Wireframes",
    objective: "Plan the website structure and design low-fidelity wireframes.",
    instructions: [
      "Create a sitemap for the revamped website to ensure clear navigation.",
      "Design low-fidelity wireframes for key pages: Home, About, Services, Contact.",
    ],
    deliverable: "A sitemap diagram and low-fidelity wireframes for desktop and mobile versions.",
    tools: "Figma for wireframing and sitemap design.",
  },
  {
    week: "Week 4",
    label: "Exercise 4",
    title: "Mid-Fidelity Prototyping",
    objective: "Develop mid-fidelity prototypes that reflect your design and usability findings.",
    instructions: [
      "Create a mid-fidelity prototype using Figma, ensuring that key elements such as the layout, navigation, and user interactions are addressed.",
      "Design for both desktop (1440px width) and mobile (iPhone 11 Pro Max 414px width) screens.",
    ],
    deliverable: "Mid-fidelity prototype of key pages, presented as both desktop and mobile layouts.",
    tools: "Figma for prototyping.",
  },
  {
    week: "Week 5",
    label: "Exercise 5",
    title: "Platform Research and Prototype Refinement",
    objective: "Research and recommend a suitable platform for implementation (WordPress.org or Webflow).",
    instructions: [
      "Compare WordPress.org and Webflow, and determine which platform is better suited for the non-profit's needs.",
      "Refine your prototype based on feedback received from peers or mentors.",
    ],
    deliverable: "A platform recommendation report, highlighting pros and cons. An updated version of the prototype.",
    tools: "Word/Google Docs for the report, Figma for prototype updates.",
  },
  {
    week: "Week 6",
    label: "Exercise 6",
    title: "Final Prototype and Documentation",
    objective: "Prepare your prototype for usability testing and final submission.",
    instructions: [
      "Finalise your mid-fidelity prototype, ensuring consistency with the non-profit's brand identity.",
      "Include all necessary annotations and links to make it user-friendly.",
      "Prepare the prototype for usability testing by ensuring all key user journeys are clear.",
    ],
    deliverable: "Final mid-fidelity prototype with detailed documentation.",
    tools: "Figma for final prototypes.",
  },
];

const summative = [
  {
    week: "Week 7",
    label: "Exercise 7",
    title: "Usability Testing",
    objective: "Test your prototype with real users and gather feedback.",
    instructions: [
      "Conduct usability testing with 1–2 users, using your mid-fidelity prototype.",
      "Record and document feedback, focusing on usability issues, pain points, and suggested improvements.",
    ],
    deliverable: "Usability test report documenting key feedback and areas of improvement.",
    tools: "Figma for prototype testing, Word/Google Docs for report.",
  },
  {
    week: "Week 8",
    label: "Exercise 8",
    title: "Final Presentation",
    objective: "Present your project from start to finish.",
    instructions: [
      "Compile your entire process into a final presentation, showcasing your research, personas, prototypes, usability testing feedback, and final design.",
      "Ensure your presentation highlights the improvements made based on user feedback.",
    ],
    deliverable: "A live presentation and a PDF slide deck showcasing the project and its deliverables.",
    tools: "PowerPoint or Google Slides for the presentation, Figma or Adobe InDesign for the final portfolio.",
  },
];

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <Link
            href="/projects/eduvos-content-writing"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-[#F0531C] transition-colors duration-200 mb-16 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform duration-200" />
            Back to project
          </Link>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {["EdTech", "Content Design", "Formative Assessment"].map((tag) => (
              <span key={tag} className="text-xs text-foreground/40">{tag}</span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#0F7353] tracking-tight mb-4 max-w-2xl">
            Formative Assessment Brief
          </h1>
          <p className="text-lg text-foreground/55 max-w-xl leading-relaxed">
            Revamping a non-profit organisation's website.
          </p>

          {/* Meta */}
          <div className="grid grid-cols-2 md:grid-cols-3 mt-14">
            {[
              { label: "Module", value: "UX/UI Design" },
              { label: "Duration", value: "6 weeks formative + 2 weeks summative" },
              { label: "Institution", value: "Eduvos" },
            ].map((item, i) => (
              <div key={item.label} className={`p-6 min-w-0 overflow-hidden border-border ${
                i > 0 ? "border-l" : ""
              } ${
                i === 1 || i === 2 ? "border-t md:border-t-0" : ""
              }`}>
                <p className="text-xs text-foreground/50 font-medium uppercase tracking-widest mb-2">{item.label}</p>
                <p className="text-sm text-foreground break-words">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Objective */}
      <section className="bg-[#f0f0f0]">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-xs text-foreground/40 font-medium uppercase tracking-widest mb-4">Learning Objective</p>
          <p className="text-base text-foreground/70 leading-relaxed">
            This brief aims to immerse you in the core principles of User Interface (UI) and User Experience (UX) design, applying them in a real-world scenario by revamping a non-profit organisation's website. Through a series of hands-on exercises, you will develop user personas, create mid-fidelity prototypes, and select the best platform for implementation. The project will culminate in usability testing, ensuring that your design enhances user interaction while staying true to the non-profit's mission and brand identity.
          </p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* Brief Topic */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#0F7353] tracking-tight mb-6">Brief topic</h2>
          <p className="text-base text-foreground/70 leading-relaxed">
            You are tasked with identifying an existing non-profit organisation that has a poorly designed website. Your goal is to revamp the website, aligning it with modern UI and UX principles to improve user interaction and overall experience. The project includes developing user personas, creating a mid-fidelity prototype, and performing usability testing to validate your design. Finally, you will present your findings and design updates in a live presentation.
          </p>
        </section>

        {/* Scope */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#0F7353] tracking-tight mb-6">Scope</h2>
          <p className="text-base text-foreground/70 leading-relaxed">
            This brief will consist of six exercises spanning six weeks, focusing on each step in the UI/UX design process. Each exercise will build on the skills and knowledge covered in class, helping you progress toward the final website revamp and usability testing. Completion of these exercises is essential to prepare for the final summative assessment in weeks 7 and 8.
          </p>
        </section>

        {/* Delivery Requirements */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#0F7353] tracking-tight mb-10">Delivery requirements</h2>
          <div className="space-y-6">
            {[
              "A digital portfolio containing all required deliverables for the brief.",
              "A reflection document showcasing the journey from research to final design.",
              "A digital prototype, screen recording, and documentation for usability testing results.",
            ].map((req, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Formative Exercises */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#0F7353] tracking-tight mb-2">Exercises and deliverables</h2>
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-12">Formative — Weeks 1 to 6</p>
          <div className="space-y-12">
            {exercises.map((ex) => (
              <div key={ex.label} className="bg-white rounded-lg p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">{ex.week}</span>
                  <span className="text-foreground/20">/</span>
                  <span className="text-xs text-foreground/40 font-medium uppercase tracking-widest">{ex.label}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F7353] tracking-tight mb-3">{ex.title}</h3>
                <p className="text-sm text-[#F0531C] font-medium mb-6">{ex.objective}</p>
                <div className="space-y-3 mb-8">
                  {ex.instructions.map((ins, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C]/40 mt-[0.4rem] shrink-0" />
                      <p className="text-sm text-foreground/65 leading-relaxed">{ins}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <p className="text-xs text-foreground/40 font-medium uppercase tracking-widest mb-2">Deliverable</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">{ex.deliverable}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 font-medium uppercase tracking-widest mb-2">Tools</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">{ex.tools}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summative */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#0F7353] tracking-tight mb-2">Summative assessment</h2>
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-12">Weeks 7 and 8</p>
          <div className="space-y-12">
            {summative.map((ex) => (
              <div key={ex.label} className="bg-white rounded-lg p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-xs text-[#F0531C] font-medium uppercase tracking-widest">{ex.week}</span>
                  <span className="text-foreground/20">/</span>
                  <span className="text-xs text-foreground/40 font-medium uppercase tracking-widest">{ex.label}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F7353] tracking-tight mb-3">{ex.title}</h3>
                <p className="text-sm text-[#F0531C] font-medium mb-6">{ex.objective}</p>
                <div className="space-y-3 mb-8">
                  {ex.instructions.map((ins, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C]/40 mt-[0.4rem] shrink-0" />
                      <p className="text-sm text-foreground/65 leading-relaxed">{ins}</p>
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div>
                    <p className="text-xs text-foreground/40 font-medium uppercase tracking-widest mb-2">Deliverable</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">{ex.deliverable}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/40 font-medium uppercase tracking-widest mb-2">Tools</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">{ex.tools}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Minimum Requirements */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#0F7353] tracking-tight mb-10">Minimum research requirements</h2>
          <div className="space-y-6">
            {[
              "User personas should be detailed and visually engaging.",
              "Wireframes and prototypes should follow the non-profit's brand guidelines and be consistent with best practices in UI/UX design.",
              "Usability testing should be thorough, with feedback well-documented and incorporated into the final prototype.",
            ].map((req, i) => (
              <div key={i} className="flex items-start gap-6">
                <span className="text-xs text-foreground/20 font-bold mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-foreground/70 leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usability Testing Instructions */}
        <section className="mb-24 bg-white rounded-lg p-8 md:p-10">
          <p className="text-xs text-[#F0531C] font-medium uppercase tracking-widest mb-6">Instructions for usability testing</p>
          <div className="space-y-4">
            {[
              "Test key user journeys such as navigation, information retrieval, and ease of use.",
              "Gather both qualitative and quantitative feedback to ensure comprehensive insights.",
            ].map((ins, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0531C]/40 mt-[0.4rem] shrink-0" />
                <p className="text-sm text-foreground/65 leading-relaxed">{ins}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
