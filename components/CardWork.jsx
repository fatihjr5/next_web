import Image from 'next/image'
import React from 'react'

export default function CardWork(props) {
  return (
    <div className='hover:scale-105 duration-200 ease-in'>
        <Image src={props.images} alt="" className='w-full rounded-tl-lg rounded-tr-lg' width={100} height={100} />
        <h5 className='text-lg font-bold mb-2 lg:mb-0 mt-5'>{props.title}</h5>
        <p className='text-base text-[#c0c0c0] mt-1'>{props.tech}</p>
    </div>
  )
}
