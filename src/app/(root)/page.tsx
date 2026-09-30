import { useTranslations } from 'next-intl'
import React from 'react'
import HeroSection from '../Pages/homePage/Hero';
import FeatureSection from '../Pages/homePage/Features';

function page() {
  const t = useTranslations("homepage");
  return (
    <div className='mt-20'>
      <HeroSection/>
      <FeatureSection/>
    </div>
  )
}

export default page
