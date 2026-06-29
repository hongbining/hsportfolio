import {
  Boxes,
  Gauge,
  Globe,
  Layers,
  Network,
  Server,
  Users,
  type LucideIcon,
} from "lucide-react"

import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/lib/site-config"

const icons: Record<string, LucideIcon> = {
  network: Network,
  layers: Layers,
  globe: Globe,
  server: Server,
  users: Users,
  boxes: Boxes,
  gauge: Gauge,
}

/** Hero 바로 아래 — 한눈에 읽히는 핵심 역량. */
export function CoreStrengths() {
  return (
    <Section labelledBy="strengths-heading" className="border-b border-border/60">
      <Reveal>
        <SectionHeading
          id="strengths-heading"
          eyebrow="핵심 역량"
          title="설계부터 운영까지, 한 사람이 끝까지"
          description="8년간 실제로 책임져 온 역량입니다. 기능이 아니라 시스템을 만듭니다."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.coreStrengths.map((strength) => {
            const Icon = icons[strength.icon] ?? Network
            return (
              <li
                key={strength.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <Icon
                  className="size-5 text-muted-foreground"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-medium">{strength.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/70 text-pretty">
                  {strength.description}
                </p>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}
