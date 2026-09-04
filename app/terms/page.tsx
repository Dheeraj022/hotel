import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Brightspark",
};

export default function TermsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Terms & Conditions</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing the website at Brightspark Leisure Services, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Brightspark Leisure Services' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p>
              Under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Bookings and Payments</h2>
            <p>
              All bookings are subject to availability. By making a booking, you guarantee that you have the authority to accept and do accept on behalf of your party the terms of these booking conditions. A contract will exist as soon as we issue our confirmation invoice.
            </p>
            <p>
              Prices are subject to change until full payment is received. Brightspark Leisure Services Pvt Ltd acts as an agent on behalf of the service providers (airlines, hotels, etc.) and is not responsible for any changes or cancellations made by the service provider.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Travel Documents</h2>
            <p>
              It is the passenger's responsibility to ensure that all travel documents, including passports and visas, are valid and in order prior to travel. Brightspark Leisure Services Pvt Ltd is not liable for any issues arising from incorrect or invalid documentation.
            </p>

            <p className="mt-12 text-sm text-gray-500 border-t pt-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
