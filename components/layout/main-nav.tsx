import { siteConfig } from "@/lib/site-config"

/** Desktop in-page navigation. */
export function MainNav() {
  return (
    <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
      {siteConfig.nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
}
