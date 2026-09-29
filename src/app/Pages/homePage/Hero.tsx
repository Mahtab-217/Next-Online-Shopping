import { Button } from '@base-ui/react';
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'

function HeroSection() {
  const t =useTranslations("homepage");
  return (
    <div className='w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2'>
      <div className='mt-3 flex flex-col gap-6'>
        <h1 className='text-6xl font-bold text-purple-600 '>{t("hero.title")}</h1>
        <p className='text-md text-gray-500'>{t("hero.description")}</p>
        <div className='flex gap-4'>
          <Button>{t("hero.btn_explore")}</Button>
          <Button className="bg-purple-600 text-white px-8 hover:bg-purple-800 transition-colors duration-300">{t("hero.btn_join")}</Button>
        </div>
      </div>
      <div>
        <Image className='w-full h-full object-cover' src="/images/card-shop.jpg" alt='' height={1000} width={1000}/>
      </div>
    </div>
  )
}

export default HeroSection
