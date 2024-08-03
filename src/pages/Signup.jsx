import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CiUser } from "react-icons/ci";
import { makeApiRequest } from '../api/function';
import { SIGNUP } from '../api/api';
const Signup = () => {
  const [user, setUser] = useState({
    name : "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await makeApiRequest("POST", SIGNUP, user)
      console.log(response)
      if(response){
        alert("Registration successful")
        setUser({name : "", email: "", password: ""})
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <div className="mx-auto max-w-screen h-screen px-4 py-36 sm:px-6 lg:px-8 bg-primary">
  <div className="mx-auto max-w-lg text-center">
    <h1 className="text-2xl font-bold sm:text-3xl text-text"> Pay-U</h1>
    <p className="text-sm text-gray-500 text-para mt-4 ">
      Get started with Pay-U by signing up for a free account.
    </p>

    <form  className="mb-0 mt-6 space-y-4 rounded-lg p-4 bg-secondary shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-medium text-text">Sign Up to your account</p>

      <div>
     

        <div className="relative">
          <input
            type="text"
            onChange={handleChange}
            name='name'
            value={user.name}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
            placeholder="Enter name"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
          <CiUser color='gray'/>
          </span>
        </div>
      </div>
      <div>
     

        <div className="relative">
          <input
            type="email"
            onChange={handleChange}
            name='email'
            value={user.email}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
            placeholder="Enter email"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        

        <div className="relative">
          <input
            type="password"
            name='password'
            value={user.password}
            onChange={handleChange}
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
            placeholder="Enter password"
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="block w-full rounded-lg  px-5 py-3 text-sm font-medium text-primary bg-btn"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-para">
        Already have an account?
        <NavLink className="underline" to={'/'}>Log In</NavLink>
      </p>
    </form>
  </div>
</div>
  )
}

export default Signup