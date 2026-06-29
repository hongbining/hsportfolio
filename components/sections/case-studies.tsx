import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/motion/reveal"
import { CaseStudyCard } from "@/components/sections/case-study-card"
import { getAllProjects } from "@/lib/projects"

export function CaseStudies() {
  const projects = getAllProjects()

  return (
    <Section
      id="work"
      labelledBy="work-heading"
      className="border-y border-border/60 bg-muted/20"
    >
      <Reveal>
        <SectionHeading
          id="work-heading"
          eyebrow="대표 프로젝트"
          title="4개 프로젝트, 4가지 역량"
          description="비즈니스 설계, 기술 난이도, 운영 서비스, Enterprise CMS — 서로 다른 강점을 각각 증명합니다."
        />
      </Reveal>

      <ul className="mt-12 flex flex-col gap-5">
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
