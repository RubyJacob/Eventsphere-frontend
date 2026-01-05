import React from 'react'
import { FaBookReader, FaHome } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { FaChartBar } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";



function AdminSideBar() {
  return (
     <div className='bg-gray-300 min-h-screen md: flex flex-col text-center border'>
      <h1 className='font-extrabold pt-30 text-2xl'>Admin Control Panel</h1>
    {/* admin image */}
     <div className='flex justify-center items-center my-10'>
       <img width={'150px'} height={'150px'} style={{borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/business-stock-photo-wallpaper_1137879-162007.jpg" alt="user" />
     </div>
     {/* name */}
     <h1 className='font-bold text-3xl mb-5'>Ruby Jacob</h1>
     {/* links */}
     <div className='mt-10 flex flex-col justify-center items-start px-15'>
      <div className='mb-3'>
        <Link to={'/admin/home'} className='flex items-center text-xl'><FaChartBar className='text-xl me-2'/> Dashboard</Link>
      </div>
      <div className='mb-3'>
        <Link to={'/admin/events'} className='flex items-center text-xl'><BsFillCalendarEventFill className='text-xl me-2'/> Event Management</Link>
      </div>
       <div className='mb-3'>
        <Link to={'/admin/bookings'} className='flex items-center text-xl'><MdOutlineEventAvailable className='text-xl me-2'/>Booking Details</Link>
      </div>
      <div className='mb-3'>
        <Link to={'/admin/profile'} className='flex items-center text-xl'><FaGear className='text-xl me-2'/>Settings</Link>
      </div>

     </div>
    </div>
  )
}

export default AdminSideBar