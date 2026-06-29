import { siteConfig } from "@/lib/site-config"

/** 역할·담당 업무·성장을 보여주는 세로 타임라인. */
export function CareerTimeline() {
  return (
    <ol className="relative border-l border-border">
      {siteConfig.experience.map((item) => (
        <li key={`${item.company}-${item.period}`} className="ml-6 pb-8 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute -left-[5px] mt-1.5 size-2.5 rounded-full border-2 border-background bg-foreground"
          />
          <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
          <h4 className="mt-1.5 font-medium">
            {item.role}
            <span className="text-muted-foreground"> · {item.company}</span>
          </h4>
          <p className="mt-1 text-sm text-foreground/70">{item.description}</p>
          <ul className="mt-3 space-y-1.5">
            {item.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-2 text-sm leading-relaxed text-foreground/75 text-pretty"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground/50"
                />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
