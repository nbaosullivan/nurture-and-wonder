import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";
import { SunIcon, MoonIcon, BedIcon, QuoteIcon } from "lucide-react";

const services = [
  {
    title: "Flexible day nannying",
    description: "Hourly, half day, or full day nannying packages",
    icon: SunIcon,
    color: "bg-sunset-orange"
  },
  {
    title: "Evening babysitting",
    description: "Evening babysitting",
    icon: MoonIcon,
    color: "bg-mountain-purple"
  },
  {
    title: "Overnight care",
    description: "Overnight care and proxy parenting",
    icon: BedIcon,
    color: "bg-sky-blue"
  }
];

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
  }
];

export default function Home() {
  return (
    <Container>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mt-6 mb-12">
        <div className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-none mb-6">
          <Image
            src="/img/nurture-and-wonder-group-ages.jpeg"
            alt="Nurture and Wonder - Hannah with children"
            width={900}
            height={500}
            className="w-full h-[400px] md:h-[620px]  object-center object-cover rounded-lg"
            priority
          />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-mountain-purple mb-2">
          Bespoke Childcare in the Portes du Soleil
        </h1>
        <p className="text-lg text-evergreen mb-4 max-w-xl mx-auto">
          Private nannying and babysitting, year-round, tailored to your family’s needs. Local or visiting, your little ones will be cared for with nurture and attentiveness, filling each day with joyful moments.
        </p>

        <Link href="/contact" className="inline-block mt-2 px-7 py-3 rounded-md bg-mountain-purple text-cloud-white font-bold text-lg shadow hover:bg-twilight-pink transition">
          Contact
        </Link>
      </div>

      {/* About/Intro */}
      <div className="prose prose-xl mx-auto text-center dark:prose-invert mb-12">
        <p>
          I’m Hannah, the heart behind Nurture and Wonder Nannying. With over six years working in childcare, I’ve worked in outdoor early years settings, taught yoga in schools, and have extensive experience as a private nanny, supporting families in meaningful ways.
        </p>
        <p>
          My practice is rooted in nurturing children through creative play, meaningful connection, and time spent exploring the outdoors. My approach centers on building strong, secure attachments and ensuring each child feels safe, engaged, and valued.
        </p>
        <Link href="/about" className="text-sunset-orange font-semibold underline underline-offset-4">Learn more about Hannah</Link>
      </div>

      {/* Services Preview */}
      <h2 className="text-center text-2xl font-bold text-mountain-purple mb-6">Services Offered</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div key={service.title} className="relative bg-peach-blush p-6 pt-12 rounded-lg flex flex-col items-center">
              {/* Icon Overlap */}
              <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full border-4 border-white ${service.color}`} style={{zIndex:2}}>
                <Icon className="w-8 h-8 text-cloud-white" />
              </div>
              <h3 className="text-xl font-semibold mt-6 text-center">{service.title}</h3>
              <p className="text-lg mt-2 text-center">{service.description}</p>
            </div>
          );
        })}
      </div>
      <div className="text-center mb-12">
        <Link href="/services" className="inline-block px-6 py-2 rounded-md bg-sunset-orange text-cloud-white font-semibold hover:bg-twilight-pink transition">
          See all services
        </Link>
      </div>

      {/* Testimonial Highlight */}
      <h2 className="text-center text-2xl font-bold text-mountain-purple mb-6">What Families Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {testimonials.map((t, idx) => (
          <div key={t.name + t.date} className="relative bg-twilight-pink/80 p-8 pt-14 rounded-xl flex flex-col items-center">
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
      <div className="text-center mb-12">
        <Link href="/testimonials" className="inline-block px-6 py-2 rounded-md bg-sky-blue text-cloud-white font-semibold hover:bg-twilight-pink transition">
          Read more testimonials
        </Link>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-10 mb-6">
        <h2 className="text-2xl font-bold text-mountain-purple mb-2">Ready to chat?</h2>
        <p className="text-lg text-evergreen mb-4">Get in touch to discuss your family’s needs or to book a call with Hannah.</p>
        <Link href="/contact" className="inline-block px-8 py-3 rounded-md bg-mountain-purple text-cloud-white font-bold text-lg shadow hover:bg-twilight-pink transition">
          Contact Hannah
        </Link>
      </div>
    </Container>
  );
}
