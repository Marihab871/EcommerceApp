import Image from 'next/image'
import { Navbar } from './components/navbar'
import  Hero  from './components/hero'
import Newest from './components/Newest'
import { client, urlFor } from './lib/sanity'


export async function getData() {
  const query = "*[_type =='heroImage'][0]['bgimage']"
  const data = await client.fetch(query)
  return urlFor(data).url()
}

export default async function Home() {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12 relative'>
      <Hero/>
        <Newest/>  
    </div>
  )
}
