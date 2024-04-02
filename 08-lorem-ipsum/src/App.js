import React, { useState } from 'react'
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }

    if (amount >= 9) {
      amount = 9;
    }
    setText(data.slice(0, amount));
  }
  return (
    <section className='flex flex-col items-center justify-center bg-green-900 h-auto p-10'>
      <h1 className='text-3xl'>Tired of Boring Lorem Episode?</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-row m-5'>
          <label htmlFor='amount' name='amount' className='mr-3'>Paragraphs Amount</label>
          <input type='number' id='amount' value={count} onChange={(e) => setCount(e.target.value)} className='bg-white outline-none text-center font-bold' />
          <button type='submit' className='bg-black text-white p-1'>Generate</button>
        </div>
      </form>
      <div className='flex flex-col text-center w-[50%] text-lg'>
        {text.map((item, index) => {
          return (<p key={index} className='mb-10'>{item}</p>);
        })}
      </div>
    </section>
  )
}

export default App