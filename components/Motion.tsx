"use client";
import React, { ReactNode, useRef } from "react";
import { useInView } from "motion/react";

type PropType = {
  children: ReactNode;
};

export default function Motion({ children }: PropType) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <div
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0.3,
          //   transform: isInView ? "translateY(0)" : "translateY(100px)",
          transform: isInView ? "scale(1)" : "scale(0.9) ",
          transition: "opacity 1s, transform 1s",
        }}>
        {children}
      </div>
    </>
  );
}
