import React from 'react'
import Home from '../layouts/home'
import { useRouter } from 'next/router'

export default function Portofolio() {
  const router = useRouter();
  const { image, name, tech, description } = router.query;
  const query = router.query;

  console.log(query)

  return (
    <Home>
      <div className="flex flex-col">
        <h5 className="text-lg font-bold mb-2 lg:mb-0 text-black text-center"></h5>
        <h5>{name}</h5>
      </div>
    </Home>
  )
}
