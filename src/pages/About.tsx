import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container mx-auto px-4 pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-4">About Stratnify</h1>
      <p className="text-muted-foreground max-w-2xl whitespace-pre-wrap">
        {`Stratnify Wellness Booking Suite is an all-in-one digital solution designed specifically for spas, salons, and wellness centers to streamline their booking operations, enhance customer experience, and manage day-to-day business efficiently.

Built with simplicity and scalability in mind, the platform offers a seamless interface for both customers and staff—ensuring smooth appointment scheduling, real-time availability, and operational control.




✨ Key Highlights
Customer Booking Interface
Easy appointment scheduling
Service browsing with pricing & duration
Real-time slot availability
Booking history & notifications


Staff & Operations Panel
Appointment management dashboard
Staff roster & shift allocation
Service status tracking


Admin Control Panel
Complete business overview
Manage services, pricing & staff
Customer database & insights
Reports & performance tracking


POS & Engagement Features
Gift vouchers & store credits
Loyalty points system
Offline reward management support


Smart Integrations
WhatsApp notifications & reminders
Automated alerts for bookings & updates
🎯 Ideal For
Spa & Wellness Centers
Beauty Salons
Massage Clinics
Multi-branch Wellness Chains`}
      </p>
    </div>
    <Footer />
  </div>
);

export default About;
