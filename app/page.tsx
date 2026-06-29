import { About } from "@/components/sections/about"
import { Approach } from "@/components/sections/approach"
import { Capabilities } from "@/components/sections/capabilities"
import { CaseStudies } from "@/components/sections/case-studies"
import { ContactCta } from "@/components/sections/contact-cta"
import { Hero } from "@/components/sections/hero"
import { ProfileJsonLd } from "@/components/seo/profile-json-ld"

export default function HomePage() {
  return (
    <>
      <ProfileJsonLd />
      <Hero />
      <CaseStudies />
      <Capabilities />
      <Approach />
      <About />
      <ContactCta />
    </>
  )
}
