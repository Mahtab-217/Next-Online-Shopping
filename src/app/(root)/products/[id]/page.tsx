import ImageCard from '@/app/Pages/ImageCard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react'

async function page({params}:{params: Promise<{id: string}>}) {
    const {id} = await params;
  return (
    <div className='mt-20 w-full max-w-6xl mx-auto grid grid-cols-6 gap-4'>
        <ImageCard/>
        <div className='col-span-3'>
            <h1 className='text-4xl font-bold text-purple-600 '>Watch</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vitae iure quod id, distinctio, fuga repudiandae magni quibusdam facilis voluptas suscipit assumenda dignissimos eveniet iste illum adipisci error, culpa aut?</p>
        </div>
        <Card className='h-fit '>
            <CardHeader>Rating</CardHeader>
            <CardContent>
                <div className='w-full flex justify-between '>
                <span>Overall Rating</span>
                <span>8.7</span>

                </div>
            </CardContent>
            </Card>   
    </div>
  )
}

export default page
