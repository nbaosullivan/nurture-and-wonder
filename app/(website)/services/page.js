import Services from "./services";

export const metadata = {
  title: "Childcare Services Morzine, Les Gets | Nanny & Babysitting | Holiday Care",
  description: "Professional childcare services in Morzine and Les Gets. Nannying, babysitting, holiday care, and year-round support. Flexible, reliable childcare for all ages.",
  openGraph: {
    title: "Childcare Services Morzine, Les Gets | Nanny & Babysitting | Holiday Care",
    description: "Professional childcare services in Morzine and Les Gets. Nannying, babysitting, holiday care, and year-round support. Flexible, reliable childcare for all ages.",
    url: "https://www.nurtureandwonder.co.uk/services",
    siteName: "Nurture and Wonder Nannying",
    images: [
      {
        url: "https://www.nurtureandwonder.co.uk/img/nurture-and-wonder-child-yoga.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional childcare services in Morzine and Les Gets",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Childcare Services Morzine, Les Gets | Nanny & Babysitting | Holiday Care",
    description: "Professional childcare services in Morzine and Les Gets. Nannying, babysitting, holiday care, and year-round support. Flexible, reliable childcare for all ages.",
    images: ["https://www.nurtureandwonder.co.uk/img/nurture-and-wonder-child-yoga.jpeg"],
  },
};

export default function ServicesPage() {
  return <Services />;
}

// export const revalidate = 60;
