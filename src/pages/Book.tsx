import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, User, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

const services = [
  { id: 1, name: "Haircut & Styling", price: "₹499", duration: "45 min" },
  { id: 2, name: "Classic Facial", price: "₹799", duration: "60 min" },
  { id: 3, name: "Swedish Massage", price: "₹1,299", duration: "60 min" },
  { id: 4, name: "Keratin Treatment", price: "₹3,999", duration: "120 min" },
  { id: 5, name: "Manicure", price: "₹399", duration: "45 min" },
  { id: 6, name: "Hydra Facial", price: "₹2,499", duration: "75 min" },
];

const timeSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"];

const professionals = [
  { id: 1, name: "Ananya S.", specialty: "Hair Specialist", rating: 4.9 },
  { id: 2, name: "Ravi K.", specialty: "Skin Expert", rating: 4.8 },
  { id: 3, name: "Meera P.", specialty: "Massage Therapist", rating: 4.9 },
];

const steps = ["Service", "Date & Time", "Professional", "Confirm"];

const Book = () => {
  const [step, setStep] = useState(0);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedPro, setSelectedPro] = useState<number | null>(null);

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    return d;
  });

  const canNext = () => {
    if (step === 0) return selectedService !== null;
    if (step === 1) return selectedDate && selectedTime;
    if (step === 2) return selectedPro !== null;
    return true;
  };

  const service = services.find(s => s.id === selectedService);
  const pro = professionals.find(p => p.id === selectedPro);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Progress */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  i <= step ? "gradient-bg text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {i < step ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                </div>
                <span className={`text-sm hidden sm:block ${i <= step ? "text-foreground font-medium" : "text-muted-foreground"}`}>{s}</span>
                {i < steps.length - 1 && <div className={`w-8 h-px ${i < step ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            {/* Step 0: Service */}
            {step === 0 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Choose a Service</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        selectedService === s.id
                          ? "border-primary bg-accent shadow-card"
                          : "border-border bg-card hover:border-primary/30"
                      }`}
                    >
                      <p className="font-semibold text-card-foreground">{s.name}</p>
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="text-muted-foreground">{s.duration}</span>
                        <span className="font-bold gradient-text">{s.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Date & Time */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Pick Date & Time</h2>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" /> Select Date
                  </div>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {dates.map((d) => {
                      const key = d.toISOString().split("T")[0];
                      return (
                        <button
                          key={key}
                          onClick={() => setSelectedDate(key)}
                          className={`flex-shrink-0 w-16 py-3 rounded-xl border text-center transition-all ${
                            selectedDate === key
                              ? "border-primary bg-accent"
                              : "border-border bg-card hover:border-primary/30"
                          }`}
                        >
                          <p className="text-xs text-muted-foreground">{d.toLocaleDateString("en", { weekday: "short" })}</p>
                          <p className="text-lg font-bold text-card-foreground">{d.getDate()}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" /> Select Time
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-2.5 rounded-lg border text-sm font-medium transition-all ${
                          selectedTime === t
                            ? "border-primary bg-accent text-accent-foreground"
                            : "border-border bg-card text-card-foreground hover:border-primary/30"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Choose a Professional</h2>
                <div className="space-y-3">
                  {professionals.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPro(p.id)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center gap-4 transition-all ${
                        selectedPro === p.id
                          ? "border-primary bg-accent shadow-card"
                          : "border-border bg-card hover:border-primary/30"
                      }`}
                    >
                      <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                        <User className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-card-foreground">{p.name}</p>
                        <p className="text-sm text-muted-foreground">{p.specialty}</p>
                      </div>
                      <span className="text-sm font-medium text-secondary">★ {p.rating}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Confirm Booking</h2>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-semibold text-card-foreground">{service?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-semibold text-card-foreground">{selectedDate && new Date(selectedDate).toLocaleDateString("en", { weekday: "long", month: "long", day: "numeric" })}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-semibold text-card-foreground">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Professional</span>
                    <span className="font-semibold text-card-foreground">{pro?.name}</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between">
                    <span className="text-muted-foreground">Total</span>
                    <span className="text-xl font-bold gradient-text">{service?.price}</span>
                  </div>
                </div>
                <Button variant="default" size="lg" className="w-full mt-6 gradient-bg text-primary-foreground">
                  Confirm & Pay
                </Button>
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setStep(Math.max(0, step - 1))}
              disabled={step === 0}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
            {step < 3 && (
              <Button
                variant="default"
                onClick={() => setStep(step + 1)}
                disabled={!canNext()}
                className="gap-2"
              >
                Next <ArrowRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Book;
