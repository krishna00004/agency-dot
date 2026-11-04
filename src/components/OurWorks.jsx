import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
export default function 
() {

    const workData = [
    {
      title:'Mobile app marketing',
      description:'We turn bold ideas into powerful digital solutions that connect, engage...',
      icon: assets.work_mobile_app
    },
    {
      title:'Dashboard management',
      description:'We help you execute your plan and deliver results.',
      icon: assets.work_dashboard_management
    },
    {
      title:'Fitness app promotion',
      description:'We help you create a marketing strategy that drives results',
      icon: assets.work_fitness_app
    },
  ]

  return (
    <div id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
     <Title title='Our latest work' desc = 'From strategy to execution, we craft digital solution that move your bussiness forword.' />

     <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
      {workData.map((data,index)=>(
       <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
        <img className='rounded-xl w-full' src={data.icon} alt="" />
        <h1 className='dark:text-white font-semibold text-lg pt-3 pb-2' >{data.title}</h1>
        <p className='text-sm opacity-60 w-5/6 dark:text-white'>{data.description}</p>
       </div>
      ))}
     </div>
    </div>
  )
}
