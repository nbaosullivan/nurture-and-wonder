import HomePage from "./home";
import { getAllPosts } from "@/lib/sanity/client";

export const metadata = {
  title: "Bespoke Childcare & Babysitting Morzine, Les Gets | Nurture and Wonder Nannying",
  description: "Professional nanny and babysitting services in Morzine, Les Gets, and Portes du Soleil. Experienced childcare for holidays, weekends, and year-round support. Contact Hannah today.",
  openGraph: {
    title: "Bespoke Childcare & Babysitting Morzine, Les Gets | Nurture and Wonder Nannying",
    description: "Professional nanny and babysitting services in Morzine, Les Gets, and Portes du Soleil. Experienced childcare for holidays, weekends, and year-round support.",
    url: "https://www.nurtureandwonder.co.uk",
    siteName: "Nurture and Wonder Nannying",
    images: [
      {
        url: "https://www.nurtureandwonder.co.uk/img/nurture-and-wonder-group-ages.jpeg",
        width: 1200,
        height: 630,
        alt: "Professional nanny services in Morzine and Les Gets",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bespoke Childcare & Babysitting Morzine, Les Gets | Nurture and Wonder Nannying",
    description: "Professional nanny and babysitting services in Morzine, Les Gets, and Portes du Soleil. Experienced childcare for holidays, weekends, and year-round support.",
    images: ["https://www.nurtureandwonder.co.uk/img/nurture-and-wonder-group-ages.jpeg"],
  },
};

export default async function IndexPage() {
  const posts = await getAllPosts();
  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
