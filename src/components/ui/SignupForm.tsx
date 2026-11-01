"use client"
import React, { useState } from 'react'
import { Label } from './label'
import { Input } from './input'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from './button'
import { Eye, EyeOff } from 'lucide-react'

function SignupForm() {
    const [showPassword, setShowPassword]= useState(false)
     const locale= useLocale()
    const t= useTranslations("signup.labels")
  return (
       <form action="" className='grid w-full gap-4 '>
                <div className='grid gap-2 '>
                <Label>{t("username")}</Label>
            <Input type='text'  />
                </div>

                <div className='grid gap-2 '>
                <Label>{t("email")}</Label>
            <Input type='email'  />
                </div>

                <div className='grid gap-2 relative'>
                <Label>{t("password")}</Label>
                <div className=' w-full relative'>

            <Input type={showPassword ? "text": "password"}  />
            {
                <div className={`absolute cursor-pointer ${locale=="en"? "right-2": "left-2"} top-1/2  -translate-y-1/2 `}>
                    {showPassword ? <EyeOff onClick={()=>setShowPassword(!showPassword)} size={18}/> : <Eye onClick={()=>setShowPassword(!showPassword)} size={18}/>}
                </div>
            }
                </div>
                </div>

                {/* confirm password */}
                <div className='grid gap-2 relative'>
                <Label>{t("confirm_password")}</Label>
                <div className=' w-full relative'>

            <Input type={showPassword ? "text": "password"}  />
            {
                <div className={`absolute cursor-pointer ${locale=="en"? "right-2": "left-2"} top-1/2  -translate-y-1/2 `}>
                    {showPassword ? <EyeOff onClick={()=>setShowPassword(!showPassword)} size={18}/> : <Eye onClick={()=>setShowPassword(!showPassword)} size={18}/>}
                </div>
            }
                </div>
                </div>


                <Button>{t("signup_btn")}</Button>
            </form>
  )
}

export default SignupForm
