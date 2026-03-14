"use client"; // If using Next.js App Router
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation"; // App Router (Next.js 13+)
// For Pages Router, use: import { useRouter } from 'next/router';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className='cursor-pointer text-sm flex items-center gap-1 text-zinc-500 dark:text-zinc-100'>
      <FaArrowLeft />
      Go Back
    </button>
  );
}
