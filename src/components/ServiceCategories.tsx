import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, Heart, Droplets, Sun, Palette } from "lucide-react";

const categories = [
  { icon: Scissors, title: "Hair Care", desc: "Cuts, coloring & styling", count: "120+ services", color: "from-blue-500 to-cyan-500" },
  { icon: Sparkles, title: "Skin Care", desc: "Facials, peels & treatments", count: "85+ services", color: "from-pink-500 to-rose-500" },
  { icon: Heart, title: "Massage", desc: "Relaxation & deep tissue", count: "40+ services", color: "from-purple-500 to-violet-500" },
  { icon: Droplets, title: "Spa", desc: "Body wraps & hydrotherapy", count: "55+ services", color: "from-teal-500 to-emerald-500" },
  { icon: Sun, title: "Wellness", desc: "Aromatherapy & meditation", count: "30+ services", color: "from-amber-500 to-orange-500" },
  { icon: Palette, title: "Nail Art", desc: "Manicure & pedicure", count: "60+ services", color: "from-indigo-500 to-blue-500" },
];

export function ServiceCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Explore Service Categories
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            From head to toe, we've got every beauty and wellness need covered
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to="/services"
                className="group block p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4`}>
                  <cat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">{cat.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{cat.desc}</p>
                <span className="text-xs font-medium text-secondary">{cat.count}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
