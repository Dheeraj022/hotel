import InnerPageHero from "@/components/layout/InnerPageHero";
import TravelEnquiryForm from "@/components/forms/TravelEnquiryForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <InnerPageHero
        title="Contact Us"
        description="Get in touch with us to plan your next journey or for any travel assistance."
        breadcrumb="Contact"
      />

      <section className="py-16 lg:py-24 bg-page-bg">
        <div className="container mx-auto px-4">

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border-color text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Our Office</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Khasra No. 382, Second Floor,<br />
                100 Foota Road, Village Ghitorni,<br />
                New Delhi, 110030
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-border-color text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Call Us</h3>
              <div className="text-text-secondary text-sm space-y-2">
                <p>
                  <Link href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</Link>
                </p>
                <p>
                  <Link href="tel:+911123456789" className="hover:text-primary transition-colors">+91 11 2345 6789</Link>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-border-color text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">Email Us</h3>
              <div className="text-text-secondary text-sm space-y-2">
                <p>
                  <Link href="mailto:info@guestassists.com" className="hover:text-primary transition-colors">info@guestassists.com</Link>
                </p>
                <p>
                  <Link href="mailto:support@guestassists.com" className="hover:text-primary transition-colors">support@guestassists.com</Link>
                </p>
              </div>
            </div>
          </div>

          {/* Form and Map Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-border-color overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Form Side */}
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-primary mb-2">Send us a Message</h2>
                <p className="text-text-secondary mb-8">Fill out the form below and our travel experts will get back to you shortly.</p>
                <TravelEnquiryForm />
              </div>

              {/* Map Side */}
              <div className="bg-gray-100 min-h-[400px] relative">
                {/* Embedded Google Map (Placeholder for New Delhi) */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.91421008627!2d77.0688997!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d73c7882dc3%3A0xc62269a9b6c16ce6!2sGhitorni%2C%20New%20Delhi%2C%20Delhi%20110030!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Guest Assist Office Location"
                ></iframe>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
