export async function createClient(){
    const cookiesStore = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies:{
                getAll(){
                    return cookiesStore.getAll()
                },
                setAll(cookiesToSet){
                    try{
                        cookiesToSet.forEach(({name, value, options})=>
                        cookiesStore.set(name, value, options),
                        )
                    }catch{
                        // Something went wrong
                    }
                },
            },
        },
    )
}




"use client"
import React, { useActionState, useState } from 'react'

import { useLocale, useTranslations } from 'next-intl'

import { Eye, EyeOff } from 'lucide-react'
import { SignInUser} from '@/lib/actions/auth.action'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr';

function SignInForm() {
    const [showPassword, setShowPassword]= useState(false)
     const locale= useLocale()
    const t= useTranslations("signup.labels")
    const [data, action, isPending] = useActionState(SignInUser,{
        state: false,
        message: "",
    })
  return (
            <form action={action} className='grid w-full gap-4 '>
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
                <Button type='submit' disabled={isPending}>{t("signup_btn")}</Button>
                {data.message.length > 0 && (
                    <p className='text-red-500 text-sm'>{data.message}</p>
                )}
            </form>
  )
}

export default SignInForm
