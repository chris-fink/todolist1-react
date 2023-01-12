  import React from 'react'
  import Task from './Task';
  
  function Card() {
    return (
      <div className='flex justify-center '>
        <div className='w-2/3 h-96 flex flex-col space-y-5 card pt-2 pb-2 rounded-2xl  bg-slate-300 bg-opacity-50 border-neutral-900 border-2 dark:border-sky-200 dark:bg-slate-200 dark:bg-opacity-25'>
            <Task />
        </div>
      </div>
    )
  }
  
  export default Card