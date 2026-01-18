import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Hope NGO</h3>
            <p className="text-background/70">Making a positive difference in communities, one action at a time.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="#" className="hover:text-background transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition">
                  Campaigns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="#" className="hover:text-background transition">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="#" className="hover:text-background transition">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>
            &copy; 2026 Hope NGO. All rights reserved. | A nonprofit organization dedicated to creating positive change.
          </p>
        </div>
      </div>
    </footer>
  )
}
