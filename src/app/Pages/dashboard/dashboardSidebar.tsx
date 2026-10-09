import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar'
import { LayoutDashboard, LogOut, MessageCircle, ShoppingBag, ShoppingBasket, ShoppingCart, ShoppingCartPlus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

 async function DashboardSidebar() {
   const t= useTranslations("dashboard");
    const cookiesInfo = await cookies(); 
     const locale= cookiesInfo.get("locale")?.value || "fa";
  return (
      <Sidebar side={locale == "en" ?"left": "right"}>
        <SidebarHeader>
        <div className='w-full text-purple-600 text-2xl font-bold flex gap-1.5 py-4 '>
            <LayoutDashboard size={28}/>
            <span>Dashboard</span>
        </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                <SidebarGroupLabel>Products</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuButton>
                        <ShoppingCart/>
                        All products
                    </SidebarMenuButton>
                </SidebarMenu>

                <SidebarMenu>
                    <SidebarMenuButton>
                        <ShoppingCartPlus/>
                        Add products
                    </SidebarMenuButton>
                </SidebarMenu>

                <SidebarMenu>
                    <SidebarMenuButton>
                        <ShoppingBasket/>
                        Manage products
                    </SidebarMenuButton>
                </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupContent>
                <SidebarGroupLabel>Feedbacks</SidebarGroupLabel>
                 <SidebarMenu>
                    <Link href="/">
                    <SidebarMenuButton>
                        <MessageCircle/>
                        Manage Feedbacks
                    </SidebarMenuButton>
                    </Link>
                 </SidebarMenu>
                 </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
            <div className='w-full items-center flex justify-between'>
                <div className='grid gap-1 text-xs'>
                    <span>Ali Ahmadi</span>
                    <span className='hover:underline hover:text-purple-600'>aliahmadi@gmail.com</span>
                </div>
                <LogOut size={18}/>
            </div>
        </SidebarFooter>
      </Sidebar>

  )
}

export default DashboardSidebar
