import * as React from "react"

import { Container } from "@/components/container"
import { cn } from "@/lib/utils"

interface SectionProps extends React.ComponentProps<"section"> {
  /** id of the heading that labels this section, for `aria-labelledby`. */
  labelledBy?: string
  /** Extra classes for the inner container. */
  containerClassName?: string
}

/** Semantic, consistently spaced page section wrapped in a `Container`. */
export function Section({
  className,
  containerClassName,
  labelledBy,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      // -1 makes the section a programmatic focus target so keyboard focus
      // follows in-page anchor navigation; scroll-mt offsets the sticky header.
      tabIndex={-1}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-20 py-16 outline-none sm:py-20 lg:py-24",
        className
      )}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
