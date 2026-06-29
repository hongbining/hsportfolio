import type { Project } from "@/lib/types"

// Placeholder case studies. The structure is production-ready; replace the copy,
// metrics, and links with your real work before launch.
const projects: Project[] = [
  {
    slug: "billing-platform",
    title: "Billing platform re-architecture",
    domain: "B2B SaaS · Payments",
    year: 2024,
    role: "Lead Full Stack Engineer",
    summary:
      "Replaced a fragile billing monolith with an event-driven ledger the team could safely change every day.",
    problem:
      "Invoicing logic lived in a monolith that took days to change and produced billing errors as customer volume grew — directly threatening revenue and trust.",
    architecture:
      "Extracted billing into an event-driven service backed by an append-only ledger, fronted by a typed API gateway and migrated incrementally with the strangler pattern.",
    decisions: [
      {
        title: "Event-sourced ledger",
        rationale:
          "An append-only ledger made every balance reconstructable and auditable, removing a whole class of state-corruption bugs.",
      },
      {
        title: "Strangler migration",
        rationale:
          "Routing traffic incrementally let us ship to production weekly with no big-bang cutover risk.",
      },
      {
        title: "Contract tests at the boundary",
        rationale:
          "Consumer-driven contracts kept the new service and legacy callers in sync as both evolved.",
      },
    ],
    tradeoffs: [
      {
        choice: "Event sourcing for the ledger",
        cost: "Added read-model complexity and eventual-consistency edge cases the team had to design around.",
      },
      {
        choice: "Strangler migration over a clean rewrite",
        cost: "Ran the legacy and new billing paths in parallel for two quarters, with the operational overhead of dual-running.",
      },
    ],
    troubleshooting: [
      {
        issue: "Duplicate ledger entries appeared under retry storms.",
        resolution:
          "Made handlers idempotent with a dedupe key on (aggregateId, requestId) enforced at the database, not the application layer.",
      },
      {
        issue: "Balances drifted against the legacy system mid-migration.",
        resolution:
          "Added a nightly shadow-compare job that diffed both ledgers and alerted on mismatch before traffic was shifted.",
      },
    ],
    lessonsLearned: [
      "Idempotency keys belong in the schema, where they can't be bypassed — not in application code.",
      "A shadow-compare harness bought more migration confidence than any amount of staging testing.",
    ],
    impact: [
      "Cut billing change lead time from days to hours",
      "Eliminated double-charge incidents in the new flow",
      "Reconciliation time reduced by ~80%",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Kafka", "AWS"],
    links: [
      {
        type: "case-study",
        label: "Read the full case study",
        href: "/work/billing-platform",
      },
    ],
    featured: true,
  },
  {
    slug: "design-system",
    title: "Design system & component platform",
    domain: "Enterprise · Developer Experience",
    year: 2023,
    role: "Senior Full Stack Engineer",
    summary:
      "Unified five product surfaces on one accessible, versioned component library.",
    problem:
      "Five teams shipped diverging UIs, duplicating work and creating inconsistent, inaccessible experiences for enterprise customers.",
    architecture:
      "Built a headless, token-driven component library with automated accessibility checks and a versioned release pipeline consumed across all products.",
    decisions: [
      {
        title: "Design tokens as the source of truth",
        rationale:
          "Theming from tokens let every product restyle without forking components.",
      },
      {
        title: "Headless primitives",
        rationale:
          "Separating behavior from styling kept accessibility correct while teams kept their own look and feel.",
      },
      {
        title: "Automated a11y gates in CI",
        rationale:
          "Catching regressions in CI made accessibility a default rather than an afterthought.",
      },
    ],
    tradeoffs: [
      {
        choice: "Headless primitives over a pre-styled kit",
        cost: "Teams wrote more wiring code up front in exchange for accessibility and theming that didn't fork.",
      },
      {
        choice: "A single versioned package",
        cost: "Breaking changes needed coordinated upgrades, so we invested in codemods and a strict deprecation policy.",
      },
    ],
    troubleshooting: [
      {
        issue: "Focus traps broke in nested dialogs across products.",
        resolution:
          "Standardized on one focus-management primitive and added regression tests driven by an assistive-tech harness.",
      },
      {
        issue: "Bundle size regressed once adoption was broad.",
        resolution:
          "Enforced per-component entry points and tree-shaking budgets as a CI gate.",
      },
    ],
    lessonsLearned: [
      "Design tokens are the contract; once teams trust them, restyling stops being a migration.",
      "Accessibility holds only if it's verified in CI — documentation alone regresses.",
    ],
    impact: [
      "Adopted by 5 product teams in two quarters",
      "Net-new UI build time down ~40%",
      "Zero critical accessibility issues at audit",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook"],
    links: [
      {
        type: "case-study",
        label: "Read the full case study",
        href: "/work/design-system",
      },
    ],
    featured: true,
  },
  {
    slug: "observability",
    title: "Observability & incident response",
    domain: "Platform · Reliability",
    year: 2022,
    role: "Full Stack Engineer",
    summary:
      "Gave on-call engineers the signals to find and fix issues before customers noticed.",
    problem:
      "Mean time to resolution was high because teams lacked the traces and metrics to locate failures across services.",
    architecture:
      "Instrumented services with OpenTelemetry, standardized structured logging, and built SLO dashboards with actionable, paging alerts.",
    decisions: [
      {
        title: "OpenTelemetry everywhere",
        rationale:
          "A vendor-neutral standard meant tracing survived future backend changes.",
      },
      {
        title: "SLO-based alerting",
        rationale:
          "Alerting on user-facing SLOs cut noise and pointed on-call straight at impact.",
      },
    ],
    tradeoffs: [
      {
        choice: "Vendor-neutral OpenTelemetry",
        cost: "More upfront instrumentation effort than a turnkey agent, traded for long-term portability.",
      },
      {
        choice: "SLO-based paging",
        cost: "Required product and engineering to agree on user-facing objectives before alerts could be tuned.",
      },
    ],
    troubleshooting: [
      {
        issue: "Trace context was lost across an async queue boundary.",
        resolution:
          "Propagated context explicitly through message headers and added a contract test asserting span continuity.",
      },
      {
        issue: "Alert fatigue from symptom-based rules.",
        resolution:
          "Replaced host- and CPU-based alerts with burn-rate alerts on SLOs, sharply cutting noise.",
      },
    ],
    lessonsLearned: [
      "Alert on what users feel, not on what's easy to measure.",
      "Tracing is only as good as its weakest propagation boundary — test the seams.",
    ],
    impact: [
      "MTTR reduced by ~60%",
      "Pager volume down while coverage went up",
      "SLOs adopted as the shared reliability language",
    ],
    stack: ["Node.js", "OpenTelemetry", "Grafana", "PostgreSQL", "AWS"],
    links: [
      {
        type: "case-study",
        label: "Read the full case study",
        href: "/work/observability",
      },
    ],
    featured: true,
  },
]

/** Returns all case studies, newest first. */
export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => b.year - a.year)
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
