import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { Sparkles, Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
    } else {
      setSent(true);
      toast.success("Password reset link sent!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-background">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Stratnify</span>
        </Link>

        <h1 className="text-3xl font-bold text-foreground mb-2">Reset Password</h1>
        <p className="text-muted-foreground mb-8">Enter your email and we'll send you a reset link</p>

        {sent ? (
          <div className="p-6 rounded-2xl bg-accent border border-border text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="font-semibold text-foreground mb-2">Check your email</p>
            <p className="text-sm text-muted-foreground">We've sent a password reset link to {email}</p>
            <Link to="/login" className="text-sm text-primary font-medium hover:underline mt-4 inline-block">Back to login</Link>
          </div>
        ) : (
          <form onSubmit={handleReset} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full gradient-bg text-primary-foreground gap-2" disabled={loading}>
              {loading ? "Sending..." : <>Send Reset Link <ArrowRight className="w-4 h-4" /></>}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              <Link to="/login" className="text-primary font-medium hover:underline">Back to login</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
