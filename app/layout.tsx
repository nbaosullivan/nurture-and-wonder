import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Nunito, Lora } from "next/font/google";
import Footer from "@/components/footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(nunito.variable, lora.variable)}>
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nurture and Wonder Nannying",
  "image": "https://www.nurtureandwonder.co.uk/img/nurture-and-wonder-nannying-transparent.png",
  "@id": "https://www.nurtureandwonder.co.uk/",
  "url": "https://www.nurtureandwonder.co.uk/",
  "telephone": "+44 7563 568646",
  "email": "info@nurtureandwonder.co.uk",
  "priceRange": "€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Morzine",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 46.182,
    "longitude": 6.703
  },
  "areaServed": [
    { "@type": "Place", "name": "Morzine" },
    { "@type": "Place", "name": "Les Gets" },
    { "@type": "Place", "name": "Portes du Soleil" }
  ],
  "description": "Nurture and Wonder offers bespoke nannying and babysitting services in Morzine, Les Gets, and the Portes du Soleil ski region. Trusted, flexible, and experienced childcare for holidays and seasonal stays.",
  "founder": { "@type": "Person", "name": "Hannah" },
  "foundingDate": "2022",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "00:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/nurtureandwonder/",
    "https://www.facebook.com/nurtureandwonder"
  ]
}
          `,
        }}
      />
    </head>
      <body className="antialiased text-evergreen dark:bg-black dark:text-gray-400 bg-sun-cream min-h-screen flex flex-col">
        <Providers>
          <div className="flex-1 flex flex-col">
            {children}
          </div>          
        </Providers>
      </body>
    </html>
  );
}
