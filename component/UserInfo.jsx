"use client";



import MeetingType from '@/app/(routes)/dashboard/meeting-type/page';
import React, { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from '@/config/FirebaseConfig';
import { useRouter } from 'next/navigation';




function UserInfo() {

  const db = getFirestore(app);
  const {email}=getFirestore();
  const [loading,setLoading]=useState(true);
  const router=useRouter();

   
  useEffect(()=>{
    email&&isBusinessRegistered();
  },[email])


  
  const isBusinessRegistered= async()=>{
    const docRef = doc(db, "Business", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setLoading(false)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setLoading(false)
      router.replace('/create-business');
    }

 }

  return (
    <div >
    <MeetingType/>
    </div>
  )
}

export default UserInfo