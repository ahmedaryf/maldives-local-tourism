import Accordions from "@/components/Accordions";
import BackButton from "@/components/GoBack";
import Motion from "@/components/Motion";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import Image from "next/image";

import React from "react";

async function getIslands(slug: string) {
  const query = `*[_type == "islands" && slug.current == $slug][0]{
        islandName,
        atoll,
        coverPhoto,
        islandInfo,
        guesthouses[] -> {
            guesthouseName,
            coverPhoto
        },
        faq[]
    } `;
  const data = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 60 } },
  );
  return data;
}

type guesthouseProps = {
  guesthouseName: string;
  coverPhoto: SanityImageSource;
};

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const islands = await getIslands(slug);

  return (
    <div className='min-h-screen w-full lg:w-[80vw] mx-auto px-4 lg:px-0'>
      <Motion>
        <h1 className='text-2xl lg:text-5xl text-center mt-16 lg:mt-24 body-font text-zinc-500 uppercase'>
          {islands.islandName}
        </h1>
        <h6 className='text-base lg:text-xl text-center mt-2 body-font text-zinc-400 uppercase'>
          {islands.atoll}
        </h6>
      </Motion>
      <BackButton />
      <Motion>
        <div className='text-sm lg:text-xl text-justify  prose dark:prose-invert custom-prose body-font mt-6 text-zinc-400'>
          {islands.islandInfo && <PortableText value={islands.islandInfo} />}
        </div>
      </Motion>
      <Motion>
        <h4 className='text-base lg:text-xl text-center body-font text-zinc-400 uppercase mt-12 lg:mt-24'>
          Guesthouses
        </h4>
      </Motion>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-6 lg:mt-12'>
        {islands.guesthouses &&
          islands.guesthouses.map(
            (guesthouse: guesthouseProps, index: number) => {
              return (
                <div key={index}>
                  <Motion>
                    <Image
                      src={urlFor(guesthouse.coverPhoto)}
                      width={600}
                      height={600}
                      alt='Cover Photo'
                      className='aspect-4/3 object-cover rounded-md'
                    />
                    <h6 className='text-sm lg:text-base text-center mt-2 body-font text-zinc-400 uppercase'>
                      {guesthouse.guesthouseName}
                    </h6>
                  </Motion>
                </div>
              );
            },
          )}
      </div>
      {islands.faq && (
        <div className='mt-12 lg:mt-24'>
          <Accordions data={islands.faq} />
        </div>
      )}
    </div>
  );
}
