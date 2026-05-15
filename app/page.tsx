import HeroSection from "@/components/sections/hero-section"
import Bento from "@/components/sections/bento"
import HowItWorks from "@/components/sections/how-it-works"
import Pricing from "@/components/sections/pricing"
import CallToAction from "@/components/sections/call-to-action"
import Footer from "@/components/sections/footer"
export default function Page() {
  return (
    <>
      <HeroSection />
      <Bento />
      <HowItWorks />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  )
}
