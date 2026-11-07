import React from 'react'
import DashboardSidebar from '../Pages/dashboard/dashboardSidebar'
import DashboardHeader from '../Pages/dashboard/dashboardHeader'
import { redirect } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';



async function page() {
    const supabase = await createClient();
    const {data, error}= await supabase.auth.getClaims();
    if(error || !data?.claims?.sub){
      redirect("/signIn");
    }
    const user = await supabase.auth .getUser();
  return (
    <div className='w-full flex'>
      <DashboardSidebar user={user}/>
      <div className='flex-1'>
        <DashboardHeader/>
        <h1>The main Dashboard page</h1>
      </div>
    </div>
  )
}

export default page
