
import { useTranslations } from 'next-intl'
import { title } from 'process';
import React from 'react'
import CategoryCard from './CategoryCard';

function Categories() {
   const t = useTranslations("homepage.categories");
   const listCategorires:{id: number, title: string, desc: string, image:string}[]= [
    {
        id: 1,
        title: t("cat1.title"),
        desc: t("cat1.description"),
        image: "/images/banner-01.jpg",
    },
    {
        id: 2,
        title: t("cat2.title"),
        desc: t("cat2.description"),
        image: "/images/banner-02.jpg",
    },
    {
        id: 3,
        title: t("cat3.title"),
        desc: t("cat3.description"),
        image: "/images/banner-03.jpg",
    },
]
  return (
    <div className=' w-full mt-6 max-w-6xl mx-auto'>
        <h1 className='title'>{t("title")}</h1>
        <div className='w-full  grid md:grid-cols-3 md:gap-6 gap-4'>

      {listCategorires.map((category)=>(
        <CategoryCard category={category} key={category.id}/>
      ))}
        </div>
    </div>
  )
}

export default Categories
