import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  return (
    <main className='h-screen flex justify-center items-center'>
      <button className='flex items-start ml-5 mt-5'>
        <FaBars/>
      </button>
      <button className='flex items-center justify-center mx-auto bg-black text-white p-3 rounded-md'>
        Show Modal
      </button>
    </main>
  );
}

export default Home
