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
    title: "KH 도매 플랫폼",
    tagline:
      "다중 공급사 B2B 도매 플랫폼을 설계하고 출시하기 — 주문 오케스트레이션, 재고 정합성, 풀필먼트, 공급사 정산까지, 아키텍처에서 프로덕션 운영에 이르는 기록.",
    summary:
      "KH 도매 플랫폼 엔지니어링 케이스 스터디: 시스템 아키텍처, 도메인 모델, 주문·배송 흐름, 공급사 승인 워크플로, 기술적 의사결정과 트레이드오프, 그리고 하루 9,000건의 주문을 처리하는 PostgreSQL 기반 모듈러 모놀리스를 빚어낸 운영 장애들.",
    role: "리드 풀스택 엔지니어",
    timeline: "14개월 · 2023–2024",
    team: "엔지니어 6명",
    domain: "B2B 도매 · 식품/그로서리",
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
      { label: "오버셀 건수", value: "0" },
      { label: "결제 p95", value: "240ms" },
      { label: "공급사 온보딩", value: "18일 → 4일" },
      { label: "최대 주문/일", value: "9,000" },
    ],
  },
  sections,
}
