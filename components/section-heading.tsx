import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  /** id applied to the heading so a parent section can reference it. */
  id?: string
  eyebrow?: string
  title: string
  description?: string
  align?: "start" | "center"
  className?: string
}

/** A reusable `<h2>` heading block for in-page sections. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>
      ) : null}
      <h2
        id={id}
        className="font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  )
}
