"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { cn } from "@/src/lib/utils"
import { trackPhoneClick, trackCTAClick } from "@/src/lib/analytics"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navigation = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Process", href: "/process" },
    { name: "Investment Guide", href: "/investment-guide" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-charcoal-200 bg-ivory-100/95 backdrop-blur supports-[backdrop-filter]:bg-ivory-100/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="headline-md font-bold text-charcoal-800">
            AR Global Roofing
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-charcoal-700 hover:text-forest-500 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="tel:+12145551234"
            className="flex items-center space-x-2 text-sm font-medium text-charcoal-700 hover:text-forest-500 transition-colors"
            onClick={() => trackPhoneClick("header_desktop")}
          >
            <Phone className="h-4 w-4" />
            <span>(214) 555-1234</span>
          </a>
          <Button variant="primary" asChild>
            <Link
              href="/contact"
              onClick={() => trackCTAClick("Schedule Consultation", "header_desktop")}
            >
              Schedule Consultation
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-charcoal-800" />
          ) : (
            <Menu className="h-6 w-6 text-charcoal-800" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden border-t border-charcoal-200 bg-ivory-100",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="container mx-auto px-4 py-4 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-base font-medium text-charcoal-700 hover:text-forest-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 space-y-3">
            <a
              href="tel:+12145551234"
              className="flex items-center space-x-2 py-2 text-base font-medium text-charcoal-700 hover:text-forest-500 transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span>(214) 555-1234</span>
            </a>
            <Button variant="primary" className="w-full" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
