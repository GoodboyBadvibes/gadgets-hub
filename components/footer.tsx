import { Smartphone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-primary-foreground rounded-lg p-2">
                <Smartphone className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">Gadgets Hub</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for premium tech gadgets and accessories. Quality products, competitive prices,
              exceptional service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Laptops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Power Banks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Smart Watches
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Audio Gear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Gaming
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  WhatsApp Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Warranty Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Bulk Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>📱 +1 (234) 567-8900</li>
              <li>📧 hello@gadgetshub.com</li>
              <li>📍 Tech District, Digital City</li>
              <li>🕒 Mon-Sat: 9AM-8PM</li>
              <li>🕒 Sunday: 10AM-6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 Gadgets Hub. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
