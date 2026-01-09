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
import { useEffect } from 'react';
import { useState } from 'react';
import { allAdminEventsAPI, deleteEventAPI } from '../../services/allAPI';


function AdminHomee() {
  const [allAdminEvents,setAdminAllEvents] = useState([])
  console.log(allAdminEvents);
  

  useEffect(()=>{
    getAllAdminEvents()
  },[])

   const getAllAdminEvents = async()=>{
            const token = sessionStorage.getItem("token")
                        if(token){
                           const reqHeader = {
                                 "Authorization":`Bearer ${token}`
                            }
                    const result = await allAdminEventsAPI(reqHeader)
              //console.log(result);
           if(result.status == 200)
           {
              setAdminAllEvents(result.data)
           }
           else{
            console.log(result);      
           }
          }
           
           
         }

   const deleteEvent = async(id)=>{
    //console.log(id);
    
     const token = sessionStorage.getItem("token")
          if(token){
            const reqHeader = {
               "Authorization":`Bearer ${token}`
                  }
            const result = await deleteEventAPI(reqHeader,id)
            console.log(result);
            if(result.status == 200){
              getAllAdminEvents()
            }
            else{
              console.log(result);
              
            }
          }
     
         }



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
                           { 
                             allAdminEvents?.length>0 ?
                             allAdminEvents?.map(evnts=>(
                                 <div key={evnts?._id} className='w-100 h-auto border rounded-2xl shadow bg-gray-200 '>
                            <img className='w-100 h-65 rounded-t-2xl ' src={evnts?.eventImage} alt="" />
                             <h1 className='text-3xl font-bold px-3 py-3 text-purple-800'>{evnts?.category} </h1>
                              <p className='flex items-center gap-3 text-xl p-2'><MdOutlinePeopleAlt className='text-xl text-purple-600' />{evnts?.title} </p>
                              <p className='flex items-center gap-3 text-xl p-2'><LuCalendarDays className='text-xl  text-purple-600' />{new Date(evnts?.date).toLocaleDateString("en-GB").replaceAll("/", "-")}</p>
                               <p className='flex items-center gap-3 text-xl p-2'><IoLocationOutline className='text-xl  text-purple-600' />{evnts?.location}</p>
                               <hr />
                               <div className='flex py-4 p-2 justify-between'>
                                <p className='flex items-center text-xl'><MdOutlineCurrencyRupee className='text-xl  text-purple-600' />{evnts?.price}</p>
                                 <button onClick={()=>deleteEvent(evnts?._id)} className='flex items-center justify-center text-black bg-red-700 py-1 px-3 rounded text-lg  hover:text-white '>DELETE</button>
                               </div>
                           </div>
                             ))
                           
                            :
                            <p className='my-5 text-center text-2xl text-red-800'>No Upcoming Events ...</p>
                          }
                         </div>
                      </div>
              </section>
        </div>
     </div>
    </>
  )
}

export default AdminHomee