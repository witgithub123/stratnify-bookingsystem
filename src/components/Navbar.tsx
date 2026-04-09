import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Book Now", href: "/book" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { user, signOut } = useAuth();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome ? "bg-transparent" : "bg-background/80 backdrop-blur-lg border-b border-border"}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className={`text-xl font-bold ${isHome ? "text-primary-foreground" : "text-foreground"}`}>
            Stratnify
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isHome ? "text-primary-foreground/80 hover:text-primary-foreground" : "text-muted-foreground"
              } ${location.pathname === link.href ? (isHome ? "text-primary-foreground" : "text-foreground") : ""}`}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <div className="flex items-center gap-3">
              <Button variant={isHome ? "heroOutline" : "outline"} size="sm" asChild>
                <Link to="/profile" className="gap-2">
                  <User className="w-4 h-4" /> Profile
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={signOut}
                className={isHome ? "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10" : ""}
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant={isHome ? "heroOutline" : "outline"} size="sm" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button variant={isHome ? "hero" : "default"} size="sm" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 ${isHome ? "text-primary-foreground" : "text-foreground"}`}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-foreground py-2"
                >
                  {link.label}
                </Link>
              ))}
              {user ? (
                <>
                  <Link to="/profile" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground py-2">Profile</Link>
                  <Button variant="outline" size="sm" onClick={() => { signOut(); setMobileOpen(false); }}>Sign Out</Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/login" onClick={() => setMobileOpen(false)}>Sign In</Link>
                  </Button>
                  <Button variant="default" size="sm" asChild>
                    <Link to="/signup" onClick={() => setMobileOpen(false)}>Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
