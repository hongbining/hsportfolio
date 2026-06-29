"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  title: string
}

/** Sticky table of contents with scroll-spy highlighting of the active section. */
export function CaseStudyToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = React.useState<string>(items[0]?.id ?? "")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )
        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-15% 0px -75% 0px" }
    )

    for (const item of items) {
      const element = document.getElementById(item.id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-xs font-medium tracking-wider text-muted-foreground uppercase">
        On this page
      </p>
      <ul className="border-l border-border">
        {items.map((item, index) => {
          const isActive = activeId === item.id
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "-ml-px flex gap-2 border-l py-1 pl-4 transition-colors",
                  isActive
                    ? "border-foreground font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-muted-foreground tabular-nums">
                  {String(index).padStart(2, "0")}
                </span>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
