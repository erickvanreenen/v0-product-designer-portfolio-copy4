export type ProjectTag =
  | "E-commerce"
  | "Omnichannel"
  | "App"
  | "Redesign"
  | "UX Strategy"
  | "Leadership"
  | "EdTech"
  | "Content Design"
  | "Data Dev"
  | "Workflow Automation"
  | "GEO"
  | "Information Architecture";

export type Accent = "ember" | "clay" | "forest" | "slate" | "ochre" | "plum";

export interface Project {
  slug: string;
  /** The problem class the project demonstrates. This is what the card leads with. */
  title: string;
  /** Who the work was for. Context, not headline. */
  client: string;
  subtitle: string;
  /** The one question the project set out to answer. */
  question: string;
  /** What the project turned out to be, in one line. */
  answer: string;
  /**
   * Headline figure, where one exists. Supply `from` to render a before and
   * after pair; the after half then carries the positive colour.
   */
  metric?: { value: string; label: string; from?: string };
  accent: Accent;
  tags: ProjectTag[];
  role: string;
  team: string;
  timeline: string;
  tools: string[];
  thumbnail: string;
  thumbnailLogo?: string;
  outcomes: string[];
  summary: string;
  context: string;
  goals: string[];
  research: string;
  insights: string[];
  iaFlows: string;
  designExploration: string;
  finalUI: string;
  testing: string;
  outcome: string;
  learnings: string[];
  images: {
    src: string;
    caption: string;
    wide?: boolean;
  }[];
  externalLink?: string;
}

