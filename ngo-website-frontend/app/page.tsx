import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { CampaignsSection } from "@/components/campaigns-section"
import { FundraisingSection } from "@/components/fundraising-section"
import { CelebrationSection } from "@/components/celebration-section"
import { DonationsRequired } from "@/components/donations-required"
import { VolunteersSection } from "@/components/volunteers-section"
import { DonationRequest } from "@/components/donation-request"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSlider />
      </section>

      <CampaignsSection />
      <FundraisingSection />
      <CelebrationSection />
      <DonationsRequired />
      <VolunteersSection />
      <DonationRequest />
      <Footer />
    </main>
  )
}
