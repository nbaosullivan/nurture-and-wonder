import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { SunIcon, MoonIcon, BedIcon, CheckCircleIcon } from "lucide-react";

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

const checklist = [
  "DBS certified (up-to-date)",
  "Paediatric first aid trained",
  "6+ years childcare experience",
  "Outdoor early years experience",
  "Yoga in schools",
  "Private nanny for multiple families",
  "Focus on safety and secure attachment",
  "Creative play & outdoor exploration"
];

export default function Services({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary text-center text-3xl font-semibold lg:text-4xl lg:leading-snug">
        Services
      </h1>

      <div className="mt-12">
        <div className="prose prose-xl text-center mx-auto">
          <p>At Nurture and Wonder Nannying, every family’s needs are unique, which is why my prices are tailored to each booking. Hourly rates start €25 at but do vary depending on the number of hours required, the time of year, the age of your children, and any specific needs you may have.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 my-20">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="relative bg-peach-blush p-6 pt-12 rounded-lg flex flex-col items-center ">
                {/* Icon Overlap */}
                <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center rounded-full border-4 border-white ${service.color}`} style={{zIndex:2}}>
                  <Icon className="w-8 h-8 text-cloud-white" />
                </div>
                <h3 className=" text-xl font-semibold mt-6 text-center">{service.title}</h3>
                <p className="text-lg mt-2 text-center mb-10">{service.description}</p>
              </div>
            );
          })}
        </div>
        {/* Checklist */}
        <ul className="max-w-2xl bg-white p-10 mx-auto rounded-lg mt-10 grid gap-3 md:grid-cols-2 list-none mb-20">
          {checklist.map((item) => (
            <li key={item} className="flex items-center text-lg text-evergreen">
              <CheckCircleIcon className="w-6 h-6 mr-3 text-evergreen flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
