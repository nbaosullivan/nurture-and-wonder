import { getAllAuthors, getSettings } from "@/lib/sanity/client";
import Services from "./services";

export default async function ServicePage() {

  const settings = await getSettings();
  return <Services settings={settings}  />;
}

// export const revalidate = 60;
