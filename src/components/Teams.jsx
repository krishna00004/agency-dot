import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

export default function 
() {
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
    <Title title='Meet the team' desc='A passionate team of digital exports dedicated to your brands success.'/>

    <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
    {teamData.map((data,index)=>(
      <div key={index} className='hover:scale-102 transition-all duration-500 flex items-center max-sm:flex-col gap-5 p-3 cursor-pointer dark:bg-gray-900 dark:border dark:border-gray-700 rounded-md shadow-md shadow-gray-100 dark:shadow-black'>
        <img className='rounded-full w-12 h-12 object-cover' src={data.image} alt="" />
        <div className='flex-1'>
          <h1 className='dark:text-white text-sm font-semibold '>{data.name}</h1>
          <p className='text-xs opacity-60'>{data.title}</p>
        </div>
      </div>
    ))}
    </div>
    </div>
  )
}
