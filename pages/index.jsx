import Link from 'next/link'
import React from 'react'
import Home from './layouts/home'
import Image from 'next/image'
export default function index() {
  const work = [
    {
      name: "Nifty Educate",
      description : "Nifty is a elearning platform for children that will generate NFTs after finish the task or course."
    },
    {
      name: "EMR Kustati",
      description : "A system for hospital that record any data including patient, doctor, medicine, and many medical needs."
    },
    {
      name: "Triz Academy",
      description : "Triz academy is a platform to be the first step when you aspire to be a young entrepreneur, guided by a professional mentor in their field."
    },
    {
      name: "Kelas Presentasi",
      description : "Onno News is a local digital media that provide national or international news content."
    },
    {
      name: "Onno News",
      description : "Onno News is a local digital media that provide national or international news content."
    },
  ]
  const resources = [
    {
      image: "/img/stock.png",
      name : "Stock UI App",
      category : "UI Design",
      url: "https://fatihibrahim.gumroad.com/l/stocks-ui"
    },
    {
      image: "/img/stock.png",
      name : "Management Dashboard",
      category : "HTML, Bootstrap",
      url: "https://fatihibrahim.gumroad.com/l/stocks-ui"
    },
    {
      image: "/img/stock.png",
      name : "Personal Landing Page",
      category : "UI Design",
      url: "https://fatihibrahim.gumroad.com/l/stocks-ui"
    },
    {
      image: "/img/stock.png",
      name : "Personal Landing Page",
      category : "UI Design",
      url: "https://fatihibrahim.gumroad.com/l/stocks-ui"
    },
    {
      image: "/img/stock.png",
      name : "Personal Landing Page",
      category : "UI Design",
      url: "https://fatihibrahim.gumroad.com/l/stocks-ui"
    },
    {
      image: "/img/stock.png",
      name : "Personal Landing Page",
      category : "UI Design",
      url: "https://fatihibrahim.gumroad.com/l/stocks-ui"
    },
  ]
  return (
    <Home>
    {/* header */}
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center space-x-2">
            <span class="flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#7000DF] opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-[#7000DF]"></span>
            </span>
            <h5 className="text-sm font-medium text-[#c0c0c0]">Frontend Developer & UI Designer</h5>
          </div>
          <h5 className="text-4xl xl:text-[2.75rem] text-white bg-transparent leading-snug font-extrabold">consist to learn and practice, I produce superb products</h5>
        </div>
        <Link href="" className='text-white px-6 py-3 rounded-xl hover:border-[#7000df] hover:bg-[#7000df] duration-300 hover:scale-105 border-white border w-fit'>Get started</Link>
      </div>
      <Image src="/me.svg" className='ml-auto hidden lg:block' alt="" width="350" height="350"/>
    </div>
    <hr className='text-[#c0c0c0] opacity-25 mt-10 lg:mt-0'/>
    {/* portofolio */}
    <div className="flex flex-col justify-between mt-20">
      <h5 className="text-[2rem] font-extrabold text-white">Discover my work</h5>
      <div className="flex flex-col space-y-4 mt-12">
        {work.map((item)=>
          <div key={item.id}>
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center text-white border-b border-[#c0c0c0] pb-4">
              <h5 className='text-lg font-bold mb-2 lg:mb-0'>{item.name}</h5>
              <p className='text-base text-[#c0c0c0] w-full lg:w-8/12 mb-6 lg:mb-0'>{item.description}</p>
              <Link href="" className='text-base text-[#c0c0c0] hover:text-[#7000df] duration-300 font-semibold flex items-center gap-x-1'>
                <span>Details</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Link href="" className='text-white mt-10 px-6 py-3 rounded-xl hover:border-[#7000df] hover:bg-[#7000df] duration-300 hover:scale-105 border-white border w-fit mx-auto'>See all works</Link>
    </div>
    {/* resources */}
    <div className="flex flex-col">
      <div className="mt-20 rounded-2xl">
        <h5 className="text-3xl text-white text-center font-extrabold bg-transparent">Resources</h5>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {
            resources.map((item)=>
            <div key={item.id} className="px-2 pt-2 pb-4 border border-[#c0c0c0] rounded-xl">
              <Image src={item.image} width="100" height="100" className='w-96 h-56 object-cover bg-center rounded-tr-xl rounded-tl-xl' alt=""/>
              <h5 className='text-lg font-bold mb-2 text-white mt-4'>{item.name}</h5>
              <p className='text-sm font-medium mb-4 text-[#c0c0c0]'>{item.category}</p>
              <button className='text-white mt-4 py-2 rounded-xl text-base hover:border-[#7000df] hover:bg-[#7000df] duration-300 hover:scale-100 border-white border w-full'>
                <Link href={item.url} className='w-full bg-transparent px-10'>Download</Link>
              </button>
            </div>
            )
          }
        </div>
      </div>
      <Link href="" className='text-white mt-10 px-6 py-3 rounded-2xl hover:border-[#7000df] hover:bg-[#7000df] duration-300 hover:scale-105 border-white border w-fit mx-auto'>See all Resources</Link>
    </div>
    </Home>
  )
}
