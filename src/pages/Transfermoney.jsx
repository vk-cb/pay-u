import React, { useEffect, useState } from 'react'
import { makeApiRequest } from '../api/function'
import { FaLocationArrow } from 'react-icons/fa6'

const Transfermoney = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const fetchUsers = async()=>{
    const url = "user/get-all-users"
    const token = localStorage.getItem('token')
    try {
      const response = await makeApiRequest("GET", url, null, {token})
      setUsers(response?.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <div className="flex flex-col items-center justify-center bg-secondary p-4 rounded-lg"> 
      <h1 className='text-2xl text-text font-bold mb-4'>Transfer Money</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search user name"
        className="rounded-md border-b-2 bg-primary p-2 w-full mb-4 focus:outline-none"
      />
      <div className='flex w-full gap-0'>
        <input placeholder='Enter the amount' type="number" className=' px-2 w-full rounded-l-lg border-b-2 bg-primary outline-none'/>
        <button className='px-2 py-1 border-none rounded-r-lg bg-btn text-primary flex items-center justify-center gap-2 '><FaLocationArrow/> Send</button>
      </div>
    </div>
  )
}

export default Transfermoney