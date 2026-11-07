import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

import LanguageSwitcher from './LanguageSwitcher'

import { useTranslations } from 'next-intl'
import { LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { createClient } from '@/components/signInForm'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'


async function Navbar() {
  const t=useTranslations("navbar");
  const supabase = await createClient();
  const userInfo = await supabase.auth.getUser();
  return (
    <div className='w-full z-50 py-4 border-b border-b-gray-300 fixed left-0 top-0 backdrop-blur-md px-8 flex justify-between items-center'>
      <div>
        <h1 className='text-2xl font-bold text-purple-600'>
        {t("logo")}
        </h1>
      </div>
      <div className='flex items-center gap-8'>
        <ThemeSwitcher btn_light={t("btn_light")} themes={t("theme")} btn_dark={t("btn_dark")} btn_system={t("btn_system")} />
        <LanguageSwitcher/>

            { !userInfo &&(
        <Button variant="outline">
          <Link href="/signup" className='flex items-center'>
           <LogIn size={18}/> {t("btn_login")}</Link>
           </Button>
)}

     {userInfo && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          {userInfo.data.user?.user_metadata.username}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Logout</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
     )}
      </div>
    </div>
  )
}

export default Navbar
