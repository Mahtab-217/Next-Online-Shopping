"use client"
import React, { useReducer, useTransition } from 'react'
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useLocale } from 'next-intl';
import { Languages } from 'lucide-react';


function LanguageSwitcher() {
  const router= useRouter();
  const locale= useLocale();
  const [pending, startTransition]=useTransition();
  function ChangeLanguage(locale: string){
    document.cookie= `locale=${locale}; path=/;max-age=7776000`;
    startTransition(()=>{
      // router.refresh();
    })
  }
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
          <Languages size={18}/>
          
        </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuGroup>
        <DropdownMenuLabel>language</DropdownMenuLabel>
            <DropdownMenuItem onClick={()=>ChangeLanguage("fa")}>
                Dari
            </DropdownMenuItem>
             <DropdownMenuItem onClick={()=>ChangeLanguage("en")}>
              English
            </DropdownMenuItem>
             <DropdownMenuItem onClick={()=>ChangeLanguage("pa")}>
              Pashto
            </DropdownMenuItem>
        </DropdownMenuGroup>
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default LanguageSwitcher
