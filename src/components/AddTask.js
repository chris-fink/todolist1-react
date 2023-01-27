import React, { useState } from 'react';
//import Card from './Card';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function AddTask() {
  const [showForm, setShowForm] = useState(false);



  return (
    <button
      className='border border-blue-900 bg-transparent rounded cursor-pointer font-semibold py-2 px-4  hover:bg-blue-500 hover:text-white
        dark:text-sky-200 border-sky-200  
        dark:hover:bg-blue-500  dark:hover:text-white dark:hover:border-transparent '
      onClick={() => setShowForm(true)}
    >
      AddTask

      {/*Displays Form when button is clicked*/}
      {showForm && (
        <div className='w-96'>
          <div className='flex justify-between'>
            <h1>Hello World!</h1>
            <AiOutlineCloseCircle
              className='cursor-pointer hover:slate-800'
              color='black'
              onClick={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </button>


  )
}

export default AddTask