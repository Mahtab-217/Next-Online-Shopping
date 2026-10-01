import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryCard({category}: {category: {title: string, desc: string, image: string}}) {
  return (
    <Link href="/" className='border relative'> 
    <div className='absolute to-4 left-4'>
        <h1 className='text-left text-2xl font-bold'>{category.title}</h1>
        <span className='mt-2 text-sm'> {category.desc}</span>
    </div>
      <Image src={category.image} alt={category.title} height={800} width={800} className='w-full object-cover'/>
    </Link>
  )
}

export default CategoryCard
