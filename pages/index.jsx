import { useEffect } from 'react'
import Home from './layouts/home'
import work from './api/work'
import CardWork from '../components/CardWork'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Index() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in',
      delay: 500,
    });
  });
  return (
    <Home>
      {/* header */}
      <section className="flex flex-col space-y-1 px-20 lg:ml-40">
        <span className='text-sm averta-regular text-gray-400'>Frontend Developer & UI Designer</span>
        <h5 className='text-4xl xl:text-5xl leading-tight lg:w-9/12 xl:leading-tight font-bold'>Elevating my skills through continuous learning, resulting <br className='hidden lg:block' /> in top-quality products</h5>
      </section>
      {/* video */}
      <div className="mt-52">
        <video src="/video/qasdUd91.mp4" className='w-screen object-cover bg-center' autoPlay loop muted playsInline type="video/mp4"></video>
      </div>
      {/* portofolio */}
      <div className="px-20 mt-52">
        <h5 className='text-4xl xl:text-5xl leading-snug xl:leading-snug font-semibold'>To ensure a smooth <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>collaboration</span>
          , its helpful to show my work beforehand. This allows you to see the details and helps prevent any potential issues.
        </h5>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 px-20 mt-52' data-aos="fade-up">
        {
         work.map((items, i) => (i < 3 &&
            <Link key={items.id} href={`/portofolio/${items.name}`}>
              <CardWork images={items.image} title={items.name} description={items.description} tech={items.tech}/>
            </Link>
            )
          )
        }
      </div>
      {/* resources */}
      <div className="bg-[#FAFAFA] w-full mt-52 pt-28 pb-48 rounded-tl-3xl rounded-tr-3xl">
        <div className="px-20 mt-20 mb-40">
          <h5 className='text-4xl xl:text-5xl leading-snug xl:leading-snug font-semibold'>I am committed to providing value and support to those who need it. I am happy to help build whatever is needed to make a positive impact.</h5>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 px-20 mt-36' data-aos="fade-up">
          {
           work.map((items, i) => (i < 3 &&
              <Link key={items.id} href={`/portofolio/${items.name}`}>
                <CardWork images={items.image} title={items.name} description={items.description} tech={items.tech}/>
              </Link>
              )
            )
          }
        </div>
      </div>
    </Home>
  )
}
