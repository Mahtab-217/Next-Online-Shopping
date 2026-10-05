import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProductCard({product}: {product: { id:number, name: string, price: number, image: string}}) {
  return (
    <Link href={`/products/${product.id}`}> 
   <Card className='p-0'>
    <CardHeader className='p-0 group relative group'>
        <Image className='h-80 object-cover' src={product.image} alt={product.name} width={800} height={800} />


          <div className=' absolute hidden group-hover:block left-1/2 bottom-4 bg-white rounded-full px-4 py-2 -translate-x-1/2   hover:bg-black transition-all duration-300 hover:text-white hover:cursor-pointer'>
            <h1 >Quick View</h1>
        </div>


    </CardHeader>
    <CardContent>
        <h1 className='text-xl font-semibold text-gray-500 '>{product.name}</h1>
        <span>{product.price}</span>
      
    </CardContent>
   </Card>
   </Link>
  )
}

export default ProductCard
