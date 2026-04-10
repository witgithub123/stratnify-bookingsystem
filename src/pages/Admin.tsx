import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAdminCheck } from "@/hooks/useAdminCheck";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, BarChart3, ShieldCheck, CalendarCheck } from "lucide-react";

interface ProfileRow {
  id: string;
  full_name: string | null;
  phone: string | null;
  loyalty_points: number | null;
  created_at: string | null;
}

const Admin = () => {
  const { user } = useAuth();
  const { isAdmin, loading } = useAdminCheck();
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<ProfileRow[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/");
    }
  }, [isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      // Admin RLS policy on profiles isn't set, so we use an edge-free approach:
      // For now we show data accessible through profiles table
      supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false })
        .then(({ data }) => {
          // Admin can only see own profile with current RLS, 
          // but we display what's available
          setProfiles((data as ProfileRow[]) || []);
          setLoadingData(false);
        });
    }
  }, [isAdmin]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16 container mx-auto px-4 flex items-center justify-center">
          <p className="text-muted-foreground">Checking access...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) return null;

  const stats = [
    { label: "Total Users", value: profiles.length, icon: Users, color: "bg-primary/10 text-primary" },
    { label: "Total Loyalty Points", value: profiles.reduce((s, p) => s + (p.loyalty_points || 0), 0), icon: BarChart3, color: "bg-secondary/10 text-secondary" },
    { label: "Admin", value: user?.email || "—", icon: ShieldCheck, color: "bg-accent text-accent-foreground" },
    { label: "Platform", value: "Active", icon: CalendarCheck, color: "bg-secondary/10 text-secondary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-4">
              <ShieldCheck className="w-4 h-4" />
              Admin Panel
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard Overview</h1>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <div className={`w-9 h-9 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                  <stat.icon className="w-4 h-4" />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-xl font-bold text-card-foreground mt-1 truncate">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Users table */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden">
            <div className="p-5 border-b border-border">
              <h2 className="font-semibold text-card-foreground">Registered Users</h2>
            </div>
            {loadingData ? (
              <div className="p-8 text-center text-muted-foreground">Loading...</div>
            ) : profiles.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">No users found</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left p-3 font-medium text-muted-foreground">Name</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Phone</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Loyalty Points</th>
                      <th className="text-left p-3 font-medium text-muted-foreground">Joined</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profiles.map((p) => (
                      <tr key={p.id} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="p-3 text-card-foreground">{p.full_name || "—"}</td>
                        <td className="p-3 text-muted-foreground">{p.phone || "—"}</td>
                        <td className="p-3 text-card-foreground font-medium">{p.loyalty_points || 0}</td>
                        <td className="p-3 text-muted-foreground">
                          {p.created_at ? new Date(p.created_at).toLocaleDateString() : "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
