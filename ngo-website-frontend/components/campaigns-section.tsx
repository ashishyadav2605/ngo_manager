"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const campaigns = [
  {
    id: 1,
    image: "/education-children-learning-school.jpg",
    title: "Education Drive",
    description: "Providing educational resources to underprivileged children",
  },
  {
    id: 2,
    image: "/food-distribution-helping-families.jpg",
    title: "Food Security",
    description: "Ensuring no child goes hungry in our communities",
  },
  {
    id: 3,
    image: "/healthcare-medical-services.jpg",
    title: "Healthcare Initiative",
    description: "Free medical camps and health awareness programs",
  },
  {
    id: 4,
    image: "/environment-planting-trees-green.jpg",
    title: "Green Future",
    description: "Environmental conservation and plantation drives",
  },
  {
    id: 5,
    image: "/skills-training-workshop.jpg",
    title: "Skills Training",
    description: "Empowering youth with valuable vocational skills",
  },
]

export function CampaignsSection() {
  const [current, setCurrent] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const next = () => {
    setCurrent((prev) => (prev + 1) % campaigns.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + campaigns.length) % campaigns.length)
  }

  return (
    <section id="about" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Our Campaigns</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the impact we're making through our various initiatives
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 gap-6">
              {campaigns.map((campaign, index) => {
                const offset = (index - current + campaigns.length) % campaigns.length
                const isVisible = offset < itemsPerView
                return (
                  <div
                    key={campaign.id}
                    className={`flex-shrink-0 transition-all duration-500 ${
                      isVisible ? "w-full md:w-1/2 lg:w-1/3 opacity-100" : "w-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                      <img
                        src={campaign.image || "/placeholder.svg"}
                        alt={campaign.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-card-foreground">{campaign.title}</h3>
                        <p className="text-foreground/70">{campaign.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/3 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/3 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {campaigns.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === current ? "bg-primary w-8" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
