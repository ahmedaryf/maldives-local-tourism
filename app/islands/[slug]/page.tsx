import BackButton from "@/components/GoBack";
import { client } from "@/sanity/lib/client";
import React from "react";

async function getIslands(slug: string) {
  const query = `*[_type == "islands" && slug.current == $slug][0] `;
  const data = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 60 } },
  );
  return data;
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const islands = await getIslands(slug);

  return (
    <div className='min-h-screen w-full lg:w-[80vw] mx-auto px-2'>
      <h1 className='text-2xl lg:text-5xl text-center mt-12 body-font text-zinc-500 uppercase'>
        {islands.islandName}
      </h1>
      <BackButton />
    </div>
  );
}
