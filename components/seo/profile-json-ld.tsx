import { siteConfig } from "@/lib/site-config"

/** Emits Person structured data for richer search results. */
export function ProfileJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    url: siteConfig.url,
    email: `mailto:${siteConfig.email}`,
    knowsAbout: siteConfig.techStack,
    sameAs: siteConfig.socials
      .filter((social) => social.href.startsWith("http"))
      .map((social) => social.href),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
