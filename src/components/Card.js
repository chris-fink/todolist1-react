import React from 'react'
import Task from './Task';
import AddTask from './AddTask'


function Card() {
    return (
        <div className='flex justify-center '>
            <div className='w-4/5 h-96 flex flex-col space-y-5 card pt-2 pb-2 rounded-2xl  bg-slate-300 bg-opacity-50 border-neutral-900 border-2 dark:border-sky-200 dark:bg-slate-200 dark:bg-opacity-25'>

                <Task />
                {/* <div className='grid grid-rows-8 md:grid-rows-5 gap-10'>
                    {data.map((task) => {
                        return <Task task={Task} />
                    })}
                </div> */}


                <div className='flex justify-end align-baseline pr-4' >
                    <AddTask />

                </div>
            </div>
        </div>
    )
}

export default Card