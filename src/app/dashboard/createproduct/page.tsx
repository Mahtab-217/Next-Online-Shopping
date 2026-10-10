import DashboardHeader from '@/app/Pages/dashboard/dashboardHeader'
import DashboardSidebar from '@/app/Pages/dashboard/dashboardSidebar'
import { Input } from '@/components/ui/input'
import { useLocale } from 'next-intl'
import { title } from 'process'
import React from 'react'

export const metadata={
    title : "اضافه کردن محصول"
} 
function page() {
   const locale= useLocale();
  return (
    <div className='w-full flex'>
      <DashboardSidebar/>
      <div className='flex-1'>
        <DashboardHeader/>
        <div className='p-4'>
        <div className='w-full p-4 my-4 border rounded-2xl'>
            <h1>Add New Product</h1>
            <form action="" className='w-full grid grid-cols-2 gap-4'>
                <Input type='text' name='name' placeholder='product name'/>  
                <div className='relative'>
                <Input type='number' name='price' placeholder='product price'/>   
                <div className={`absolute bg-white dark:bg-black  top-1/2 -translate-y-1/2 ${locale== "en"? "right-2": "left-2"}`}>
                {locale=="en"?  "AFG": "افغانی"}
                </div> 
                </div>
            </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page
