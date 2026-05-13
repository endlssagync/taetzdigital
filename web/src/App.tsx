import { BackstageSection } from "./components/BackstageSection"
import { Hero } from "./components/Hero"
import { PlusSection } from "./components/PlusSection"
import { SamePriceSection } from "./components/SamePriceSection"
import { SiteFooter } from "./components/SiteFooter"
import { SocialFaqSection } from "./components/SocialFaqSection"
import { VipOfferSection } from "./components/VipOfferSection"
import { WorkshopFeaturesPair } from "./components/WorkshopFeaturesPair"

function App() {
  return (
    <>
      <Hero />
      <VipOfferSection />
      <PlusSection />
      <BackstageSection />
      <WorkshopFeaturesPair />
      <SamePriceSection />
      <SocialFaqSection />
      <SiteFooter />
    </>
  )
}

export default App
