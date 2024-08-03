import React, { useEffect, useState } from 'react'
import Addmoney from './Addmoney'
import Modal from '../components/Modal'
import * as API from '../api/api'
import { makeApiRequest } from '../api/function'
import Transfermoney from './Transfermoney'

const Banner = () => {
 
  const [userData, setUserData] = useState([])
  const [modalOpen, setModalOpen] =useState(false)
  const [transferModal, setTransferModal] =useState(false)
  const handleClose = ()=>{
    setModalOpen(false)
    fetchUserData()
  }
  const closeTransferModal = ()=>{
    setTransferModal(false)
    fetchUserData()
  }

  const fetchUserData = async ()=>{
    const token = localStorage.getItem('token')
      try {
        const url = `${API.GET_PROFILE}`
        const response = await makeApiRequest("GET",url, null, {token})
        setUserData(response)
      } catch (error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    fetchUserData()
  },[])

  
  return (
    <section className="bg-primary h-screen text-white ">
       
    <div className="mx-auto  px-4 py-32 lg:flex lg:h-screen lg:items-center ">
      <div className="mx-auto max-w-3xl text-center">
      <div className='flex justify-center items-center'>
        <p className='text-text text-lg font-bold  tracking-wider'>Total Money : </p>
        <span className='text-para text-lg font-bold tracking-wider'> {userData?.data?.wallet}</span>
        </div>
        <h1
          className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
        >
          Understand User Flow.<span className="sm:block"> Increase Conversion.</span>
        </h1>
  
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-para">
          Name : {userData?.data?.name}
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
          onClick={()=>setModalOpen(true)}
            className="block w-full rounded border border-btn bg-btn px-12 py-3 text-sm font-medium text-primary hover:bg-transparent hover:text-text focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
            
          >
            Add Money
          </button>
  
          <button
          onClick={()=>setTransferModal(true)}
            className="block w-full rounded border border-btn px-12 py-3 text-sm font-medium text-text hover:text-primary  focus:outline-none focus:ring hover:bg-btn sm:w-auto"
            
          >
            Transfer Money
          </button>
        </div>
      
      </div>
    </div>
    <Modal isOpen={modalOpen} onClose={handleClose}>
      <Addmoney />
    </Modal>
    <Modal isOpen={transferModal} onClose={closeTransferModal}>
      <Transfermoney/>
    </Modal>
  </section>
  )
}

export default Banner