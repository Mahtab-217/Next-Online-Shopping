import AddProductForm from '@/app/Pages/dashboard/addProductForm'
import DashboardHeader from '@/app/Pages/dashboard/dashboardHeader'
import DashboardSidebar from '@/app/Pages/dashboard/dashboardSidebar'
import { useTranslations } from 'next-intl'

export const metadata={
    title : "اضافه کردن محصول"
} 
function page() {
    const t = useTranslations("dashboard.addproduct");
  
  return (
    <div className='w-full flex'>
      <DashboardSidebar/>
      <div className='flex-1'>
        <DashboardHeader/>
        <div className='p-4'>
        <div className='w-full p-4 my-4 border rounded-2xl'>
            <div className='flex flex-col gap-3 my-3'>
            <p className='text-2xl font-bold'>{t("title")}</p>
            <span className='text-sm text-muted-foreground'>{t("description")}</span>
            </div>
            <AddProductForm/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page
