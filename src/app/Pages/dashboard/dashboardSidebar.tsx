import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton } from '@/components/ui/sidebar'
import { MessageCircle, ShoppingBag, ShoppingBasket, ShoppingCart, ShoppingCartPlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function DashboardSidebar() {
  return (
    <div>
      <Sidebar>
        <SidebarHeader>
        <div className='w-full text-purple-600 text-2xl font-bold flex gap-1.5 py-4 '>
            <ShoppingBag size={28}/>
            <span>Online Shopping</span>
        </div>
        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
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
            </SidebarGroup>

            <SidebarGroup>
                <SidebarGroupLabel>Feedbacks</SidebarGroupLabel>
                 <SidebarMenu>
                    <Link href="/">
                    <SidebarMenuButton>
                        <MessageCircle/>
                        Manage Feedbacks
                    </SidebarMenuButton>
                    </Link>
                 </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
        
        <SidebarFooter>

        </SidebarFooter>
      </Sidebar>
    </div>
  )
}

export default DashboardSidebar
