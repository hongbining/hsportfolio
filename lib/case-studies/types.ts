// Content model for long-form engineering case studies. Each section is an
// ordered list of typed blocks rendered by the case-study block renderer.

export type CalloutTone = "note" | "warning" | "insight"

export interface LeadBlock {
  kind: "lead"
  text: string
}

export interface ProseBlock {
  kind: "prose"
  paragraphs: string[]
}

export interface BulletsBlock {
  kind: "bullets"
  items: string[]
}

export interface NumberedBlock {
  kind: "numbered"
  items: string[]
}

export interface TableBlock {
  kind: "table"
  caption?: string
  columns: string[]
  rows: string[][]
}

export interface CodeBlock {
  kind: "code"
  language: string
  caption?: string
  code: string
}

export interface CalloutBlock {
  kind: "callout"
  tone: CalloutTone
  title?: string
  body: string
}

export interface DefinitionsBlock {
  kind: "definitions"
  definitions: { term: string; description: string }[]
}

export interface StatsBlock {
  kind: "stats"
  metrics: { label: string; value: string; delta?: string; note?: string }[]
}

export interface ArchitectureBlock {
  kind: "architecture"
  layers: {
    name: string
    description?: string
    components: { name: string; role: string }[]
  }[]
  notes?: string[]
}

export interface FlowBlock {
  kind: "flow"
  title?: string
  steps: {
    step: number
    actor?: string
    title: string
    detail: string
    state?: string
    branches?: string[]
  }[]
}

export interface StatesBlock {
  kind: "states"
  title?: string
  states: {
    state: string
    description: string
    transitions: { on: string; to: string }[]
  }[]
}

export interface EntitiesBlock {
  kind: "entities"
  entities: {
    name: string
    description?: string
    fields: { name: string; type: string; note?: string }[]
    relations?: string[]
  }[]
}

export type Block =
  | LeadBlock
  | ProseBlock
  | BulletsBlock
  | NumberedBlock
  | TableBlock
  | CodeBlock
  | CalloutBlock
  | DefinitionsBlock
  | StatsBlock
  | ArchitectureBlock
  | FlowBlock
  | StatesBlock
  | EntitiesBlock

export interface Section {
  id: string
  title: string
  summary?: string
  blocks: Block[]
}

export interface CaseStudyMeta {
  slug: string
  title: string
  tagline: string
  summary: string
  role: string
  timeline: string
  team: string
  domain: string
  stack: string[]
  highlights: { label: string; value: string }[]
}

export interface CaseStudy {
  meta: CaseStudyMeta
  sections: Section[]
}
