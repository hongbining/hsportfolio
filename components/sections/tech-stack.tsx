import { Badge } from "@/components/ui/badge"
import { Overline } from "@/components/overline"
import { siteConfig } from "@/lib/site-config"
import { cn } from "@/lib/utils"

interface TechStackProps {
  items?: readonly string[]
  label?: string
  className?: string
}

/** Renders technologies as a wrapped row of pills. */
export function TechStack({
  items = siteConfig.techStack,
  label,
  className,
}: TechStackProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {label ? <Overline>{label}</Overline> : null}
      <ul className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <li key={tech}>
            <Badge variant="secondary" className="h-7 px-3 text-sm font-normal">
              {tech}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}
