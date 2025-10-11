import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Laptop, Smartphone, Battery, Watch, Headphones, Camera, Gamepad2, Tablet, ArrowRight } from "lucide-react"

const categories = [
  {
    icon: Laptop,
    title: "Laptops",
    description: "Gaming, Business & Ultrabooks",
    image: "/modern-laptop-collection-display.jpg",
    count: "50+ Models",
  },
  {
    icon: Smartphone,
    title: "Smartphones",
    description: "Latest Android & iOS devices",
    image: "/premium-smartphones-display-showcase.jpg",
    count: "100+ Models",
  },
  {
    icon: Battery,
    title: "Power Banks",
    description: "Fast charging & wireless options",
    image: "/modern-power-banks-and-charging-accessories.jpg",
    count: "30+ Options",
  },
  {
    icon: Watch,
    title: "Smart Watches",
    description: "Fitness & lifestyle tracking",
    image: "/premium-smartwatches-collection-display.jpg",
    count: "25+ Models",
  },
  {
    icon: Headphones,
    title: "Audio Gear",
    description: "Headphones, earbuds & speakers",
    image: "/premium-headphones-and-audio-equipment.jpg",
    count: "40+ Products",
  },
  {
    icon: Camera,
    title: "Cameras",
    description: "DSLR, mirrorless & action cams",
    image: "/professional-cameras-and-photography-equipment.jpg",
    count: "20+ Models",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Controllers, keyboards & mice",
    image: "/gaming-accessories-controllers-keyboards-mice.jpg",
    count: "35+ Items",
  },
  {
    icon: Tablet,
    title: "Tablets",
    description: "iPad, Android & Windows tablets",
    image: "/modern-tablets-and-stylus-accessories-display.jpg",
    count: "15+ Models",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance mb-4">
            Our Product <span className="text-primary">Categories</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            From cutting-edge laptops to the latest smartphones, we offer a comprehensive range of premium tech products
            to meet all your digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              >
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-card-foreground">{category.title}</h3>
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
