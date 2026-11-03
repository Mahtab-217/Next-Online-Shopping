import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <Card className='w-6/12'>
        <CardHeader>
            <CardTitle>Confirm Your Email</CardTitle>
            <CardDescription>We have sent you a confirmation email to verify your email address, please check your inbox</CardDescription>
            <CardContent>
                <Link href="/">Go Home</Link>
            </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}

export default page
