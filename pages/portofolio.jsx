import Link from 'next/link'
import React from 'react'
import CardWork from '../components/CardWork'
import Home from './layouts/home'

export default function Portofolio() {
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
  return (
    <Home>
        {work.map((item)=>
          <CardWork key={item.id} title={item.name} description={item.description}/>
        )}
    </Home>
  )
}
