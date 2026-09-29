import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <div className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h1>Online Store</h1>
      </div>
      <div>
        <Image src="/images/card-shop.jpg" alt='' height={1000} width={1000}/>
      </div>
    </div>
  )
}

export default HeroSection
