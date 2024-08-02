import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { useAuthContext } from '../utils/AuthContext'

const RouteComponent = () => {
    const auth = useAuthContext()
    const token = localStorage.getItem("token")
    if(token){
      console.log(token)
      auth.handleReload()
    }
 let generatedRoute = []
    const openRoutes = [
        {path: '/', component: <Login/>},
        {path: '/signup', component: <Signup/>},
        
    ]
    const protectedRoutes = [
        {path: '/dashboard', component: <Dashboard/>},        
        {path: '*', component: <Dashboard/>},        
    ]
    console.log(auth)

       
    if(!auth.loggedIn) {
        generatedRoute = openRoutes
    }
    else{
        generatedRoute = protectedRoutes
    }
    
  return (
   
    
    <Routes>
        
        {generatedRoute.map(({ path, component }) => (
            <Route key={path} path={path} element={component } />
        ))}
         </Routes>
  )
}

export default RouteComponent