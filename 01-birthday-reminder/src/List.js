import React from 'react'

function List({ people }) {
  return (
    <div className='flex flex-col justify-start items-start'>
          {people.map((person, index) => {
              return (
              <div key={index} className='flex flex-row'>
                      <img src={person.image} alt={person.name} className='h-20 w-20 m-3 rounded-full' />
                      <div className='flex flex-col justify-center'>
                          <h4 className='font-bold'>{person.name}</h4>
                          <span className='text-sm text-gray-600'>{person.age} years</span>
                      </div>
              </div>
          )
      })}
    </div>
  )
}

export default List;
