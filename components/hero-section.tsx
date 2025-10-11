import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-background via-card to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                Premium <span className="text-primary">Tech Gadgets</span> & Accessories
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Discover cutting-edge laptops, smartphones, powerbanks, smartwatches, and premium accessories. Quality
                guaranteed, competitive prices, and personalized service.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Product Categories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/premium-gaming-laptop-with-rgb-lighting-on-modern-.jpg"
                alt="Premium Gaming Laptop"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
