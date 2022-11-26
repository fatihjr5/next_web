import Link from 'next/link'
import React from 'react'

export default function Links() {
  return (
    <div className='space-x-4 flex flex-row items-center'>
        <div className="space-x-4 md:block hidden">
            <Link href="/" className='text-white hover:text-[#7000DF] text-base font-bold duration-300'>Home</Link>
            <Link href="" className='text-[#C0C0C0] hover:text-[#7000DF] text-base font-medium duration-300'>Portofolio</Link>
            <Link href="" className='text-[#C0C0C0] hover:text-[#7000DF] text-base font-medium duration-300'>Resources</Link>
        </div>
        <span className='text-white md:block hidden'>|</span>
        <button className='gap-x-2 flex flex-row items-center text-[#C0C0C0] font-medium hover:font-bold hover:text-white hover:bg-[#7000DF] hover:px-4 h-12 duration-300 rounded-xl'>
            <svg className="w-5 h-5 bg-transparent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span className='text-base bg-transparent'>Contact</span>
        </button>
    </div>
  )
}
