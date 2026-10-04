"use client"
import { Button, Input } from '@base-ui/react'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

function SearchBtn({text, setShowInput, showInput }: {text:string, setShowInput: any, showInput:boolean}) {

  return (
    <div className='flex w-full flex-col gap-4 my-4'>
      <Button onClick={()=>setShowInput(!showInput)} className={`rounded-none transition-none ${showInput? 'after:border-t-[15px]': "after:border-t-none"}  hover:text-white bg-gray-300 relative  after:content-[''] after:h-0 after:w-0 after:border-x-[12px] after:border-x-transparent after:border-t-gray-300 px-6 hover:after:border-t-purple-600 hover:bg-purple-600  after:absolute after:-bottom-[15px] after:-translate-x-1/2 after:left-1/2 `}>
        {text}<Search/>
      </Button>

    </div>
  )
}

export default SearchBtn
