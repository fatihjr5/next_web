import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

export default function Links() {
  const router = useRouter();
  return (
    <div className='space-x-4 flex flex-row items-center'>
        <div className="space-x-4 md:block hidden">
            <Link href="/" className={router.pathname == "/" ? "text-[#7000DF] font-semibold ease-out duration-300" : "hover:text-[#7000DF] text-base text-gray-400 duration-300"}>Home</Link>
            <Link href="/portofolio" className={router.pathname == "/portofolio" ? "text-[#7000DF] font-semibold ease-out duration-300" : "hover:text-[#7000DF] text-base text-gray-400 duration-300"}>Portofolio</Link>
            <Link href="/resources" className={router.pathname == "/resources" ? "text-[#7000DF] font-semibold ease-out duration-300" : "hover:text-[#7000DF] text-base text-gray-400 duration-300"}>Resources</Link>
            <Link href="/contact" className={router.pathname == "/contact" ? "text-[#7000DF] font-semibold ease-out duration-300" : "hover:text-[#7000DF] text-base text-gray-400 duration-300"}>Contact</Link>
        </div>
    </div>
  )
}
