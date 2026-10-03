import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryCard({category}: {category: {title: string, desc: string, image: string}}) {
  return (
    <Link href="/" className='border z-10 relative after:content-[""] hover:after:w-full hover:after:h-full hover:after:absolute hover:after:left-0 hover:after:top-0 hover:after:bg-purple-700/50 transition-all duration-300 group hover:after:z-50 '> 
    <div className='absolute to-4 left-4'>
        <h1 className='text-left group-hover:font-black text-2xl font-bold'>{category.title}</h1>
        <span className='mt-2 text-sm'> {category.desc}</span>
    </div>
    <div className='absolute bottom-4 hidden group-hover:block left-4'>
      <span className='underline underline-offset-4'>Shop Now</span>
    </div>
      <Image src={category.image} alt={category.title} height={800} width={800} className='w-full z-20 object-cover'/>
    </Link>
  )
}

export default CategoryCard
