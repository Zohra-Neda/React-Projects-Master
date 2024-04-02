import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    )
  }

  const { company, title, dates, duties } = jobs[value]

    return (
    <section className='h-auto w-[80%]'>
        <div className='text-center'>
          <h1>Experience</h1>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-10'>
            {jobs.map((job, index) => {
              return (<button type='button' key={job.id} onClick={() => setValue(index)} className={`bg-blue-500 ${index === value && 'bg-green-500'}`}>{job.company}</button>);
            })}
          </div>
          <article>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index}>
                  <FaAngleDoubleRight />
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
    </section>
  )
}

export default App
