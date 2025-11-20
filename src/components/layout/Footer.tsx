import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const serviceLinks = [
    { name: "Residential Roofing", href: "/services/residential" },
    { name: "Commercial Roofing", href: "/services/commercial" },
    { name: "Asphalt Shingles", href: "/services/asphalt-shingles" },
    { name: "Metal Roofing", href: "/services/metal-roofing" },
    { name: "Tile Roofing", href: "/services/tile-roofing" },
    { name: "Emergency Repair", href: "/services/emergency-repair" },
  ]

  const companyLinks = [
    { name: "About Us", href: "/about/our-story" },
    { name: "Our Team", href: "/about/team" },
    { name: "Certifications", href: "/about/certifications" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/resources/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const locationLinks = [
    { name: "Prosper", href: "/locations/prosper" },
    { name: "Frisco", href: "/locations/frisco" },
    { name: "Plano", href: "/locations/plano" },
    { name: "McKinney", href: "/locations/mckinney" },
    { name: "Allen", href: "/locations/allen" },
    { name: "Tyler", href: "/locations/tyler" },
  ]

  return (
    <footer className="bg-charcoal-800 text-ivory-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="headline-md font-bold text-ivory-100">
              AR Global Roofing
            </h3>
            <p className="text-sm text-ivory-200 leading-relaxed">
              The Last Roof Your Home Will Ever Need. Premium roofing services for discerning homeowners in North Texas.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+12145551234"
                className="flex items-center space-x-2 text-sm hover:text-forest-300 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(214) 555-1234</span>
              </a>
              <a
                href="mailto:info@arglobalroofing.com"
                className="flex items-center space-x-2 text-sm hover:text-forest-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@arglobalroofing.com</span>
              </a>
              <div className="flex items-start space-x-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>Serving North Texas<br />Prosper, TX 75078</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="headline-md font-semibold text-ivory-100 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-200 hover:text-forest-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="headline-md font-semibold text-ivory-100 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-200 hover:text-forest-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="headline-md font-semibold text-ivory-100 mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory-200 hover:text-forest-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-ivory-200">
              <Link href="/privacy" className="hover:text-forest-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-forest-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/resources/financing" className="hover:text-forest-300 transition-colors">
                Financing
              </Link>
            </div>
            <p className="text-sm text-ivory-300">
              &copy; {currentYear} AR Global Roofing. All rights reserved.
            </p>
          </div>
          <p className="text-xs text-ivory-400 text-center md:text-left mt-4">
            Licensed & Insured | 20+ Years in Business | BBB A+ Rating
          </p>
        </div>
      </div>
    </footer>
  )
}
