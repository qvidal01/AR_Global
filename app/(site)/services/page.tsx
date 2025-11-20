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
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-ivory-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light leading-tight tracking-tight mb-6 sm:mb-8">Premium Roofing Services</h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light font-sans leading-relaxed text-ivory-200/90 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
              From residential to commercial, we provide comprehensive roofing solutions backed by 20+ years of excellence
            </p>
            <Button variant="primary" size="lg" className="min-w-[250px] sm:min-w-[280px] min-h-[44px]" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 md:py-24 bg-ivory-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-charcoal-200 hover:border-forest-500 group">
                <CardHeader>
                  <div className="mb-6 h-16 w-16 rounded-full bg-forest-100 flex items-center justify-center group-hover:bg-forest-500 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-forest-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-serif font-normal leading-tight mb-2">{service.title}</CardTitle>
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
      <section className="py-16 sm:py-20 md:py-24 bg-ivory-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight text-center text-charcoal-800 mb-12">Why Choose AR Global?</h2>
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
                    <h3 className="text-xl sm:text-2xl font-serif font-normal leading-tight text-charcoal-800 mb-2">{item.title}</h3>
                    <p className="text-base text-charcoal-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 sm:py-20 md:py-24 bg-charcoal-800 text-ivory-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight mb-6">Our White-Glove Process</h2>
          <p className="text-lg md:text-xl text-ivory-200 leading-relaxed mb-12 max-w-2xl mx-auto px-4">
            Every project follows our proven 7-phase process designed to deliver exceptional results with zero stress
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 max-w-6xl mx-auto mb-12">
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
      <section className="py-16 sm:py-20 md:py-24 bg-forest-600 text-ivory-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl md:text-2xl font-light font-sans leading-relaxed mb-8 max-w-2xl mx-auto px-4">
            Schedule your complimentary consultation and receive a detailed proposal within 3 days
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button size="lg" className="bg-ivory-100 text-forest-700 hover:bg-ivory-200 w-full sm:w-auto min-w-[250px] sm:min-w-[200px] min-h-[44px]" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto min-w-[250px] sm:min-w-[200px] min-h-[44px] border-2 border-ivory-100 text-ivory-100 hover:bg-ivory-100 hover:text-forest-600" asChild>
              <Link href="/investment-guide">View Investment Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
