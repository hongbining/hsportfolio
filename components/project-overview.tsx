import { Badge } from "@/components/ui/badge"
import { Overline } from "@/components/overline"
import type { Project } from "@/lib/types"

/** 프로젝트 시작부의 한눈에 보는 Overview 카드. */
export function ProjectOverview({ project }: { project: Project }) {
  const rows = [
    { label: "담당 역할", value: project.role },
    { label: "개발 기간", value: project.period },
    { label: "팀 규모", value: project.teamSize },
    { label: "배포 환경", value: project.deployment },
  ]

  return (
    <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
      <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label}>
            <Overline as="dt">{row.label}</Overline>
            <dd className="mt-1 text-sm font-medium text-pretty">{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-5 border-t border-border pt-4">
        <Overline as="p">사용 기술</Overline>
        <ul className="mt-2.5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge variant="outline" className="font-normal">
                {tech}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
