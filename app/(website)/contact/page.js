import Contact from "./contact";

export const metadata = {
  title: "Contact Nanny Morzine, Les Gets | Book Childcare | Hannah",
  description: "Contact Hannah for professional nanny and babysitting services in Morzine and Les Gets. Book childcare, discuss your needs, or check availability. Quick response guaranteed.",
  openGraph: {
    title: "Contact Nanny Morzine, Les Gets | Book Childcare | Hannah",
    description: "Contact Hannah for professional nanny and babysitting services in Morzine and Les Gets. Book childcare, discuss your needs, or check availability.",
    url: "https://www.nurtureandwonder.co.uk/contact",
    siteName: "Nurture and Wonder Nannying",
    images: [
      {
        url: "https://www.nurtureandwonder.co.uk/img/nurture-and-wonder-nannying-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Hannah for nanny services in Morzine and Les Gets",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Nanny Morzine, Les Gets | Book Childcare | Hannah",
    description: "Contact Hannah for professional nanny and babysitting services in Morzine and Les Gets. Book childcare, discuss your needs, or check availability.",
    images: ["https://www.nurtureandwonder.co.uk/img/nurture-and-wonder-nannying-logo.png"],
  },
  email: "info@nurtureandwonder.co.uk",
  phone: '+44 7563 568646',
  w3ckey: 'ae9f9423-c29e-4940-8a25-bce69ee0b195'
};

export default function ContactPage() {
  return <Contact />;
}

// export const revalidate = 60;
