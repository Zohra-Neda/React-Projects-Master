import React from 'react';

function Menu({ items }) {
  return (
    <div className='h-auto mt-16'>
      {items.map((item) => {
        const { id, title, img, price, desc } = item;
        return (
          <article key={id} className='flex items-center justify-center h-auto max-w-[25rem] mb-6'>
            <img src={img} alt={title} className='w-[20%] h-[100px] mr-4' />
            <div className='flex flex-col items-start justify-center'>
              <div className='flex flex-row items-center justify-between mb-2 gap-7'>
                <h4>{title}</h4>
                <h5>${price}</h5>
              </div>
              <p className='w-[80%]'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
