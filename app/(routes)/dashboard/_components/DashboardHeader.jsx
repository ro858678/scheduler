 import Link from 'next/link'
 import { signOut } from "next-auth/react";
 import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
 
 function DashboardHeader() {
   return (
    <div className='p-4 float-right flex px-10'>

      
           <DropdownMenu>
        <DropdownMenuTrigger><div>
        <div className='hover:text-white transition-all duration-300 cursor-pointer
        font-bold text-[20px] bg-blue-600 rounded-full float-right p-2 text-slate-500'>
           R O

        </div> 
           <ChevronDown/>
            </div></DropdownMenuTrigger>
       <DropdownMenuContent>
       <DropdownMenuLabel>My Account</DropdownMenuLabel>
       <DropdownMenuSeparator />
       <DropdownMenuItem>Profile</DropdownMenuItem>
       <DropdownMenuItem>Settings</DropdownMenuItem>
       <Link  href={'/create-business'}> 
             
      <DropdownMenuItem>Create Business</DropdownMenuItem>
            </Link>
      
       <DropdownMenuItem>
        Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>

    </div>
      )
 }
 
 export default DashboardHeader