"use client"
import Image from 'next/image'
import React, { useState } from 'react'

function ImageCard() {
    const listImages =[
        "card-shop.jpg", "product-03.jpg"
    ];
  const [index, setIndex] =  useState(0);
  return (
    <div className='w-full col-span-2 flex gap-2 flex-col'>
                <Image className='w-full object-cover h-96 border rounded-lg' src={`/images/${listImages[index]}`} alt='product image' height={1000} width={1000}/>
            <div className='grid grid-cols-2 gap-4'>
        {listImages.map((image, index)=>(
        <Image key={index} onClick={()=>setIndex(index)} className=' w-full h-42 rounded-2xl hover:cursor-pointer' src={`/images/${image}`} alt='product image' height={1000} width={1000}/>
            ))}
      </div>
    </div>
  )
}

export default ImageCard
