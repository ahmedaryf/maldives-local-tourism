"use client";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { Slug } from "sanity";

type AtollsProps = {
  atolls: IslandsProps[];
};
type IslandsProps = {
  islands: IslandProps[];
  atollName: string;
};

type IslandProps = {
  islandName: string;
  slug: Slug;
  coverPhoto: SanityImageSource;
};

export default function SearchIslands({ atolls }: AtollsProps) {
  const [query, setQuery] = useState("");

  const islands = useMemo(() => {
    return atolls.flatMap((atoll) =>
      atoll.islands.map((island) => ({
        ...island,
        atollName: atoll.atollName,
      })),
    );
  }, [atolls]);

  const filteredIslands = useMemo(() => {
    return islands.filter((island) =>
      island.islandName.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, islands]);

  return (
    <div className='my-8 px-2 lg:px-0'>
      {/* Search Input */}
      <input
        type='text'
        placeholder='Search islands...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='w-full p-3 border rounded-lg text-zinc-500 body-font'
      />

      {/* Results */}
      {query && (
        <div className='mt-4 space-y-2'>
          {filteredIslands.length > 0 ? (
            filteredIslands.map((island, index) => (
              <div key={index} className='p-3 border rounded-md '>
                <Link href={`./islands/${island.slug.current}`}>
                  <p className=' body-font text-zinc-500'>
                    {island.islandName}
                  </p>
                  <p className='text-sm body-font text-zinc-400'>
                    {island.atollName}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <p className='text-gray-400 body-font'>No islands found</p>
          )}
        </div>
      )}
    </div>
  );
}
