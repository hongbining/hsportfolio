import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { Overline } from "@/components/overline"
import { siteConfig } from "@/lib/site-config"

function Experience() {
  return (
    <div>
      <Overline as="h3">경력</Overline>
      <ul className="mt-4 flex flex-col">
        {siteConfig.experience.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="flex flex-col gap-2 border-t border-border py-5 first:border-t-0 first:pt-0"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <p className="text-sm font-medium">{item.role}</p>
                <p className="text-sm text-muted-foreground">{item.company}</p>
              </div>
              <p className="text-sm text-muted-foreground sm:text-right">
                {item.period}
              </p>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function About() {
  return (
    <Section
      id="about"
      labelledBy="about-heading"
      className="border-t border-border/60"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title={`${siteConfig.yearsOfExperience}년간, 팀이 믿고 맡길 수 있는 소프트웨어를 만들어 왔습니다.`}
            />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col gap-10">
            <Reveal>
              <div className="space-y-4 text-base text-muted-foreground text-pretty">
                {siteConfig.about.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <Experience />
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  )
}
