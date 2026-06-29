import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const HREF = "/work/kh-wholesale-platform"

const highlights = [
  "0 oversell incidents",
  "Checkout p95 240ms",
  "Onboarding 18d → 4d",
  "9k orders/day peak",
]

/** Prominent entry point to the flagship engineering case study. */
export function FeaturedCaseStudy() {
  return (
    <Link
      href={HREF}
      aria-label="Read the KH Wholesale Platform engineering case study"
      className="group block focus-visible:outline-none"
    >
      <Card className="gap-0 p-6 transition-colors group-hover:bg-muted/40 group-focus-visible:ring-2 group-focus-visible:ring-ring sm:p-8 [--card-spacing:0px]">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <Badge>Featured case study</Badge>
          <span>B2B Wholesale · Platform</span>
        </div>
        <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          KH Wholesale Platform
        </h3>
        <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">
          A multi-supplier B2B wholesale platform — catalog, ordering,
          fulfillment, and supplier settlement. A full engineering write-up from
          business context and architecture through trade-offs, troubleshooting,
          and measured results.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <li key={highlight}>
              <Badge variant="secondary" className="h-7 px-3 font-normal">
                {highlight}
              </Badge>
            </li>
          ))}
        </ul>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium">
          Read the engineering case study
          <ArrowRight className="size-4" aria-hidden="true" />
        </span>
      </Card>
    </Link>
  )
}
