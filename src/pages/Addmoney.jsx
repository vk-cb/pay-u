import React, { useState } from 'react';
import { makeApiRequest } from '../api/function';
import { ADD } from '../api/api';

const Addmoney = () => {
  const [money, setMoney] = useState('');
  const handleAdd = async () => {
    const token = localStorage.getItem("token");
    const amount = parseInt(money); 
    if (isNaN(amount)) {
      console.error('Invalid amount');
      return;
    }

    try {
      console.log('Requesting with token and amount:', token, { amount });
      const response = await makeApiRequest("POST", ADD, { amount }, {token});
      console.log(response);
      setMoney(''); 

    } catch (error) {
      console.error('Error in handleAdd:', error);
      console.error('Error message:', error.message);
    }
  };



  return (
    <div className="flex flex-col items-center justify-center bg-secondary p-4 rounded-lg">
      <h1 className="text-2xl text-text font-bold mb-4">Enter Amount</h1>
      <input
        type="number"
        value={money}
        onChange={(e) => setMoney(e.target.value)}
        placeholder="Enter amount"
        className="rounded-md border-b-2 bg-primary p-2 w-full mb-4 focus:outline-none"
      />
      <button
        onClick={handleAdd}
        className="bg-btn text-white rounded-md p-2 w-full focus:outline-none focus:ring-2"
      >
        Add Money
      </button>
    </div>
  );
};

export default Addmoney;
