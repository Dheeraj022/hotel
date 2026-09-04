import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy | Brightspark",
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Refund Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              Refunds will be processed in accordance with our cancellation policy and the terms of the specific travel providers involved in your booking.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Refund Eligibility</h2>
            <p>
              Refunds are only applicable on eligible bookings that have been successfully cancelled within the permitted timeframe. Non-refundable bookings, promotional fares, and certain low-cost carrier tickets are generally not eligible for cash refunds.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Processing Time</h2>
            <p>
              Once a cancellation is confirmed and a refund is approved by the service provider (airline, hotel, etc.), Brightspark Leisure Services Pvt Ltd will initiate the refund process. Please allow 7 to 14 business days for the refund amount to reflect in your original mode of payment.
            </p>
            <p>
              In cases involving international airlines or global hotel chains, the refund process may take longer (up to 30-45 days) depending on their internal processing timelines.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Method of Refund</h2>
            <p>
              All refunds will be credited back to the original source of payment (Credit Card, Debit Card, Net Banking, or UPI) used at the time of booking. We cannot process refunds to alternate bank accounts or provide cash refunds.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Deductions</h2>
            <p>
              The final refund amount will be calculated after deducting the applicable cancellation penalties levied by the service provider and the processing/service fee charged by Brightspark Leisure Services Pvt Ltd. Convenience fees paid during the booking process are non-refundable under all circumstances.
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
