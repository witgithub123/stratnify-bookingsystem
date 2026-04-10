import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">About Stratnify</h1>
      <p className="text-muted-foreground max-w-2xl">
        Stratnify is a premium salon & spa booking platform making beauty and wellness effortless. We connect customers with top-rated professionals for a seamless booking experience.
      </p>
    </div>
    <Footer />
  </div>
);

export default About;
