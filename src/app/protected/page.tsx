"use client"
import React from 'react'
import { auth } from '../../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import {useState, useCallback, useEffect} from 'react';
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from 'next/navigation'


export interface User {
  email: string | null,
  uid: string | null
}

const ProtectedPage  = () => {
  
  const [authuser, setAuthUser] = useState<User>();
  const router = useRouter()


  const isUserLoggedIn = useCallback(()=>{
    onAuthStateChanged(auth, (user)=>{
      console.log(auth)
      if(user){
        setAuthUser({email: user.email, uid: user.uid})
        console.log(user)
      }
      else{
        return router.push("/");
      }
    })
  },[router])

  useEffect(() => {
    isUserLoggedIn();
}, [isUserLoggedIn]);

  return (
    <div>Protected Page</div>
  )
}

export default ProtectedPage