import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { Overline } from "@/components/overline"
import { Blocks } from "@/components/case-study/blocks"
import { CaseStudyToc } from "@/components/case-study/toc"
import { TechStack } from "@/components/sections/tech-stack"
import { khWholesalePlatform as caseStudy } from "@/lib/case-studies/kh-wholesale-platform"
import { siteConfig } from "@/lib/site-config"

const { meta, sections } = caseStudy

export const metadata: Metadata = {
  title: meta.title,
  description: meta.summary,
  alternates: { canonical: `/work/${meta.slug}` },
  openGraph: {
    type: "article",
    url: `/work/${meta.slug}`,
    title: `${meta.title} — ${siteConfig.name}`,
    description: meta.summary,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.summary,
  },
}

const tocItems = [
  { id: "overview", title: "Overview" },
  ...sections.map((section) => ({ id: section.id, title: section.title })),
]

const factSheet = [
  { label: "담당 역할", value: meta.role },
  { label: "기간", value: meta.timeline },
  { label: "팀 규모", value: meta.team },
  { label: "도메인", value: meta.domain },
]

function ArticleJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: meta.title,
    description: meta.summary,
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    about: meta.domain,
    keywords: meta.stack.join(", "),
    url: `${siteConfig.url}/work/${meta.slug}`,
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function CaseStudyPage() {
  return (
    <Container>
      <ArticleJsonLd />
      <article className="py-12 sm:py-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          작업 목록으로
        </Link>

        <header id="overview" className="mt-8 scroll-mt-20">
          <Overline>엔지니어링 케이스 스터디</Overline>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            {meta.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground text-pretty">
            {meta.tagline}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 sm:grid-cols-4">
            {factSheet.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs tracking-wider text-muted-foreground uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-pretty">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6">
            <TechStack items={meta.stack} />
          </div>

          {meta.highlights.length ? (
            <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {meta.highlights.map((highlight) => (
                <div key={highlight.label} className="bg-background p-5">
                  <dd className="font-heading text-2xl font-semibold tracking-tight">
                    {highlight.value}
                  </dd>
                  <dt className="mt-1 text-sm text-muted-foreground text-pretty">
                    {highlight.label}
                  </dt>
                </div>
              ))}
            </dl>
          ) : null}
        </header>

        <div className="mt-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <CaseStudyToc items={tocItems} />
            </div>
          </aside>

          <div className="min-w-0 max-w-3xl">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                tabIndex={-1}
                className="scroll-mt-20 border-t border-border/60 py-10 outline-none first:border-t-0 first:pt-0"
              >
                <Overline>{`섹션 ${String(index + 1).padStart(2, "0")}`}</Overline>
                <h2
                  id={`${section.id}-heading`}
                  className="mt-2 font-heading text-2xl font-semibold tracking-tight text-balance"
                >
                  {section.title}
                </h2>
                {section.summary ? (
                  <p className="mt-2 text-muted-foreground text-pretty">
                    {section.summary}
                  </p>
                ) : null}
                <div className="mt-6">
                  <Blocks blocks={section.blocks} />
                </div>
              </section>
            ))}

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-8">
              <Button asChild size="xl">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="size-4" aria-hidden="true" />
                  이 프로젝트 문의하기
                </a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/#work">다른 프로젝트 보기</Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Container>
  )
}
