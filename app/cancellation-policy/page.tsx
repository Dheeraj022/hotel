import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy | Guest Assists",
};

export default function CancellationPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Cancellation Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              Cancellations must be made within the timeframe specified in your booking agreement. Fees may apply depending on the timing of your cancellation and the specific service provider policies.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. General Cancellation Guidelines</h2>
            <p>
              Any cancellation requests must be submitted in writing via email to our support team. Verbal cancellations over the phone will not be considered valid until confirmed in writing.
            </p>
            <p>
              The cancellation fee structure depends on the type of booking, the lead time before travel, and the specific terms set by the airline, hotel, or cruise operator. Guest Assists Leisure Services Pvt Ltd will charge a standard service fee for processing cancellations in addition to any penalties levied by the operators.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Flight Cancellations</h2>
            <p>
              Flight tickets are strictly governed by the airline's cancellation policy. Non-refundable tickets cannot be cancelled for a cash refund, though some airlines may offer future travel credit. Convenience fees and agency service fees paid at the time of booking are non-refundable.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Hotel & Resort Cancellations</h2>
            <p>
              Hotel cancellation policies vary by property and rate type. Typically, cancellations made 14 to 30 days prior to check-in may incur a one-night penalty. Cancellations made within 7 days of check-in, or "no-shows," are usually subject to a 100% penalty (no refund). Please refer to the specific terms provided during your booking.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Holiday Package Cancellations</h2>
            <p>
              For customized holiday packages, the cancellation policy is stricter as it involves multiple vendors. Generally:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>30 days or more prior to departure: 25% of total package cost</li>
              <li>15 to 29 days prior to departure: 50% of total package cost</li>
              <li>7 to 14 days prior to departure: 75% of total package cost</li>
              <li>Less than 7 days prior to departure: 100% of total package cost</li>
            </ul>

            <p className="mt-12 text-sm text-gray-500 border-t pt-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
