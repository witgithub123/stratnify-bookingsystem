import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Scissors, Sparkles, Heart, Droplets, Sun, Palette, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const allServices = [
  { category: "Hair Care", icon: Scissors, items: [
    { name: "Haircut & Styling", duration: "45 min", price: "₹499", rating: 4.9 },
    { name: "Hair Coloring", duration: "90 min", price: "₹1,499", rating: 4.8 },
    { name: "Keratin Treatment", duration: "120 min", price: "₹3,999", rating: 4.9 },
    { name: "Hair Spa", duration: "60 min", price: "₹899", rating: 4.7 },
  ]},
  { category: "Skin Care", icon: Sparkles, items: [
    { name: "Classic Facial", duration: "60 min", price: "₹799", rating: 4.8 },
    { name: "Chemical Peel", duration: "45 min", price: "₹1,999", rating: 4.7 },
    { name: "Hydra Facial", duration: "75 min", price: "₹2,499", rating: 4.9 },
  ]},
  { category: "Massage", icon: Heart, items: [
    { name: "Swedish Massage", duration: "60 min", price: "₹1,299", rating: 4.9 },
    { name: "Deep Tissue", duration: "75 min", price: "₹1,699", rating: 4.8 },
    { name: "Aromatherapy", duration: "90 min", price: "₹1,999", rating: 4.9 },
  ]},
  { category: "Spa", icon: Droplets, items: [
    { name: "Body Wrap", duration: "90 min", price: "₹2,499", rating: 4.8 },
    { name: "Hydrotherapy", duration: "60 min", price: "₹1,799", rating: 4.7 },
  ]},
  { category: "Wellness", icon: Sun, items: [
    { name: "Meditation Session", duration: "45 min", price: "₹599", rating: 4.9 },
    { name: "Yoga Class", duration: "60 min", price: "₹499", rating: 4.8 },
  ]},
  { category: "Nail Art", icon: Palette, items: [
    { name: "Manicure", duration: "45 min", price: "₹399", rating: 4.8 },
    { name: "Pedicure", duration: "50 min", price: "₹499", rating: 4.7 },
    { name: "Gel Nails", duration: "60 min", price: "₹999", rating: 4.9 },
  ]},
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...allServices.map(s => s.category)];
  const filtered = activeCategory === "All" ? allServices : allServices.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h1>
            <p className="text-muted-foreground mt-3">Browse and book from our wide range of treatments</p>
          </motion.div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className="rounded-full"
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Services list */}
          <div className="space-y-12">
            {filtered.map((category) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-5 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                        <span className="text-lg font-bold gradient-text">{item.price}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {item.duration}</span>
                        <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-secondary text-secondary" /> {item.rating}</span>
                      </div>
                      <Button variant="default" size="sm" className="w-full" asChild>
                        <Link to="/book">Book Now</Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
