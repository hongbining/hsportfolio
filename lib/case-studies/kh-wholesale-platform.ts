import type { CaseStudy, Section } from "@/lib/case-studies/types"

import businessContext from "./kh/02-business-context.json"
import requirements from "./kh/03-requirements.json"
import architecture from "./kh/04-architecture.json"
import domainModel from "./kh/05-domain-model.json"
import databaseDesign from "./kh/06-database-design.json"
import orderFlow from "./kh/07-order-flow.json"
import shipmentFlow from "./kh/08-shipment-flow.json"
import supplierApproval from "./kh/09-supplier-approval.json"
import technicalDecisions from "./kh/10-technical-decisions.json"
import tradeoffs from "./kh/11-trade-offs.json"
import troubleshooting from "./kh/12-troubleshooting.json"
import results from "./kh/13-results.json"
import lessonsLearned from "./kh/14-lessons-learned.json"

// Section content is authored as validated JSON; the structure is enforced by
// the case-study renderer's types and verified at build time when prerendered.
const sections = [
  businessContext,
  requirements,
  architecture,
  domainModel,
  databaseDesign,
  orderFlow,
  shipmentFlow,
  supplierApproval,
  technicalDecisions,
  tradeoffs,
  troubleshooting,
  results,
  lessonsLearned,
] as unknown as Section[]

export const khWholesalePlatform: CaseStudy = {
  meta: {
    slug: "kh-wholesale-platform",
    title: "KH Wholesale Platform",
    tagline:
      "Designing and shipping a multi-supplier B2B wholesale platform — order orchestration, inventory correctness, fulfillment, and supplier settlement, from architecture to production.",
    summary:
      "An engineering case study on KH Wholesale: the architecture, domain model, order and shipment flows, supplier approval workflow, the technical decisions and trade-offs, and the production incidents that shaped a Postgres-backed modular monolith handling 9,000 orders a day.",
    role: "Lead Full Stack Engineer",
    timeline: "14 months · 2023–2024",
    team: "6 engineers",
    domain: "B2B Wholesale · Food & Grocery",
    stack: [
      "TypeScript",
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "OpenSearch",
      "SQS / SNS",
      "AWS",
    ],
    highlights: [
      { label: "Oversell incidents", value: "0" },
      { label: "Checkout p95", value: "240ms" },
      { label: "Supplier onboarding", value: "18d → 4d" },
      { label: "Peak orders / day", value: "9,000" },
    ],
  },
  sections,
}
