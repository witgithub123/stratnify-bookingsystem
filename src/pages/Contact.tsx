import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-muted-foreground max-w-2xl">
        Have questions? Reach out to us at support@stratnify.com and we'll get back to you within 24 hours.
      </p>
    </div>
    <Footer />
  </div>
);

export default Contact;
