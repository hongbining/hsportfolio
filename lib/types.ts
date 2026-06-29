export type SocialPlatform = "github" | "linkedin" | "x" | "email"

export interface SocialLink {
  platform: SocialPlatform
  label: string
  href: string
}

export interface NavItem {
  title: string
  href: string
}

export type CapabilityKey = "architecture" | "delivery" | "leadership"

export interface Capability {
  key: CapabilityKey
  title: string
  description: string
}

export interface Principle {
  title: string
  description: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string
}

export type ProjectLinkType = "live" | "source" | "case-study"

export interface ProjectLink {
  type: ProjectLinkType
  label: string
  href: string
}

export interface TechnicalDecision {
  title: string
  rationale: string
}

export interface TradeOff {
  /** The choice that was made. */
  choice: string
  /** The cost accepted in exchange. */
  cost: string
}

export interface TroubleshootingItem {
  /** The symptom observed in production. */
  issue: string
  /** How it was diagnosed and fixed. */
  resolution: string
}

/**
 * A case study. Deliberately models engineering substance — the business
 * problem, the architecture, the decisions and their rationale, and the
 * measurable impact — rather than just a screenshot and a title.
 */
export interface Project {
  /** URL-safe identifier for a future `/work/[slug]` route. */
  slug: string
  title: string
  /** e.g. "B2B SaaS · Payments". */
  domain: string
  year: number
  role: string
  /** One-line summary used in cards and metadata. */
  summary: string
  /** The business problem that justified the work. */
  problem: string
  /** A short architecture overview. */
  architecture: string
  /** Key technical decisions and why they were made. */
  decisions: TechnicalDecision[]
  /** Choices made and the costs accepted in exchange. */
  tradeoffs: TradeOff[]
  /** Real production issues and how they were resolved. */
  troubleshooting: TroubleshootingItem[]
  /** What you'd carry into the next system. */
  lessonsLearned: string[]
  /** Measurable outcomes. */
  impact: string[]
  stack: string[]
  links: ProjectLink[]
  featured: boolean
}