export const projects: Project[] = [
  {
    slug: "rhino-africa-geo",
    title: "GEO",
    client: "Rhino Africa",
    subtitle: "Generative Engine Optimisation",
    question: "How do you structure a page so an AI agent can extract a company's authority and cite them as the expert source?",
    answer: "Seven content layers, ordered by the sequence a crawler reads them.",
    metric: { value: "7", label: "content layers" },
    accent: "ember",
    tags: ["GEO", "Information Architecture", "UX Strategy", "Content Design"],
    role: "UX Architect",
    team: "Self-initiated research",
    timeline: "June 2026",
    tools: ["Figma", "Claude", "Perplexity", "Schema.org", "Miro"],
    thumbnail: "/images/thumb-rhino.svg",
    outcomes: [
      "Seven-layer GEO content architecture defined for high-value destination pages",
      "Six competitors benchmarked across five UX dimensions",
      "Multilingual conversion break identified between blog and enquiry flow",
      "Five persona buckets mapped from conversation mining across six platforms"
    ],
    summary: "A structural analysis of how a luxury safari platform earns citation in AI-generated search. Generative Engine Optimisation is not a content problem, it is an information architecture problem. This project defines the hierarchy that lets a machine find, extract, and attribute expertise.",
    context: "Rhino Africa is Africa's most awarded safari company, with 5,300+ Trustpilot reviews at a 5.0 rating. The platform is a content-to-conversion machine, six pillars funnelling toward a single outcome, the human Travel Expert relationship. But search is changing. Users increasingly ask Perplexity, ChatGPT Search, and Google AI Overviews rather than scanning ten blue links. In that world, ranking is not the goal. Being cited is.",
    goals: [
      "Understand the platform as a system before designing anything within it",
      "Establish how an AI agent reads, extracts, and attributes authority on a web page",
      "Architect the information hierarchy of a high-value destination page for machine extraction",
      "Identify where the existing platform breaks the chain between discovery and conversion"
    ],
    research: "Four parallel investigations. Platform information architecture mapping across six pillars and the blog subdomain. GEO performance analysis covering taxonomy depth, locale declarations, and multilingual continuity. Persona research through conversation mining across Trustpilot, Travelstride, TripAdvisor, SafariBookings, Fodor's forums, and the client feedback page. And high-net-worth consumer behaviour drawn from luxury-segment conversion patterns rather than reviews.",
    insights: [
      "The consultant is the product. Across all five persona buckets, the named human relationship drives trust, conversion, and review",
      "Authority was never declared machine-readably. No entity block, no named byline, no schema tying expertise to a person",
      "FAQ answers existed but opened with preamble, so an AI agent cannot extract a clean, citable response from prose",
      "The multilingual effort stops at the content layer. Five languages in the blog, two locale alternates on the main site, an English-only enquiry form",
      "Destination filtering is filter-driven, not map-driven. For a platform that sells geography as the product, the spatial entry point is missing",
      "Three of six competitors run WordPress. None offers itinerary visualisation or aspiration-led discovery"
    ],
    iaFlows: "Mapped the platform as six primary pillars: Destinations, Experiences, Tours & Safaris, About Us, Blog, Start Planning. The blog operates on a separate WordPress subdomain that mirrors the main taxonomy. Tours and Destinations are tightly interdependent, since tours are multi-destination packages and destination pages surface relevant tours. Trust content sits close to the booking funnel by design, functioning as a conversion enabler rather than reference material.",
    designExploration: "Architected a seven-layer content hierarchy for a high-value destination page, ordered by the sequence a crawler reads: page identity, authority block, structured FAQ, expert tips module, repeating lodge entity blocks, conversion anchor, and a machine layer of schema markup invisible to the user. Each layer was tested against one question. Can an AI agent extract Rhino Africa's authority from this, unambiguously, without human interpretation?",
    finalUI: "Delivered a current-versus-recommended comparison for the Kruger National Park destination page. Every recommendation is structural rather than cosmetic. Entity and authority claim in the H1, a named consultant byline above the fold, FAQ answers that lead with the entity and carry no preamble, and four schema types wrapping the whole: FAQPage, Article, TravelAgency, and BreadcrumbList.",
    testing: "Benchmarked six competitors across IA & navigation, enquiry & conversion, content strategy, visual design, and mobile experience. Singita, Abercrombie & Kent, and Extraordinary Journeys scored highest at 4.6 average. The scoring surfaced four strategic opportunities unoccupied across the entire competitive set.",
    outcome: "The deliverable is the architecture itself. A seven-layer content hierarchy that makes expertise machine-extractable, a nine-signal GEO framework, and six design implications ordered by leverage: surfacing the consultant early, distributing trust signals to every decision point, removing friction from the enquiry flow, extending multilingual continuity through to conversion, adding a spatial orientation layer, and building personalisation cues that signal the user is known.",
    learnings: [
      "GEO is an information architecture discipline that gets filed under content marketing. The structure is the optimisation",
      "Machines cannot infer authority. If expertise is not declared explicitly and consistently, it does not exist to a crawler",
      "Understanding the ecosystem before designing a single page is not overhead. It is what makes the page decision defensible",
      "The first hundred words carry the most weight. Leading with the answer rather than the preamble is both better UX and better machine legibility"
    ],
    images: []
  },
  {
    slug: "ucook",
    title: "Conversion Optimisation",
    client: "UCOOK",
    subtitle: "Sign-up drop-off, diagnosed and rebuilt",
    question: "Why were people abandoning sign-up while still expecting their meal boxes to arrive?",
    answer: "They thought they had finished. Payment came days later, so nothing told them they had not.",
    metric: { from: "3.7%", value: "9.3%", label: "sign-up completion" },
    accent: "clay",
    tags: ["E-commerce", "Omnichannel", "UX Strategy", "Redesign"],
    role: "UX/UI Designer",
    team: "Product Team, Frontend & Backend Developers, Data Team",
    timeline: "2025",
    tools: ["Figma", "Miro", "Jira", "Google Analytics", "Google Tag Manager", "PostHog", "Maze"],
    thumbnail: "/images/thumb-ucook.svg",
    outcomes: [
      "Sign-up completion rate increased from 3.7% to 9.3%",
      "Roughly R1,296,000 a year in revenue impact addressed",
      "Validated measurement framework established",
      "Proportional abandonment at the top of the funnel reduced"
    ],
    summary: "A self-initiated usability investigation into UCOOK's sign-up flow. Mixed-methods research surfaced the conversion problem, and the redesigned funnel took completion from 3.7% to 9.3%.",
    context: "Silvertree, working on UCOOK, a subscription meal kit service. Customer service and behavioural data showed users abandoning sign-up while still expecting deliveries. Over 60 incomplete sign-ups were recorded in a single week, with retention through the sign-up path at just 1.43%.",
    goals: [
      "Validate whether sign-up was a genuine usability and conversion issue worth prioritising",
      "Identify where and why users were dropping out of the journey",
      "Define a clear, measurable happy path sign-up funnel",
      "Reduce incomplete sign-ups and improve confidence around subscription activation and billing"
    ],
    research: "Led a seven-stage mixed-methods research process: customer service interviews, an internal survey with 16 respondents, competitive benchmarking against Marley Spoon, Taste Box and Hello Fresh, heuristic evaluation against Nielsen's 10 heuristics, an unmoderated testing attempt in Maze, three moderated usability sessions, and measurement planning with Tag Manager triggers.",
    insights: [
      "Sign-up felt unclear. Users confused subscription activation with simple account creation",
      "Navigation and orientation broke down. Users could not find meal options or return to previous steps",
      "Checkout created confusion around subscription versus on-demand ordering, and around when payment would occur",
      "All test participants expected to pay immediately, with payment acting as task completion",
      "56% of first billings occurred 1 to 5 days after sign-up, reinforcing the expectation mismatch",
      "No clearly defined baseline funnel existed, which is why unmoderated testing could not run"
    ],
    iaFlows: "Separated quick wins in communication, navigation and UI clarity from the larger structural work of redesigning the sign-up funnel into a measurable happy path. One key decision drove the rest: whether payment should sit inside sign-up, balancing user expectation against operational constraints.",
    designExploration: "Explored funnel structures informed by competitive benchmarking patterns, landing on clearly structured steps with a definitive payment action at the end. Issues from the heuristic evaluation clustered into three themes: communication, navigation, and UI optimisation.",
    finalUI: "Delivered annotated Figma prototypes with interaction documentation covering step transitions, progress behaviour, and error handling. Component-level specifications included scrollIntoView() behaviour, sticky header behaviour, form validation rules, and progress tracking triggers aligned to funnel steps.",
    testing: "Three moderated usability tests surfaced recurring issues around navigation, plan selection, pricing clarity, and subscription versus on-demand confusion. Tag Manager triggers were defined and implemented across each step for funnel measurement.",
    outcome: "The redesigned funnel reached a 9.3% completion rate, up from a 3.7% baseline. The old funnel saw 405 users enter step 1 with 91.1% abandoning. The new funnel had 1,994 users enter with abandonment down to 75%. More users reached later stages, which points to increased confidence and clarity.",
    learnings: [
      "Self-initiated research can drive business priorities. Spotting an unmet user need shifted roadmap focus",
      "Form friction on mobile is a revenue issue, with outsized effect on conversion and trust",
      "Leading discovery in low-UX-maturity environments means demonstrating value through data, not theory",
      "Mixed methods build evidence that holds. Qualitative plus quantitative made the case for change hard to argue with"
    ],
    images: []
  },
  {
    slug: "faithful-to-nature",
    title: "Omnichannel",
    client: "Faithful to Nature",
    subtitle: "One platform, seventeen stores, two legacy systems",
    question: "How do you introduce consistent UX to a live platform mid-migration, as the only designer, in a team that has never had one?",
    answer: "Translate user needs into business and technical language, then ship the pattern that fixes the most levels at once.",
    metric: { value: "17", label: "in-store collection points" },
    accent: "forest",
    tags: ["E-commerce", "Redesign", "UX Strategy", "Omnichannel"],
    role: "Lead UX/UI Designer",
    team: "CEO, Co-CEO, CTO, BE Architecture Dev, Acumatica Dev, 2× BE Devs, 2× FE Devs, Product Owner, Project Manager, UX/UI Designer",
    timeline: "September 2024 – Present",
    tools: ["Figma", "Miro", "Jira"],
    thumbnail: "/images/thumb-ftn.svg",
    outcomes: [
      "Consistent filtering system shipped across all category levels",
      "Omnichannel collection introduced: 17 in-store locations plus scheduled delivery",
      "UX advocacy embedded in a previously dev-first product team",
      "Systems thinking applied across the Magento 1 to 2 migration constraints"
    ],
    summary: "Lone lead UX/UI designer on South Africa's largest online wellness platform, working inside a dev-first team to redesign a complex omnichannel platform mid-migration from Magento 1 to Magento 2.",
    context: "Faithful to Nature is one of South Africa's largest online wellness retailers. Rapid expansion into brick-and-mortar stores moved the platform into a full omnichannel environment. The Magento 1 to Magento 2 migration started around 2020. Multiple designers came and went before I joined as the lone lead UX/UI designer in September 2024.",
    goals: [
      "Introduce consistent UX patterns across a fragmented platform",
      "Design within legacy M1 constraints and staggered data availability",
      "Advocate for user needs in a dev-first, low-UX-maturity environment",
      "Deliver omnichannel collection and delivery options"
    ],
    research: "Immersed in the existing platform to map UX debt and misaligned historical decisions. Identified filtering inconsistencies across category levels and gaps in delivery and collection options. Mapped omnichannel dependencies across logistics, data availability, and legacy systems.",
    insights: [
      "Dev-first culture created significant UX debt. Patterns changed between category levels",
      "Design was constrained by data availability, not by user need",
      "Legacy M1 dependencies limited what was buildable on M2",
      "Systems thinking was non-negotiable. Every decision had downstream consequences",
      "Advocating for UX meant translating user needs into business and technical language"
    ],
    iaFlows: "",
    designExploration: "",
    finalUI: "",
    testing: "Ongoing. Designs are reviewed against M1 constraints, data availability, and omnichannel logistics before sign-off. Each feature requires cross-functional alignment across tech, product, and operations.",
    outcome: "Consistent filtering system shipped. Omnichannel collection and delivery options in progress. UX practice established in a previously dev-first environment. Project ongoing.",
    learnings: [
      "Balancing UX ideals against data availability and technical constraints is its own skill",
      "Systems thinking at scale means mapping dependencies before designing solutions",
      "Low-UX-maturity environments need evidence-led advocacy, not assumption"
    ],
    images: [],
    externalLink: "https://innovate.faithful-to-nature.co.za/"
  },
  {
    slug: "flanksource",
    title: "Minimizing complexity",
    client: "Flanksource",
    subtitle: "Five tools, one screen",
    question: "Engineers had metrics, logs, and config in Git. What they did not have was one place that told them what needed attention.",
    answer: "A dashboard that pulls the actionable item out of each of the five tools and puts it on one screen.",
    metric: { value: "5 → 1", label: "views to check" },
    accent: "slate",
    tags: ["Data Dev", "Redesign", "UX Strategy"],
    role: "UX/UI Designer",
    team: "Nygaard Design",
    timeline: "2025",
    tools: ["Figma", "Miro"],
    thumbnail: "/images/thumb-flanksource.svg",
    outcomes: [
      "Unified dashboard communicating key system health metrics",
      "Five major components consolidated into one view",
      "Operational visibility improved for engineering teams"
    ],
    summary: "A new dashboard for Flanksource's Mission Control platform, surfacing what needs attention from topology, playbooks, catalog, health checks, and notifications into a single view.",
    context: "Flanksource began as a Kubernetes consulting firm. Teams were drowning in data but lacked context. They had metrics dashboards, log tools, and Git for config, but nothing tying them together. Mission Control was built to close that gap.",
    goals: [
      "Surface relevant actionables in one view",
      "Show general health of services at a glance",
      "Combine catalog, health checks, and notifications",
      "Present recent playbooks and catalog insights"
    ],
    research: "Logged into the beta platform to understand each component: Topology, Playbooks, Catalog, Health Checks, and Notifications. Learned the data dev terminology and what each component does, which informed the information architecture and how each was represented visually.",
    insights: [
      "Engineers needed context, not more data",
      "Key components were siloed across separate views",
      "Actionable items were buried inside individual tools",
      "Unfamiliar terminology required deep domain learning"
    ],
    iaFlows: "Mapped how the key insight from each component could converge into a single dashboard, and defined which data from playbooks, catalog insights, notifications, and health checks should surface by default.",
    designExploration: "Explored different data visualisation methods to communicate system health. Moved from wireframes to structural design representations, testing how to balance density against clarity.",
    finalUI: "Delivered a dashboard that brings last-run playbooks, new catalog insights, latest notifications, and failing health checks into a single scannable interface.",
    testing: "Reviewed designs with the Flanksource product team, iterating on information density and visual hierarchy from their feedback.",
    outcome: "A cohesive dashboard that gives engineering teams one entry point into system health, replacing the need to check five separate views.",
    learnings: [
      "Domain immersion is non-negotiable for unfamiliar products",
      "Data density requires strict visual hierarchy"
    ],
    images: [
      { src: "/images/flanksource-before.svg", caption: "Original dashboard layout" },
      { src: "/images/flanksource-after.svg", caption: "Redesigned dashboard", wide: true }
    ]
  },
  {
    slug: "overture",
    title: "Quick iteration",
    client: "Overture",
    subtitle: "The coordination phase before an event",
    question: "Promoters, agents and artists trade documentation before every show. No single tool covered that handover.",
    answer: "One app for the whole advancing workflow, from brief to signed-off documentation.",
    metric: { value: "4 weeks", label: "brief to sign-off" },
    accent: "ochre",
    tags: ["App", "Workflow Automation"],
    role: "UX Designer",
    team: "Erick van Reenen (UX), Brent Nygaard (UI)",
    timeline: "UX 2 weeks / UI 2 weeks",
    tools: ["Figma", "Miro"],
    thumbnail: "/images/thumb-overture.svg",
    outcomes: [
      "Final product signed off in 4 weeks",
      "Quick iteration under a tight scope",
      "Full advancing workflow in one app"
    ],
    summary: "A promoter app for gathering event documentation, connecting promoters, agents and artists through advancing.",
    context: "Advancing is the coordination phase before an event. Documentation flows between promoters, agents and artists. No single tool covered this workflow.",
    goals: [
      "Gather event documentation seamlessly",
      "Connect promoters, agents and artists",
      "Ship fast with clean handoff"
    ],
    research: "Benchmarked leading event platforms globally. Mapped user journeys and deliverables across the advancing process.",
    insights: [
      "No existing tool covers the full advancing flow",
      "Speed matters more than feature depth"
    ],
    iaFlows: "",
    designExploration: "",
    finalUI: "",
    testing: "",
    outcome: "Final product signed off in 4 weeks.",
    learnings: [
      "Quick iteration demands tight scope"
    ],
    images: []
  },
  {
    slug: "edtech-interactive-learning",
    title: "Online course creation",
    client: "Masterstart, Stellenbosch Business School",
    subtitle: "Making systems theory learnable",
    question: "How do you make abstract Business Systems Analysis models land for a learner reading them for the first time?",
    answer: "Infographics built on constraint. Simplify until the concept is visible, then stop.",
    accent: "plum",
    tags: ["EdTech", "UX Strategy"],
    role: "Visual & Layout Designer",
    team: "Subject Matter Expert, Learning Designer",
    timeline: "2024",
    tools: ["Articulate Rise", "Figma", "Adobe Creative Suite"],
    thumbnail: "/images/thumb-edtech.svg",
    outcomes: [
      "Infographic assets communicating complex BA concepts clearly",
      "Course published live on Masterstart, Stellenbosch Business School",
      "Accessible, responsive layout built in Articulate Rise",
      "Complex systems thinking made visual and learnable"
    ],
    summary: "Visual and infographic design for a Business Systems Analysis course, built in Articulate Rise and published on Masterstart, the online learning platform for Stellenbosch Business School.",
    context: "This course was built for Masterstart, Stellenbosch Business School's online learning platform. I worked alongside a subject matter expert and a learning designer. My focus was visual and layout design throughout the course.",
    goals: [
      "Translate complex BA theory into clear, learnable infographic assets",
      "Support the learning designer's content structure with strong visual hierarchy",
      "Maintain visual consistency across all course modules",
      "Build in Articulate Rise with accessibility and responsiveness in mind"
    ],
    research: "Worked closely with the subject matter expert to understand the conceptual models central to Business Systems Analysis, then identified where visual communication could reduce cognitive load.",
    insights: [
      "Complex conceptual models need visual simplification, not decoration",
      "Working alongside subject matter experts requires active listening and iteration",
      "Layout discipline in Articulate Rise directly affects learner focus",
      "Infographics that communicate well require constraint, not embellishment"
    ],
    iaFlows: "The learning designer led content structure. My role was to support that structure visually, making sure infographics aligned with the course's progressive logic.",
    designExploration: "Explored how to represent systems thinking, process flows, and stakeholder mapping as accessible visual assets. Iterated with the SME on accuracy, and with the learning designer on placement and pacing.",
    finalUI: "Delivered a set of infographic assets and a consistent visual layout, published through Articulate Rise on the Masterstart platform.",
    testing: "",
    outcome: "The course went live on Masterstart. Seeing course content come to life in Articulate Rise, and knowing it was built for Stellenbosch Business School, is work I value.",
    learnings: [
      "Designing for learning is designing for comprehension. The bar is higher than most design contexts",
      "Collaboration with subject matter experts and learning designers sharpens the brief considerably",
      "Articulate Rise rewards visual restraint and clear hierarchy above anything else"
    ],
    images: [],
    externalLink: "https://rise.articulate.com/share/XCDWEAquTje11b1vjAzKZahmZziR0gaj#/lessons/rMXP5z-dQk-xwn-pu5qgWJAxQpOXijVW"
  },
  {
    slug: "uni4-online",
    title: "Aggregator site design",
    client: "UNi4 Online",
    subtitle: "Multiple education brands, one platform",
    question: "How do several education brands share one platform without losing what makes each of them distinct?",
    answer: "Unified navigation and shared patterns, with brand identity preserved at the point it matters.",
    accent: "slate",
    tags: ["EdTech", "UX Strategy", "Leadership"],
    role: "Visual Team Lead & UX Designer",
    team: "Junior Designers, Learning Designers, Project Manager",
    timeline: "May 2021 - August 2024",
    tools: ["Figma", "Miro", "Articulate 360", "Adobe Creative Suite"],
    thumbnail: "/images/thumb-uni4.svg",
    outcomes: [
      "Team productivity increased significantly",
      "KPIs met consistently",
      "Designer collaboration improved",
      "Aggregator platform designed and delivered"
    ],
    summary: "Led the visual design team while designing the UX for an aggregator website that brings multiple education brands onto a single platform.",
    context: "UNi4 Online had designers working in isolation, which led to inconsistent output and made KPIs hard to meet. Alongside that sat the need to consolidate multiple education brands onto one platform.",
    goals: [
      "Streamline design team workflows",
      "Improve team collaboration and morale",
      "Design a unified aggregator platform",
      "Create consistent brand experiences"
    ],
    research: "Analysed existing workflows, ran team interviews, and studied competitor education platforms to inform both the process improvements and the platform design.",
    insights: [
      "Designers needed clearer project visibility",
      "Regular check-ins improved team morale",
      "Users needed seamless navigation between brands",
      "Content consistency was what built trust across multiple educational brands"
    ],
    iaFlows: "Designed an information architecture that lets users move between brands while keeping clear context, with unified design patterns that work across all of them.",
    designExploration: "Explored approaches that balanced individual brand identities against platform consistency, and tested concepts with stakeholders.",
    finalUI: "Delivered a cohesive design that keeps brand distinction while providing a unified experience across the aggregator platform.",
    testing: "",
    outcome: "Team productivity increased significantly, KPIs were consistently met, and the aggregator platform received positive feedback from stakeholders.",
    learnings: [
      "Leadership means balancing individual needs against team goals",
      "Process improvements can dramatically change output quality and efficiency",
      "Platforms need flexibility for multi-brand contexts under one roof"
    ],
    externalLink: "https://www.uni4online.com/",
    images: []
  },
  {
    slug: "ada-ux-design",
    title: "Curriculum creation, and lecturer",
    client: "Academy of Digital Arts",
    subtitle: "Teaching UX to people who have never designed",
    question: "What does a student need to encounter first, and in what order, to leave able to run a UX process themselves?",
    answer: "Theory anchored to apps they already use, then research, wireframes, and a presentation they have to defend.",
    accent: "plum",
    tags: ["EdTech", "Content Design"],
    role: "Lecturer",
    team: "Independent",
    timeline: "Jan 2024 – Mar 2025",
    tools: ["Figma", "Adobe Creative Suite", "Google Slides"],
    thumbnail: "/images/thumb-edtech.svg",
    outcomes: [
      "UX design module delivered across two academic terms",
      "Two summative assessments authored and assessed",
      "Slide content covering foundational UX theory and practice",
      "Students guided from research to wireframes to presentation"
    ],
    summary: "Freelance UX design lecturer at the Academy of Digital Arts, delivering a module on the Higher Certificate in Web Publishing and Interactive Media. Covered foundational theory, industry roles, and practical research methods across two academic terms.",
    context: "The Academy of Digital Arts is a private higher education institution. I was contracted as a freelance lecturer to deliver a UX design module as part of a Higher Certificate in Web Publishing and Interactive Media. The role covered lesson delivery, content creation, and assessment design.",
    goals: [
      "Deliver foundational UX theory in a clear and accessible way",
      "Bridge the gap between academic content and industry practice",
      "Design assessments that mirror real-world UX workflows",
      "Guide students from research and benchmarking to wireframes and presentation"
    ],
    research: "Developed lesson content drawing on industry experience. Structured slide decks to cover UX roles, the history of the discipline, and practical research methods. Assessment briefs were written to reflect real project constraints.",
    insights: [
      "Students engage more deeply when briefs use real-world apps and contexts",
      "Foundational theory lands better when anchored to recognisable industry examples",
      "Marking rubrics need to be explicit to support fair and consistent assessment",
      "Teaching UX sharpens your own articulation of what the discipline is and why it matters"
    ],
    iaFlows: "Structured lesson content to build progressively. Roles and history laid the conceptual foundation. Assessments required students to apply research methods, competitive benchmarking, and wireframing in sequence.",
    designExploration: "",
    finalUI: "",
    testing: "",
    outcome: "Delivered two full academic terms of UX design content at the Academy of Digital Arts. Students completed research-led assessments involving real apps, usability testing, and final presentations.",
    learnings: [
      "Designing for learning is its own discipline. Clarity and sequence matter as much as content",
      "Students respond to authentic briefs. Hypothetical scenarios produce weaker work",
      "Assessment design forces you to define success before you can teach toward it"
    ],
    images: []
  },
  {
    slug: "eduvos-content-writing",
    title: "Content writer",
    client: "Eduvos",
    subtitle: "Two modules merged into one",
    question: "UX and UI were taught as separate disciplines. What survives the merge, and what should go?",
    answer: "One module where every formative exercise builds toward the summative assessment.",
    accent: "ember",
    tags: ["EdTech", "Content Design", "Leadership"],
    role: "Content Writer",
    team: "Academic Team, Learning Designers",
    timeline: "May 2024 – Present",
    tools: ["Figma", "Adobe Creative Suite", "Google Docs", "Moodle"],
    thumbnail: "/images/thumb-edtech.svg",
    outcomes: [
      "Unified UX and UI module delivered",
      "Formative and summative assessments authored",
      "Lesson content developed across the degree",
      "Curriculum aligned to industry practice"
    ],
    summary: "Content writing and course creation for Eduvos, merging the UX and UI modules of the three-year Digital Design degree into a single unified module.",
    context: "I started content writing and course creation at Eduvos in May 2024, tasked with merging the UX and UI modules of the three-year Digital Design degree into one. It meant evaluating the relevance of existing content and deciding what to retain, discard, or introduce.",
    goals: [
      "Evaluate relevance of existing UX and UI content",
      "Determine what to retain, discard, or introduce",
      "Craft formative and summative assessments",
      "Develop lesson content through educational writing and design"
    ],
    research: "Evaluated the existing UX and UI module content across the three-year Digital Design degree, assessing relevance, alignment to industry standards, and learning objectives to decide what to retain, discard, or introduce.",
    insights: [
      "Existing modules treated UX and UI as separate disciplines",
      "Students needed a more integrated, real-world approach",
      "Assessment design requires clarity on learning outcomes first",
      "Practical exercises improve retention and engagement"
    ],
    iaFlows: "Structured the unified module so each exercise builds progressively toward the summative assessment, with clear learning objectives anchoring every piece of content.",
    designExploration: "Explored how to balance theory against practical application across six weeks of formative exercises, with each brief designed to mirror real industry workflows.",
    finalUI: "Delivered a cohesive module with integrated assessments, lesson content, and practical briefs aligned to the Digital Design degree programme outcomes.",
    testing: "",
    outcome: "The unified UX/UI module was delivered with formative and summative assessments, lesson plans, and practical briefs. I enjoyed this work because it forced me to assess what is genuinely most relevant to put in a learning path.",
    learnings: [
      "Teaching sharpens your own understanding of a discipline",
      "Curriculum design is a form of UX. Clarity and flow matter",
      "Relevance to industry has to drive every content decision"
    ],
    images: []
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}

export function getAllTags(): ProjectTag[] {
  const tags = new Set<ProjectTag>();
  projects.forEach(p => p.tags.forEach(t => tags.add(t)));
  return Array.from(tags);
}
