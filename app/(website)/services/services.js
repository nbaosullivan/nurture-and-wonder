import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { SunIcon, MoonIcon, BedIcon, CheckCircleIcon } from "lucide-react";
import ServiceBox from "@/components/ServiceBox";
import PageHeading from "@/components/PageHeading";
import ReadyToBookCTA from "@/components/ReadyToBookCTA";

export const services = [
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
        description: "Thinking about a dinner out in one of Morzine's top restaurants or a late night boogie? I've got you covered, from dinner and bedtime stories to sleep cover.",
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

export const checklist = [
  "DBS certified (up-to-date)",
  "Paediatric first aid trained",
  "SVQ in Social Services for Children and Young People",
  "Qualified Early Years Practitioner",
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
      <PageHeading>Services</PageHeading>

      <div className="mt-12">
        <div className="prose prose-xl text-center mx-auto">
          <p>At Nurture and Wonder Nannying, every family’s needs are unique, which is why my prices are tailored to each booking. Hourly rates start €25 at but do vary depending on the number of hours required, the time of year, the age of your children, and any specific needs you may have.</p>
        </div>
        <div className="grid grid-cols-1 gap-14 md:gap-8 md:grid-cols-2 lg:grid-cols-3 my-20">
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
        {/* Checklist with cloud top background */}
        <div className="relative w-full flex flex-col items-center md:mt-20" style={{zIndex:1}}>

          <ul className="relative max-w-2xl bg-white p-10 mx-auto rounded-lg mt-10 grid gap-3 md:grid-cols-2 list-none border-b-4 border-r-4 border-cloud-grey transition-all duration-300 hover:border-b-4 hover:border-r-4 hover:border-transparent hover:shadow-xl hover:-translate-y-1" style={{zIndex:2}}>
            {checklist.map((item) => (
              <li key={item} className="flex items-center text-lg text-evergreen">
                <CheckCircleIcon className="w-6 h-6 mr-3 text-evergreen flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ReadyToBookCTA />
    </Container>
  );
}
