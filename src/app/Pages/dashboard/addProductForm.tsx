"use client"
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@base-ui/react'
import { useLocale, useTranslations } from 'next-intl';
import React from 'react'

function AddProductForm() {
    const locale= useLocale();
    const t = useTranslations("dashboard.addproduct");
  return (
    <form action="" className='w-full grid grid-cols-2 gap-4'>
               <div className='grid gap-2'>
                <Label>{t("labels.name")}</Label>
                <Input type='text' name='name' placeholder={t("placeholders.name")}/>  
               </div>

               <div className='grid gap-2'>
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

               <div className='flex gap-4 flex-wrap items-center'>
                <h1>رنک ها</h1>
                <div className='flex gap-1 items-center'>
                    <div>
                         <div className='h-4 w-4 bg-white border-2 border rounded-full'></div>
                    <Label htmlFor='white'>{t("labels.color.white")}</Label>
                    </div>
                    <Checkbox name='color' id='white' value='white'/>
                </div>

                <div className='flex gap-1 items-center'>
                    <div>
                         <div className='h-4 w-4 bg-blue-700 rounded-full'></div>
                    <Label htmlFor='blue'>{t("labels.color.blue")}</Label>
                    </div>
                    <Checkbox name='color' id='blue' value='blue'/>
                </div>
                <div className='flex gap-1 items-center'>
                    <div>
                        <div className='h-4 w-4 bg-red-700 rounded-full'></div>
                    <Label htmlFor='red'>{t("labels.color.red")}</Label>
                    </div>
                    <Checkbox name='color' id='red' value='red'/>
                </div>
                <div className='flex gap-1 items-center'>
                    <div className='flex gap-1 '>
                        <div className='h-4 w-4 bg-black dark:border dark:border-white rounded-full'></div>
                    <Label htmlFor='black'>{t("labels.color.black")}</Label>
                    </div>
                    <Checkbox name='color' id='black' value='black'/>
                </div>
                <Button>رنگ های بیشتر</Button>
               </div>
            </form>
  )
}

export default AddProductForm
