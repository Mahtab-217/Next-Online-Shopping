import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'
import { Button } from '../ui/button'
import LanguageSwitcher from './LanguageSwitcher'


function Navbar() {
  return (
    <div className='w-full py-4 px-8 flex justify-between items-center'>
      <div>
        <h1>
            Logo
        </h1>
      </div>
      <div className='flex items-center gap-4'>
        <ThemeSwitcher/>
        <LanguageSwitcher/>
        <Button>Login</Button>
      </div>
    </div>
  )
}

export default Navbar
