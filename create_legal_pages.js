const fs = require('fs');
const path = require('path');

const pages = [
  {
    dir: 'app/disclaimer',
    title: 'Disclaimer',
    content: 'The information contained on this website is for general information purposes only. Guest Assist Leisure Services Pvt Ltd assumes no responsibility for errors or omissions in the contents.'
  },
  {
    dir: 'app/privacy-policy',
    title: 'Privacy Policy',
    content: "Your privacy is important to us. It is Guest Assist Leisure Services Pvt Ltd's policy to respect your privacy regarding any information we may collect from you across our website."
  },
  {
    dir: 'app/terms',
    title: 'Terms & Conditions',
    content: 'By accessing or using our website, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.'
  },
  {
    dir: 'app/cancellation-policy',
    title: 'Cancellation Policy',
    content: 'Cancellations must be made within the timeframe specified in your booking agreement. Fees may apply depending on the timing of your cancellation and the specific service provider policies.'
  },
  {
    dir: 'app/refund-policy',
    title: 'Refund Policy',
    content: 'Refunds will be processed in accordance with our cancellation policy and the terms of the specific travel providers (airlines, hotels, cruises) involved in your booking. Processing times may vary.'
  }
];

pages.forEach(page => {
  const dirPath = path.join(__dirname, page.dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const code = \`import { Metadata } from "next";

export const metadata: Metadata = {
  title: "\${page.title} | Guest Assist",
};

export default function \${page.title.replace(/[^a-zA-Z]/g, '')}Page() {
  return (
    <main className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-primary mb-8">\${page.title}</h1>
          <div className="prose prose-blue max-w-none text-gray-600">
            <p className="lead text-lg mb-6">\${page.content}</p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Use of Information</h2>
            <p className="mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
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
\`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), code);
  console.log(\`Created \${page.dir}/page.tsx\`);
});
