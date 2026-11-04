import React from 'react'
import assets from '../assets/assets'

export default function Footer({theme}) {
  return (
    <div className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
          <img src={theme==='dark'?assets.logo_dark :assets.logo} alt="" className='w-32 sm:44' />
          <p className='max-w-md text-sm'>From strategy to execution,we craft digital solutions that move your business forward.</p>

          <ul className='flex gap-5'>
            <li><a className='hover:text-primary' href="#hero">Home</a></li>
            <li><a className='hover:text-primary' href="#services">Services</a></li>
            <li><a className='hover:text-primary' href="#our-work">Our Work</a></li>
            <li><a className='hover:text-primary' href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
        <div className='text-gray-600 dark:text-gray-400'>
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>The latest news, articles, and resources, sent to your inbox weekly</p>
          <div className='flex gap-2 text-sm'>
            <input type="email" placeholder='Enter your email' className='w-full p-2 text-sm outline-none rounded-sm dark:text-gray-200 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600' />
            <button className='bg-primary text-white rounded-sm px-6 cursor-pointer hover:scale-103 transition-all active:opacity-50'>Subscribe</button>
          </div>
        </div>
      </div>
      <hr className='border-gray-300 my-6 dark:border-gray-600' />

      <div className='pb-6 flex justify-center text-sm text-gray-500 gap-4 sm:justify-between flex-wrap'>
        <p>Copyright 2026 © agency.ai - All Right Reserved.</p>
        <div className='flex items-center gap-4 justify-between'>
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
    </div>
  )
}
