
import React from 'react'
import MobileSidebar from '@/components/mobile-sidebar'
import Link from 'next/link'
import { Button } from './ui/button'



const Navbar = () => {
  return (
    <div className='flex items-center p-4 '>
    <MobileSidebar />
    <div className='flex w-full justify-end'>
    <Link href='/'>
      <Button>
        Logout
      </Button>
    </Link>
    </div>
    </div>
  )
}

export default Navbar