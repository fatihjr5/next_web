import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default function Home({children}) {
  
  return (
    <div id='apps' data-scroll data-scroll-call="call">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
