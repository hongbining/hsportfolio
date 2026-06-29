import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { Reveal } from "@/components/motion/reveal"
import { ArchitectureBackground } from "@/components/sections/architecture-background"
import { siteConfig } from "@/lib/site-config"

export function Hero() {
  return (
    <section
      id="top"
      tabIndex={-1}
      aria-labelledby="hero-heading"
      className="relative isolate scroll-mt-20 overflow-hidden border-b border-border/60 outline-none"
    >
      <ArchitectureBackground />
      <Container>
        <div className="flex max-w-4xl flex-col items-start gap-7 py-28 sm:py-32 lg:py-40">
          {siteConfig.availability ? (
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-sm text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-emerald-500"
                />
                {siteConfig.availability}
              </p>
            </Reveal>
          ) : null}

          <Reveal delay={0.05}>
            <h1
              id="hero-heading"
              className="font-heading text-4xl font-semibold tracking-tight text-balance leading-[1.3] sm:text-5xl sm:leading-[1.28] lg:text-[3.25rem] lg:leading-[1.3]"
            >
              {siteConfig.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground text-pretty">
              {siteConfig.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="w-full">
            <dl className="grid w-full max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="bg-background p-4">
                  <dd className="font-heading text-2xl font-semibold tracking-tight">
                    {stat.value}
                  </dd>
                  <dt className="mt-1 text-xs text-muted-foreground text-pretty">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <ul className="flex flex-wrap gap-2">
              {siteConfig.heroKeywords.map((keyword) => (
                <li key={keyword}>
                  <Badge
                    variant="secondary"
                    className="h-7 rounded-full px-3 text-sm font-normal"
                  >
                    {keyword}
                  </Badge>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="xl">
                <a href="#work">
                  대표 프로젝트 보기
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#about">이력 살펴보기</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
