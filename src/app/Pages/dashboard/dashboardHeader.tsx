import React from 'react'
import LanguageSwitcher from '../shared/LanguageSwitcher'
import ThemeSwitcher from '../shared/ThemeSwitcher'
import { useTranslations } from 'next-intl'
import { SidebarTrigger } from '@/components/ui/sidebar';

function DashboardHeader() {
   const t= useTranslations();

  return (
    <div className='w-full justify-between px-8 py-4 border-b items-center flex '>
      <div className='flex gap-3 items-center'>
        <SidebarTrigger/>
        <h1>{t("dashboard.header.title")}</h1>
      </div>

      <div className='flex gap-4 items-center'>
        <LanguageSwitcher/>
        <ThemeSwitcher btn_light={t("navbar.btn_light")} themes={t("navbar.theme")} btn_dark={t("navbar.btn_dark")} btn_system={t("navbar.btn_system")} />

      </div>
    </div>
  )
}

export default DashboardHeader
