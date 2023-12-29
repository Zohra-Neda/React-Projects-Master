import React, { useState } from "react";
import data from './data.js';
import List from './List';

function App() {
    const [people, setPeople] = useState(data);
    return (
        <main className='h-screen flex items-center justify-center'>
            <section className='h-80 w-80 mx-auto'>
                <div className='bg-white flex flex-col justify-center p-5 rounded drop-shadow-2xl'>
                    <h3 className="font-bold mb-2">{people.length} Birthday Cards</h3>
                    <List people={people} />
                    <button onClick={() => setPeople([])} className="bg-pink-300 text-white w-full p-2 rounded-sm">Clear All</button>
                </div>
            </section>
        </main>
    );
}

export default App
