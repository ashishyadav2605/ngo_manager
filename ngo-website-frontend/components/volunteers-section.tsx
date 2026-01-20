"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const volunteers = [
  { id: 1, name: "Sarah Johnson", age: 28, image: "/woman-volunteer-portrait.png" },
  { id: 2, name: "Michael Chen", age: 35, image: "/man-volunteer-portrait.jpg" },
  { id: 3, name: "Priya Sharma", age: 26, image: "/woman-volunteer-portrait.png" },
  { id: 4, name: "David Martinez", age: 32, image: "/man-volunteer-portrait.jpg" },
  { id: 5, name: "Emily Wilson", age: 29, image: "/woman-volunteer-portrait.png" },
]

export function VolunteersSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % volunteers.length)
  const prev = () => setCurrent((prev) => (prev - 1 + volunteers.length) % volunteers.length)

  return (
    <section id="join" className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Top Volunteers of the Week</h2>
          <p className="text-lg text-foreground/70">Meet the amazing people making a difference</p>
        </div>

        <div className="relative flex justify-center">
          {/* Carousel */}
          <div className="flex gap-8 overflow-hidden max-w-4xl">
            {volunteers.map((volunteer, index) => {
              const offset = (index - current + volunteers.length) % volunteers.length
              return (
                <div
                  key={volunteer.id}
                  className={`flex-shrink-0 transition-all duration-500 ${
                    offset === 0 || offset === 1 || offset === 2
                      ? "opacity-100 scale-100"
                      : "opacity-30 scale-90 absolute"
                  }`}
                >
                  <div className="text-center">
                    <img
                      src={volunteer.image || "/placeholder.svg"}
                      alt={volunteer.name}
                      className="w-40 h-48 object-cover rounded-lg shadow-lg"
                    />
                    <h3 className="font-bold text-lg mt-4 text-foreground">{volunteer.name}</h3>
                    <p className="text-foreground/70">Age: {volunteer.age}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary hover:bg-primary/90 text-primary-foreground p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="text-center mt-12">
          <Link href="/signup">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Be the Next Volunteer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
