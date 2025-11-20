import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Shield, Zap, Home, Factory, Wrench, AlertCircle, Sun, Droplet } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Roofing Services in North Texas | AR Global Roofing",
  description: "Premium roofing services including asphalt shingles, metal roofing, tile installation, roof coating, commercial roofing, and emergency repairs. Serving North Texas.",
}

const services = [
  {
    title: "Asphalt Shingle Roofing",
    slug: "asphalt-shingles",
    icon: Shield,
    description: "Premium architectural shingles with superior wind resistance and longevity. The most popular choice for North Texas homes.",
    features: ["30-50 year warranty", "130+ MPH wind resistance", "Wide style selection", "Energy-efficient options"],
    investmentRange: "$15K - $35K",
  },
  {
    title: "Metal Roofing Systems",
    slug: "metal-roofing",
    icon: Zap,
    description: "Energy-efficient metal roofing designed for Texas heat and severe weather. Lifetime durability with modern aesthetics.",
    features: ["50+ year lifespan", "Energy Star certified", "Hail resistant", "Lightning safe"],
    investmentRange: "$40K - $100K+",
  },
  {
    title: "Tile Roofing Installation",
    slug: "tile-roofing",
    icon: Home,
    description: "Elegant tile installations that complement Mediterranean and Spanish architecture with unmatched durability.",
    features: ["Lifetime material warranty", "Fire resistant", "Low maintenance", "Classic aesthetics"],
    investmentRange: "$45K - $100K+",
  },
  {
    title: "Roof Coating & Restoration",
    slug: "roof-coating",
    icon: Droplet,
    description: "Extend your roof's life by 10-20 years with our premium coating systems. Cost-effective alternative to replacement.",
    features: ["10-20 year extension", "Energy savings", "Leak prevention", "UV protection"],
    investmentRange: "$8K - $20K",
  },
  {
    title: "Commercial Roofing",
    slug: "commercial",
    icon: Factory,
    description: "Low-slope and flat roofing systems for commercial properties. TPO, EPDM, and modified bitumen installations.",
    features: ["Minimal downtime", "Warranty options", "Energy efficient", "Code compliant"],
    investmentRange: "Custom quote",
  },
  {
    title: "Emergency Roof Repair",
    slug: "emergency-repair",
    icon: AlertCircle,
    description: "24/7 emergency response for storm damage, leaks, and urgent roofing issues. Fast, reliable service when you need it most.",
    features: ["24/7 availability", "Rapid response", "Insurance assistance", "Temporary protection"],
    investmentRange: "Varies",
  },
  {
    title: "Solar-Ready Roofing",
    slug: "solar-ready",
    icon: Sun,
    description: "Future-proof your roof with solar panel-ready installation. Proper structure and flashing for solar integration.",
    features: ["Solar compatible", "Structural analysis", "Future expansion", "Energy optimization"],
    investmentRange: "Add $2K - $5K",
  },
  {
    title: "Residential Roofing",
    slug: "residential",
    icon: Home,
    description: "Comprehensive residential roofing solutions tailored to your home's architecture, style, and budget.",
    features: ["Free inspection", "Transparent pricing", "Lifetime support", "Warranty transfer"],
    investmentRange: "$15K - $100K+",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="display-lg mb-6">Premium Roofing Services</h1>
            <p className="headline-md font-normal text-ivory-200 mb-8">
              From residential to commercial, we provide comprehensive roofing solutions backed by 20+ years of excellence
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 h-14 w-14 rounded-full bg-forest-100 flex items-center justify-center">
                    <service.icon className="h-7 w-7 text-forest-600" />
                  </div>
                  <CardTitle className="headline-md">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-charcoal-600">
                    Investment: <span className="font-semibold text-forest-600">{service.investmentRange}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-charcoal-700">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-charcoal-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-forest-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full mt-4" asChild>
                    <Link href={`/services/${service.slug}`}>
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose AR Global */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="display-md text-center text-charcoal-800 mb-12">Why Choose AR Global?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Premium Materials Only",
                  description: "We exclusively use top-tier roofing materials from Owens Corning, CertainTeed, and Atlas with industry-leading warranties.",
                },
                {
                  title: "Experienced Crews",
                  description: "No subcontractors. Our certified crews have been with us for years, ensuring consistent quality on every project.",
                },
                {
                  title: "Transparent Pricing",
                  description: "Detailed proposals with itemized costs. No hidden fees, no surprises—just honest pricing from start to finish.",
                },
                {
                  title: "Lifetime Support",
                  description: "Annual courtesy inspections, storm damage assessments, and priority emergency service for as long as you own your home.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-forest-500 flex items-center justify-center text-ivory-100 font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="headline-md text-charcoal-800 mb-2">{item.title}</h3>
                    <p className="text-charcoal-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-charcoal-800 text-ivory-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md mb-6">Our White-Glove Process</h2>
          <p className="text-body-lg text-ivory-200 mb-12 max-w-2xl mx-auto">
            Every project follows our proven 7-phase process designed to deliver exceptional results with zero stress
          </p>
          <div className="grid sm:grid-cols-3 lg:grid-cols-7 gap-4 max-w-6xl mx-auto mb-12">
            {[
              "Discovery",
              "Proposal",
              "Planning",
              "Installation",
              "Quality Check",
              "Post-Care",
              "Partnership",
            ].map((phase, index) => (
              <div key={index} className="bg-charcoal-700 p-4 rounded-lg">
                <div className="text-bronze-400 font-bold text-lg mb-2">{index + 1}</div>
                <div className="text-sm text-ivory-200">{phase}</div>
              </div>
            ))}
          </div>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/process">View Detailed Process</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-600 text-ivory-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md mb-6">Ready to Get Started?</h2>
          <p className="headline-md mb-8 max-w-2xl mx-auto font-normal">
            Schedule your complimentary consultation and receive a detailed proposal within 3 days
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory-100 text-forest-700 hover:bg-ivory-200" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/investment-guide">View Investment Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
