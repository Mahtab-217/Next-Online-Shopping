import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

import LanguageSwitcher from './LanguageSwitcher'
import { Button } from '@base-ui/react'
import { useTranslations } from 'next-intl'
import { LogIn } from 'lucide-react'


function Navbar() {
  const t=useTranslations("navbar");
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
        <Button><LogIn size={18}/> {t("btn_login")}</Button>
      </div>
    </div>
  )
}

export default Navbar
