import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "./firebase";
import { signOut } from "firebase/auth";

export interface User {
    email: string | null,
    uid: string | null
  }

  

export const LoginUser = (email: string, password: string, router: AppRouterInstance) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        console.log("User >>",user);
        // success
        router.push("/dashboard");
    })
    .catch((error)=>{
        console.log(error);
    })
}

export const LogOut = (router: AppRouterInstance)=>{
    signOut(auth)
    .then(()=>{
        router.push("/");
    })
    .catch((error)=>{
        console.log("logout error >> "+error);
    })
}