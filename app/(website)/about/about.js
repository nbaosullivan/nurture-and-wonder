import Container from "@/components/container";
import PageHeading from "@/components/PageHeading";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <PageHeading>About</PageHeading>
      <div className="flex mt-14 flex-col items-center justify-center text-center">

          <Image
   src="/img/hannah-nurture-and-wonder.jpeg"
            alt="Nurture and Wonder - Hannah with children"
            width={1500}
            height={700}
            className="w-96 h-96 object-center object-cover rounded-full border-8 border-white"
            priority
          />
     
      
      </div>
      <div className="prose-2xl max-w-sm prose mx-auto mt-14 text-center">
 

        <p> I’m Hannah, the heart behind Nurture and Wonder Nannying.</p>
      </div>

      <div className="prose prose-xl mx-auto my-14 text-center dark:prose-invert">
      <p> With over six years working in childcare, I’ve worked in outdoor early years settings, taught yoga in schools, and have extensive experience as a private nanny, supporting families in meaningful ways.</p>
<p>With an adventurous and caring spirit, my practice is rooted in nurturing children through creative play, meaningful connection, and time spent exploring the outdoors. My approach centers on building strong, secure attachments and ensuring each child feels safe, engaged, and valued. </p>
<p>I’m paediatric first aid trained with an up-to-date DBS, combining a strong focus on safety with a playful, responsive approach. From roaming alpine trails and splashing around at Aquariaz to ski school pick up and making a yummy lunch, I tailor each day to your family’s needs to create cherished and enriching experiences in these glorious mountains.</p>

      </div>
    </Container>
  );
}
