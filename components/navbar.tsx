"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Smartphone, MessageCircle } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-lg p-2">
              <Smartphone className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">Gadgets Hub</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#categories" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>

            <a
  href="https://wa.me/2349162130958?text=Hello!%20I'm%20interested%20in%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
>
            <Button variant="whatsApp" className="">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#categories"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <Button className="w-full mt-2 bg-secondary hover:bg-secondary/90">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
