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

export interface CoreStrength {
  /** lucide icon key. */
  icon: string
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
  /** One-line summary of the role. */
  description: string
  /** 담당 업무 · 성장한 부분 (timeline bullets). */
  highlights: string[]
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

/** Problem → Cause → Solution → Result (the section interviewers read longest). */
export interface TroubleshootingItem {
  problem: string
  cause: string
  solution: string
  result: string
}

export interface CoreFeature {
  title: string
  detail: string
}

/** One node in a visual architecture pipeline (e.g. Spring Boot → GDAL → S3). */
export interface ArchitectureNode {
  label: string
  tech?: string
  /** semantic icon key (mapped to a lucide icon in ArchitectureFlow). */
  icon?: string
  /** brand logo path under /public (e.g. "/logos/spring.svg"); takes precedence. */
  logo?: string
}

/** A short, highlighted snippet of the real core logic (~20 lines). */
export interface CodeHighlight {
  language: string
  filename?: string
  caption?: string
  code: string
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
  /** 팀 규모 (overview card). */
  teamSize: string
  /** 배포 환경 (overview card). */
  deployment: string
  /** The single capability this project is meant to prove. */
  capability: string
  /** One-line "이 프로젝트의 핵심" focus, shown prominently. */
  focus: string
  /** Drives which signature element leads the case study. */
  focusType: "architecture" | "features"
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
  /** 설계 — visual architecture pipeline. */
  architectureFlow: ArchitectureNode[]
  /** 구현 — core features built. */
  coreFeatures: CoreFeature[]
  /** 코드 하이라이트 — the real core logic, ~20 lines. */
  codeHighlight: CodeHighlight
  /** 트레이드오프 — choices and the costs accepted in exchange. */
  tradeoffs: TradeOff[]
  /** 트러블슈팅 — real production issues and how they were resolved. */
  troubleshooting: TroubleshootingItem[]
  /** 결과 — outcomes (검증 가능한 사실만). */
  impact: string[]
  /** 회고 — what you'd carry into the next system. */
  lessonsLearned: string[]
  stack: string[]
  links: ProjectLink[]
  featured: boolean
}
