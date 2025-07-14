import {  getSettings } from "@/lib/sanity/client";
import Testimonials from "./testimonials";

export default async function TestimonialsPage() {
  const settings = await getSettings();
  return <Testimonials settings={settings}  />;
}

// export const revalidate = 60;
