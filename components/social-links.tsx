import { Mail } from "lucide-react"
import type { ComponentType, SVGProps } from "react"

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons/brand-icons"
import { siteConfig } from "@/lib/site-config"
import type { SocialLink, SocialPlatform } from "@/lib/types"
import { cn } from "@/lib/utils"

const icons: Record<SocialPlatform, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  email: Mail,
}

interface SocialLinksProps {
  items?: readonly SocialLink[]
  className?: string
}

/** Renders the configured social links as accessible icon buttons. */
export function SocialLinks({
  items = siteConfig.socials,
  className,
}: SocialLinksProps) {
  if (items.length === 0) return null

  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {items.map((social) => {
        const Icon = icons[social.platform]
        const isExternal = social.href.startsWith("http")

        return (
          <li key={social.platform}>
            <a
              href={social.href}
              aria-label={social.label}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Icon className="size-[18px]" aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
