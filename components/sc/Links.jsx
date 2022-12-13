import Link from 'next/link'
import React from 'react'

export default function Links() {
  return (
    <div className='space-x-4 flex flex-row items-center'>
        <div className="space-x-4 md:block hidden">
            <Link href="/" className='hover:text-[#7000DF] averta-regular text-base text-gray-400 duration-300'>Home</Link>
            <Link href="/portofolio" className='hover:text-[#7000DF] averta-regular text-base text-gray-400 duration-300'>Portofolio</Link>
            <Link href="/resources" className='hover:text-[#7000DF] averta-regular text-base text-gray-400 duration-300'>Resources</Link>
            <Link href="/contact" className='hover:text-[#7000DF] averta-regular text-base text-gray-400 duration-300'>Contact</Link>
        </div>
    </div>
  )
}
