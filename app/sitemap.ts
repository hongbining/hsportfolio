import type { MetadataRoute } from "next"

import { getProjectSlugs } from "@/lib/projects"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const work: MetadataRoute.Sitemap = getProjectSlugs().map((slug) => ({
    url: `${siteConfig.url}/work/${slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.8,
  }))

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...work,
  ]
}
