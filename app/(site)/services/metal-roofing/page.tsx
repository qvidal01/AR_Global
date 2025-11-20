import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { CheckCircle, Zap, Sun, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Metal Roofing Installation | AR Global Roofing North Texas",
  description: "Energy-efficient metal roofing systems for Texas heat. 50+ year lifespan, Energy Star certified, hail resistant. Premium standing seam and metal shingle options.",
}

export default function MetalRoofingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-bronze-500 rounded-full text-sm font-semibold mb-4">
              Lifetime Investment
            </div>
            <h1 className="display-lg mb-6">Metal Roofing Systems</h1>
            <p className="headline-md font-normal text-ivory-200 mb-8">
              Energy-efficient metal roofing designed for Texas heat and severe weather with modern aesthetics and lifetime durability
            </p>
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Get Expert Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-6">Overview</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-body-lg text-charcoal-700 leading-relaxed mb-4">
                Metal roofing represents the pinnacle of roofing technology, combining unparalleled longevity with superior energy efficiency and modern aesthetics. While metal roofs require a higher initial investment, they often outlast 2-3 traditional roofs, making them remarkably cost-effective over time.
              </p>
              <p className="text-body-lg text-charcoal-700 leading-relaxed">
                Our metal roofing systems are specifically engineered for Texas conditions—reflecting solar heat to reduce cooling costs by up to 25%, standing up to hail storms, and providing exceptional wind resistance up to 140 MPH.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card>
                <CardHeader>
                  <Sun className="h-10 w-10 text-bronze-500 mb-2" />
                  <CardTitle>Energy Star Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal-600">
                    Reduce cooling costs by 10-25% with reflective cool roof technology
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-bronze-500 mb-2" />
                  <CardTitle>50+ Year Lifespan</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal-600">
                    Outlasts 2-3 asphalt roofs with minimal maintenance required
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-bronze-500 mb-2" />
                  <CardTitle>Class 4 Impact Rated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-charcoal-600">
                    Superior hail resistance—the highest impact rating available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8">Why Choose Metal Roofing?</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Exceptional Longevity",
                  description: "Metal roofs regularly last 50-70 years—often outliving the homes they protect. Many manufacturers offer 40-50 year warranties.",
                },
                {
                  title: "Energy Efficiency",
                  description: "Cool roof coatings reflect up to 85% of solar radiation, dramatically reducing attic temperatures and cooling costs in Texas heat.",
                },
                {
                  title: "Superior Weather Protection",
                  description: "Engineered to withstand 140+ MPH winds, heavy rain, hail, and fire. Metal roofs excel in severe weather conditions.",
                },
                {
                  title: "Low Maintenance",
                  description: "Unlike asphalt shingles, metal roofs don't crack, curl, or lose granules. Annual inspections and occasional cleaning are typically all that's needed.",
                },
                {
                  title: "Environmentally Friendly",
                  description: "100% recyclable at end of life, often containing 25-95% recycled content, and reducing landfill waste.",
                },
                {
                  title: "Modern Aesthetics",
                  description: "Available in dozens of colors and profiles—from sleek standing seam to traditional shingle appearance—to complement any architectural style.",
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <CheckCircle className="h-6 w-6 text-bronze-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="headline-md text-charcoal-800 mb-2">{benefit.title}</h3>
                    <p className="text-charcoal-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Range */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8">Investment Range</h2>
            <div className="bg-ivory-50 border-2 border-bronze-200 rounded-lg p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-bronze-600 mb-2">$40,000 - $100,000+</div>
                <p className="text-charcoal-600">Typical range for residential installations</p>
              </div>

              <div className="bg-bronze-50 border border-bronze-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-charcoal-800 mb-3">Lifetime Cost Analysis</h3>
                <p className="text-sm text-charcoal-700 mb-4">
                  While metal roofs cost 2-3x more upfront, they last 50+ years vs. 20-30 for asphalt. Over a 50-year period:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-charcoal-800">Asphalt (3 roofs)</p>
                    <p className="text-charcoal-600">$45,000 - $105,000+</p>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal-800">Metal (1 roof)</p>
                    <p className="text-charcoal-600">$40,000 - $100,000</p>
                  </div>
                </div>
                <p className="text-xs text-charcoal-600 mt-4">Plus energy savings of $200-400/year</p>
              </div>

              <h3 className="headline-md text-charcoal-800 mb-4">What's Included</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Premium metal panels/shingles",
                  "Complete tear-off & disposal",
                  "Synthetic underlayment",
                  "Custom flashing & trim",
                  "Specialized fastening system",
                  "Ridge ventilation",
                  "40-50 year warranty",
                  "Lifetime paint warranty",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-bronze-500" />
                    <span className="text-sm text-charcoal-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">Schedule Metal Roof Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8 text-center">Metal Roofing Options</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  type: "Standing Seam",
                  description: "Sleek, modern profile with concealed fasteners",
                  features: ["Most energy efficient", "140 MPH wind rating", "Minimal maintenance", "Contemporary aesthetic"],
                  ideal: "Modern homes, commercial buildings",
                },
                {
                  type: "Metal Shingles",
                  description: "Traditional appearance with metal durability",
                  features: ["Classic shingle look", "Lightweight", "Easy installation", "Multiple colors"],
                  ideal: "Traditional architectural styles",
                },
                {
                  type: "Stone-Coated Steel",
                  description: "Metal strength with stone-coated finish",
                  features: ["Natural appearance", "Hail resistant", "Noise reduction", "Texture variety"],
                  ideal: "Homeowners wanting durability with traditional aesthetics",
                },
                {
                  type: "Corrugated Metal",
                  description: "Agricultural and modern industrial style",
                  features: ["Cost-effective", "Fast installation", "High durability", "Rustic appeal"],
                  ideal: "Barns, modern farmhouse, contemporary designs",
                },
              ].map((option, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="headline-md text-charcoal-800">{option.type}</CardTitle>
                    <p className="text-sm text-charcoal-600">{option.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-charcoal-800 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-charcoal-600 flex items-start gap-2">
                            <span className="text-bronze-500">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-charcoal-200">
                      <p className="text-sm text-charcoal-700">
                        <span className="font-semibold">Ideal for:</span> {option.ideal}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="headline-xl text-charcoal-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Is a metal roof worth the investment?",
                  answer: "For most homeowners, yes. While 2-3x more upfront, metal roofs last 50+ years (vs. 20-30 for asphalt), require minimal maintenance, reduce energy costs, and often pay for themselves through longevity and savings.",
                },
                {
                  question: "Will a metal roof be too noisy in rain?",
                  answer: "No. When properly installed with solid decking and quality underlayment, metal roofs are no louder than asphalt during rain. Modern installation techniques and insulation virtually eliminate noise concerns.",
                },
                {
                  question: "Can metal roofs handle Texas hail?",
                  answer: "Absolutely. Metal roofs carry Class 4 impact ratings—the highest available. They routinely withstand severe hail that would destroy asphalt shingles, and many insurance companies offer discounts for metal roofs.",
                },
                {
                  question: "Will a metal roof rust?",
                  answer: "Quality metal roofing is treated with multiple protective coatings and paint systems designed to last 40+ years without rust. We only install products with comprehensive paint and corrosion warranties.",
                },
                {
                  question: "Do metal roofs attract lightning?",
                  answer: "No. This is a common myth. Metal roofs don't attract lightning, and if struck, they actually disperse energy more safely than combustible roofing materials. Metal is non-combustible with the highest fire rating.",
                },
              ].map((faq, index) => (
                <div key={index} className="border-b border-charcoal-200 pb-6 last:border-0">
                  <h3 className="headline-md text-charcoal-800 mb-3">{faq.question}</h3>
                  <p className="text-charcoal-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bronze-600 text-ivory-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md mb-6">Invest in a Lifetime Roof</h2>
          <p className="headline-md mb-8 max-w-2xl mx-auto font-normal">
            Schedule a consultation to learn if metal roofing is right for your home
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory-100 text-bronze-700 hover:bg-ivory-200" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/investment-guide">Compare Roofing Investments</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
