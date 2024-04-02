import React, {useState} from 'react'

function Tour({ id, name, info, image, price, removeTour }) {
    const [readMore, setReadMore] = useState(false);
  return (
    <div className='flex flex-col items-center justify-center bg-white w-[600px] mb-10 rounded-lg shadow-2xl'>
          <img src={image} alt={name} className='w-[600px] h-[400px] rounded-sm' />
          <div className='flex flex-row justify-between items-center p-2 gap-72'>
              <h3 className='font-bold'>{name}</h3>
              <span className='text-blue-400 bg-blue-100 p-1 rounded'>${price}</span>
          </div>
          <div className='w-[600px] m-5 flex flex-col items-center justify-center'>
              <p className='text-left mx-7'>{readMore ? info : `${info.substring(0, 200)}...`}
                  <button onClick={() => setReadMore(!readMore)} className=' text-blue-200'>
                      {readMore ? 'Show Less' : 'Read More'}
                  </button>
              </p>
              <button onClick={() => removeTour(id)} className='text-red-800 border border-red-800 p-1 rounded mt-10'>Not Interested</button>
          </div>
    </div>
  )
}

export default Tour
