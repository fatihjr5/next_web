import React from 'react'
import Links from './sc/Links'
export default function Navbar() {
  return (
    <div className='mt-10 flex flex-row justify-between items-center mb-32 px-20'>
        <h5 className="text-black text-2xl averta-bold font-semibold tracking-tighter">Fatihibrahim.</h5>
        <Links/>
    </div>
  )
}
