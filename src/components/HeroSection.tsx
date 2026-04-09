import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Shield } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury salon interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-bg opacity-80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium bg-primary/20 text-primary-foreground border border-primary/30 mb-6">
              <Star className="w-3 h-3" /> Trusted by 10,000+ customers
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-primary-foreground">Beauty &</span>
              <br />
              <span className="gradient-text">Wellness,</span>
              <br />
              <span className="text-primary-foreground">Simplified.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-lg">
              Book premium salon & spa services in seconds. Discover top-rated professionals near you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/book" className="gap-2">
                  Book Now <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Clock, text: "Book in 30 seconds" },
              { icon: Star, text: "4.9★ rated services" },
              { icon: Shield, text: "Secure payments" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-primary-foreground/60">
                <item.icon className="w-4 h-4 text-secondary" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
