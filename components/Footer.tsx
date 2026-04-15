import { client } from "@/sanity/lib/client";
// import { MailIcon } from "lucide-react";
import Link from "next/link";
// import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

// import { FaPhone } from "react-icons/fa6";
import { ThemeToggler } from "./ThemeToggler";
// import { IoIosMail } from "react-icons/io";

async function getFormLinks() {
  const query = `*[_type == "quickLinks"] | order(linkName asc){
      link,
      linkName
  }`;
  const data = await client.fetch(query, {}, { next: { revalidate: 60 } });
  return data;
}

type linkProps = {
  link: string;
  linkName: string;
};

export default async function Footer() {
  const year = new Date().getFullYear();
  const links = await getFormLinks();

  return (
    <footer className='min-h-[60vh] w-screen  duration-500  border-t-zinc-300 dark:border-t border-white  flex flex-col justify-between py-6 '>
      <div className=' md:flex justify-between items-start px-10 w-full xl:w-[80vw] mx-auto mt-12'>
        {/* <div className='flex md:hidden gap-6 justify-center items-center'>
          <Link href={"https://www.facebook.com/KeyodhooSchool"}>
            <AiFillFacebook size={32} />
          </Link>
          <Link
            href={
              "https://www.instagram.com/keyodhooschool/?igshid=YmMyMTA2M2Y%3D"
            }>
            <AiFillInstagram size={32} />
          </Link>
        </div> */}
        <div className='mt-12 md:mt-0'>
          {/* <h1 className='text-xl font-bold mb-2 md:mb-4 tracking-wider'>
            Contact us
          </h1>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-2 items-center mb-2'>
              <FaPhone size={20} />
              <Link href={"tel:+"}>
                <p className='text-xs md:text-sm'>Phone: +960 </p>
              </Link>
            </div>
            <div className='flex gap-2 items-center mb-2'>
              <MailIcon size={20} />
              <Link href={"mailto:"}>
                <p className='text-xs md:text-sm'>Email:</p>
              </Link>
            </div>
          </div> */}
        </div>
        {/* 
        <div className='hidden md:flex gap-4 justify-center items-center'>
          <Link href={"https://www.facebook.com/KeyodhooSchool"}>
            <AiFillFacebook size={32} />
          </Link>
          <Link
            href={
              "https://www.instagram.com/keyodhooschool/?igshid=YmMyMTA2M2Y%3D"
            }>
            <AiFillInstagram size={32} />
          </Link>
        </div> */}

        <div className='mt-12 md:mt-0 mb-24 md:mb-0'>
          {/* <h1 className='text-xl font-bold mb-2 md:mb-4 tracking-wider'>
            Links
          </h1> */}
          <div>
            {" "}
            {links &&
              links.map((link: linkProps, index: number) => (
                <div key={index}>
                  <Link
                    href={link.link ? link.link : "/"}
                    target='_blank'
                    className='text-xs lg:text-sm'>
                    {link.linkName ? link.linkName : ""}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='text-center self-center'>
        <div className=''>
          <ThemeToggler />
          <h5 className='text-xs md:text-sm mt-3 text-zinc-500 body-font'>
            {year} Maldives Local Tourism
          </h5>
          <p className='text-xs md:text-sm text-zinc-500 body-font'>
            Together we showcase the Maldives — open and free for all
          </p>
        </div>

        <h5 className='text-xs text-zinc-300 dark:text-gray-600 mt-2'>
          Developed by Ahmed Areef
        </h5>
      </div>
    </footer>
  );
}
