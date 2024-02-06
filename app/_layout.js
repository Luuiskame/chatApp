import {View, Text} from 'react-native'
import React, { useEffect } from 'react'
import '../global.css'
import { Slot, useSegments, useRouter } from 'expo-router'

import { useAuth, AuthContextProvider } from './context/authContext'

const MainLayout = ()=>{
    const {isAuthenticated }= useAuth()
    const segments = useSegments()
    const router = useRouter()

    useEffect(()=>{
        //check if the user is authenticated
        if(typeof isAuthenticated==="undefined") return 
        const inApp = segments[0]==='(app)'
        if(isAuthenticated && !inApp){
            //we gonna redirect to home
            router.replace('home')
        }
        if(isAuthenticated===false){
            //redirect to singin
            router.replace('singin')
        }
    },[isAuthenticated])

    return <Slot/>
}



export default function RootLayout(){
    return(
        <AuthContextProvider>
            <MainLayout/>
        </AuthContextProvider>
    )
}