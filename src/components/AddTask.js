import React, { useState } from 'react';
//import Card from './Card';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function AddTask() {
  const [showForm, setShowForm, setSubmitTask] = useState(false);



  return (
    <button
      className='border border-blue-900 bg-transparent rounded cursor-pointer font-semibold py-2 px-4 hover:bg-blue-500 hover:text-white
        dark:text-sky-200 dark:border-sky-200  
        dark:hover:bg-blue-500  dark:hover:text-white dark:hover:border-transparent '
      onClick={() => setShowForm(true)}
    >
      AddTask

      {/*Displays Form when button is clicked*/}
      {showForm && (
        <div className='w-full'>
          <div className='flex justify-between mt-4'>
            <form className='inline-flex'>
              <div className='mr-2'>
                <label for="name">Name: </label>
                <input
                  className='border border-black text-black'
                  type="text"
                  id="name"
                  minlength="4"
                  required
                />
              </div>

              <div className='mr-2'>
                <label for="task">Task: </label>
                <input
                  className='border border-black text-black'
                  type="text"
                  id="task"
                  minlength="4"
                  required
                />
              </div>

              <div className='mr-5'>
                <label for="task">Priority: </label>
                <input
                  className='border border-black text-black'
                  type="text"
                  id="priority"
                  required
                />
              </div>

              <button
                className='border border-white bg-red-700 text-white rounded cursor-pointer font-semibold py-2 px-4 hover:bg-red-800'
                onClick={() => setSubmitTask(true)}
              >
                Submit
              </button>
            </form>

            <AiOutlineCloseCircle
              className='cursor-pointer ml-6 hover:slate-800'
              size='1.25em'
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