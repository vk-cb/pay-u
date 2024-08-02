import React from 'react';
import { FaRegCircleDot } from "react-icons/fa6";
import { useTheme } from '../../utils/Theme';

const ThemeChanger = () => {
  const { setTheme } = useTheme();

  return (
    <div className='flex flex-col w-10 border rounded-lg gap-4 justify-center items-center py-4 bg-gray-500'>
      <button 
        className=" text-white m-2 p-2"
        onClick={() => setTheme('light')}
      >
        <FaRegCircleDot />
      </button>
      <button 
        className="bg-dark-200 text-dark-900 m-2 p-2"
        onClick={() => setTheme('dark')}
      >
        <FaRegCircleDot />
      </button>
      <button 
        className="text-green-400 m-2 p-2"
        onClick={() => setTheme('green')}
      >
        <FaRegCircleDot />
      </button>
    </div>
  );
}

export default ThemeChanger;
