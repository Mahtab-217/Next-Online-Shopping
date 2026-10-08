
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'
import { link } from 'fs'
import { useTranslations } from 'next-intl';
import React from 'react'

function FilterProducts({showFilter}:{showFilter:boolean}) {
const t=  useTranslations("homepage.filter");
  return (
    
    <div className={`h-fit w-full mb-3   ${showFilter ? "none": "hidden"} grid grid-cols-4 dark:bg:gray-800 rounded-md gap-8 bg-gray-300 p-12`}>
        {/* Sort  by */}
        <div>
        <h1>{t("sort_by.title")}</h1>
        {/* Buttons */}
        <div className='flex flex-col items-start gap-3'>   
        <Button variant="link" className='hover:text-purple-600 '>{t("sort_by.default")}</Button>
        <Button variant="link" className='hover:text-purple-600 '>{t("sort_by.popularity")}</Button>
        <Button variant="link" className='hover:text-purple-600 '>{t("sort_by.newness")}</Button>
        <Button variant="link" className='hover:text-purple-600 '>{t("sort_by.price_low_to_high")}</Button>
        <Button variant="link" className='hover:text-purple-600 '>{t("sort_by.price_high_to_low")}</Button>
      </div>
      </div>
         {/* price */}
      <div>
        <h1>{t("price.title")}</h1>
        {/* buttons */}
        <div className='flex flex-col items-start gap-3'> 
        <Button variant="link" className="hover:text-purple-600">{t("price.all")}</Button>
        <Button variant="link" className="hover:text-purple-600">250-500</Button>
        <Button variant="link" className="hover:text-purple-600">500-1000</Button>
        <Button variant="link" className="hover:text-purple-600">1000-2000</Button>
        <Button variant="link" className="hover:text-purple-600">2000+</Button>
      </div>
      </div>

        {/* colors */}
      <div className='flex flex-col gap-3'>
        <h1>{t("colors.title")}</h1>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-black border border-black rounded-full'> </div>
            <span>{t("colors.black")}</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-blue-700 border border-black rounded-full'> </div>
            <span>{t("colors.blue")}</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-gray-500 border border-black rounded-full'> </div>
            <span>{t("colors.gray")}</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-red-700 border border-black rounded-full'> </div>
            <span>{t("colors.red")}</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-green-800 border border-black rounded-full'> </div>
            <span>{t("colors.green")}</span>
        </div>
        <div className='flex gap-2 items-center'>
            <div className='w-4 h-4 bg-white border border-black rounded-full'> </div>
            <span>{t("colors.white")}</span>
        </div>
      </div>
      {/* tags */}
      <div className='w-full flex gap-4 flex-wrap h-fit'>
        <h1>{t("brands.title")}</h1>
        <Badge variant="outline" className='p-2 hover:border-purple-600 hover:cursor-pointer'>{t("brands.fashion")} </Badge>
        <Badge variant="outline" className='p-2 hover:border-purple-600 hover:cursor-pointer'>{t("brands.lifestyle")} </Badge>
        <Badge variant="outline" className='p-2 hover:border-purple-600 hover:cursor-pointer'>{t("brands.hazaragi")} </Badge>
        <Badge variant="outline" className='p-2 hover:border-purple-600 hover:cursor-pointer'>{t("brands.crafts")}</Badge>
      </div>
      </div>
  );
}

export default FilterProducts
