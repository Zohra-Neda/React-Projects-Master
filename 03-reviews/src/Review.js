import React, { useState } from 'react';

import people from './data';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }

  const nextPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
   })
  }
  
  const prevPerson = () => {
  setIndex((index) => {
    let newIndex = index + 1;
    return checkNumber(newIndex);
   })
  }
  
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  }

  return (
    <article className='bg-white flex flex-col w-80 h-auto items-center justify-center p-5 rounded-md shadow-lg'>
      <div className=''>
        <img src={image} alt={name} className='h-[80px] w-[80px] rounded-full border border-r-blue-400' />
        <FaQuoteRight className=''/>
      </div>
      <h4 className='mt-3 font-bold'>{name}</h4>
      <p className='text-blue-400'>{job}</p>
      <p className='text-center text-sm'>{text}</p>
      <div className=''>
        <button onClick={prevPerson}>
          <SlArrowLeft className='mr-2 text-blue-400'/>
        </button>
        <button onClick={nextPerson}>
          <SlArrowRight className='ml-2 text-blue-400'/>
        </button>
      </div>
      <button onClick={randomPerson} className='text-blue-400 bg-blue-100 p-1 mt-1 rounded-sm'>Surprise Me</button>
    </article>
  )
}

export default Review
