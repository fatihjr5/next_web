// import dynamic from 'next/dynamic'
import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// import Crisp from '../../components/Crisp'
export default function Home({children}) {
  // const CrispNoSSR = dynamic(()=> <Crisp/>,{ssr:false})
  return (
    <div className=''>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
