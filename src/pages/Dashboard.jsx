import React from 'react'
import Card from './Card'
import Addmoney from './Addmoney'
import { useAuthContext } from '../utils/AuthContext'
import Header from '../components/Header'

const Dashboard = () => {
  const auth = useAuthContext()
  const token = localStorage.getItem("token")
  if(token){
    console.log(token)
    auth.handleReload()
  }

  return (
    <div className='h-screen w-screen'>
      <div className=''>

      <Header/>
      </div>
      <div className='w-full   flex justify-center'>

      <div className=' w-full '>
      <Card/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard