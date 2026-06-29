import * as React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, Mail } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { TechStack } from "@/components/sections/tech-stack"
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/work/${project.slug}`,
      title: `${project.title} — ${siteConfig.name}`,
      description: project.summary,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  }
}

function CaseSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="grid gap-4 border-t border-border py-8 first:border-t-0 first:pt-0 lg:grid-cols-[200px_1fr] lg:gap-10 lg:py-10">
      <h2 className="font-heading text-sm font-semibold tracking-tight">
        {title}
      </h2>
      <div className="max-w-2xl text-muted-foreground">{children}</div>
    </section>
  )
}

function TermList({ items }: { items: { term: string; detail: string }[] }) {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li key={item.term}>
          <p className="font-medium text-foreground text-pretty">{item.term}</p>
          <p className="mt-1 text-sm text-pretty">{item.detail}</p>
        </li>
      ))}
    </ul>
  )
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <Container>
      <article className="py-12 sm:py-16 lg:py-20">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          작업 목록으로
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
            <span>{project.domain}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <Badge variant="outline" className="font-normal">
              {project.role}
            </Badge>
          </div>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {project.summary}
          </p>
          <div className="mt-6">
            <TechStack items={project.stack} />
          </div>
        </header>

        <div className="mt-10">
          <CaseSection title="해결하려는 문제">
            <p className="text-base text-pretty">{project.problem}</p>
          </CaseSection>

          <CaseSection title="시스템 아키텍처">
            <p className="text-base text-pretty">{project.architecture}</p>
          </CaseSection>

          <CaseSection title="기술적 의사결정">
            <TermList
              items={project.decisions.map((d) => ({
                term: d.title,
                detail: d.rationale,
              }))}
            />
          </CaseSection>

          <CaseSection title="트레이드오프">
            <TermList
              items={project.tradeoffs.map((t) => ({
                term: t.choice,
                detail: t.cost,
              }))}
            />
          </CaseSection>

          <CaseSection title="트러블슈팅">
            <TermList
              items={project.troubleshooting.map((t) => ({
                term: t.issue,
                detail: t.resolution,
              }))}
            />
          </CaseSection>

          <CaseSection title="성과">
            <ul className="space-y-3">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-2 text-pretty">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-foreground"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection title="배운 점">
            <ul className="space-y-3">
              {project.lessonsLearned.map((lesson) => (
                <li key={lesson} className="flex gap-2 text-pretty">
                  <span aria-hidden="true" className="text-muted-foreground/60">
                    —
                  </span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </CaseSection>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
          <Button asChild size="xl">
            <a href={`mailto:${siteConfig.email}`}>
              <Mail className="size-4" aria-hidden="true" />
              프로젝트 문의하기
            </a>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link href="/#work">다른 프로젝트 보기</Link>
          </Button>
        </div>
      </article>
    </Container>
  )
}
