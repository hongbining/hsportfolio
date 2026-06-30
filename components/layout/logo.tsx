import Link from "next/link"

import { siteConfig } from "@/lib/site-config"

/** Wordmark that links back to the home page. */
export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name}, 홈으로`}
      className="group inline-flex items-center gap-2.5 rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <span
        aria-hidden="true"
        className="inline-flex size-7 items-center justify-center rounded-full bg-foreground text-[0.68rem] font-semibold text-background transition-transform group-hover:scale-105"
      >
        {siteConfig.initials}
      </span>
      <span className="font-heading text-[0.95rem] font-medium tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  )
}
