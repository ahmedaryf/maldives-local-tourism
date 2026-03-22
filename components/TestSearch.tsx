"use client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";

export default function TestSearch({ data }) {
  const [query, setQuery] = useState("");

  const islands = data.flatMap((atoll) => {
    return atoll.islands.map((island) => ({
      ...island,
      atollName: atoll.atollName,
    }));
  });
  //   console.log(islands);
  const filteredIslands = islands.filter((island) =>
    island.islandName.toLowerCase().includes(query.toLowerCase()),
  );
  console.log(filteredIslands);

  return (
    <div>
      <h2 className='text-3xl font-bold'>Test Search</h2>
      <div className='mt-12'>
        <input
          type='text'
          placeholder='Test Search'
          className='border'
          onChange={(e) => setQuery(() => e.target.value)}
        />
      </div>
      {query && (
        <div className='mt-12'>
          {filteredIslands.length > 0 ? (
            filteredIslands.map((island, index) => {
              return (
                <div key={index} className='mb-6 flex gap-4'>
                  <Image
                    src={urlFor(island.coverPhoto)}
                    width={50}
                    height={50}
                    alt='cover photo'
                  />
                  <div>
                    <h6 className='text-zinc-500 font-semibold'>
                      {island.islandName}
                    </h6>
                    <h6 className='text-zinc-400 text-sm'>
                      {island.atollName}
                    </h6>
                  </div>
                </div>
              );
            })
          ) : (
            <h6>No Islands found</h6>
          )}
        </div>
      )}
    </div>
  );
}
