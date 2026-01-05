import React from 'react'
import Header from '../commoncmpt/Header'
import Footer from '../commoncmpt/Footer'
import { FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { FaRegClock } from "react-icons/fa";
import { IoSend } from "react-icons/io5";



function Contact() {
  return (
    <>
    <Header/>
    <div className="bg-[#060b1a] text-white">
       {/* HERO SECTION */}
      <section
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(https://i.pinimg.com/1200x/60/80/99/608099a3b7e9de6d9db0ac2337276076.jpg)",
        }}
      >
        <h1 className="text-5xl font-bold tracking-wide">Contact Us</h1>
      </section>
      <section>
         <div className="md:grid grid-cols-2 gap-50 px-30 py-20 sm:grid grid-cols-1">
           
           <div className='flex justify-center '>
            <div>
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 leading-relaxed text-xl">
             Ready to make your event unforgettable? Reach out to us for expert guidance and seamless planning.
            We're just a message away from turning your ideas into reality.Our team is here to assist you every step of the way.

            </p>
            {/* location */}
             <div className='flex gap-3 py-4 items-center'>
              <FaLocationDot className='text-2xl' /> 
            <div className='flex flex-col'>
                <h1 className='text-2xl'>Location</h1>
                <h1 className='text-2xl text-gray-400 '> 123 Main Street,Apt 4B, Anytown, CA 9876</h1>
            </div>
          </div>
          {/* phone */}
            <div className='flex gap-3 py-4 items-center'>
              <FaPhoneAlt className='text-2xl' /> 
            <div className='flex flex-col'>
                <h1 className='text-2xl'>Contact</h1>
                <h1 className='text-2xl text-gray-400 '>+91 9753451621897</h1>
            </div>
          </div>
           {/* email */}
            <div className='flex gap-3 py-4 items-center'>
              <MdEmail className='text-2xl' /> 
            <div className='flex flex-col'>
                <h1 className='text-2xl'>Email</h1>
                <h1 className='text-2xl text-gray-400 '>eventsphere50@gmail.com</h1>
            </div>
          </div>
            {/* timing */}
            <div className='flex gap-3  items-center'>
              <FaRegClock className='text-2xl' /> 
            <div className='flex flex-col'>
                <h1 className='text-2xl'>Hours of Operation</h1>
                <h1 className='text-2xl text-gray-400 '>Monday - Saturday 10:00 - 20:00</h1>
            </div>
          </div>
           </div>
           </div>
            <div style={{width:'600px',height:'600px'}} className='bg-gray-800 text-gray-300 p-5 flex flex-col justify-center items-center m-5 rounded-2xl '>
              <h1 className='text-center text-3xl py-5 font-bold'>Need More Information ?</h1>
              <p className=' text-justify py-2 text-lg'>Please fill out the form below with your details and message, and our team will get back to you as soon as possible</p>
              <input id='name' type="text" placeholder='Name' className='bg-white p-2 w-full border rounded placeholder-gray-500 text-xl'/>
                <input type="text" placeholder='Email Id' className='bg-white p-2 w-full border rounded placeholder-gray-500 my-3 text-xl'/>
                 <input type="text" placeholder='Subject' className='bg-white p-2 w-full border rounded placeholder-gray-500 my-3 text-xl'/>
                <textarea id="about" name="about" placeholder='Message' rows="4" className="block w-full rounded-md bg-white px-3 py-1.5 placeholder-gray-500 my-3 text-xl"></textarea>
                <button className='bg-blue-900 w-full p-3 text-xl flex items-center justify-center gap-1'>Send Message <IoSend /></button>
           </div>
         </div>
      </section>
    </div>



    <Footer/>
    </>
  )
}

export default Contact