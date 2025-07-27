import Link from "next/link";
import Container from "@/components/container";
import Image from "next/image";
import { SunIcon, MoonIcon, BedIcon } from "lucide-react";
import ServiceBox from "@/components/ServiceBox";
import Button from "@/components/ui/Button";
import TestimonialCard from "./testimonials/TestimonialCard";
import { testimonials as allTestimonials } from "./testimonials/testimonials";
import { services } from "./services/services";


const testimonials = allTestimonials.slice(0, 2);

export default function Home() {
  return (
    <>
      {/* Hero Section with Overlap */}
      <div className="relative flex flex-col max-w-4xl mx-auto items-center justify-center md:mt-6 mb-56 md:mb-48">
        {/* Hero Image with blur and gradient overlay */}
        <div className="rounded-lg overflow-hidden shadow-lg relative "
          style={{ zIndex: 1 }}
        >
          <Image
            src="/img/nurture-and-wonder-group-ages.jpeg"
            alt="Nurture and Wonder - Hannah with children"
            width={1500}
            height={700}
            className=" md:h-[600px] md:w-[600px] w-[500px] h-[450px] object-center  md:object-[50%_55%] object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 pointer-events-none opacity-30" style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/bedge-grunge.png')",
          }} />
        </div>
        {/* Overlapping Text Box */}
        <div
          className="absolute w-[95%] md:w-auto -bottom-48 md:-bottom-28 flex items-center justify-center bg-peach-blush rounded-lg px-10 py-12 md:py-10 md:px-14 flex flex-col items-center w-[420px] md:w-[500px] border-b-4 border-r-4 border-peach-blush-dark shadow-[8px_8px_24px_rgba(232,177,154,0.18)]"
          style={{ zIndex: 2 }}
        >
          <h1 className="text-2xl md:text-3xl max-w-lg font-extrabold text-mountain-purple mb-2 text-center">
           Nannying & Babysitting in Morzine, Les Gets & Portes du Soleil
          </h1>
          <p className="text-lg text-evergreen  mb-4 max-w-lg mx-auto text-center">
          Offering bespoke, year-round childcare in Morzine, Les Gets, and the Portes du Soleil — thoughtfully tailored to your family’s needs. Your little ones will be cared for with nurture and attentiveness, filling each day with joyful moments.
          </p>
          <Button href="/contact">Contact</Button>
        </div>
        {/* Spacer to prevent content overlap */}
        <div className="h-32 md:h-24"></div>
      </div>

      {/* About/Intro */}
      <div className="flex justify-center items-center mb-20 hidden lg:block">
        <div className="cloud-bg px-20 py-32 md:px-32 md:pt-42 md:pb-18 w-full flex flex-col items-center relative">
          {/* Content */}
          <div className="prose prose-xl md:translate-y-8 text-center ">
            <p>
              I’m Hannah, the heart behind Nurture and Wonder Nannying. With over six years working in childcare, I’ve worked in outdoor early years settings, taught yoga in schools, and have extensive experience as a private nanny, supporting families in meaningful ways.
            </p>
            <p className='mb-8'>
              My practice is rooted in nurturing children through creative play, meaningful connection, and time spent exploring the outdoors. My approach centers on building strong, secure attachments and ensuring each child feels safe, engaged, and valued.
            </p>
            <Button href="/about">Learn more about Hannah</Button>
          </div>
     
        </div>
      </div>
      <div className="lg:hidden">
      <Container>
      <div className="flex justify-center items-center mb-10 ">
        <div className=" bg-white p-10 rounded-lg  w-full flex flex-col items-center relative">
          {/* Content */}
          <div className="prose prose-xl  text-center ">
            <p>
              I’m Hannah, the heart behind Nurture and Wonder Nannying. With over six years working in childcare, I’ve worked in outdoor early years settings, taught yoga in schools, and have extensive experience as a private nanny, supporting families in meaningful ways.
            </p>
            <p className='mb-8'>
              My practice is rooted in nurturing children through creative play, meaningful connection, and time spent exploring the outdoors. My approach centers on building strong, secure attachments and ensuring each child feels safe, engaged, and valued.
            </p>
            <Button href="/about">Learn more about Hannah</Button>
          </div>
     
        </div>
      </div>
      </Container>
</div>

      <Container>
      {/* Services Preview */}
      <h2 className="text-center text-2xl md:text-3xl  font-extrabold text-mountain-purple mb-14">Childcare Services in Morzine & Les Gets</h2>
      <div className="grid grid-cols-1 gap-14 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
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
      <div className="text-center mb-20 md:mb-32">
        <Button href="/services">See all services</Button>
      </div>

      {/* Testimonial Highlight */}
      <h2 className="text-center text-2xl md:text-3xl font-extrabold text-mountain-purple mb-12">What Families Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={t.name + t.date} name={t.name} service={t.service} date={t.date} text={t.text} />
        ))}
      </div>
      <div className="text-center mb-20 md:mb-32">
        <Button href="/testimonials">Read more testimonials</Button>
      </div>

      {/* Final CTA */}
      <div className="text-center  mb-32">
        <h2 className="text-2xl md:text-3xl font-extrabold text-mountain-purple mb-2">Ready to chat?</h2>
        <p className="prose prose-xl max-w- mx-auto text-evergreen mb-4">Get in touch to discuss your family’s needs or to book a call with Hannah.</p>
        <Button href="/contact">Contact Hannah</Button>
      </div>
      </Container>
    </>
  );
}
