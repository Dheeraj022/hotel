import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Brightspark",
};

export default function DisclaimerPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Disclaimer</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              The information contained on the Brightspark Leisure Services Pvt Ltd website (the "Service") is for general information purposes only.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. General Disclaimer</h2>
            <p>
              Brightspark Leisure Services Pvt Ltd assumes no responsibility for errors or omissions in the contents of the Service. In no event shall Brightspark Leisure Services Pvt Ltd be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. 
            </p>
            <p>
              Brightspark Leisure Services Pvt Ltd reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. Brightspark Leisure Services Pvt Ltd does not warrant that the website is free of viruses or other harmful components.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. External Links Disclaimer</h2>
            <p>
              The Brightspark Leisure Services Pvt Ltd website may contain links to external websites that are not provided or maintained by or in any way affiliated with Brightspark Leisure Services Pvt Ltd.
            </p>
            <p>
              Please note that Brightspark Leisure Services Pvt Ltd does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Travel & Booking Disclaimer</h2>
            <p>
              All travel bookings, including flights, hotels, and holiday packages, are subject to availability and the terms and conditions of the respective service providers (airlines, hotels, transport operators, etc.). Prices quoted are subject to change without notice until a booking is confirmed and payment is received in full.
            </p>
            <p>
              Brightspark Leisure Services Pvt Ltd acts only as an agent for the service providers and accepts no liability for any loss, damage, injury, delay, or irregularity that may be caused by any default of any service provider.
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
