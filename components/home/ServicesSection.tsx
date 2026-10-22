import { Plane, Building2, Ship, FileCheck, Shield, Briefcase, Users, FileText } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
  const services = [
    { title: "Holiday Packages", desc: "Domestic & International tour options", icon: Plane, href: "#" },
    { title: "Flight Assistance", desc: "Best assistance on domestic & international air tickets", icon: Plane, href: "#" },
    { title: "Hotel Assistance", desc: "Wide range of hotels & resorts worldwide", icon: Building2, href: "#" },
    { title: "Cruise Assistance", desc: "Luxury cruises for memorable holidays", icon: Ship, href: "#" },
    { title: "Visa Assistance", desc: "Tourist & Business visa assistance", icon: FileCheck, href: "#" },
    { title: "Travel Insurance", desc: "Comprehensive travel insurance", icon: Shield, href: "#" },
    { title: "Corporate Travel", desc: "Tailored solutions for businesses", icon: Briefcase, href: "#" },
    { title: "MICE Services", desc: "Meetings, Incentives, Conferences & Exhibitions", icon: Users, href: "#" },
    { title: "Document Attestation", desc: "Documents legalization & attestation", icon: FileText, href: "#" },
  ];

  return (
    <section className="py-16 bg-page-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            OUR SERVICES
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
          <p className="mt-3 text-text-secondary max-w-2xl mx-auto text-sm sm:text-base font-medium">
            Complete travel information, advisory, and dedicated booking assistance across all services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <Link href={svc.href} key={i} className="bg-white p-6 rounded-xl border border-border-color hover:shadow-lg transition-shadow flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-full bg-page-bg flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                <svc.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-text-primary mb-1 text-lg group-hover:text-primary transition-colors">{svc.title}</h3>
                <p className="text-sm text-text-secondary">{svc.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
