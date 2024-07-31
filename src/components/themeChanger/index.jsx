import React from 'react'
import { FaRegCircleDot } from "react-icons/fa6";
const ThemeChanger = () => {
  return (
    <div className='flex flex-col w-10 border rounded-lg gap-4 justify-center items-center py-4 bg-Mixed-200'>
        <button onClick={() => localStorage.setItem('theme', 'light')} className='text-Dark-200'><FaRegCircleDot/></button>
        <button onClick={() => localStorage.setItem('theme', 'dark')} className='text-Green-100'><FaRegCircleDot/></button>
        <button onClick={() => localStorage.setItem('theme', 'green')} className='text-Sky-100'><FaRegCircleDot/></button>
  
    </div>
  )
}

export default ThemeChanger