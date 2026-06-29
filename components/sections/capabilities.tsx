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
          eyebrow="What I do"
          title="Depth across the stack, anchored in systems thinking"
          description="Not just features — the architecture, data, and delivery that keep them reliable as you scale."
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
