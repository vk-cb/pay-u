import React from 'react';
import { FaRegCircleDot } from "react-icons/fa6";
import { useTheme } from '../../utils/Theme';
import { themeBtn } from '../../../data';
const ThemeChanger = () => {
  const { setTheme } = useTheme();

  return (
    <div className='flex flex-col w-10  rounded-bl-lg gap-4 justify-center items-center py-4 bg-gray-500'>
    { themeBtn.map((data, index)=>
      <button 
      key={index}
        className=""
        onClick={() => setTheme(data.title)}
      >
        <FaRegCircleDot color={data.btnColor} />
      </button>)}
    </div>
  );
}

export default ThemeChanger;
