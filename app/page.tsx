import { About } from "@/components/sections/about"
import { Approach } from "@/components/sections/approach"
import { CaseStudies } from "@/components/sections/case-studies"
import { ContactCta } from "@/components/sections/contact-cta"
import { CoreStrengths } from "@/components/sections/core-strengths"
import { Hero } from "@/components/sections/hero"
import { ProfileJsonLd } from "@/components/seo/profile-json-ld"

export default function HomePage() {
  return (
    <>
      <ProfileJsonLd />
      <Hero />
      <CoreStrengths />
      <CaseStudies />
      <Approach />
      <About />
      <ContactCta />
    </>
  )
}
