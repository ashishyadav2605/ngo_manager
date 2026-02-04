"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"

async function loadRazorpayScript() {
  return new Promise<boolean>((resolve) => {
    if (typeof window === "undefined") return resolve(false)

    if (document.querySelector("script[src='https://checkout.razorpay.com/v1/checkout.js']")) {
      return resolve(true)
    }

    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

async function startDonation(amount: number) {
  try {
    const res = await fetch("http://localhost:5000/api/donations/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    })

    const data = await res.json()

    if (!res.ok || !data.orderId || !data.keyId) {
      throw new Error(data.message || "Unable to start payment.")
    }

    const loaded = await loadRazorpayScript()
    if (!loaded) {
      throw new Error("Unable to load Razorpay script")
    }

    const options = {
      key: data.keyId,
      amount: data.amount,
      currency: data.currency || "INR",
      name: "NGO Donation",
      description: "Thank you for supporting our cause",
      order_id: data.orderId,
      handler: function (response: any) {
        alert("Donation successful! Payment ID: " + response.razorpay_payment_id)
      },
      theme: {
        color: "#16a34a",
      },
    }

    const razorpayWindow = window as any
    const rzp = new razorpayWindow.Razorpay(options)
    rzp.open()
  } catch (error) {
    console.error("Donation error", error)
    alert("Unable to connect to the payment gateway. Please try again.")
  }
}

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
              onClick={() => startDonation(100)}
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
