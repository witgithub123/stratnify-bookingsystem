import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FAQ = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-muted-foreground max-w-2xl">Coming soon — we're preparing answers to your most common questions.</p>
    </div>
    <Footer />
  </div>
);

export default FAQ;
