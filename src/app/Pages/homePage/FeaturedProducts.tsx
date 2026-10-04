"use client"
import React, { useState } from 'react'
import ProductCard from './ProductCard'
import { Button  } from '@/components/ui/button'

import SearchBtn from './SearchBtn'
import { useTranslations } from 'next-intl'
import FilterBtn from './FilterBtn'
import FilterProducts from './FilterProducts'
import { Input } from '@base-ui/react'

function FeaturedProducts() {
  const [showInput, setShowInput]= useState(false);
  const [showFilter, setShowFilter]= useState(false);
 const t= useTranslations("homepage.products");
    const productList: {id: number, name: string, price: number, image: string}[]=[
        {
            id:1,
            name: "Classic T-shirt",
            price: 50.5,
            image: "/images/product-03.jpg",
        },
        {
            id:2,
            name: "Classic Coat",
            price: 93.5,
            image: "/images/product-04.jpg",
        },
        {
            id:1,
            name: "Classic Watch",
            price: 90.20,
            image: "/images/product-06.jpg",
        },
        {
            id:1,
            name: "Female Top",
            price: 93.5,
            image: "/images/product-14.jpg",
        },
    ]
  return (
    <div className='w-full max-w-6xl mx-auto my-8'>
      <h1 className='title'>Featured Products</h1>
      <div className='w-full flex justify-between'>
        <div className='my-6 flex space-x-4'>
            <Button variant="link">{t("categories.all_products")}</Button>
            <Button variant="link">{t("categories.men")}</Button>
            <Button variant="link">{t("categories.women")}</Button>
            <Button variant="link">{t("categories.shoes")}</Button>
            <Button variant="link">{t("categories.watches")}</Button>
           
        </div>
        <div className='flex gap-4 items-center'>
          <SearchBtn text={t("categories.search")} showInput={showInput} setShowInput={setShowInput} />
          <FilterBtn  showFilter={showFilter} setShowFilter={setShowFilter}/>
        </div>
      </div>
        <div className='w-full'>
          <FilterProducts showFilter= {showFilter} />
        </div>

        <div className='w-full '>
         <Input type='text' placeholder={t("categories.search")} className={`w-full py-3  border border-black ${showInput ? "block": "hidden"}`}/>

        </div>

      <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-4'>
        {productList.map((product)=>(
            <ProductCard product={product} key={product.id}/>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
