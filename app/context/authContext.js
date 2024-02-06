import { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext()

export const authContextProvider = ({children})=>{
    const [user,setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(undefined)

    useEffect(()=>{
        //* onAuthStateChanged
    },[])

    const login = async (email,password)=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    
    const logout = async (email,password)=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    const register = async(email,password,username,profilePictureUrl)=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <authContext.Provider value={{user,isAuthenticated,login,register,logout}}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = ()=>{
    const value = useContext(authContext)
    if(!value) throw new Error("useAuth must be wrapped inside AuthContextProvider")
    return value 
}
