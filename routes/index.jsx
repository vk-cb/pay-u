import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from '../src/pages/Signup'
import Login from '../src/pages/Login'

const RouteComponent = () => {
    
    const openRoutes = [
        {path: '/', component: <Login/>},
        {path: '/signup', component: <Signup/>},
        
    ]
    // const protectedRoutes = [
    //     {path: '/', component: Home},        
    // ]
  return (
   
    
    <Routes>
        
        {openRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component } />
        ))}
         </Routes>
  )
}

export default RouteComponent