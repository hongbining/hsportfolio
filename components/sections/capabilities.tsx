import { Layers, Network, Users, type LucideIcon } from "lucide-react"

import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/lib/site-config"
import type { CapabilityKey } from "@/lib/types"

const icons: Record<CapabilityKey, LucideIcon> = {
  architecture: Network,
  delivery: Layers,
  leadership: Users,
}

export function Capabilities() {
  return (
    <Section labelledBy="capabilities-heading">
      <Reveal>
        <SectionHeading
          id="capabilities-heading"
          eyebrow="하는 일"
          title="시스템 관점으로, 스택 전반을 깊이 있게"
          description="기능만이 아니라 — 규모가 커져도 안정적으로 돌아가게 하는 아키텍처·데이터·운영까지 책임집니다."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {siteConfig.capabilities.map((capability) => {
            const Icon = icons[capability.key]
            return (
              <li key={capability.key} className="bg-background p-6">
                <Icon
                  className="size-5 text-muted-foreground"
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-heading text-base font-medium">
                  {capability.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {capability.description}
                </p>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}
