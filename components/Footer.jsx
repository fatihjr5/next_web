import Link from 'next/link'
import React from 'react'
export default function Footer() {
  return (
    <div className='mt-20 mb-10 flex flex-col gap-y-8 lg:flex-row justify-between items-start px-20'>
        <section className='space-y-4'>
          <div className="flex flex-col gap-y-2">
          <h5 className="text-black text-2xl averta-bold font-semibold tracking-tighter">Fatihibrahim.</h5>
            <p className='text-sm font-normal text-[#C0C0C0]'>Live in warmful city, Semarang Indonesia</p>
          </div>
          <Link href="" className='flex items-center text-white gap-x-2'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span className='text-sm mb-0'>shilla.ibra@gmail.com</span>
          </Link>
          <p className='text-sm font-normal text-[#C0C0C0]'>2022, Create by me for better life, and future</p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 lg:gap-x-10">
          <div className="flex flex-col space-y-4">
            <h5 className="text-base font-bold text-white">Navigation</h5>
            <div className="gap-y-2 flex flex-col">
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Home</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>About</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Portfolio</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Resources</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h5 className="text-base font-bold text-white">Socials</h5>
            <div className="gap-y-2 flex flex-col">
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Dribbble</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Behance</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Instagram</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Linkedin</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Github</Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h5 className="text-base font-bold text-white">Assets</h5>
            <div className="gap-y-2 flex flex-col">
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Codepen</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Gumroad</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>Figma</Link>
              <Link href="" className='text-[#C0C0C0] hover:text-[#4000fd] font-normal'>UI8</Link>
            </div>
          </div>
        </section>
    </div>
  )
}