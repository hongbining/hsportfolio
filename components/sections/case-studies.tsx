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
          eyebrow="Selected work"
          title="Case studies, not screenshots"
          description="The business problem, the architecture, and the decisions behind the work — and what changed as a result."
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
