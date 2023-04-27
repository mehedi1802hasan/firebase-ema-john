import React, { Children, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { createContext } from 'react';
import { Navigate } from 'react-router-dom';
export const AuthContext=createContext(null)
const Provider = ({children}) => {
   const auth=getAuth(app)
   const [user,setUser]=useState('')
   const [loading,setLoading]=useState(true);
    const signUp=(email,password)=>{ 
      setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
     
    }
    const loginUser=(email,password)=>{
       setLoading(true)
      return  signInWithEmailAndPassword(auth, email, password)
     
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('auth state changed',currentUser)
       setLoading(false);
        })
         return ()=> {unsubscribe()}
    },[])
    const logOut=()=>{
         return signOut(auth)
    }
   const authInfo={
   user,
    signUp,
    loginUser,
     logOut,
   loading
   }
    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
           </AuthContext.Provider> 
        </div>
    );
};

export default Provider;