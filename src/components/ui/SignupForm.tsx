"use client"
import React, { useActionState, useState } from 'react'
import { Label } from './label'
import { Input } from './input'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from './button'
import { Eye, EyeOff } from 'lucide-react'
import { useRegister } from '@/lib/actions/auth.action'

function SignupForm() {
    const [showPassword, setShowPassword]= useState(false)
     const locale= useLocale()
    const t= useTranslations("signup.labels")
    const [data, action, isPending] = useActionState(useRegister,{
        state: false,
        message: "",
    })
  return (
       <form action={action} className='grid w-full gap-4 '>
                <div className='grid gap-2 '>
                <Label htmlFor='username'>{t("username")}</Label>
            <Input type='text' placeholder={t("username")} name='username' />
            {data.errors?.username && (
              <p className='text-red-500 text-sm'>{data.errors.username[0]}</p>
            )}
                </div>

                <div className='grid gap-2 '>
                <Label htmlFor='email'>{t("email")}</Label>
            <Input type='email'  placeholder={t("email")} name='email'/>
              {data.errors?.email && (
              <p className='text-red-500 text-sm'>{data.errors.email[0]}</p>
            )}
                </div>

                <div className='grid gap-2 relative'>
                <Label htmlFor='password'>{t("password")}</Label>
                <div className=' w-full relative'>
            <Input type={showPassword ? "text": "password"} id='password' placeholder={t("password")} name='password' />
              {data.errors?.password && (
              <p className='text-red-500 text-sm'>{data.errors.password[0]}</p>
            )}
            {
                <div className={`absolute cursor-pointer ${locale=="en"? "right-2": "left-2"} top-1/2  -translate-y-1/2 `}>
                    {showPassword ? <EyeOff onClick={()=>setShowPassword(!showPassword)} size={18}/> : <Eye onClick={()=>setShowPassword(!showPassword)} size={18}/>}
                </div>
            }
                </div>
                </div>
                <Button type='submit'>{t("signup_btn")}</Button>
            </form>
  )
}

export default SignupForm
