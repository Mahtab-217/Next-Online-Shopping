import { Sidebar, SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <SidebarProvider>
      {children}
        </SidebarProvider>
    </div>
  )
}

export default DashboardLayout
