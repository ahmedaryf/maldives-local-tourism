import AtollsComponent from "@/components/AtollsComponent";
import Motion from "@/components/Motion";
import SearchIslands from "@/components/SearchIslands";

import { client } from "@/sanity/lib/client";

import React from "react";

// type FAQData = {
//   id: number;
//   question: string;
//   answer: PortableTextBlock[];
// };

async function getAtolls() {
  const query = `*[_type == "atolls"] | order(atollName asc){
    atollName,
    islands[] -> {
      islandName,
      coverPhoto,
      slug
    } | order(islandName asc)
  }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return data;
}

async function homepageData() {
  const query = `*[_type == "homepage"]`;
  const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return data;
}

// async function accordionsData(): Promise<FAQData[]> {
//   const query = `*[_type == "accordions"] | order(id asc){
//     id,
//     question,
//     answer
//   }`;
//   const accordionData = await client.fetch<FAQData[]>(query);
//   return accordionData;
// }

export default async function Home() {
  const atolls = await getAtolls();
  const homepage = await homepageData();

  return (
    <div className='min-h-screen w-full lg:w-[80vw] mx-auto px-2'>
      <Motion>
        <h1 className='text-3xl lg:text-5xl text-center mt-16 lg:mt-24 body-font font-bold text-zinc-500 dark:text-zinc-300 '>
          Maldives Local Tourism
        </h1>
        <h3 className='text-base lg:text-2xl text-center md:mt-2 body-font tracking-widest md:tracking-[0.2rem]  text-zinc-400 '>
          Experience Maldives the Local Way
        </h3>
      </Motion>
      <div className='px-2'>
        <Motion>
          <h5 className='text-sm lg:text-xl text-justify md:text-center mt-6 lg:mt-12 body-font  text-zinc-400 '>
            {homepage[0].intro}
          </h5>
        </Motion>
      </div>
      <div className='mt-12 lg:mt-24'>
        <SearchIslands atolls={atolls} />
      </div>
      <div className='px-2 lg:px-0'>
        <AtollsComponent atollsData={atolls} />
      </div>
    </div>
  );
}
