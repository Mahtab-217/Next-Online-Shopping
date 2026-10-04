
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { link } from 'fs'
import React from 'react'

function FilterProducts({showFilter}:{showFilter:boolean}) {
  return (
    
    <div className={`h-fit w-full mb-3   ${showFilter ? "none": "hidden"} grid grid-cols-4 gap-8 bg-gray-300 p-12`}>
        {/* Sort  by */}
        <div>
        <h1>Sort By</h1>
        {/* Buttons */}
        <div className='flex flex-col items-start gap-3'>   
        <Button variant="link" className='hover:text-purple-600 '>Default</Button>
        <Button variant="link" className='hover:text-purple-600 '>Popularity</Button>
        <Button variant="link" className='hover:text-purple-600 '>Newness</Button>
        <Button variant="link" className='hover:text-purple-600 '>Price: Low to High</Button>
        <Button variant="link" className='hover:text-purple-600 '>Price: High to Low</Button>
      </div>
      </div>
         {/* price */}
      <div>
        <h1>Price</h1>
        {/* buttons */}
        <div className='flex flex-col items-start gap-3'> 
        <Button variant="link" className="hover:text-purple-600">All</Button>
        <Button variant="link" className="hover:text-purple-600">250-500</Button>
        <Button variant="link" className="hover:text-purple-600">500-1000</Button>
        <Button variant="link" className="hover:text-purple-600">1000-2000</Button>
        <Button variant="link" className="hover:text-purple-600">2000+</Button>
      </div>
      </div>

        {/* colors */}
      <div className='flex flex-col gap-3'>
        <h1>Colors</h1>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-black border border-black rounded-full'> </div>
            <span>Black</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-blue-700 border border-black rounded-full'> </div>
            <span>Blue</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-gray-500 border border-black rounded-full'> </div>
            <span>Gray</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-red-700 border border-black rounded-full'> </div>
            <span>Red</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-green-800 border border-black rounded-full'> </div>
            <span>Green</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-white border border-black rounded-full'> </div>
            <span>White</span>
        </div>
      </div>
      {/* tags */}
      <div className='w-full flex gap-4 flex-wrap h-fit'>
        <Badge variant="outline" className='p-2 hover:border-purple-600 hover:cursor-pointer'>Fashion</Badge>
        <Badge variant="outline" className='p-2 hover:border-purple-600 hover:cursor-pointer'>Lifestyle</Badge>
        <Badge variant="outline" className='p-2 hover:border-purple-600 hover:cursor-pointer'>Hazaragi</Badge>
        <Badge variant="outline" className='p-2 hover:border-purple-600 hover:cursor-pointer'>Crafts</Badge>
      </div>
      </div>
  );
}

export default FilterProducts
