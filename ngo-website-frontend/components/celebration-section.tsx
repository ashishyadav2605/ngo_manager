import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"
import Link from "next/link"

export function CelebrationSection() {
  return (
    <section id="certifications" className="py-16 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 sm:p-12 text-center">
          <div className="flex justify-center mb-6">
            <Gift className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Make Their Special Day Special</h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Celebrate your birthday, anniversary, or any special occasion by making a difference. Spend your special day
            with underprivileged children and create memories that matter.
          </p>
          <Link href="#donate">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Celebrate Now!
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
