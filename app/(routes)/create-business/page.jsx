'use client'


import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { app } from '@/config/FirebaseConfig'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'




function CreateBusiness() {

    const [businessName,setBusinessName]=useState();
    const [email, setEmail] = useState("");
    const db = getFirestore(app);
    
    const router=useRouter();


    const onCreateBusiness=async()=>{
        console.log("btn Click",businessName);
        await setDoc(doc(db,'Business', email),{
            businessName:businessName.replace(" ","_"),
            email:email
            
        }).then(resp=>{
            console.log("Document Saved");
            
            router.replace('/dashboard');
        })

    }
   

    return (
        <div className='p-14 items-center flex flex-col gap-20 my-10'>
            <Image src='/logo.svg' width={200} height={200}/>
            <div className='flex flex-col items-center gap-4 max-w-3xl'>
                <h2 className='text-4xl font-bold'>What should we call your business?</h2>
                <p className='text-slate-500'>You can always change this later from settings</p>
                <div className='w-full'>
                <label className='text-slate-400'>Team Name</label>
                <Input placeholder="Ex. TubeGuruji" 
                className="mt-2"
                onChange={(event)=>setBusinessName(event.target.value)}
                />
                
            </div>
            
            <div className='w-full'>
                <label className='text-slate-400'>E-mail</label>
                <Input placeholder="E-mail" 
                className="mt-2"
                onChange={(event)=>setEmail(event.target.value)}
                />
                
            </div>

            <Button className='w-full'
            disabled={!businessName}
            onClick={onCreateBusiness}
            >
                 Create Business</Button>
            
        
             </div>
        </div>
      )
    }
    
    export default CreateBusiness