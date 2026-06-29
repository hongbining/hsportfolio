import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/lib/site-config"

export function Approach() {
  return (
    <Section id="approach" labelledBy="approach-heading">
      <Reveal>
        <SectionHeading
          id="approach-heading"
          eyebrow="How I work"
          title="Engineering principles"
          description="The defaults I bring to every team, codebase, and decision."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {siteConfig.principles.map((principle, index) => (
            <li key={principle.title} className="bg-background p-6">
              <span className="font-mono text-sm text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-heading text-base font-medium">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  )
}
