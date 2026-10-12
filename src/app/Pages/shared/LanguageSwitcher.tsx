"use client"
import React, { useReducer, useTransition } from 'react'
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useLocale, useTranslations } from 'next-intl';
import { Languages } from 'lucide-react';


function LanguageSwitcher() {
 const t = useTranslations("navbar.lang");
  const router= useRouter();
  const locale= useLocale();
  const [pending, startTransition]=useTransition();
  function ChangeLanguage(locale: string){
    document.cookie= `locale=${locale}; path=/;max-age=7776000`;
    startTransition(()=>{
      router.refresh();
    })
  }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
          <Languages size={18}/>
          
        </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuGroup>
        <DropdownMenuLabel>{t("title")}</DropdownMenuLabel>
            <DropdownMenuItem onClick={()=>ChangeLanguage("fa")}>
                {t("dari")}
            </DropdownMenuItem>
             <DropdownMenuItem onClick={()=>ChangeLanguage("en")}>
              {t("english")}
            </DropdownMenuItem>
             <DropdownMenuItem onClick={()=>ChangeLanguage("pa")}>
              {t("pashto")}
            </DropdownMenuItem>
        </DropdownMenuGroup>
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default LanguageSwitcher
