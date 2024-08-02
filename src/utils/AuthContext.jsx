import { createContext, useContext,  useState } from "react";
import { makeApiRequest } from "../api/function";
import { LOGIN } from "../api/api";
import { useNavigate } from "react-router-dom";

export const userContext = createContext()
export const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    const [loggedIn, setLoggedIn] = useState(false)
    
    
    const handleLogin = async ({email, password}) => {
        try {
          const response =await  makeApiRequest("POST", LOGIN, { email , password})
          if(response.token){
              setLoggedIn(true)
            localStorage.setItem("token", response.token)
            localStorage.setItem("authData", JSON.stringify(response))
            navigate('/dashboard')
          }
          
        } catch (error) {
            console.error(error)
        }
    }   
    
    const handleLogout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("authData")
        setLoggedIn(false)
        navigate('/')
    }       
    const handleReload = () =>{
        const token = localStorage.getItem('token')   
        if(token){
            // const authData = JSON.parse(localStorage.getItem('authData'))
            setLoggedIn(true)
            
        }
        else{
            setLoggedIn(false)
        }
        
    }
   
     return (
        <userContext.Provider value={{ loggedIn, handleLogin, handleLogout, handleReload, setLoggedIn }}>
            {children}
        </userContext.Provider>
    )
}

export const useAuthContext = ()=>{
    return useContext(userContext)
}
