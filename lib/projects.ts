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
  | "Workflow Automation";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
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
    slug: "ucook",
    title: "UCOOK",
    subtitle: "Sign-up usability investigation and funnel redesign",
    tags: ["E-commerce", "Omnichannel", "UX Strategy", "Redesign"],
    role: "UX/UI Designer",
    team: "Product Team, Frontend & Backend Developers, Data Team",
    timeline: "2025",
    tools: ["Figma", "Miro", "Jira", "Google Analytics", "Google Tag Manager", "PostHog", "Maze"],
    thumbnail: "/images/thumb-ucook.svg",
    outcomes: [
      "Sign-up completion rate increased from 3.7% to 9.3% (+5.6%)",
      "Estimated ~R1,296,000/year revenue impact addressed",
      "Validated measurement framework established",
      "Reduced proportional abandonment at top of funnel"
    ],
    summary: "Self-initiated usability investigation into UCOOK's sign-up flow, uncovering critical conversion issues through mixed-methods research and delivering a redesigned funnel that increased completion from 3.7% to 9.3%.",
    context: "Silvertree, working on UCOOK -- a subscription-based meal kit service. Customer service and behavioural data indicated users were abandoning sign-up while still expecting deliveries. Over 60 incomplete sign-ups were recorded in a single week, with retention through the sign-up path at just 1.43%.",
    goals: [
      "Validate whether sign-up was a genuine usability and conversion issue worth prioritising",
      "Identify where and why users were dropping out of the journey",
      "Define a clear, measurable happy path sign-up funnel",
      "Reduce incomplete sign-ups and improve confidence around subscription activation and billing"
    ],
    research: "Led a seven-stage mixed-methods research process: customer service interviews, internal survey (16 respondents), competitive benchmarking (Marley Spoon, Taste Box, Hello Fresh), heuristic evaluation against Nielsen's 10 heuristics, unmoderated testing attempt (Maze), moderated usability testing (3 sessions), and measurement planning with Tag Manager triggers.",
    insights: [
      "Sign-up felt unclear -- users confused subscription activation with simple account creation",
      "Navigation and orientation issues: users couldn't find meal options or return to previous steps",
      "Checkout created confusion around subscription vs on-demand ordering and when payment would occur",
      "All test participants expected to pay immediately, with payment acting as task completion",
      "56% of first billings occurred 1-5 days after sign-up, reinforcing expectation misalignment",
      "No clearly defined baseline funnel existed, preventing effective unmoderated testing"
    ],
    iaFlows: "Defined a clear separation between quick wins (communication, navigation, UI clarity) and larger structural work to redesign the sign-up funnel into a measurable happy path. Identified a key design decision: whether payment should be included within sign-up, balancing user expectation with operational constraints.",
    designExploration: "Explored multiple approaches to funnel structure informed by competitive benchmarking patterns -- clearly structured steps with a definitive payment action at the end. Issues from heuristic evaluation clustered into three themes: communication, navigation, and UI optimisation.",
    finalUI: "Delivered annotated Figma prototypes with interaction documentation covering step transitions, progress behaviour, and error handling. Component-level specifications included scrollIntoView() behaviour, sticky header behaviour, form validation rules, and progress tracking triggers aligned to funnel steps.",
    testing: "Conducted three moderated usability tests surfacing recurring issues around navigation, plan selection, pricing clarity, and subscription vs on-demand confusion. Defined and implemented Tag Manager triggers across each step for funnel measurement.",
    outcome: "The redesigned funnel achieved a 9.3% completion rate, up from 3.7% baseline. The old funnel saw 405 users enter step 1 with 91.1% abandoning; the new funnel had 1,994 users enter with abandonment reduced to 75%. More users reached later stages, indicating increased confidence and clarity.",
    learnings: [
      "Self-initiated research can drive business priorities -- proactively identifying unmet user needs shifted roadmap focus",
      "Form friction on mobile is a strategic revenue issue with outsized effect on conversion and trust",
      "Leading discovery in low-UX maturity environments requires demonstrating value through data, not theory",
      "Mixed methods research builds unshakeable evidence -- combining qualitative with quantitative created a defensible case for change"
    ],
    images: [
      { src: "/images/ucook-analysis.jpg", caption: "Research framework and heuristic evaluation findings" },
      { src: "/images/ucook-mobile.jpg", caption: "Redesigned sign-up funnel with annotated prototypes", wide: true }
    ]
  },
  {
    slug: "faithful-to-nature",
    title: "Faithful to Nature",
    subtitle: "Omnichannel platform redesign in a complex, dev-first environment",
    tags: ["E-commerce", "Redesign", "UX Strategy", "Omnichannel"],
    role: "Lead UX/UI Designer",
    team: "CEO, Co-CEO, CTO, BE Architecture Dev, Acumatica Dev, 2× BE Devs, 2× FE Devs, Product Owner, Project Manager, UX/UI Designer",
    timeline: "September 2024 – Present",
    tools: ["Figma", "Miro", "Jira"],
    thumbnail: "/images/thumb-ftn.svg",
    outcomes: [
      "Consistent filtering system shipped across all category levels",
      "Omnichannel collection options introduced: 17 in-store locations + scheduled delivery",
      "UX advocacy embedded in a previously dev-first product team",
      "Systems thinking applied across Magento 1 → 2 migration constraints"
    ],
    summary: "Lone lead UX/UI designer on South Africa's largest online wellness platform. Working inside a dev-first, low-UX-maturity environment to redesign a complex omnichannel platform migrating from Magento 1 to Magento 2.",
    context: "Faithful to Nature is one of South Africa's largest online wellness retailers. Rapid expansion into brick-and-mortar stores has moved the platform into a full omnichannel environment. The Magento 1 to Magento 2 migration started around 2020. Multiple designers came and went before I joined as the lone lead UX/UI designer in September 2024.",
    goals: [
      "Introduce consistent UX patterns across a fragmented platform",
      "Design within legacy M1 constraints and staggered data availability",
      "Advocate for user needs in a dev-first, low-UX-maturity environment",
      "Deliver omnichannel collection and delivery options"
    ],
    research: "Immersed in the existing platform to map UX debt and misaligned historical decisions. Identified filtering inconsistencies across category levels and gaps in delivery and collection options. Mapped omnichannel dependencies across logistics, data availability, and legacy systems.",
    insights: [
      "Dev-first culture created significant UX debt, patterns changed across category levels",
      "Design was constrained by data availability, not user need",
      "Legacy M1 dependencies limited what was buildable on M2",
      "Systems thinking was non-negotiable. Every decision had downstream consequences.",
      "Advocating for UX required translating user needs into business and technical language"
    ],
    iaFlows: "",
    designExploration: "",
    finalUI: "",
    testing: "Ongoing. Designs reviewed against M1 constraints, data availability, and omnichannel logistics before sign-off. Each feature required cross-functional alignment across tech, product, and operations.",
    outcome: "Consistent filtering system shipped. Omnichannel collection and delivery options in progress. UX practice established in a previously dev-first environment. Project ongoing.",
    learnings: [
      "Balancing UX ideals against data availability and technical constraints is a distinct skill",
      "Systems thinking at scale requires mapping dependencies before designing solutions",
      "Low-UX-maturity environments require evidence-led advocacy, not assumption"
    ],
    images: []
  },
  {
    slug: "flanksource",
    title: "Flanksource",
    subtitle: "Data dev dashboard redesign",
    tags: ["Data Dev", "Redesign", "UX Strategy"],
    role: "UX/UI Designer",
    team: "Nygaard Design",
    timeline: "2025",
    tools: ["Figma", "Miro"],
    thumbnail: "/images/thumb-flanksource.svg",
    outcomes: [
      "Unified dashboard communicating key system health metrics",
      "Consolidated five major components into one view",
      "Improved operational visibility for engineering teams"
    ],
    summary: "Designed a new dashboard for Flanksource's Mission Control platform, surfacing actionable insights from topology, playbooks, catalog, health checks, and notifications into a single view.",
    context: "Flanksource began as a Kubernetes consulting firm. Teams were drowning in data but lacked context. They had metrics dashboards, log tools, and Git for config -- but nothing tying them together. Mission Control was built to close that gap.",
    goals: [
      "Surface relevant actionables in one view",
      "Show general health of services at a glance",
      "Combine catalog, health checks, and notifications",
      "Present recent playbooks and catalog insights"
    ],
    research: "Logged into the beta platform to understand each component: Topology, Playbooks, Catalog, Health Checks, and Notifications. Familiarised with data dev terminology and component functions to inform information architecture and visual representation decisions.",
    insights: [
      "Engineers needed context, not more data",
      "Key components were siloed across separate views",
      "Actionable items were buried in individual tools",
      "Unfamiliar terminology required deep domain learning"
    ],
    iaFlows: "Mapped how key insights from each component could converge into a single dashboard. Defined which data from playbooks, catalog insights, notifications, and health checks should surface by default.",
    designExploration: "Explored different data visualisation methods to communicate system health. Moved from wireframes to structural design representations, testing how to balance density with clarity.",
    finalUI: "Delivered a dashboard design that brings together last-run playbooks, new catalog insights, latest notifications, and failing health checks into a single, scannable interface.",
    testing: "Reviewed designs with the Flanksource product team. Iterated on information density and visual hierarchy based on feedback.",
    outcome: "Delivered a cohesive dashboard design that gives engineering teams a single entry point into system health, replacing the need to check five separate views.",
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
    title: "Overture",
    subtitle: "Promoter documentation and orchestration app",
    tags: ["App", "Workflow Automation"],
    role: "UX Designer",
    team: "Erick van Reenen (UX), Brent Nygaard (UI)",
    timeline: "UX 2 weeks / UI 2 weeks",
    tools: ["Figma", "Miro"],
    thumbnail: "/images/thumb-overture.svg",
    outcomes: [
      "Final product signed off in 4 weeks",
      "Quick iteration skills applied",
      "Full advancing workflow in one app"
    ],
    summary: "Promoter app for seamless event documentation gathering. Promoters, agents and artists during advancing.",
    context: "Advancing is the coordination phase before an event. Documentation flows between promoters, agents and artists. No single tool covered this workflow.",
    goals: [
      "Gather event documentation seamlessly",
      "Connect promoters, agents and artists",
      "Ship fast with clean handoff"
    ],
    research: "Benchmarked leading event platforms globally. Familiarised with user journeys and deliverables during advancing.",
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
    slug: "yumease",
    title: "YumEase",
    subtitle: "Mobile app design from inception to launch",
    tags: ["App", "UX Strategy"],
    role: "Sole UX Designer",
    team: "2 Developers, Product Manager, QA Tester",
    timeline: "July 2023 - August 2024",
    tools: ["Figma", "Miro", "Jira"],
    thumbnail: "/images/thumb-yumease.svg",
    outcomes: [
      "Successfully launched app",
      "4.5 star average rating",
      "Reduced onboarding drop-off by 40%",
      "Positive user feedback on ease of use"
    ],
    summary: "As the sole UX Designer, I shaped the entire user experience of YumEase from concept to launch, working within a cross-functional team to deliver an intuitive and delightful mobile app.",
    context: "YumEase needed a user-centered approach to design a new mobile app in a competitive market. As the only designer on the team, I was responsible for all aspects of the user experience.",
    goals: [
      "Create an intuitive onboarding experience",
      "Design a simple and efficient core user flow",
      "Establish a cohesive visual design system",
      "Ensure accessibility across the app"
    ],
    research: "Conducted user interviews, competitive analysis, and created personas to understand user needs and behaviours. Used findings to inform all design decisions throughout the project.",
    insights: [
      "Users valued simplicity over feature richness",
      "Quick access to core functionality was essential",
      "Social proof significantly influenced user trust",
      "Clear progress indicators reduced anxiety"
    ],
    iaFlows: "Designed information architecture that prioritized the most common user tasks. Created detailed user flows and journey maps to ensure a smooth experience from first open to regular use.",
    designExploration: "Explored multiple visual directions and interaction patterns. Conducted rapid prototyping and testing cycles to validate concepts before development.",
    finalUI: "Delivered a clean, modern design system with consistent components, clear typography, and an approachable colour palette that reflected the app's friendly personality.",
    testing: "Iterative usability testing throughout development with both internal and external users. Quick feedback loops allowed for rapid improvements.",
    outcome: "App launched successfully with positive user reception. Achieved 4.5 star rating with users specifically praising the intuitive design and ease of use.",
    learnings: [
      "Importance of close collaboration with developers",
      "Value of early and frequent user testing",
      "Benefits of design system documentation"
    ],
    images: [
      { src: "/images/yumease-personas.jpg", caption: "User personas developed from research" },
      { src: "/images/yumease-flows.jpg", caption: "User flow mapping for core functionality", wide: true },
      { src: "/images/yumease-screens.jpg", caption: "Final app screens showing key features", wide: true }
    ]
  },
  {
    slug: "edtech-interactive-learning",
    title: "Business Systems Analysis Programme",
    subtitle: "Visual and infographic design for Masterstart, Stellenbosch Business School",
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
    summary: "Visual and infographic design for a Business Systems Analysis course built in Articulate Rise and published on Masterstart, the online learning platform for Stellenbosch Business School.",
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
    iaFlows: "The learning designer led content structure. My role was to support that structure visually, ensuring infographics aligned with the course's progressive logic.",
    designExploration: "Explored how to represent systems thinking, process flows, and stakeholder mapping as accessible visual assets. Iterated with the SME on accuracy, and with the learning designer on placement and pacing.",
    finalUI: "Delivered a set of infographic assets and a consistent visual layout, published through Articulate Rise on the Masterstart platform.",
    outcome: "The course went live on Masterstart. Seeing course content come to life in Articulate Rise, and knowing it was built for Stellenbosch Business School, is work I value.",
    learnings: [
      "Designing for learning is designing for comprehension. The bar is higher than most design contexts.",
      "Collaboration with subject matter experts and learning designers sharpens the brief considerably.",
      "Articulate Rise rewards visual restraint and clear hierarchy above anything else."
    ],
    images: [],
    externalLink: "https://rise.articulate.com/share/XCDWEAquTje11b1vjAzKZahmZziR0gaj#/lessons/rMXP5z-dQk-xwn-pu5qgWJAxQpOXijVW"
  },
  {
    slug: "uni4-online",
    title: "UNi4 Online Aggregator",
    subtitle: "Multi-brand education platform consolidation",
    tags: ["EdTech", "UX Strategy", "Leadership"],
    role: "Visual Team Lead & UX Designer",
    team: "Junior Designers, Learning Designers, Project Manager",
    timeline: "May 2021 - August 2024",
    tools: ["Figma", "Miro", "Articulate 360", "Adobe Creative Suite"],
    thumbnail: "/images/thumb-uni4.svg",
    outcomes: [
      "Increased team productivity significantly",
      "Met all KPIs consistently",
      "Improved designer collaboration",
      "Successful aggregator platform design"
    ],
    summary: "Led the visual design team while designing the UX for a new aggregator website that consolidates multiple education brands onto a single platform.",
    context: "UNi4 Online faced challenges with designers working in isolation, leading to inconsistent outputs and difficulty meeting KPIs. Additionally, there was a need to consolidate multiple education brands onto one platform.",
    goals: [
      "Streamline design team workflows",
      "Improve team collaboration and morale",
      "Design unified aggregator platform",
      "Create consistent brand experiences"
    ],
    research: "Analysed existing workflows, conducted team interviews, and studied competitor education platforms to inform both team process improvements and platform design.",
    insights: [
      "Designers needed clearer project visibility",
      "Regular check-ins improved team morale",
      "Users needed seamless navigation between brands",
      "Content consistency was crucial for trust across multiple educational brands"
    ],
    iaFlows: "Designed information architecture that allowed users to navigate between brands while maintaining clear context. Created unified design patterns that worked across all brands.",
    designExploration: "Explored approaches that balanced individual brand identities with platform consistency. Tested concepts with stakeholders.",
    finalUI: "Delivered a cohesive design that maintained brand distinction while providing a unified user experience across the aggregator platform.",
    testing: "",
    outcome: "Team productivity increased significantly, KPIs were consistently met, and the aggregator platform received positive feedback from stakeholders.",
    learnings: [
      "Leadership requires balancing individual needs with team goals",
      "Process improvements can dramatically impact output quality and efficiency",
      "Platforms needs flexibility for multi-brand contexts under one roof"
    ],
    externalLink: "https://www.uni4online.com/",
    images: [
      { src: "/images/uni4-kanban.jpg", caption: "Kanban workflow implementation for design team" },
      { src: "/images/uni4-aggregator.jpg", caption: "Aggregator platform design exploration", wide: true }
    ]
  },
  {
    slug: "eduvos-content-writing",
    title: "Eduvos Digital Design Curriculum",
    subtitle: "Merging UX and UI into a unified degree programme module",
    tags: ["EdTech", "Content Design", "Leadership"],
    role: "Content Writer",
    team: "Academic Team, Learning Designers",
    timeline: "May 2024 – Present",
    tools: ["Figma", "Adobe Creative Suite", "Google Docs"],
    thumbnail: "/images/thumb-edtech.svg",
    outcomes: [
      "Unified UX and UI module delivered",
      "Formative and summative assessments authored",
      "Lesson content developed across the degree",
      "Curriculum aligned to industry practice"
    ],
    summary: "Content writing and course creation for Eduvos. Tasked to merge and consolidate the UX and UI modules into the three-year Digital Design degree programme as a unified module.",
    context: "I started doing content writing and course creation at Eduvos in May 2024. I was tasked to merge and consolidate the UX and UI modules into the three-year Digital Design degree programme as a unified module. It involved evaluating the relevance of existing content, determining what to retain, discard, or introduce.",
    goals: [
      "Evaluate relevance of existing UX and UI content",
      "Determine what to retain, discard, or introduce",
      "Craft formative and summative assessments",
      "Develop lesson content through educational writing and design"
    ],
    research: "Evaluated the existing UX and UI module content across the three-year Digital Design degree. Assessed relevance, alignment to industry standards, and learning objectives to determine what to retain, discard, or introduce.",
    insights: [
      "Existing modules treated UX and UI as separate disciplines",
      "Students needed a more integrated, real-world approach",
      "Assessment design requires clarity on learning outcomes first",
      "Practical exercises improve retention and engagement"
    ],
    iaFlows: "Structured the unified module so each exercise builds progressively toward the summative assessment. Clear learning objectives anchored every piece of content.",
    designExploration: "Explored how to balance theory with practical application across six weeks of formative exercises. Each brief was designed to mirror real industry workflows.",
    finalUI: "Delivered a cohesive module with integrated assessments, lesson content, and practical briefs aligned to the Digital Design degree programme outcomes.",
    testing: "",
    outcome: "The unified UX/UI module was delivered with formative and summative assessments, lesson plans, and practical briefs. I enjoyed this work as it challenged me to really think and assess what the most relevant things are to introduce into the learning path.",
    learnings: [
      "Teaching sharpens your own understanding of a discipline",
      "Curriculum design is a form of UX: clarity and flow matter",
      "Relevance to industry must drive every content decision"
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
