import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { CaseStudyCard } from "@/components/sections/case-study-card"
import { FeaturedCaseStudy } from "@/components/sections/featured-case-study"
import { getFeaturedProjects } from "@/lib/projects"

export function CaseStudies() {
  const projects = getFeaturedProjects()

  return (
    <Section
      id="work"
      labelledBy="work-heading"
      className="border-y border-border/60 bg-muted/20"
    >
      <Reveal>
        <SectionHeading
          id="work-heading"
          eyebrow="주요 프로젝트"
          title="스크린샷이 아니라, 엔지니어링 케이스 스터디"
          description="비즈니스 문제, 시스템 아키텍처, 그리고 그 뒤의 의사결정 — 그래서 무엇이 달라졌는지까지 담았습니다."
        />
      </Reveal>

      <Reveal delay={0.05} className="mt-12">
        <FeaturedCaseStudy />
      </Reveal>

      <ul className="mt-6 flex flex-col gap-6">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Reveal delay={index === 0 ? 0 : 0.05}>
              <CaseStudyCard project={project} />
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
