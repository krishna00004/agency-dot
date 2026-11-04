import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWorks from './components/OurWorks'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
//import Demo from './components/Demo'

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light' )
////            OR

//   const [theme, setTheme] = useState(() => {
//   return localStorage.getItem('theme') || 'light';
// });

  return (
    <div className='dark:bg-black relative '>
      <Toaster/>
      <Navbar theme = {theme} setTheme = {setTheme}/>
      <Hero/>
      <TrustedBy/>
      <Services/>
      <OurWorks/>
      <Teams/>
      <ContactUs/>
      <Footer theme = {theme}/>
    </div>
  )
}
