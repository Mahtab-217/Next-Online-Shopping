"use client"
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';

import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react'

function AddProductForm() {
    const [productType, setProductType]= useState("clothe");
    const [showMoreColors, setShowMoreColors]=useState(false);
    const locale= useLocale();
    const t = useTranslations("dashboard.addproduct");
  return (
    <form action="" className='w-full grid grid-cols-2 gap-4'>
               <div className='grid gap-2'>
                <Label>{t("labels.name")}</Label>
                <Input type='text' name='name' placeholder={t("placeholders.name")}/>  
               </div>

               <div className='grid  gap-2'>
                <Label>{t("labels.price")}</Label>
                <div className='relative'>
                <Input type='number' name='price' placeholder='product price'/>   
                <div className={`absolute bg-white dark:bg-black  top-1/2 -translate-y-1/2 ${locale== "en"? "right-2": "left-2"}`}>
                {locale=="en"?  "AFG": "افغانی"}
                </div> 
                </div>
                </div>

                <div className='grid gap-2'>
                <Label htmlFor='size'>{t("labels.size")}</Label>
                <Input type='text' id='size' name='size' placeholder={t("placeholders.size")}/>  
               </div>

              <div className='grid gap-2'>
                    <Label>{t("labels.product_type")}</Label>
                    <Select value={productType} onValueChange={()=>setProductType}>
                        <SelectTrigger className="w-full ">{t("types.title")}</SelectTrigger>
                        <SelectContent className="w-full">
                            <SelectItem value="clothe">{t("types.clothe")}</SelectItem>
                            <SelectItem value="shoes">{t("types.shoes")}</SelectItem>
                            <SelectItem value="cosmetic_item">{t("types.cosmetic")}</SelectItem>
                        </SelectContent>
                    </Select>
              </div>

              {/* man date */}
              <div className={`grid gap-2 ${productType== "cosmetic_item"? "block": "hidden"}`}>
                <Label></Label>
              </div>
              {/* exp date */}
              <div className={`grid gap-2 ${productType== "cosmetic_item"? "block": "hidden"}`}>
                <Label></Label>
              </div>

               <div className='flex gap-4 flex-wrap items-center'>
                <h1 className='text-xl font-bold'>{t("labels.color.title")}</h1>
                <div className='flex gap-1 items-center'>
                    <div className='flex gap-1'>
                         <div className='h-4 w-4 bg-white border-2 border rounded-full'></div>
                    <Label htmlFor='white'>{t("labels.color.white")}</Label>
                    </div>
                    <Checkbox name='color' id='white' value='white'/>
                </div>

                <div className='flex gap-1 items-center'>
                    <div className='flex gap-1'>
                         <div className='h-4 w-4 bg-blue-700 rounded-full'></div>
                    <Label htmlFor='blue'>{t("labels.color.blue")}</Label>
                    </div>
                    <Checkbox name='color' id='blue' value='blue'/>
                </div>
                <div className='flex gap-1 items-center'>
                    <div className='flex gap-1'>
                        <div className='h-4 w-4 bg-purple-700 rounded-full'></div>
                    <Label htmlFor='purple'>{t("labels.color.purple")}</Label>
                    </div>
                    <Checkbox name='color' id='purple' value='purple'/>
                </div>
                <div className='flex gap-1 items-center'>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-black dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='black'>{t("labels.color.black")}</Label>
                    </div>
                    <Checkbox name='color' id='black' value='black'/>
                </div>
                {/* blue */}
                <div className={`${showMoreColors? "flex": "hidden"} gap-1 items-center`}>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-gray-500 dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='gray'>{t("labels.color.gray")}</Label>
                    </div>
                    <Checkbox name='color' id='gray' value='gray'/>
                </div>
                {/* brown */}
                 <div className={`${showMoreColors? "flex": "hidden"} gap-1 items-center`}>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-amber-700 dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='brown'>{t("labels.color.brown")}</Label>
                    </div>
                    <Checkbox name='color' id='brown' value='brown'/>
                </div>
                {/* green */}
                 <div className={`${showMoreColors? "flex": "hidden"} gap-1 items-center`}>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-green-700 dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='green'>{t("labels.color.green")}</Label>
                    </div>
                    <Checkbox name='color' id='green' value='green'/>
                </div>
                {/* cyan */}
                 <div className={`${showMoreColors? "flex": "hidden"} gap-1 items-center`}>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-cyan-500 dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='cyan'>{t("labels.color.cyan")}</Label>
                    </div>
                    <Checkbox name='color' id='cyan' value='cyan'/>
                </div>
                {/* pink */}
                 <div className={`${showMoreColors? "flex": "hidden"} gap-1 items-center`}>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-pink-500 dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='pink'>{t("labels.color.pink")}</Label>
                    </div>
                    <Checkbox name='color' id='pink' value='pink'/>
                </div>
                {/* yellow */}
                 <div className={`${showMoreColors? "flex": "hidden"} gap-1 items-center`}>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-yellow-500 dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='yellow'>{t("labels.color.yellow")}</Label>
                    </div>
                    <Checkbox name='color' id='yellow' value='yellow'/>
                </div>
                {/* red */}
                 <div className={`${showMoreColors? "flex": "hidden"} gap-1 items-center`}>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-red-700 dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='red'>{t("labels.color.red")}</Label>
                    </div>
                    <Checkbox name='color' id='red' value='red'/>
                </div>
                {/* orange */}
                 <div className={`${showMoreColors? "flex": "hidden"} gap-1 items-center`}>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-orange-500 dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='orange'>{t("labels.color.orange")}</Label>
                    </div>
                    <Checkbox name='color' id='orange' value='orange'/>
                </div>
                <Button onClick={()=>setShowMoreColors(!showMoreColors)}>
                    {!showMoreColors? <div>{t("labels.color.btn_more")}</div>: <div>{t("labels.color.btn_trend")}</div>}
                </Button>
               </div>
            </form>
  )
}

export default AddProductForm
