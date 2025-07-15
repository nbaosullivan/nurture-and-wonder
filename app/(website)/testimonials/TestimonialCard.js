import { QuoteIcon } from "lucide-react";

export default function TestimonialCard({ name, service, date, text }) {
  return (
    <div className="relative bg-white px-8 pt-12 pb-16 rounded-lg flex flex-col items-center h-full min-h-[340px] shadow-xl border-2 border-twilight-pink">
      {/* Subtle Quote Icon Above Text */}
      <div className="mb-5 flex items-center justify-center">
        <QuoteIcon className="w-8 h-8 text-twilight-pink" />
      </div>
      <blockquote className="text-xl md:text-2xl text-evergreen text-center font-normal leading-relaxed mb-4">
        “{text}”
      </blockquote>
      <div className="mt-2 text-center">
        <div className="font-extrabold text-mountain-purple text-lg uppercase tracking-wide mb-1">{name}</div>
        <div className="text-sm text-evergreen font-semibold opacity-80">{service}, {date}</div>
      </div>
    </div>
  );
} 