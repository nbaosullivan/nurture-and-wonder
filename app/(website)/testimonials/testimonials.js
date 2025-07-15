import Container from "@/components/container";
import { QuoteIcon } from "lucide-react";
import PageHeading from "@/components/PageHeading";
import ReadyToBookCTA from "@/components/ReadyToBookCTA";

const testimonials = [
  {
    name: "Maureen Bray",
    service: "Nannying Services",
    date: "August 2023",
    text: "Hannah is incredibly adaptive, creative in her play preparations and passionate about the environment and nutrition. She has been reliable, trustworthy and consistent in her interactions with our children. She is professional, warm, dependable and refreshingly wholesome. Our children adore Hannah, and so do we!"
  },
  {
    name: "Katy Willings",
    service: "Nannying Services",
    date: "June 2025",
    text: "Hannah is a fantastic childcare professional. Intuitive, responsible, flexible in her interactions with parents, and also just full of love, imagination and wisdom in her interactions with children and babies. They are not just 'looked after' or kept out of harm's way, but inspired and improved for their time in her care."
  },
  {
    name: "Sofia Iwanow",
    service: "Nannying Services",
    date: "December 2024",
    text: "Hannah was absolutely fantastic, she was amazing with our son and any family would be lucky to have her!"
  },
  {
    name: "Lauren",
    service: "Babysitting Services",
    date: "March 2025",
    text: "Thank you so much for looking after our girl, they had so much fun and woke up asking to do another tea party with Hannah!"
  }

];

export { testimonials };

export default function Testimonials() {
  return (
    <Container>
      <PageHeading className="mb-10">Testimonials</PageHeading>
      <div className="mt-12 prose prose-xl max-w-lg text-center mx-auto">
          <p>Kind words from the families I’ve had the joy of supporting — a glimpse into the moments we’ve shared.</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 items-stretch">
        {testimonials.map((t, idx) => (
          <div
            key={t.name + t.date}
            className="relative bg-white px-8 pt-12 pb-16 rounded-lg flex flex-col items-center h-full min-h-[340px] shadow-xl border-2 border-twilight-pink"
          >
            {/* Subtle Quote Icon Above Text */}
            <div className="mb-5 flex items-center justify-center">
              <QuoteIcon className="w-8 h-8 text-twilight-pink" />
            </div>
            <blockquote className="text-xl md:text-2xl text-evergreen text-center font-normal leading-relaxed mb-4">
              “{t.text}”
            </blockquote>
            <div className="mt-2 text-center">
              <div className="font-extrabold text-mountain-purple text-lg uppercase tracking-wide mb-1">{t.name}</div>
              <div className="text-sm text-evergreen font-semibold opacity-80">{t.service}, {t.date}</div>
            </div>
          </div>
        ))}
      </div>
      <ReadyToBookCTA />
    </Container>
  );
}
