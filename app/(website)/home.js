import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";
import { SunIcon, MoonIcon, BedIcon, QuoteIcon } from "lucide-react";
import ServiceBox from "@/components/ServiceBox";

const services = [
  {
      title: "Flexible nannying",
      description: `Need the kids picked up from ski school? Or maybe you fancy a full child-free day on the hill? 
Book hourly, half day or full day packages. 
`,
      icon: SunIcon,
      color: "bg-sunset-orange"
  },
  {
      title: "Evening babysitting",
      description: "Thinking about a dinner out in one of Morzines top restaurants or a late night boogie? I've got you covered, from dinner and bedtime stories to sleep cover.",
      icon: MoonIcon,
      color: "bg-mountain-purple"
  },
  {
      title: "Overnight care",
      description: "You're a PDS resident with a business trip away planned? Experienced at proxy parenting, I offer overnight stays to take care of your little ones.",
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
    <>
      {/* Hero Section with Overlap */}
      <div className="relative flex flex-col max-w-6xl mx-auto items-center justify-center mt-6 mb-12">
        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden shadow-none">
          <Image
            src="/img/nurture-and-wonder-group-ages.jpeg"
            alt="Nurture and Wonder - Hannah with children"
            width={1500}
            height={700}
            className="h-[800px] w-100 object-center object-cover rounded-lg"
            priority
          />
        </div>
        {/* Overlapping Text Box */}
        <div
          className="
            absolute
            left-1/2
            -translate-x-1/2
  
            -bottom-1
     
            w-[95%] md:w-[70%] 
            bg-peach-blush
            rounded-xl
            p-4 md:py-8 
            shadow-none
            flex flex-col items-center
            border border-peach-blush
          "
          style={{ zIndex: 2 }}
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-mountain-purple mb-2 text-center">
            Bespoke Childcare in the Portes du Soleil
          </h1>
          <p className="text-lg text-evergreen mb-4 max-w-xl mx-auto text-center">
            Private nannying and babysitting, year-round, tailored to your family’s needs. Local or visiting, your little ones will be cared for with nurture and attentiveness, filling each day with joyful moments.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-2 px-7 py-3 rounded-3xl bg-mountain-purple text-cloud-white font-bold text-lg shadow hover:bg-twilight-pink transition"
          >
            Contact
          </Link>
        </div>
        {/* Spacer to prevent content overlap */}
        <div className="h-32 md:h-24"></div>
      </div>
<Container>
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
      <h2 className="text-center text-2xl font-bold text-mountain-purple mb-14">Services Offered</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {services.map((service, idx) => (
          <ServiceBox
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            color={service.color}
          />
        ))}
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
      <div className="text-center my-14">
        <h2 className="text-2xl font-bold text-mountain-purple mb-2">Ready to chat?</h2>
        <p className="text-lg text-evergreen mb-4">Get in touch to discuss your family’s needs or to book a call with Hannah.</p>
        <Link href="/contact" className="inline-block px-8 py-3 rounded-md bg-mountain-purple text-cloud-white font-bold text-lg shadow hover:bg-twilight-pink transition">
          Contact Hannah
        </Link>
      </div>
      </Container>
    </>
  );
}
