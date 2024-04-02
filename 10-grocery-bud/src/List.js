import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

function List({ items, removeItem, editItem }) {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className='flex justify-between gap-x-[200px] lg:gap-x-[370px] p-3 w-full mx-auto'>
            <p className='font-bold capitalize'>{title}</p>
            <div className='flex flex-row'>
              <button type='button' className='mr-2' onClick={() => editItem(id)}>
                <FaEdit className='text-green-600' />
              </button>
              <button type='button' onClick={() => removeItem(id)}>
                <FaTrash className='text-red-500'/>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  )
}

export default List
