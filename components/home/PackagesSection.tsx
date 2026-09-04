import Link from "next/link";
import PackageGrid from "@/components/packages/PackageGrid";

export default function PackagesSection() {
  return (
    <section className="py-16 bg-page-bg border-t border-border-color">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary inline-flex items-center gap-4">
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
            HOLIDAY PACKAGES
            <span className="h-px w-12 bg-border-color hidden sm:block"></span>
          </h2>
        </div>

        <PackageGrid />
        
        <div className="mt-10 text-center">
          <Link href="/packages" className="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors inline-block text-sm">
            VIEW ALL HOLIDAY PACKAGES
          </Link>
        </div>
      </div>
    </section>
  );
}