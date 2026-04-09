import { motion } from "framer-motion";
import { Search, CalendarCheck, CreditCard, PartyPopper } from "lucide-react";

const steps = [
  { icon: Search, title: "Browse Services", desc: "Explore our wide range of beauty and wellness services" },
  { icon: CalendarCheck, title: "Pick a Slot", desc: "Choose your preferred date, time and professional" },
  { icon: CreditCard, title: "Pay Securely", desc: "Quick checkout with multiple payment options" },
  { icon: PartyPopper, title: "Enjoy!", desc: "Relax and enjoy your premium beauty experience" },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-secondary uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
            Book in 3 Simple Steps
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div className="absolute top-8 left-[60%] right-0 h-px bg-border hidden md:block last:hidden" />
              <span className="text-xs font-bold text-secondary">Step {i + 1}</span>
              <h3 className="text-lg font-semibold text-foreground mt-1">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
