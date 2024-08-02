import React, { useEffect } from 'react'
import Addmoney from './Addmoney'
import Modal from '../components/Modal'

const Banner = () => {
  // useEffect(()=>{
  //   auth.handleReload()
  // },[])
  return (
    <section className="bg-primary text-white ">
       
    <div className="mx-auto  px-4 py-32 lg:flex lg:h-screen lg:items-center ">
      <div className="mx-auto max-w-3xl text-center">
      <div className='flex justify-center items-center'>
        <p className='text-text text-lg font-bold  tracking-wider'>Total Money : </p>
        <span className='text-para text-lg font-bold tracking-wider'> 586</span>
        </div>
        <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Understand User Flow.
  
          <span className="sm:block"> Increase Conversion. </span>
        </h1>
  
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
          numquam ea!
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="block w-full rounded border border-btn bg-btn px-12 py-3 text-sm font-medium text-primary hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            href="#"
          >
            Add Money
          </a>
  
          <a
            className="block w-full rounded border border-btn px-12 py-3 text-sm font-medium hover:text-primary  focus:outline-none focus:ring hover:bg-btn sm:w-auto"
            href="#"
          >
            Transfer Money
          </a>
        </div>
      
      </div>
    </div>
    <Modal>
      <Addmoney/>
    </Modal>
  </section>
  )
}

export default Banner