import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar'
import { LayoutDashboard, LogOut, MessageCircle, ShoppingBag, ShoppingBasket, ShoppingCart, ShoppingCartPlus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

 async function DashboardSidebar() {
   const t= await getTranslations("dashboard.sidebar");
    const cookiesInfo = await cookies(); 
     const locale= cookiesInfo.get("locale")?.value || "fa";
  return (
      <Sidebar side={locale == "en" ?"left": "right"}>
        <SidebarHeader>
        <div className='w-full text-purple-600 text-2xl font-bold flex gap-1.5 py-4 '>
            <LayoutDashboard size={28}/>
            <span>{t("title")}</span>
        </div>
        </SidebarHeader>
        <SidebarContent>
           <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarContent>

                    <Link href="/dashboard">
                 <SidebarMenu>
                <SidebarMenuButton>
                    <LayoutDashboard/>
                    {t("title")}
                </SidebarMenuButton>
            </SidebarMenu>
                </Link>

            </SidebarContent>
           </SidebarGroup>
            <SidebarGroup>
                <SidebarGroupContent>
                <SidebarGroupLabel>{t("product.title")}</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuButton>
                        <ShoppingCart/>
                        {t("product.all")}
                    </SidebarMenuButton>
                </SidebarMenu>

                  <Link href="/dashboard/createproduct">
                <SidebarMenu>
                    <SidebarMenuButton>
                        <ShoppingCartPlus/>
                        {t("product.insert")}
                    </SidebarMenuButton>
                </SidebarMenu>
                </Link>

                <SidebarMenu>
                    <SidebarMenuButton>
                        <ShoppingBasket/>
                        {t("product.manage")}
                    </SidebarMenuButton>
                </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupContent>
                <SidebarGroupLabel>{t("feedbacks.title")}</SidebarGroupLabel>
                 <SidebarMenu>
                    <Link href="/">
                    <SidebarMenuButton>
                        <MessageCircle/>
                        {t("feedbacks.manage")}
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
