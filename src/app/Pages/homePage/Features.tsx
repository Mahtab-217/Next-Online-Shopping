import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Handshake, Languages, Shield, ShieldCheck, ShoppingCartPlus } from 'lucide-react';
import { useTranslations } from 'next-intl'
import React from 'react'

function FeatureSection() {
   const t = useTranslations("homepage.features");
   const listFeatures: {id: number; title: string; description: string}[]= [
    {
        id:1,
        title: t("feature1.title"),
        description: t("feature1.description"),
    },
    {
        id:2,
        title: t("feature2.title"),
        description: t("feature2.description"),
    },
    {
        id:3,
        title: t("feature3.title"),
        description: t("feature3.description"),
    },
    {
        id:4,
        title: t("feature4.title"),
        description: t("feature4.description"),
    },
   ]
  return (
    <div className='w-full max-w-6xl mx-auto mt-4'>
      <h2 className='text-center text-xl font-bold s'>{t("subtitle")}</h2>
      <h1 className='title'>{t("title")}</h1>
      <div className='grid w-full grid-cols-4 gap-6'>
        {listFeatures.map((feature)=>(
            <Card key={feature.id}>
                <CardHeader className='w-full flex justify-center'>
                    <span className='inline-block rounded-full p-4 bg-purple-600 w-fit text-white'>
                        {feature.id ===1 ? <ShieldCheck/> : feature.id ===2 ? <Handshake/>: feature.id ===3? <Languages/>: <ShoppingCartPlus/>}
                    </span>
                </CardHeader>
                <CardContent>
                    <h1 className='text-center text-2xl font-bold'>{feature.title}</h1>
                    <span>{feature.description}</span>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  )
}

export default FeatureSection
