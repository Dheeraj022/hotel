import { Info } from "lucide-react";

export default function IndependentNotice() {
  return (
    <section className="bg-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="bg-[#eef8f2] border border-[#c8e6c9] rounded-2xl p-4 sm:py-3.5 sm:px-5 flex items-start sm:items-center gap-3.5 shadow-xs">
          <div className="w-8 h-8 rounded-full bg-[#d8f0e0] border border-[#b9e4c5] flex items-center justify-center shrink-0 text-[#1b5e20] mt-0.5 sm:mt-0">
            <Info className="w-4 h-4 stroke-[2.2]" />
          </div>
          <p className="text-sm md:text-[15px] text-gray-800 leading-relaxed">
            <strong className="font-bold text-gray-900">We are an independent travel agency</strong>{" "}
            providing hotel, villa and tour booking assistance in India. We are not affiliated with any hotel, resort or service provider.
          </p>
        </div>
      </div>
    </section>
  );
}
