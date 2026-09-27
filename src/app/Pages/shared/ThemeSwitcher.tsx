"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { useTheme } from 'next-themes'
import { Moon, Sun, SunMoon } from 'lucide-react';

function ThemeSwitcher() {
   const  {theme, setTheme}=useTheme();
  return (
      <DropdownMenu>
        <DropdownMenuTrigger>
            {theme=== 'light'? <Sun/>: theme==='dark' ? <Moon/> :<SunMoon/>}
        </DropdownMenuTrigger>
    <DropdownMenuContent>
        <DropdownMenuGroup>
        <DropdownMenuLabel>theme</DropdownMenuLabel>
            <DropdownMenuItem onClick={()=>setTheme("light")}>
                <div className='flex justify-between w-full'>
                    <span>Light</span>
                    <Sun/>
                </div>
            </DropdownMenuItem>
             <DropdownMenuItem onClick={()=>setTheme("dark")}>
                <div className='flex justify-between w-full'>
                    <span>Dark</span>
                    <Moon/>
                </div>
            </DropdownMenuItem>
             <DropdownMenuItem onClick={()=>setTheme('system')}>
                <div className='flex justify-between w-full'>
                    <span>System</span>
                    <SunMoon/>
                </div>
            </DropdownMenuItem>
        </DropdownMenuGroup>
    </DropdownMenuContent>
   </DropdownMenu>
  )
}

export default ThemeSwitcher
