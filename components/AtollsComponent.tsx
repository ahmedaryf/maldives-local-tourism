import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Slug } from "sanity";
import Motion from "./Motion";

type atollsProps = {
  atollName: string;
  islands: islandsProps[];
};

type islandsProps = {
  islandName: string;
  coverPhoto: SanityImageSource;
  slug: Slug;
};

type atollsDataProps = {
  atollsData: atollsProps[];
};

export default function AtollsComponent({ atollsData }: atollsDataProps) {
  return (
    <div className=''>
      {atollsData &&
        atollsData.map((atoll: atollsProps, index: number) => (
          <div key={index} className='mt-6 lg:mt-16'>
            <Motion>
              <h6 className='text-zinc-400 text-xl lg:text-2xl uppercase body-font font-semibold text-center mb-4 lg:mb-8'>
                {atoll.atollName}
              </h6>
            </Motion>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8'>
              {atoll.islands &&
                atoll.islands.map((island, index) => {
                  return (
                    <div key={index} className=''>
                      <Motion>
                        <Link href={`/islands/${island.slug.current}`}>
                          {island.coverPhoto && (
                            <Image
                              src={urlFor(island.coverPhoto)}
                              height={600}
                              width={600}
                              alt='Island Photo'
                              className='aspect-4/3 object-cover rounded-md'
                            />
                          )}
                          <div className='mt-4 text-center'>
                            <h6 className='text-zinc-400 text-base lg:text-xl uppercase body-font '>
                              {island.islandName}
                            </h6>
                          </div>
                        </Link>
                      </Motion>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
    </div>
  );
}
