import Navbar from '@/app/Pages/shared/Navbar'
import React from 'react'

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Navbar/>
      {children}
    </div>
  )
}

export default RootLayout
