import * as React from "react"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Overline } from "@/components/overline"
import { TechStack } from "@/components/sections/tech-stack"
import type { Project } from "@/lib/types"

interface CaseStudyCardProps {
  project: Project
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Overline as="dt">{label}</Overline>
      <dd className="mt-2 text-sm text-muted-foreground">{children}</dd>
    </div>
  )
}

/**
 * A condensed case study for the homepage: architecture lead-in, then
 * problem → technical decisions → impact, linking to the full write-up.
 */
export function CaseStudyCard({ project }: CaseStudyCardProps) {
  const headingId = `case-${project.slug}`
  const href = `/work/${project.slug}`

  return (
    <Card className="[--card-spacing:--spacing(6)] sm:[--card-spacing:--spacing(8)]">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <span>{project.domain}</span>
          <span aria-hidden="true">·</span>
          <span>{project.year}</span>
          <Badge variant="outline" className="ml-auto font-normal">
            {project.role}
          </Badge>
        </div>
        <h3
          id={headingId}
          className="mt-3 font-heading text-xl font-semibold tracking-tight text-balance sm:text-2xl"
        >
          <Link
            href={href}
            className="rounded-sm hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-base text-muted-foreground text-pretty">
          {project.summary}
        </p>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground text-pretty">
          <span className="font-medium text-foreground">시스템 아키텍처. </span>
          {project.architecture}
        </p>

        <dl className="mt-6 grid gap-6 md:grid-cols-3">
          <Block label="문제">{project.problem}</Block>

          <Block label="기술적 의사결정">
            <ul className="space-y-2">
              {project.decisions.map((decision) => (
                <li key={decision.title}>
                  <span className="font-medium text-foreground">
                    {decision.title}.
                  </span>{" "}
                  {decision.rationale}
                </li>
              ))}
            </ul>
          </Block>

          <Block label="성과">
            <ul className="space-y-2">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-foreground"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Block>
        </dl>

        <Separator className="my-6" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <TechStack items={project.stack} />
          <Link
            href={href}
            aria-label={`${project.title} 전체 케이스 스터디 보기`}
            className="inline-flex items-center gap-1 rounded-sm text-sm font-medium transition-colors hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            전체 케이스 스터디 보기
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
