"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'


function Header() {
  return (
    <div>
     <div className='flex items-center justify-between p-5 shadow-sm'>
        
         <Image src='/logo.svg' width={150} height={100} alt='logo'
             className='w-[150px] md:w-[200px]'
            />
   

    
         <ul className='hidden md:flex md:gap-14 font-medium'>
             <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Product</li>
             <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Pricing</li>
             <li className='hover:text-primary transition-all duration-300 cursor-pointer'>Contact us</li>
             <li className='hover:text-primary transition-all duration-300 cursor-pointer'>About us</li>
         </ul>
            
  
    <div className='flex gap-5'>
       <Link href={'/loginForm'}><Button variant="ghost">Login</Button></Link> 
        <Link href={'/register'}><Button>Get Started</Button> </Link>
    </div>

    </div>
    </div>
  )
}

export default Header