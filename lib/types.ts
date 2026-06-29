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

export interface CoreFeature {
  title: string
  detail: string
}

/**
 * A case study. Deliberately models engineering substance — the business
 * problem, the architecture, the decisions and their rationale, and the
 * measurable impact — rather than just a screenshot and a title.
 */
export interface Project {
  /** URL-safe identifier for the `/work/[slug]` route. */
  slug: string
  title: string
  /** e.g. "B2B 커머스 · 폐쇄몰". */
  domain: string
  /** Sort order on the home grid (ascending). */
  order: number
  year: number
  /** Human-readable period, e.g. "2026.04 ~ 현재". */
  period: string
  role: string
  /** The single capability this project is meant to prove. */
  capability: string
  /** The interview question this case study should provoke. */
  interviewQuestion: string
  /** One-line summary used in cards and metadata. */
  summary: string
  /** 문제 — the business problem that justified the work. */
  problem: string
  /** 제약조건 — constraints that shaped every decision. */
  constraints: string[]
  /** 판단 — key technical decisions and why they were made. */
  decisions: TechnicalDecision[]
  /** 설계 — a short architecture overview. */
  architecture: string
  /** 구현 — core features built. */
  coreFeatures: CoreFeature[]
  /** 트레이드오프 — choices and the costs accepted in exchange. */
  tradeoffs: TradeOff[]
  /** 트러블슈팅 — real production issues and how they were resolved. */
  troubleshooting: TroubleshootingItem[]
  /** 결과 — outcomes (verifiable artefacts or [실제 수치 입력]). */
  impact: string[]
  /** 회고 — what you'd carry into the next system. */
  lessonsLearned: string[]
  stack: string[]
  links: ProjectLink[]
  featured: boolean
}
