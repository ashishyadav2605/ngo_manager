export function FundraisingSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Together We Raise Hope</h2>
            <p className="text-lg text-foreground/70 mb-4">
              Our current fundraising campaign is helping families transition out of poverty through education and
              livelihood programs.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-foreground">Goal: $50,000</span>
                  <span className="text-primary font-bold">78%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div className="bg-primary h-full w-3/4 transition-all duration-500" />
                </div>
              </div>
              <p className="text-foreground/70">
                We've raised <span className="font-bold text-primary">$39,000</span> so far. Help us reach our goal!
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/donation-campaign-community-impact.jpg"
              alt="Fundraising Campaign"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
