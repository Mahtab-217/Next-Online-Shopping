import React from 'react'
import DashboardSidebar from '../Pages/dashboard/dashboardSidebar'
import DashboardHeader from '../Pages/dashboard/dashboardHeader'

function page() {
  return (
    <div className='w-full flex'>
      <DashboardSidebar/>
      <div className='flex-1'>
        <DashboardHeader/>
      </div>
    </div>
  )
}

export default page
