import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Shield, Clock, Award, Users, CheckCircle, Star, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-charcoal-800 to-charcoal-900 text-ivory-100">
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="display-xl mb-6 text-ivory-100">
            The Last Roof Your Home Will Ever Need
          </h1>
          <p className="headline-md mb-8 text-ivory-200 max-w-3xl mx-auto font-normal">
            Premium roofing craftsmanship for discerning homeowners who value peace of mind and generational quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
          <div className="mt-16">
            <div className="inline-block animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-ivory-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Statement */}
      <section className="py-20 bg-ivory-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4">
              <h2 className="headline-xl text-charcoal-800">The Typical Roofing Experience</h2>
              <ul className="space-y-3 text-charcoal-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Competing on price, cutting corners on quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Unreliable communication and missed deadlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Subcontracted crews with varying skill levels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Hidden costs and surprise charges</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="headline-xl text-forest-600">The AR Global Difference</h2>
              <ul className="space-y-3 text-charcoal-700">
                <li className="flex items-start">
                  <CheckCircle className="text-forest-500 mr-2 h-5 w-5 mt-0.5" />
                  <span>Premium materials and meticulous craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-forest-500 mr-2 h-5 w-5 mt-0.5" />
                  <span>White-glove service and transparent communication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-forest-500 mr-2 h-5 w-5 mt-0.5" />
                  <span>Our own experienced, certified crews</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-forest-500 mr-2 h-5 w-5 mt-0.5" />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-ivory-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="display-md text-charcoal-800 mb-4">Our Services</h2>
            <p className="text-body-lg text-charcoal-600 max-w-2xl mx-auto">
              From residential to commercial, we provide comprehensive roofing solutions tailored to your needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Asphalt Shingles",
                description: "Premium architectural shingles with superior wind resistance and longevity",
                icon: Shield,
              },
              {
                title: "Metal Roofing",
                description: "Energy-efficient metal systems designed for Texas heat and severe weather",
                icon: Award,
              },
              {
                title: "Tile Roofing",
                description: "Elegant tile installations that complement Mediterranean and Spanish architecture",
                icon: Users,
              },
              {
                title: "Emergency Repair",
                description: "24/7 emergency response for storm damage and urgent roofing issues",
                icon: Clock,
              },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-forest-500 mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Link href="/services" className="text-forest-600 hover:text-forest-700 font-medium text-sm">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-charcoal-800 text-ivory-100">
        <div className="container mx-auto px-4">
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto text-center">
            <div>
              <div className="headline-xl text-bronze-400 mb-2">20+</div>
              <div className="text-ivory-200">Years in Business</div>
            </div>
            <div>
              <div className="headline-xl text-bronze-400 mb-2">5,000+</div>
              <div className="text-ivory-200">Projects Completed</div>
            </div>
            <div>
              <div className="headline-xl text-bronze-400 mb-2">98%</div>
              <div className="text-ivory-200">Client Satisfaction</div>
            </div>
          </div>

          {/* Featured Reviews */}
          <div className="text-center mb-12">
            <h2 className="display-md text-ivory-100 mb-4">What Our Clients Say</h2>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-bronze-400 fill-bronze-400" />
              ))}
            </div>
            <p className="text-ivory-200">Rated 4.9/5 from 250+ reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Jennifer M.",
                location: "Prosper, TX",
                review: "AR Global transformed our dated roof into a stunning architectural masterpiece. Their attention to detail and professionalism exceeded all expectations.",
              },
              {
                name: "Michael R.",
                location: "Frisco, TX",
                review: "After researching multiple companies, AR Global was the clear choice. They delivered premium quality with transparent pricing and zero surprises.",
              },
              {
                name: "Sarah K.",
                location: "Plano, TX",
                review: "The white-glove service was evident from day one. Our project manager kept us informed every step of the way. Truly a world-class experience.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-charcoal-700 border-charcoal-600 text-ivory-100">
                <CardHeader>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-bronze-400 fill-bronze-400" />
                    ))}
                  </div>
                  <CardTitle className="text-ivory-100">{testimonial.name}</CardTitle>
                  <CardDescription className="text-ivory-300">{testimonial.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-ivory-200">{testimonial.review}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" asChild>
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-forest-600 text-ivory-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="display-md mb-6">Ready to Protect Your Investment?</h2>
          <p className="headline-md mb-8 max-w-2xl mx-auto font-normal">
            Schedule a complimentary consultation and discover why discerning homeowners choose AR Global
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-ivory-100 text-forest-700 hover:bg-ivory-200" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <a
              href="tel:+12145551234"
              className="flex items-center space-x-2 text-ivory-100 hover:text-ivory-200 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-lg font-semibold">(214) 555-1234</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
