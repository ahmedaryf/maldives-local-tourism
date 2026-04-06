"use client";
import { PortableText } from "@portabletext/react";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { PortableTextBlock } from "sanity";

type FAQData = {
  id: number;
  question: string;
  answer: PortableTextBlock[];
};

export default function Accordions({ data }: { data: FAQData[] }) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  function toggleAccordion(id: number) {
    setOpenAccordion((prevOpen) => (prevOpen === id ? null : id));
  }

  return (
    <div className='pb-4 pt-4 md:pt-6 '>
      <div className='mx-auto'>
        <h5 className='text-zinc-400 text-base lg:text-xl uppercase body-font text-center'>
          Frequently Asked Question
        </h5>
        {data &&
          data.map((item: FAQData, index: number) => (
            <div key={index} className=''>
              <button
                onClick={() => toggleAccordion(item.id)}
                className='text-sm lg:text-base text-justify mt-4 bg-zinc-100 py-2 px-2 md:px-4 rounded-md body-font  text-zinc-400 cursor-pointer w-full'>
                {item.question}
              </button>
              <Collapse isOpened={openAccordion === item.id}>
                <div className='text-zinc-400 text-sm md:text-base prose dark:prose-invert custom-prose  body-font py-4 px-2 md:px-4 rounded-b-md  bg-zinc-50'>
                  <PortableText value={item.answer} />
                </div>
              </Collapse>
            </div>
          ))}
      </div>
    </div>
  );
}
