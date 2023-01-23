import React from 'react';
import { AiOutlineCheckCircle, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

function Task(task) {

    
    return (
        <table className='table-fixed min-w-fit'>
            <thead className='min-w-fit'>
                <tr className='w-100 text-xl text-black dark:text-sky-100'>
                    <th className='justify-start w-1/4' scope='col'>Team Member</th>
                    <th className='w-2/4' scope='col'>Task</th>
                    <th className='w-[12.5%]' scope='col'>Priority</th>
                    <th className='max-w-[10%]' scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody className='content-center'>
                <tr className='text-black dark:text-sky-100 border-neutral-900 border-2 rounded dark:border-sky-200 h-9 w-fit items-center'>
                    <td className='text-center font-bold w-1/4'>Chris Fink</td>
                    <td className='text-center w-2/4'>Pickup Frames from Eight Point</td>
                    <td className= 'grid content-center mt-1'>
                        <span class="bg-red-100 text-red-800 text-xs font-medium  px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400 place-self-center">High Priority</span>
                    </td>
                    <td>
                        <AiOutlineCheckCircle className='inline-block hover:text-slate-500 dark:hover:text-sky-400' size={35} />
                        <AiOutlineEdit className='inline-block hover:text-slate-500 dark:hover:text-sky-400' size={35} />
                        <AiOutlineDelete className='inline-block hover:text-slate-500 dark:hover:text-sky-400' size={35} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Task