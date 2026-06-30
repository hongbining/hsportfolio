import Link from "next/link"

import { siteConfig } from "@/lib/site-config"

/** Name-only wordmark that links back to the home page. */
export function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name}, 홈으로`}
      className="inline-flex items-center rounded-md font-heading text-base font-bold tracking-tight focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      {siteConfig.name}
    </Link>
  )
}
