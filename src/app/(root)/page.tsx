import { useTranslations } from 'next-intl'
import React from 'react'
import HeroSection from '../Pages/homePage/Hero';

function page() {
  const t = useTranslations("homepage");
  return (
    <div>
      <HeroSection/>
    </div>
  )
}

export default page
