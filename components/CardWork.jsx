import Link from 'next/link'
import React from 'react'

export default function CardWork(props) {
  return (
    <div>
        <div>
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-center text-white border-b border-[#c0c0c0] pb-4">
            <h5 className='text-lg font-bold mb-2 lg:mb-0'>{props.title}</h5>
            <p className='text-base text-[#c0c0c0] w-full lg:w-8/12 mb-6 lg:mb-0'>{props.description}</p>
            <Link href={`portofolio/${props.title}`} className='text-base text-[#c0c0c0] hover:text-[#7000df] duration-300 font-semibold flex items-center gap-x-1'>
              <span>Details</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </Link>
          </div>
        </div>
    </div>
  )
}
