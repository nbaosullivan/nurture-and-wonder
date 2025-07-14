import Container from "@/components/container";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "Maureen Bray",
    service: "Nannying Services",
    date: "August 2023",
    text: "Hannah is incredibly adaptive, creative in her play preparations and passionate about the environment and nutrition. She has been reliable, trustworthy and consistent in her interactions with our children. She is professional, warm, dependable and refreshingly wholesome. Our children adore Hannah, and so do we!"
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
  },
  {
    name: "Katy Willings",
    service: "Nannying Services",
    date: "June 2025",
    text: "Hannah is a fantastic childcare professional. Intuitive, responsible, flexible in her interactions with parents, and also just full of love, imagination and wisdom in her interactions with children and babies. They are not just 'looked after' or kept out of harm's way, but inspired and improved for their time in her care."
  }
];

export default function Testimonials() {
  return (
    <Container>
      <h1 className="text-brand-primary text-center text-3xl font-semibold lg:text-4xl lg:leading-snug mb-10">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        {testimonials.map((t, idx) => (
          <div
            key={t.name + t.date}
            className="relative bg-peach-blush p-8 pt-14 rounded-xl flex flex-col items-center"
          >
            {/* Quotation Icon Overlap */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full border-4 border-white bg-sunset-orange" style={{zIndex:2}}>
              <QuoteIcon className="w-8 h-8 text-cloud-white" />
            </div>
            <blockquote className="text-lg text-evergreen text-center font-medium leading-relaxed">
              “{t.text}”
            </blockquote>
            <div className="mt-6 text-center">
              <div className="font-extrabold text-mountain-purple text-base uppercase tracking-wide">{t.name}</div>
              <div className="text-sm text-evergreen font-semibold">{t.service}, {t.date}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
