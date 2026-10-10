import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import { cookies } from 'next/headers'
import { title } from 'process';
import React from 'react'

 async function DashboardLayout({children}: {children: React.ReactNode}) {
    const cookiesInfo =await cookies();
    const locale= cookiesInfo.get("locale")?.value || "fa";
  return (
    <div>
        <SidebarProvider >

      {children}
        </SidebarProvider>
    </div>
  )
}

export default DashboardLayout
