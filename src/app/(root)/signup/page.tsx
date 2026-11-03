import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import SignupForm from '@/components/ui/SignupForm'
import { useTranslations } from 'next-intl'
import Link from 'next/link'


function page() {
    const t = useTranslations("signup")
  return (
    <div className='w-full flex mt-12 justify-center h-screen  items-center'>
      <Card className='lg:w-3/12 md:w-4/12 w-full'>
        <CardHeader>
            <CardTitle>{t("labels.title")}</CardTitle>
            <CardDescription>{t("labels.description")}</CardDescription>
        </CardHeader>
        <CardContent>
        <SignupForm/>
        <p>Already have an account? <Link href="/signIn" className='underline text-blue-500'>Sign In</Link></p>
        <div className='w-full flex justify-between items-center p-4 rounded-full'>
            <span>{t("labels.google")}</span>
        </div>
         <div className='w-full flex justify-between items-center p-4 rounded-full'>
            <span>{t("labels.github")}</span>
        </div>
        
        </CardContent>
      </Card>
    </div>
  )
}

export default page
