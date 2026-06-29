import Link from "next/link"

import { siteConfig } from "@/lib/site-config"

/** Wordmark that links back to the home page. */
export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name}, 홈으로`}
      className="inline-flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      <span
        aria-hidden="true"
        className="inline-flex size-7 items-center justify-center rounded-md bg-foreground text-[0.7rem] font-semibold text-background"
      >
        {siteConfig.initials}
      </span>
      <span className="text-sm font-semibold tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  )
}
