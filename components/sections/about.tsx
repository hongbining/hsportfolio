import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { Overline } from "@/components/overline"
import { CareerTimeline } from "@/components/career-timeline"
import { TechStackGroups } from "@/components/tech-stack-groups"
import { siteConfig } from "@/lib/site-config"

export function About() {
  return (
    <Section
      id="about"
      labelledBy="about-heading"
      className="border-t border-border/60"
    >
      <Reveal>
        <SectionHeading
          id="about-heading"
          eyebrow="소개 · 경력"
          title="기능을 넘어, 시스템을 설계하고 운영합니다."
          description="8년간 SI·공공·콘텐츠·GIS·B2B 도메인에서 설계부터 개발, 배포, 운영까지 책임져 왔습니다."
        />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="space-y-4 text-base leading-relaxed text-foreground/80 text-pretty">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph.slice(0, 16)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <Overline as="h3">경력</Overline>
          <div className="mt-5">
            <CareerTimeline />
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-12 border-t border-border/60 pt-10">
        <Overline as="h3">기술 스택</Overline>
        <div className="mt-5">
          <TechStackGroups />
        </div>
      </Reveal>
    </Section>
  )
}
