import React from 'react'
import { Link } from 'react-router-dom'
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";


function Footer() {
  return (
     <div >
      <div  className='mt-auto' >
        <div className='grid sm:grid-cols-1 md:grid-cols-4 bg-black text-white p-5'>
          <div className='flex flex-col items-center justify-items-start'>
            <h1 className='text-2xl px-5 py-2'>EVENTSPHERE - The Experience Matters</h1>
            <p className='text-xl leading-9 p-5 justify-center'>EventSphere is where unforgettable events take shape.
We craft immersive experiences for music, corporate, and creative events.
The Experience Matters — and we make it extraordinary.</p>
          </div>
         <div className='flex flex-col items-center justify-items-start'>
            <h1 className='text-2xl px-5 py-2 font-bold'>Event Categories</h1>
              <p className='text-xl p-2'>Concerts</p>
              <p className='text-xl p-2'>Workshops</p>
              <p className='text-xl p-2'>Festivals</p>
              <p className='text-xl p-2'>Exhibitions</p>
              <p className='text-xl p-2'>Conferences</p>
         </div>
         <div className='flex flex-col items-center'>
            <h1 className='text-2xl px-5 py-2 font-bold'>Quick Links</h1>
            <Link to={'/'} className='text-xl py-3'>Home</Link>
            <Link to={'/events'} className='text-xl py-3'>Events</Link>
            <Link to={'/contact'} className='text-xl py-3'>Contact</Link>
            <Link to={'/about'} className='text-xl py-3'>About Us</Link>
         </div>
          <div className='flex flex-col items-center'>
            <h1 className='text-2xl px-5 py-2 font-bold'>Contact Us</h1>
            <p className='text-xl py-3 flex items-center'><CiMail  className='me-2 text-2xl'/> eventsphere@gmail.com</p>
            <p className='text-xl py-3 flex items-center'><CiLocationOn  className='me-2 text-2xl'/>MG Road, Kakkanad, Kerala 691531</p>
             <div className='flex items-center my-2'>
             <FiFacebook className='me-3 text-2xl' />
             <FiTwitter className='me-3 text-2xl'/>
             <FaInstagram className='me-3 text-2xl'/>
             <SlSocialLinkedin className='me-3 text-2xl'/>
             </div>
            <div className='flex px-5 py-2 '>
            </div>
         </div>
        </div>
      </div>
   </div>
  )
}

export default Footer