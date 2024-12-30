"use client"

import { LayoutDashboard, MessageSquare, Settings, Music, VideoIcon, Code, ImageIcon } from "lucide-react"

import Link from "next/link"
import { Montserrat } from "next/font/google";
import { cn } from '@/lib/utils'
import { usePathname } from "next/navigation";


const  font = Montserrat({
  weight:"600",
  subsets:["latin"]
})

const routes = [
  {
    label : "Dashboard",
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500'
  },
  {
    label : "Conversation",
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500'
  },
  {
    label:'Music Genration',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href:'/music'
  },
  {
    label:'Image Genration',
    icon: ImageIcon,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    href:'/image'
  },
  {
    label:'Video Genration',
    icon: VideoIcon,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    href:'/video'
  },
  {
    label:'Code Genration',
    icon: Code,
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    href:'/code'
  },
  {
    label : "Settings",
    icon: Settings,
    href: '/setting',
  },
]

const Sidebar = () => {

  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
    <div className="px-3 py-2 flex-1">
        <Link href='/dashboard' className="flex items-center pl-3 mb-14">
       
          <h1 className={cn("text-2xl font-bold" , font.className)}>Ai Platform</h1>
        </Link>

        <div className="space-y-1">
        {routes.map((route) => (
          <Link 
          href={route.href}
          key={route.href}
          className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition" , pathname=== route.href ? 'text-white bg-white/10' : 'text-zinc-400')}
          >
            <div className="flex items-center flex-1">
           <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
           {route.label}
            </div>
          </Link>
        ))}
        </div>
    </div>
    </div>
  )
}

export default Sidebar