import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
// toast is a library so first you need to install then mount it in App.js file <Toaster/>

export default function ContactUs() {

  const onSubmit = async(event)=>{
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key","a47d39d2-9757-4f1b-8d8a-d81ca6995d4c")
    
    try{
      const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Thank you for submission.")
      event.target.reset();
    } else {
      toast.error(data.message)
    }
    } catch (error){
      toast.error(data.message)
    }
  };

  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      <Title title='Reach out to us' desc='From strategy to execution, we craft digital solution that move your bussiness forword.'/>

      <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
        <div>
          <p className='mb-2 text-sm font-medium'>Your name</p>
          <div className='flex pl-3 border rounded-md border-gray-300  dark:bg-gray-900 dark:border-gray-700'>
            <img src={assets.person_icon} alt="" />
            <input type="text" name="name" placeholder='Enter your name' className='w-full outline-none text-sm p-2 ' required/>
          </div>
        </div>
        <div>
          <p className='mb-2 text-sm font-medium'>Your email</p>
          <div className='flex pl-3 border rounded-md border-gray-300 dark:text-white dark:bg-gray-900 dark:border-gray-700'>
            <img src={assets.email_icon} alt="" />
            <input type="text" name="email" placeholder='Enter your email' className='w-full outline-none text-sm p-2 ' required/>
          </div>
        </div>
          <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>
          <textarea rows={8} name="message" placeholder='Enter your message' className='w-full outline-none text-sm p-2 pl-3 border rounded-md border-gray-300 dark:text-white dark:bg-gray-900 dark:border-gray-700' required/>
          </div>
          <button type='submit' className="w-max flex gap-2 text-sm bg-primary text-white px-5 py-2 rounded-full cursor-pointer hover:scale-103 transition-all active:opacity-50">Submit
            <img src={assets.arrow_icon} alt="" className='w-4'/>
          </button>
      </form>
    </div>
  )
}
