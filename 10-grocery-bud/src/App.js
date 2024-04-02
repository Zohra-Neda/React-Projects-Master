import React, { useEffect, useState } from 'react';

import Alert from './Alert';
import List from './List';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      // alert
      showAlert(true, 'danger','Please Enter Value')
    } else if (name && isEditing) {
      // deal with edit
      setList(list.map((item) => {
        if (item.id === editID) {
          return {...item, title:name}
        }
        return item
      }))

      setName('')
      setEditID(null)
      setIsEditing(false)
      showAlert(true, 'success', 'Value changed')
    } else {
      // show alert
      showAlert(true, 'success','Item added to the list')
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({show,type,msg})
  }

  const clearList = () => {
    showAlert(true, 'danger', 'Empty List')
    setList([])
  }

  const removeItem = (id) => {
    showAlert(true, 'danger', 'Item removed')
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <main className='min-h-screen bg-slate-200 flex flex-col items-center justify-center'>
      <section className='w-[40%] bg-white shadow-xl rounded-sm h-auto flex flex-col items-center justify-center p-5 py-16'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full mx-auto'>
          {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
          <h3 className='mb-6 text-2xl font-bold'>Grocery Bud</h3>
        <div className='flex w-full justify-center mx-auto'>
          <input type='text' placeholder='e.g. eggs' value={name} onChange={(e) => setName(e.target.value)} className='border outline-blue-200 w-full mx-auto px-2' />
          <button type='submit' className='bg-blue-400 text-black p-2'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>
        </form>
        {list.length > 0 && (
          <div className='flex flex-col items-center justify-center'>
            <List items={list} removeItem={removeItem} editItem={editItem} />
            <button type='button' onClick={clearList} className='text-red-500 p-2 w-full'>Clear Items</button>
          </div>
        )}
    </section>
    </main>
  )
}

export default App
