"use client"
import React, { useReducer, useTransition } from 'react'
import { useRouter } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';


function LanguageSwitcher() {
  const router= useRouter();
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
            Language
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
