import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const HREF = "/work/kh-wholesale-platform"

const highlights = [
  "오버셀 0건",
  "결제 p95 240ms",
  "공급사 온보딩 18일 → 4일",
  "최대 9,000건/일",
]

/** 대표 엔지니어링 케이스 스터디로 향하는 강조 진입점. */
export function FeaturedCaseStudy() {
  return (
    <Link
      href={HREF}
      aria-label="KH 도매 플랫폼 엔지니어링 케이스 스터디 보기"
      className="group block focus-visible:outline-none"
    >
      <Card className="gap-0 p-6 transition-colors group-hover:bg-muted/40 group-focus-visible:ring-2 group-focus-visible:ring-ring sm:p-8 [--card-spacing:0px]">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Badge>대표 케이스 스터디</Badge>
          <span>B2B 도매 · 플랫폼</span>
        </div>
        <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          KH 도매 플랫폼
        </h3>
        <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
          다중 공급사 B2B 도매 플랫폼 — 카탈로그, 주문, 풀필먼트, 공급사 정산까지.
          사업 배경과 시스템 아키텍처부터 트레이드오프, 트러블슈팅, 그리고 측정된
          성과에 이르는 전체 엔지니어링 기록입니다.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <li key={highlight}>
              <Badge variant="secondary" className="h-7 px-3 font-normal">
                {highlight}
              </Badge>
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
          엔지니어링 케이스 스터디 보기
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </Card>
    </Link>
  )
}
