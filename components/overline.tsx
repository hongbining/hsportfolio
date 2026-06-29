import * as React from "react"

import { cn } from "@/lib/utils"

export const overlineClassName =
  "text-xs font-medium tracking-wider text-muted-foreground uppercase"

interface OverlineProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render. Defaults to a paragraph. */
  as?: React.ElementType
}

/** Small uppercase label/eyebrow — the single source of truth for that style. */
export function Overline({ as: Component = "p", className, ...props }: OverlineProps) {
  return <Component className={cn(overlineClassName, className)} {...props} />
}
