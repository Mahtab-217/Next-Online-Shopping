"use client"
import React, { useEffect, useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { useTheme } from 'next-themes'
import { Moon, Sun, SunMoon } from 'lucide-react';

function ThemeSwitcher({btn_light, btn_dark, btn_system ,themes}:{btn_light:string, btn_dark:string, btn_system: string, themes: string}) {
   const  {theme, setTheme}=useTheme();
  const [mount, setMount]= useState(false);
  useEffect(()=>{
    setMount(true);
  }, []);
  if(!mount) return null;
  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
            {theme=== 'light'? <Sun/>: theme==='dark' ? <Moon/> :<SunMoon/>}
        </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuGroup>
        <DropdownMenuLabel>{themes}</DropdownMenuLabel>
            <DropdownMenuItem onClick={()=>setTheme("light")}>
                <div className='flex justify-between w-full'>
                    <span>{btn_light}</span>
                    <Sun size={18}/>
                </div>
            </DropdownMenuItem>
             <DropdownMenuItem onClick={()=>setTheme("dark")}>
                <div className='flex justify-between w-full'>
                    <span>{btn_dark}</span>
                    <Moon size={18}/>
                </div>
            </DropdownMenuItem>
             <DropdownMenuItem onClick={()=>setTheme('system')}>
                <div className='flex justify-between w-full'>
                    <span>{btn_system}</span>
                    <SunMoon size={18}/>
                </div>
            </DropdownMenuItem>
        </DropdownMenuGroup>
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default ThemeSwitcher
