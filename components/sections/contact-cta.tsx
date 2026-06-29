import { ArrowUpRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/container"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { SocialLinks } from "@/components/social-links"
import { siteConfig } from "@/lib/site-config"

export function ContactCta() {
  const linkedin = siteConfig.socials.find(
    (social) => social.platform === "linkedin"
  )

  return (
    <section
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="scroll-mt-20 py-16 outline-none sm:py-20 lg:py-24"
    >
      <Container>
        <div className="rounded-2xl border border-border bg-muted/30 px-6 py-12 sm:px-12 sm:py-16">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
            <SectionHeading
              id="contact-heading"
              align="center"
              eyebrow="Contact"
              title="Let's build something reliable."
              description="Have a system that needs to scale, a team to level up, or a role to fill? I'd like to hear about it."
            />
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="xl">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="size-4" aria-hidden="true" />
                  Email me
                </a>
              </Button>
              {linkedin ? (
                <Button asChild variant="outline" size="xl">
                  <a
                    href={linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              ) : null}
            </div>
            <SocialLinks className="justify-center pt-2" />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
