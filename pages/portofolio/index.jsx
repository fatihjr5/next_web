import Link from 'next/link'
import React from 'react'
import CardWork from '../../components/CardWork';
import Home from '../layouts/home';
import work from '../api/work';
export default function Portofolio() {
  return (
    <Home>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 px-20'>
        {
            work.map((items) =>
            <Link key={items.id} href={{ pathname: 'portofolio', query: { id: items.id } }}>
              <CardWork images={items.image} title={items.name} description={items.tech}/>
            </Link>
          )
        }
      </div>
    </Home>
  )
}
