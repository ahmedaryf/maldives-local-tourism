import IslandsComponent from "@/components/IslandsComponent";
import { client } from "@/sanity/lib/client";

import React from "react";

async function getIslands() {
  const query = `*[_type == "islands"]{
    islandName,
    atoll,
    coverPhoto
  }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return data;
}

export default async function Home() {
  const islands = await getIslands();

  return (
    <div className='min-h-screen w-full lg:w-[80vw] mx-auto '>
      <h1 className='text-2xl lg:text-5xl text-center mt-12 body-font text-zinc-500'>
        Maldives Local Tourism
      </h1>
      <div className='mt-12 '>
        <IslandsComponent islandsData={islands} />
      </div>
    </div>
  );
}
