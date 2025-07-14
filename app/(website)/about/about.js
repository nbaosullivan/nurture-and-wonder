import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="prose-2xl prose mx-auto mt-14 text-center">
        <p> I’m Hannah, the heart behind Nurture and Wonder Nannying.</p>
      </div>


      <div className="prose prose-xl mx-auto mt-14 text-center dark:prose-invert">
      <p> With over six years working in childcare, I’ve worked in outdoor early years settings, taught yoga in schools, and have extensive experience as a private nanny, supporting families in meaningful ways.</p>
<p>With an adventurous and caring spirit, my practice is rooted in nurturing children through creative play, meaningful connection, and time spent exploring the outdoors. My approach centers on building strong, secure attachments and ensuring each child feels safe, engaged, and valued. </p>
<p>I’m paediatric first aid trained with an up-to-date DBS, combining a strong focus on safety with a playful, responsive approach. From roaming alpine trails and splashing around at Aquariaz to ski school pick up and making a yummy lunch, I tailor each day to your family’s needs to create cherished and enriching experiences in these glorious mountains.</p>

      </div>
    </Container>
  );
}
