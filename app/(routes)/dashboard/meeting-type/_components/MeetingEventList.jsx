"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'

import { getFirestore, collection, query, where, getDocs, orderBy, deleteDoc, doc, getDoc } from 'firebase/firestore'
import { Clock, Copy, MapPin, Pen, Settings, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
function MeetingEventList() {
    const db = getFirestore(app);
    
    
    const [businessInfo,setBusinessInfo]=useState();
    const [eventList,setEventList]=useState([]);
    const [email,setEmail]=useState();

    useEffect(() => {
        email && getEventList();
        email&& BusinessInfo();
    }, [email])
const getEventList = async () => {
    setEventList([]);
    const q = query(collection(db, "MeetingEvent"),
        where("createdBy", "==", email),
        );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setEventList(prevEvent=>[...prevEvent,doc.data()])
    });
}

       

    return (
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 
      lg:grid-cols-3 gap-7' >
         <div className='border shadow-md 
                border-t-8 rounded-lg p-5 flex flex-col gap-3'>
        
          <div className='flex justify-end'>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Settings className='cursor-pointer'/>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          
                            <DropdownMenuItem className="flex gap-2"> <Pen/> Edit</DropdownMenuItem>
                            <DropdownMenuItem className="flex gap-2"
                            
                            > <Trash/> Delete</DropdownMenuItem>
                         
                        </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                
                    <div className='flex justify-between'>
                    <h2 className='flex gap-2 text-gray-500'><Clock/>  Min </h2>
                    <h2 className='flex gap-2 text-gray-500'><MapPin/>  Min </h2>
                    
                    </div>
                    <hr></hr>
                    <div className='flex justify-between'>
                    <h2 className='flex gap-2 text-sm text-primary 
                    items-center cursor-pointer'
                   
                
                    >
                      < Copy className='h-4 w-4'/> Copy Link  
                    </h2>
                    <Button variant="outline" 
                    className="rounded-full text-primary border-primary ">Share</Button>
        
        </div>
       
      
 </div>
 :<h2>Loading...</h2>
      </div>
    )    
}

export default MeetingEventList