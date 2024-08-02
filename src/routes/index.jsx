import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const RouteComponent = () => {
    
    const openRoutes = [
        {path: '/', component: <Login/>},
        {path: '/signup', component: <Signup/>},
        
    ]
    const protectedRoutes = [
        {path: '/', component: <Dashboard/>},        
    ]
  return (
   
    
    <Routes>
        
        {openRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component } />
        ))}
         </Routes>
  )
}

export default RouteComponent