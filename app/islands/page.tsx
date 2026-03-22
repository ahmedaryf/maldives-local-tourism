import AtollsComponent from "@/components/AtollsComponent";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";

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

export default async function page() {
  const atolls = await getAtolls();
  return (
    <div className='min-h-screen w-full lg:w-[80vw] mx-auto px-2'>
      <h1 className='text-2xl lg:text-5xl text-center mt-12 body-font text-zinc-400 uppercase'>
        Islands
      </h1>
      <Link
        href={"/"}
        className='body-font text-zinc-400 border-b border-b-zinc-400'>
        Back to Home
      </Link>
      <AtollsComponent atollsData={atolls} />
    </div>
  );
}
