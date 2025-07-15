import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "./archive";
import Loading from "@/components/loading";
import PageHeading from "@/components/PageHeading";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function ArchivePage({ searchParams }) {
  return (
    <>
      <Container className="relative">
        <PageHeading>Blog</PageHeading>
        <div className="text-center">
          <p className="mt-2 text-lg">
            Thoughts, tips, and inspiration from Nurture and Wonder.
          </p>
        </div>
        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Archive searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

// export const revalidate = 60;