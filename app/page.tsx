import AtollsComponent from "@/components/AtollsComponent";

import { client } from "@/sanity/lib/client";

import React from "react";

// async function getIslands() {
//   const query = `*[_type == "islands"]{
//     islandName,
//     atoll,
//     coverPhoto
//   }`;
//   const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
//   return data;
// }

async function getAtolls() {
  const query = `*[_type == "atolls"]{
    atollName,
    islands[] -> {
      islandName,
      coverPhoto,
      slug
    }
  }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return data;
}

export default async function Home() {
  const atolls = await getAtolls();

  return (
    <div className='min-h-screen w-full lg:w-[80vw] mx-auto px-2'>
      <h1 className='text-2xl lg:text-5xl text-center mt-12 body-font font-bold text-zinc-500 '>
        Maldives Local Tourism
      </h1>
      <div className='mt-12 '>
        {/* <IslandsComponent islandsData={islands} /> */}
      </div>
      <div className='px-2 lg:px-0'>
        <AtollsComponent atollsData={atolls} />
      </div>
    </div>
  );
}
