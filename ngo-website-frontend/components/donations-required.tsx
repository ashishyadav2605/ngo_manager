import { Button } from "@/components/ui/button"
import { Utensils, Shirt, Droplet, Leaf, BookOpen } from "lucide-react"

const donationTypes = [
  {
    id: 1,
    icon: Utensils,
    title: "Food Drives",
    description: "Help provide nutritious meals to families in need",
  },
  {
    id: 2,
    icon: Shirt,
    title: "Clothes",
    description: "Donate quality clothing for children and adults",
  },
  {
    id: 3,
    icon: Droplet,
    title: "Blood Donation",
    description: "Save lives through blood donation camps",
  },
  {
    id: 4,
    icon: Leaf,
    title: "Plantation Drive",
    description: "Support environmental conservation efforts",
  },
  {
    id: 5,
    icon: BookOpen,
    title: "Education",
    description: "Provide books, supplies, and learning resources",
  },
]

export function DonationsRequired() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">Donations Required</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Click on any category to see what we need and how you can help
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {donationTypes.map((donation) => {
            const Icon = donation.icon
            return (
              <Button
                key={donation.id}
                variant="outline"
                className="h-auto p-6 flex flex-col items-center justify-center gap-4 hover:bg-primary hover:text-primary-foreground border-2 hover:border-primary transition-all bg-transparent"
              >
                <Icon className="w-8 h-8" />
                <div className="text-center">
                  <h3 className="font-bold text-sm sm:text-base">{donation.title}</h3>
                  <p className="text-xs hidden sm:block mt-2">{donation.description}</p>
                </div>
              </Button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
