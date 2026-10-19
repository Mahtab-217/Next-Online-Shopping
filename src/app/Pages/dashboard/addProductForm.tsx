"use client"
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';

import { useLocale, useTranslations } from 'next-intl';
import React, { useActionState, useState } from 'react'
import ShamsiEndDate from './shamsiEndDate';
import ShamsiDatePicker from './shamsiDatePicker';
import { Textarea } from '@/components/ui/textarea';
import { AddProduct } from '@/lib/actions/product.action';
type productType = "clothe"| "shoes"| "cosmetic_item";



function AddProductForm() {

  const [manDate, setManDate]=  useState<any>();
  const [expDate, setExpDate]=  useState<any>();

    const [productType, setProductType]= useState<productType| "">("");
    const [showMoreColors, setShowMoreColors]=useState(false);
    const locale= useLocale();
    const t = useTranslations("dashboard.addproduct");
    const validationMessages = t("dashboard.addProduct.errors");
    const [data, action, isPending ]= useActionState( AddProduct,{
        status: false,
        message: "",
       

    }); 
  return (
    <form action={action} className='w-full grid grid-cols-2 gap-4'>
               <div className='grid gap-2'>
                <Label>{t("labels.name")}</Label>
                <Input type='text' name='name' placeholder={t("placeholders.name")}/>  
                {data.error?.name && (
                    <p className='text-xs text-red-800'>{data.error.name[0]}</p>
                )}
               </div>

               <div className='grid  gap-2'>
                <Label>{t("labels.price")}</Label>
                <div className='relative'>
                <Input type='number' name='price' placeholder='product price'/>   
                <div className={`absolute bg-white dark:bg-black  top-1/2 -translate-y-1/2 ${locale== "en"? "right-2": "left-2"}`}>
                {locale=="en"?  "AFG": "افغانی"}
                </div> 
                </div>
                {data.error?.price && (
                    <p className='text-xs text-red-800'>{data.error.price[0]}</p>
                )}
                </div>

                <div className='grid gap-2'>
                <Label htmlFor='size'>{t("labels.size")}</Label>
                <Input type='text' id='size' name='size' placeholder={t("placeholders.size")}/>  
               </div>
               <div className='grid gap-2'>
                <Label htmlFor='brand'>{t("labels.brand")}</Label>
                <Input type='text' id='brand' name='brand' placeholder={t("placeholders.brand")}/>  
               </div>

                 <div className='grid gap-2'>
                <Label htmlFor='qty'>{t("labels.qty")}</Label>
                <Input type='number' id='qty' name='qty' placeholder={t("placeholders.qty")}/>  
               </div>


                 <div className='grid gap-2'>
                <Label htmlFor='alert_qty'>{t("labels.alert_qty")}</Label>
                <Input type='number' id='alert_qty' name='alert_qty' placeholder={t("placeholders.alert_qty")}/>  
               </div>

               <div className='grid gap-2'>
                <Label htmlFor='front_image'>{t("labels.front_image")}</Label>
                <Input type='file' id='front_image' name='front_image'/>  
               </div>

               <div className='grid gap-2'>
                <Label htmlFor='back_image'>{t("labels.back_image")}</Label>
                <Input type='file' id='back_image' name='back_image'/>  
               </div>



              <div className='grid gap-2'>
                    <Label>{t("labels.product_type")}</Label>
                    <Select name='type' value={productType} onValueChange={(value)=>setProductType(value as productType | "")}>
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
                <Label>{t("labels.man_date")}</Label>
                
                
                    <ShamsiDatePicker date={manDate} setDate={setManDate}/>
                    <Input name='man_date' type='text' defaultValue={manDate? manDate.format("YYYY/MM/DD") : ""} className='hidden'/>
              </div>
              {/* exp date */}
              <div className={`grid gap-2 ${productType== "cosmetic_item"? "block": "hidden"}`}>
                <Label>{t("labels.exp_date")}</Label>
                
            
                    <ShamsiEndDate date={expDate} setDate={setExpDate}/>
                  <Input name='man_date' type='text' defaultValue={expDate? expDate.format("YYYY/MM/DD") : ""} className='hidden'/>
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

               <div className='grid gap-2'>
                <Label htmlFor='description'>{t("labels.description")}</Label>
                <Textarea className='w-full h-40 resize-none' placeholder={t("placeholders.description")}/>
               </div>

               <Button type='submit'>{t("labels.save_btn")}</Button>
            </form>
  )
}

export default AddProductForm
