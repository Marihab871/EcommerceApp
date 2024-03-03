import  Hero  from './components/hero'
import Newest from './components/Newest'
import Whychooseus from './components/Whychooseus'




export default function Home() {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12 relative'>
      <Hero/>
        <Newest/> 
        <Whychooseus/> 
    </div>
  )
}
