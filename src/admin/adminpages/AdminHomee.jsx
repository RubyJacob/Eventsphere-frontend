import React from 'react'
import AdminHeader from '../admincomponent/AdminHeader'
import AdminSideBar from '../admincomponent/AdminSideBar'
import { FaRupeeSign } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { FaCalendar } from "react-icons/fa6";
import { IoIosArrowRoundForward,IoIosArrowBack } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";

import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';


function AdminHomee() {
  return (
    <>
    <AdminHeader/>
     <div className='md:grid grid-cols-5'>
        <div className='col-span-1 '>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          {/* total  */}
        <div className='md:grid grid-cols-3 gap-10'>
          {/* revenue */}
           <div className="my-5 border bg-green-200 md:px-5 md:my-0 ">
             <div className="flex flex-col justify-center items-center py-6">
                      <p className="text-2xl flex gap-2 items-center">
                        Total Revenue <FaRupeeSign/>
                      </p>
                      <h1 className="text-4xl font-bold pt-5">Rs 1599</h1>
                    </div>
            </div>
          {/* events */}
          <div className="my-5 border bg-blue-200 md:px-5 md:my-0 ">
             <div className="flex flex-col justify-center items-center py-6">
                      <p className="text-2xl flex gap-2 items-center">
                        Total Events <FaCalendar />
                      </p>
                      <h1 className="text-4xl font-bold">3</h1>
                      <p className="text-gray-600">Events registered</p>
                    </div>
            </div>
            {/* users */}
             <div className="my-5 border bg-orange-200 md:px-5 md:my-0 ">
             <div className="flex flex-col justify-center items-center py-6">
                      <p className="text-2xl flex gap-2 items-center">
                        Total Users <MdPeopleAlt />
                      </p>
                      <h1 className="text-4xl font-bold">10</h1>
                      <p className="text-gray-600">Active users</p>
                    </div>
            </div>
          


        </div>
        {/* events */}
          {/* events */}
              <section>
                <h1 className='text-3xl text-center pt-10'>LIST OF EVENTS </h1>
                {/* show 3 events */}
                      <div className='px-8'>
                         <div className='grid grid-cols-3 gap-3 py-10 text-black place-items-center'>
                          {/* concert */}
                           <div className='w-100 h-130 border rounded-2xl shadow bg-gray-200 '>
                            <img className='w-100 h-65 rounded-t-2xl ' src="https://tse1.explicit.bing.net/th/id/OIP.hBpV_NOmuEGZC5a3dDvfGAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                             <h1 className='text-3xl font-bold px-3 py-3 text-purple-800'>Concert</h1>
                              <p className='flex items-center gap-3 text-xl p-2'><MdOutlinePeopleAlt className='text-xl text-purple-600' />The Rolling Stones</p>
                              <p className='flex items-center gap-3 text-xl p-2'><LuCalendarDays className='text-xl  text-purple-600' />Jan 14,2026</p>
                               <p className='flex items-center gap-3 text-xl p-2'><IoLocationOutline className='text-xl  text-purple-600' />Ashok Nagar, New Delhi</p>
                               <hr />
                               <div className='flex py-4 p-2 justify-between'>
                                <p className='flex items-center text-xl'><MdOutlineCurrencyRupee className='text-xl  text-purple-600' />499</p>
                                 <button className='flex items-center justify-center text-black bg-red-700 py-1 px-3 rounded text-lg  hover:text-white '>DELETE</button>
                               </div>
                           </div>
                           {/* workshop */}
                            <div className='w-100 h-130 border rounded-2xl shadow bg-gray-200 transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110'>
                               <img className='w-100 h-65 rounded-t-2xl' src="https://tse2.mm.bing.net/th/id/OIP.Gxlrp8fx8ygrJ9fGJxKEOgHaE6?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                             <h1 className='text-3xl font-bold px-3 py-3 text-purple-800'>Workshop</h1>
                              <p className='flex items-center gap-3 text-xl p-2'><MdOutlinePeopleAlt className='text-xl text-purple-600' />Art Flow Studios</p>
                              <p className='flex items-center gap-3 text-xl p-2'><LuCalendarDays className='text-xl  text-purple-600' />Dec 22,2025</p>
                               <p className='flex items-center gap-3 text-xl p-2'><IoLocationOutline className='text-xl  text-purple-600' />North Street, Mumbai</p>
                               <hr />
                               <div className='flex py-4 p-2 justify-between'>
                                <p className='flex items-center text-xl'><MdOutlineCurrencyRupee className='text-xl  text-purple-600' />399</p>
                                 <Link to={'/events/view'} className='flex items-center justify-center text-black  text-lg  hover:text-purple-600 hover:underline underline-offset-4'>View Details <IoIosArrowRoundForward className='text-2xl'/></Link>
                               </div>
                           </div>
                           {/* conference */}
                          <div className='w-100 h-130 border rounded-2xl shadow bg-gray-200  transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110'>
                             <img className='w-100 h-65 rounded-t-2xl' src="https://tse1.mm.bing.net/th/id/OIP.R9ujTs-bl92y8dGIUgm7gQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
                             <h1 className='text-3xl font-bold px-3 py-3 text-purple-800'>Conference</h1>
                              <p className='flex items-center gap-3 text-xl p-2'><MdOutlinePeopleAlt className='text-xl text-purple-600' />Global Tech Conference</p>
                              <p className='flex items-center gap-3 text-xl p-2'><LuCalendarDays className='text-xl  text-purple-600' />Dec 28,2025</p>
                               <p className='flex items-center gap-3 text-xl p-2'><IoLocationOutline className='text-xl  text-purple-600' />MC Road, Bangalore</p>
                               <hr />
                               <div className='flex py-4 p-2 justify-between'>
                                <p className='flex items-center text-xl'><MdOutlineCurrencyRupee className='text-xl  text-purple-600' />599</p>
                                 <Link to={'/events/view'} className='flex items-center justify-center text-black  text-lg  hover:text-purple-600 hover:underline underline-offset-4'>View Details <IoIosArrowRoundForward className='text-2xl'/></Link>
                               </div>
                           </div>
                         </div>
                      </div>
              </section>
        </div>
     </div>
    </>
  )
}

export default AdminHomee