import { useAuthContext } from "./AuthContext"

export const useReload = () =>{
    const auth = useAuthContext()
    const token = localStorage.getItem('token')   

    console.log(token)
    if(token){
        // const authData = JSON.parse(localStorage.getItem('authData'))
        auth.setLoggedIn(true)
        
    }
    else{
        auth.setLoggedIn(false)
    }

}