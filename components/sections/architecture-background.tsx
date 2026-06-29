import { cn } from "@/lib/utils"

/**
 * Decorative blueprint grid evoking system architecture. Rendered with an SVG
 * pattern and faded at the edges with a radial mask. Purely presentational.
 */
export function ArchitectureBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className
      )}
    >
      <svg
        className="absolute inset-0 size-full text-foreground/[0.06] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_0%,#000_55%,transparent_100%)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="architecture-grid"
            width="56"
            height="56"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M56 0H0V56"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#architecture-grid)" />
      </svg>
    </div>
  )
}
