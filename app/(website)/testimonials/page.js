import {  getSettings } from "@/lib/sanity/client";
import Testimonials from "./testimonials";

export const metadata = {
  title: "Nanny Reviews Morzine, Les Gets | Family Testimonials | Nurture and Wonder",
  description: "Read real family reviews and testimonials for Nurture and Wonder nanny services in Morzine and Les Gets. Trusted, reliable childcare with proven track record.",
  openGraph: {
    title: "Nanny Reviews Morzine, Les Gets | Family Testimonials | Nurture and Wonder",
    description: "Read real family reviews and testimonials for Nurture and Wonder nanny services in Morzine and Les Gets. Trusted, reliable childcare with proven track record.",
    url: "https://www.nurtureandwonder.co.uk/testimonials",
    siteName: "Nurture and Wonder Nannying",
    images: [
      {
        url: "https://www.nurtureandwonder.co.uk/img/nurture-and-wonder-outdoors.jpeg",
        width: 1200,
        height: 630,
        alt: "Family testimonials and reviews for nanny services in Morzine",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanny Reviews Morzine, Les Gets | Family Testimonials | Nurture and Wonder",
    description: "Read real family reviews and testimonials for Nurture and Wonder nanny services in Morzine and Les Gets. Trusted, reliable childcare with proven track record.",
    images: ["https://www.nurtureandwonder.co.uk/img/nurture-and-wonder-outdoors.jpeg"],
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}

// export const revalidate = 60;
