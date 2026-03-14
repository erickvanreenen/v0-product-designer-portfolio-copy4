export type ProjectTag =
  | "E-commerce"
  | "Omnichannel"
  | "App"
  | "Redesign"
  | "UX Strategy"
  | "Leadership"
  | "EdTech"
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
    title: "EdTech Interactive Learning Experience",
    subtitle: "Designing an intuitive, interactive online learning experience using Articulate Rise",
    tags: ["EdTech", "UX Strategy"],
    role: "Learning Experience Designer",
    team: "Solo Project",
    timeline: "2024",
    tools: ["Articulate Rise", "Figma", "Miro"],
    thumbnail: "/images/thumb-edtech.svg",
    outcomes: [
      "Created engaging interactive learning modules",
      "Improved learner engagement through multimedia content",
      "Delivered accessible, responsive learning experience",
      "Streamlined knowledge retention through interactive assessments"
    ],
    summary: "Designed and developed an interactive online learning experience using Articulate Rise, focusing on creating an intuitive, engaging, and accessible educational journey for learners.",
    context: "This project showcases my EdTech capabilities, demonstrating how UX principles can be applied to educational content design. The goal was to create an interactive learning experience that engages users while effectively communicating complex information.",
    goals: [
      "Create an engaging and intuitive learning flow",
      "Apply instructional design principles to content structure",
      "Ensure accessibility across devices and user needs",
      "Balance visual engagement with educational effectiveness"
    ],
    research: "Applied learning science principles and UX research methodologies to understand how users best absorb and retain information in digital learning environments.",
    insights: [
      "Chunked content improves comprehension and reduces cognitive load",
      "Interactive elements increase engagement and retention",
      "Clear navigation and progress indicators reduce learner anxiety",
      "Multimedia variety caters to different learning styles"
    ],
    iaFlows: "Structured the learning experience with clear progression, logical content grouping, and intuitive navigation that guides learners through the material at their own pace.",
    designExploration: "Explored various content presentation methods and interactive elements to find the optimal balance between engagement and educational effectiveness.",
    finalUI: "Delivered a polished, responsive learning experience with clean typography, thoughtful use of imagery, and interactive assessments that reinforce key concepts.",
    testing: "Conducted user testing with sample learners to validate the learning flow, content clarity, and interaction patterns.",
    outcome: "Successfully created an interactive learning experience that demonstrates the intersection of UX design and educational content development.",
    learnings: [
      "Instructional design and UX design share many common principles",
      "Interactivity should serve the learning objective, not distract from it",
      "Accessibility is crucial in educational content"
    ],
    images: [
      { src: "/images/edtech-structure.jpg", caption: "Learning experience structure and flow" },
      { src: "/images/edtech-interactions.jpg", caption: "Interactive elements and assessments", wide: true }
    ],
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
    images: [
      { src: "/images/uni4-kanban.jpg", caption: "Kanban workflow implementation for design team" },
      { src: "/images/uni4-aggregator.jpg", caption: "Aggregator platform design exploration", wide: true }
    ]
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
