import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { Reveal } from "@/components/motion/reveal"
import { ArchitectureBackground } from "@/components/sections/architecture-background"
import { TechStack } from "@/components/sections/tech-stack"
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
        <div className="flex max-w-3xl flex-col items-start gap-6 py-24 sm:py-28 lg:py-36">
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
              className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {siteConfig.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg text-muted-foreground text-pretty sm:text-xl">
              {siteConfig.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="xl">
                <a href="#work">
                  View selected work
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="w-full">
            <TechStack label="Core stack" className="pt-4" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
