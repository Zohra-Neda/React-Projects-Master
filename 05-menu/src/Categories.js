import React from 'react'

function Categories({ categories, filterItems }) {
  return (
    <div className=''>
      {categories.map((category, index) => {
        return <button type='button' className='bg-gray' key={index} onClick={() => filterItems(category)}>{category}</button>
      })}
    </div>
  );
};

export default Categories
