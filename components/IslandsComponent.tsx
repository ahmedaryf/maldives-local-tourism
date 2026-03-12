import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";

type islandDataProps = {
  islandsData: islandsProps[];
};

type islandsProps = {
  islandName: string;
  atoll: string;
  coverPhoto: SanityImageSource;
};

export default function IslandsComponent({ islandsData }: islandDataProps) {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
      {islandsData &&
        islandsData.map((island: islandsProps, index: number) => (
          <div key={index}>
            {island.coverPhoto && (
              <Image
                src={urlFor(island.coverPhoto)}
                height={600}
                width={600}
                alt='Island Photo'
                className='aspect-4/3 object-cover rounded-md '
              />
            )}
            <div className='mt-4 text-center'>
              <h6 className='text-zinc-400 text-base lg:text-xl uppercase body-font '>
                {island.islandName}
              </h6>
              <h6 className='text-zinc-400 text-sm uppercase body-font'>
                {island.atoll}
              </h6>
            </div>
          </div>
        ))}
    </div>
  );
}
