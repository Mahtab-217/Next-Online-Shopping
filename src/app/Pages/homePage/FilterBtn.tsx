"use client"
import { Button } from '@base-ui/react'
import { ListFilter } from 'lucide-react'
import React, { useState } from 'react'

function FilterBtn({showFilter, setShowFilter}:{showFilter: boolean, setShowFilter: any}) {
    
  return (
    <div>
     <Button onClick={()=>setShowFilter(!showFilter)} className={`rounded-none transition-none ${showFilter? 'after:border-t-[15px]': "after:border-t-none"}  hover:text-white bg-gray-300 relative  after:content-[''] after:h-0 after:w-0 after:border-x-[12px] after:border-x-transparent after:border-t-gray-300 px-6 hover:after:border-t-purple-600 hover:bg-purple-600  after:absolute after:-bottom-[15px] after:-translate-x-1/2 after:left-1/2 `}>
        <ListFilter/> Filter
      </Button>
      
    </div>
  )
}

export default FilterBtn
