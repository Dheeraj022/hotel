import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Guest Assists",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="lead text-lg font-medium text-gray-800">
              Your privacy is important to us. It is Guest Assists Leisure Services Pvt Ltd's policy to respect your privacy regarding any information we may collect from you across our website.
            </p>
            
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.
            </p>
            <p>
              The types of personal information we may collect include your name, email address, phone number, billing address, and payment information when you make a booking or enquiry through our platform.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Use of Information</h2>
            <p>
              We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
            </p>
            <p>
              We do not share any personally identifying information publicly or with third-parties, except when required to by law or when necessary to process your travel bookings (such as providing passenger details to airlines and hotels).
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Cookies and Tracking</h2>
            <p>
              Our website may use "cookies" to enhance user experience. You may choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. If you do so, note that some parts of the Site may not function properly.
            </p>

            <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Third-Party Links</h2>
            <p>
              Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.
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
