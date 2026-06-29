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
          eyebrow="일하는 방식"
          title="엔지니어링 원칙"
          description="모든 팀과 코드베이스, 그리고 의사결정에 기본값으로 가져가는 원칙입니다."
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
