import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import type { Project } from "@/lib/types"

/** 홈에 노출되는 프로젝트 요약 카드 — 증명 역량과 유도 질문을 한눈에. */
export function CaseStudyCard({ project }: { project: Project }) {
  const href = `/work/${project.slug}`

  return (
    <Card className="gap-0 p-6 transition-colors hover:bg-muted/30 sm:p-7 [--card-spacing:0px]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <Badge variant="secondary" className="font-normal">
          {project.capability}
        </Badge>
        <span className="ml-auto text-sm text-muted-foreground">
          {project.domain} · {project.period}
        </span>
      </div>

      <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-balance sm:text-2xl">
        <Link
          href={href}
          className="rounded-sm hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-2 leading-relaxed text-foreground/80 text-pretty">
        {project.summary}
      </p>

      <p className="mt-4 border-l-2 border-border pl-3 text-sm text-muted-foreground italic">
        면접 질문 — “{project.interviewQuestion}”
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <li key={tech}>
              <Badge variant="outline" className="font-normal">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          aria-label={`${project.title} 케이스 스터디 보기`}
          className="inline-flex shrink-0 items-center gap-1 rounded-sm text-sm font-medium transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          케이스 스터디 보기
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  )
}
