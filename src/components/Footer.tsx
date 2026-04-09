import { Link } from "react-router-dom";
import { Sparkles, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Stratnify</span>
            </div>
            <p className="text-sm text-background/60">
              Premium salon & spa booking platform. Beauty made effortless.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <Link to="/services" className="hover:text-background transition-colors">Services</Link>
              <Link to="/book" className="hover:text-background transition-colors">Book Now</Link>
              <Link to="/about" className="hover:text-background transition-colors">About Us</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="flex flex-col gap-2 text-sm text-background/60">
              <Link to="/contact" className="hover:text-background transition-colors">Contact</Link>
              <Link to="/faq" className="hover:text-background transition-colors">FAQs</Link>
              <Link to="/privacy" className="hover:text-background transition-colors">Privacy Policy</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Stratnify. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
