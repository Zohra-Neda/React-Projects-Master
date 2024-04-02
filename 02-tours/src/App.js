import React, { useState, useEffect } from 'react';

import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id);
        setTours(newTours);
    }

    const fetchTours = async () => {
        setLoading(true);
        
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(() => {
        fetchTours();
    }, []);

    if (loading) {
        return (
        <main className=''>
            <Loading />
        </main>
    );
    }

    if (tours.length === 0) {
        return (
            <main className='flex flex-col items-center justify-center'>
                <h3 className='text-[80px] text-black-100'>No Tours Left</h3>
                <button onClick={fetchTours} className='bg-blue-400 text-white p-2 rounded-sm'>Refresh</button>
            </main>
        );
    }

    return (
        <main className='flex min-h-screen bg-gray-200 items-center justify-center'>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}

export default App

