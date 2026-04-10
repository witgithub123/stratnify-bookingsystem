import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Users, BarChart3, Gift, MessageSquare, Target, CalendarCheck, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: CalendarCheck,
    title: "Customer Booking Interface",
    items: ["Easy appointment scheduling", "Service browsing with pricing & duration", "Real-time slot availability", "Booking history & notifications"],
  },
  {
    icon: Users,
    title: "Staff & Operations Panel",
    items: ["Appointment management dashboard", "Staff roster & shift allocation", "Service status tracking"],
  },
  {
    icon: BarChart3,
    title: "Admin Control Panel",
    items: ["Complete business overview", "Manage services, pricing & staff", "Customer database & insights", "Reports & performance tracking"],
  },
  {
    icon: Gift,
    title: "POS & Engagement Features",
    items: ["Gift vouchers & store credits", "Loyalty points system", "Offline reward management support"],
  },
  {
    icon: MessageSquare,
    title: "Smart Integrations",
    items: ["WhatsApp notifications & reminders", "Automated alerts for bookings & updates"],
  },
];

const idealFor = ["Spa & Wellness Centers", "Beauty Salons", "Massage Clinics", "Multi-branch Wellness Chains"];

const containerAnim = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemAnim = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      {/* Hero */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            About Our Platform
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Stratnify Wellness<br />
            <span className="gradient-text">Booking Suite</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            An all-in-one digital solution designed specifically for spas, salons, and wellness centers to streamline booking operations, enhance customer experience, and manage day-to-day business efficiently.
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Built with simplicity and scalability in mind, the platform offers a seamless interface for both customers and staff—ensuring smooth appointment scheduling, real-time availability, and operational control.
          </p>
        </motion.div>
      </div>

      {/* Highlights */}
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          className="flex items-center gap-2 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Sparkles className="w-5 h-5 text-secondary" />
          <h2 className="text-2xl font-bold text-foreground">Key Highlights</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerAnim}
          initial="hidden"
          animate="visible"
        >
          {highlights.map((section) => (
            <motion.div
              key={section.title}
              variants={itemAnim}
              className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <section.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Ideal For */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-8 text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Target className="w-5 h-5" />
            <h2 className="text-2xl font-bold">Ideal For</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {idealFor.map((item) => (
              <div key={item} className="rounded-xl bg-primary-foreground/15 backdrop-blur-sm px-4 py-3 text-center text-sm font-medium">
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    <Footer />
  </div>
);

export default About;
