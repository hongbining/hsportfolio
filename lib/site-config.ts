import type {
  Capability,
  ExperienceItem,
  NavItem,
  Principle,
  SkillGroup,
  SocialLink,
} from "@/lib/types"

// Placeholder content. Replace the values below with your real details.
// Identity fields are intentionally left as TODO so nothing fake ships by mistake.
const url = "https://your-domain.com" // TODO
const email = "you@example.com" // TODO

const nav: NavItem[] = [
  { title: "Work", href: "#work" },
  { title: "Approach", href: "#approach" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
]

const socials: SocialLink[] = [
  { platform: "github", label: "GitHub", href: "https://github.com/hongbining" },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/your-handle",
  },
  { platform: "x", label: "X", href: "https://x.com/your-handle" },
  { platform: "email", label: "Email", href: `mailto:${email}` },
]

/** Primary technologies surfaced as pills in the hero. */
const techStack: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "Docker",
]

const capabilities: Capability[] = [
  {
    key: "architecture",
    title: "Architecture & systems",
    description:
      "Service boundaries, data models, and APIs designed to stay simple as traffic and teams grow.",
  },
  {
    key: "delivery",
    title: "Full-stack delivery",
    description:
      "End-to-end features shipped across the frontend, backend, and the infrastructure underneath.",
  },
  {
    key: "leadership",
    title: "Engineering leadership",
    description:
      "Setting technical direction, raising the quality bar, and mentoring engineers as they grow.",
  },
]

const principles: Principle[] = [
  {
    title: "Start from the business problem",
    description:
      "Every technical decision traces back to an outcome the business actually cares about.",
  },
  {
    title: "Design for change",
    description:
      "Optimize for the changes you'll make next quarter, not only the feature in front of you.",
  },
  {
    title: "Make quality the default",
    description:
      "Types, tests, and observability so that the correct path is also the easiest path.",
  },
  {
    title: "Name the trade-offs",
    description:
      "Document the why, make the costs explicit, and keep decisions reversible where it counts.",
  },
]

const skills: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Go"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL", "Redis"] },
  { category: "Platform", items: ["AWS", "Docker", "Terraform", "CI/CD"] },
]

const experience: ExperienceItem[] = [
  {
    role: "Senior Full Stack Engineer",
    company: "Company Name", // TODO
    period: "2021 — Present",
    description:
      "Own billing and platform services end to end; led a re-architecture that cut change lead time from days to hours and removed a class of revenue-impacting incidents.",
  },
  {
    role: "Full Stack Engineer",
    company: "Previous Company", // TODO
    period: "2017 — 2021",
    description:
      "Shipped customer-facing features and the APIs behind them, and introduced the testing and observability practices the team still runs on.",
  },
]

export const siteConfig = {
  name: "Your Name", // TODO
  initials: "YN", // TODO
  role: "Full Stack Engineer",
  yearsOfExperience: 8,
  /** Default meta description. Keep under ~160 characters. */
  description:
    "Full Stack Engineer with 8 years building reliable, scalable web platforms for enterprise and B2B teams.",
  /** Hero headline and supporting copy. */
  headline: "Engineering reliable systems for enterprise teams.",
  subheadline:
    "I'm a full stack engineer with 8 years of experience designing and shipping production systems — from data models and APIs to the interfaces your customers rely on.",
  location: "City, Country", // TODO
  email,
  url,
  /** Set to null to hide the availability indicator. */
  availability: "Available for senior & staff engineering roles" as string | null,
  about: [
    "I'm a full stack engineer who does my best work where product meets platform — turning ambiguous business problems into systems that stay reliable as they grow.",
    "Over the past eight years I've shipped across the stack: data models and APIs, the services that run them, and the interfaces customers touch every day. I care about the parts that don't demo well — observability, testing, and clear boundaries — because they're what let a team keep moving.",
  ],
  nav,
  socials,
  techStack,
  capabilities,
  principles,
  skills,
  experience,
} as const

export type SiteConfig = typeof siteConfig
