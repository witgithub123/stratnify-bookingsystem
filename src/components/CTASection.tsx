import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 hero-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Look & Feel Amazing?
          </h2>
          <p className="text-lg text-primary-foreground/60 mb-8">
            Join thousands of happy customers. Book your first appointment today and get 20% off!
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/book" className="gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
