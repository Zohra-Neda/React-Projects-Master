import React, { useState } from 'react';
import items from './data';
import Menu from './Menu';
import Categories from './Categories';

const allCategories = ['all',...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main className='h-auto flex justify-center'>
      <section className='flex justify-center m-auto w-[80%] p-5'>
        <h2 className='font-bold text-center'>Our Menu</h2>
        <Categories categories={categories} filterItems={filterItems} />
        <div className='flex flex-row flex-wrap justify-between'>
          <div className='w-[48%]'>
            <Menu items={menuItems.slice(0, 5)} />
          </div>
          <div className='w-[48%]'>
            <Menu items={menuItems.slice(5, 9)} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
