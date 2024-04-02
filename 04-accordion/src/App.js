import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className='h-screen flex items-center justify-center bg-violet-800'>
      <section className='bg-white h-auto w-[60%] flex flex-row justify-center p-3 rounded-md'>
        <h2 className='w-[30%] p-5 font-bold text-2xl'>Questions and answers about login</h2>
        <div className='w-[70%] p-5'>
          {questions.map((question, index) => {
            return (
              <Question key={index} {...question} />
            );
          })}
        </div>
      </section>
    </main>
  )
}

export default App
