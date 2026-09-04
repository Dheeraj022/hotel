import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          <span className="text-accent text-xs font-bold tracking-wider uppercase mb-3 block">ABOUT US</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6 leading-tight">
            ABOUT BRIGHTSPARK LEISURE SERVICES
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            Brightspark Leisure Services Private Limited is a registered travel agency and tour operator based in New Delhi. We provide customized holiday packages, flight bookings, hotel reservations, visa assistance, travel insurance and corporate travel solutions with unmatched service and best value.
          </p>
          <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-md font-semibold hover:bg-primary hover:text-white transition-colors">
            KNOW MORE ABOUT US
          </button>
        </div>

        {/* Right - Company Info Card */}
        <div className="bg-page-bg p-8 lg:p-10 rounded-xl border border-border-color shadow-sm">
          <ul className="space-y-6 text-text-primary">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-1">Incorporated:</span>
                <span className="text-text-secondary text-sm">October 14, 2016</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-1">Registered Address:</span>
                <span className="text-text-secondary text-sm">Khasra No. 382, Second Floor, 100 Foota Road, Village Ghitorni, New Delhi, 110030</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-1">Directors:</span>
                <span className="text-text-secondary text-sm">Nazneen Hashmi and Saba Hashmi</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block mb-1">Status:</span>
                <span className="text-text-secondary text-sm">Active</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
