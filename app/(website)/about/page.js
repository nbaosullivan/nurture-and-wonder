import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import About from "./about";

export const metadata = {
  title: "Meet Hannah - Professional Nanny Morzine, Les Gets | 6+ Years Experience",
  description: "Meet Hannah, your trusted nanny in Morzine and Les Gets. 6+ years childcare experience, outdoor education specialist, and kids yoga teacher. Professional, reliable childcare.",
  openGraph: {
    title: "Meet Hannah - Professional Nanny Morzine, Les Gets | 6+ Years Experience",
    description: "Meet Hannah, your trusted nanny in Morzine and Les Gets. 6+ years childcare experience, outdoor education specialist, and kids yoga teacher.",
    url: "https://www.nurtureandwonder.co.uk/about",
    siteName: "Nurture and Wonder Nannying",
    images: [
      {
        url: "https://www.nurtureandwonder.co.uk/img/hannah-nurture-and-wonder.jpeg",
        width: 1200,
        height: 630,
        alt: "Hannah - Professional nanny in Morzine and Les Gets",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Hannah - Professional Nanny Morzine, Les Gets | 6+ Years Experience",
    description: "Meet Hannah, your trusted nanny in Morzine and Les Gets. 6+ years childcare experience, outdoor education specialist, and yoga teacher.",
    images: ["https://www.nurtureandwonder.co.uk/img/hannah-nurture-and-wonder.jpeg"],
  },
};

export default async function AboutPage() {
  const authors = await getAllAuthors();
  const settings = await getSettings();
  return <About settings={settings} authors={authors} />;
}

// export const revalidate = 60;
