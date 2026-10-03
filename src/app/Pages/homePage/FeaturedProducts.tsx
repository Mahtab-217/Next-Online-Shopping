import React from 'react'
import ProductCard from './ProductCard'
import { Button } from '@base-ui/react'
import SearchBtn from './SearchBtn'
import { useTranslations } from 'next-intl'

function FeaturedProducts() {
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
            <Button>{t("categories.all_products")}</Button>
            <Button>{t("categories.men")}</Button>
            <Button>{t("categories.women")}</Button>
            <Button>{t("categories.shoes")}</Button>
            <Button>{t("categories.watches")}</Button>
           
        </div>
        <div className='flex gap-4'>
          <SearchBtn text={t("categories.search")} />
        </div>
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
