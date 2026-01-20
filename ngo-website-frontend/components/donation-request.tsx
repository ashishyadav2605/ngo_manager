"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"

export function DonationRequest() {
  return (
    <section id="donate" className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 fill-current" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">In Need for a Donation</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-95">
            Every contribution, no matter the size, makes a real difference in the lives of those we serve. Your
            generosity is the heartbeat of our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => alert("Redirecting to payment gateway...")}
            >
              Donate Now
            </Button>
            <Link href="#about">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
