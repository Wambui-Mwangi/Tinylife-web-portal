'use client'
import Image from 'next/image'
import SideBar from './components/Sidebar'
import Dashboard from './dashboard/page'
import Signup from './signup/page'
import Profile from './profile/page'
import Login from '@/app/login/page'
export default function Home() {
  return (
    <main>

    <div>
     <Signup/>
    </div>
    </main>
  )
}
