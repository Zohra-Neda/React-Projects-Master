import React from 'react';
import Tour from './Tour';

function Tours({ tours, removeTour }) {
  return (
      <section>
        <div>
          <h1 className='flex items-center justify-center font-bold p-5 text-gray-500 text-[30px] underline '>Our Tours</h1>
        </div>
          <div>
              {tours.map((tour, index) => {
                  return (
                      <Tour key={index} {...tour} removeTour={removeTour} />
                  );
              })}
          </div>
      </section>
  )
}

export default Tours;
