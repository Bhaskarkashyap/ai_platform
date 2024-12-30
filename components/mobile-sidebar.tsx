"use-client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Sidebar from "@/components/sidebar"
import { Menu } from 'lucide-react'


import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
    <Button variant="ghost" size='icon' className='md:hidden'>
        <Menu />
    </Button>    
        </SheetTrigger>
        <SheetContent side='left'  className='p-0'>
            <Sidebar />
        </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar