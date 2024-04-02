import React from 'react'
import { FaTimes } from 'react-icons/fa'
const Modal = () => {
  return (
    <div className={`modal-overlay flex justify-center items-center`}>
      <div className='h-[200px] w-[400px] bg-white shadow-lg rounded-md flex flex-col'>
        <div className='flex items-center justify-center'>
          <h3 className='text-xl font-bold'>Modal Content</h3>
        </div>
        <button className='flex items-end justify-end'>
          <FaTimes/>
        </button>
      </div>
    </div>
  );
}

export default Modal
