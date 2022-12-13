// import Link from 'next/link'
import React from 'react'
import Home from './layouts/home'
import Image from 'next/image'
// import CardWork from '../components/CardWork'

export default function index() {
  const settings = {
    lazyload: true,
    nav: false,
    center: true,
    autoPlay: true,
    mouseDrag: true
  };
  const work = [
    {
      image: "/img/stock.png",
      name: "Nifty Educate",
      description : "An education learning for children with e-learning base."
    },
    {
      image: "/img/stock.png",
      name: "EMR Kustati",
      description : "An hospital service system that record all activity inside."
    },
    {
      image: "/img/stock.png",
      name: "Triz Academy",
      description : "An education learning for children with e-learning base."
    },
    {
      image: "/img/stock.png",
      name: "Kelas Presentasi",
      description : "An education learning for children with e-learning base."
    }
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
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-20">
        <section className="flex flex-col space-y-1">
          <span className='text-sm averta-regular text-gray-400'>Frontend Developer & UI Designer</span>
          <h5 className='text-4xl xl:text-5xl leading-snug xl:leading-snug averta-bold'>consist to learn and practice I produce superb products</h5>
        </section>
        <button className="w-fit h-fit text-xl averta-bold ml-auto px-6 py-3 rounded-full text-[#7000df] ring-1 ring-[#7000df]">Get Started</button>
      </div>
      {/* video */}
      <div className="mt-52">
        <video src="/video/qasdUd91.mp4" className='w-screen object-cover bg-center' autoPlay loop muted playsInline type="video/mp4"></video>
      </div>
      {/* portofolio */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center px-20 mt-48">
          <h5 className='text-2xl xl:text-3xl leading-snug xl:leading-snug averta-bold'>Everything should be prepared to avoid the things we won`t. Like showing my work before we collaborate, you can see details below.</h5>
        <button className="w-fit h-fit text-xl averta-bold ml-auto px-6 py-3 rounded-full text-[#7000df] ring-1 ring-[#7000df]">See all</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-4 px-20 mt-36">
        {/* <TinySlider settings={settings}> */}
          {
            work.map((items) =>
              <div key={items.id}>
                <Image src={items.image} alt="" className='w-full h-96 bg-center object-cover' width={100} height={100}/>
                <h5 className='text-2xl averta-bold'>{items.name}</h5>
                <h5 className='text-base averta-regular'>{items.description}</h5>
              </div>
            )
          }
        {/* </TinySlider> */}
      </div>
    </Home>
  )
}
