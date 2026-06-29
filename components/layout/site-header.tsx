import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { Logo } from "@/components/layout/logo"
import { MainNav } from "@/components/layout/main-nav"
import { MobileNav } from "@/components/layout/mobile-nav"
import { ThemeToggle } from "@/components/layout/theme-toggle"

/** Sticky, translucent site header. */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/65">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />
          <div className="flex items-center gap-1">
            <MainNav />
            <span
              aria-hidden="true"
              className="mx-1 hidden h-5 w-px bg-border md:block"
            />
            <ThemeToggle />
            <Button asChild size="sm" className="ml-1 hidden md:inline-flex">
              <a href="#contact">Get in touch</a>
            </Button>
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  )
}
