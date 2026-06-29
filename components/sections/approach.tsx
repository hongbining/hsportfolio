import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { siteConfig } from "@/lib/site-config"

export function Approach() {
  return (
    <Section id="approach" labelledBy="approach-heading">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <SectionHeading
                id="approach-heading"
                eyebrow="일하는 방식"
                title="개발은 기능을 만드는 일이 아니라, 문제를 해결하는 일입니다."
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.05}>
            <ol>
              {siteConfig.principles.map((principle, index) => (
                <li
                  key={principle.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-border py-7 first:border-t-0 first:pt-0 sm:grid-cols-[3.5rem_1fr] sm:gap-8"
                >
                  <span className="font-heading text-2xl font-semibold tabular-nums text-foreground/20 sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-0.5 sm:pt-1.5">
                    <h3 className="font-heading text-lg font-medium tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-foreground/70 text-pretty">
                      {principle.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
