import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({ id, title, info }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  return (
    <article className='bg-white shadow-lg h-auto w-[100%] mb-2 p-6'>
      <div className='flex flex-row items-center justify-between text-center'>
        <h4 className='font-bold'>{title}</h4>
        <button onClick={() => setShowMoreInfo(!showMoreInfo)} className='border border-gray-200 rounded-full bg-transparent p-1 text-red-800'>
          { showMoreInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      { showMoreInfo && <p>{info}</p> }
   </article>
  )
}

export default Question
