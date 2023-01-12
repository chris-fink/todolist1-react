import React from 'react';
import { AiOutlineCheckCircle, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

function Task(task) {

    
    return (
        <table className='table-fixed min-w-fit'>
            <thead className='min-w-fit'>
                <tr className='w-100 text-xl text-black dark:text-sky-100'>
                    <th className='justify-start w-1/4' scope='col'>Team Member</th>
                    <th className='w-2/4' scope='col'>Task</th>
                    <th className='w-1/8' scope='col'>Priority</th>
                    <th className='w-1/8' scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-black dark:text-sky-100 border-neutral-900 border-2 rounded dark:border-sky-200 h-9 w-fit items-center'>
                    <td className='justify-center pl-6 w-1/4'>Chris Fink</td>
                    <td className='w-2/4'>Pickup Frames from Eight Point</td>
                    <td className='w-1/8'>
                        <span class="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400 place-self-center">High Priority</span>
                    </td>
                    <td className='flex justify-end w-1/8 '>
                        <AiOutlineCheckCircle size={30} />
                        <AiOutlineEdit size={30} />
                        <AiOutlineDelete size={30} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Task