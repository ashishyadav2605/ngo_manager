"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/people-helping-community-outdoor.jpg",
    title: "Making Real Change",
    description: "Join thousands making a difference in their communities",
  },
  {
    id: 2,
    image: "/volunteers-working-together-hands.jpg",
    title: "Together We Can",
    description: "Your support brings hope to those in need",
  },
  {
    id: 3,
    image: "/children-smiling-helping-hands.jpg",
    title: "Change Lives Today",
    description: "Every contribution creates lasting impact",
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative h-96 sm:h-[500px] overflow-hidden rounded-lg">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg sm:text-xl max-w-2xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Left Content - Buttons on left side for desktop */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Join Us
        </Button>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
          Donate Now
        </Button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>

      {/* Mobile Buttons */}
      <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-10 w-full px-4 justify-center">
        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Join Us
        </Button>
        <Button size="sm" variant="outline" className="border-white text-white hover:bg-white/20 bg-transparent">
          Donate
        </Button>
      </div>
    </div>
  )
}
