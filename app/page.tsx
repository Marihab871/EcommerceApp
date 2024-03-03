import Image from 'next/image'
import { Navbar } from './components/navbar'
import  Hero  from './components/hero'
import Newest from './components/Newest'




export default function Home() {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12 relative'>
      <Hero/>
        <Newest/>  
    </div>
  )
}
