import React from 'react'
import { useRouter } from 'next/router'
import Home from '../layouts/home'
export default function Portofolio() {
    const router = useRouter();
    const {id} = router.query
  return (
    <Home>
        <div className="flex flex-col">
            <h5 className='text-lg font-bold mb-2 lg:mb-0 text-white'>{id}</h5>
            <p className='text-base text-[#c0c0c0] w-full lg:w-8/12 mb-6 lg:mb-0'>d</p>
        </div>
    </Home>
  )
}
