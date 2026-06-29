import { Container } from "@/components/container"
import { SocialLinks } from "@/components/social-links"
import { siteConfig } from "@/lib/site-config"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60">
      <Container>
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-semibold tracking-tight">
              {siteConfig.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.role} · {siteConfig.location}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <SocialLinks />
        </div>

        <div className="flex flex-col gap-2 border-t border-border/60 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
      </Container>
    </footer>
  )
}
