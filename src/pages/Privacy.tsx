import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-muted-foreground max-w-2xl">Your privacy matters. We collect only the data necessary to provide our services and never share it with third parties without your consent.</p>
    </div>
    <Footer />
  </div>
);

export default Privacy;
