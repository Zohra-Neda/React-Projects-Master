import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { links } from './data'

const Sidebar = () => {
  return (
    <Sidebar className='bg-black w-full h-full shadow-2xl'>
      <div>
        <img src={logo} alt='coding addict' />
        <button>
          <FaTimes />
        </button>
      </div>
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}{text}</a>
            </li>
          );
        })}
      </ul>
  </Sidebar>
  );
}

export default Sidebar
