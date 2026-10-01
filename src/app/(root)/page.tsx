import { useTranslations } from 'next-intl'
import React from 'react'
import HeroSection from '../Pages/homePage/Hero';
import FeatureSection from '../Pages/homePage/Features';
import { title } from 'process';
import Categories from '../Pages/homePage/Categories';
 export const metadata = {
  title: "خانه"
 }


function page() {
  const t = useTranslations("homepage");
  return (
    <div className='mt-20'>
      <HeroSection/>
      <FeatureSection/>
      <Categories/>
    </div>
  )
}

export default page
