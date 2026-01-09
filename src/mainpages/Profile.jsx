import React from 'react'
import Header from '../commoncmpt/Header'
import Footer from '../commoncmpt/Footer'
import { FaCalendar } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdRememberMe } from "react-icons/md";
import { useState } from 'react';
import { allUserBookedEventsAPI } from '../services/allAPI';
import { useEffect } from 'react';


function Profile() {
  const [alluserEvents,setAlluserEvents] = useState({})
  const [userProfile,setUserProfile] = useState({})
  console.log(alluserEvents);
  console.log(userProfile);
  
  
  
  
  const formatDate = (date) =>
  new Date(date)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
    .replace(" ", " ")
    .replace(" ", ", ");



  useEffect(()=>{
     userEvents()
  },[])

  useEffect(()=>{
     if(sessionStorage.getItem("token") && sessionStorage.getItem("user")){
        const user = JSON.parse(sessionStorage.getItem("user"))
        setUserProfile(user)
     }
  },[])

      const userEvents = async()=>{
      const token = sessionStorage.getItem("token")
                        if(token){
                           const reqHeader = {
                                 "Authorization":`Bearer ${token}`
                            }
                          const result = await allUserBookedEventsAPI(reqHeader)
                          //console.log(result.data);
                          if(result.status == 200){
                            setAlluserEvents(result.data)
                          }
                          else{
                            console.log(result);                       
                          }
                          
                        }
                }

  return (
    <>
    <Header/>
    <div className='bg-[#060b1a] text-white'>
       {/* profile */}
        <section className='px-6 lg:px-16 py-10  pt-30'>
            <div className=" rounded-2xl shadow p-6 mb-6 flex justify-between items-center border-white">
               <div className="flex items-center gap-4">
                 <div>
                  <img className='h-40 w-40 rounded-full' src="https://img.freepik.com/premium-photo/business-stock-photo-wallpaper_1137879-162007.jpg" alt="profile" />
                </div>
           <div>
           <h2 className="text-4xl font-semibold ">{userProfile?.username}</h2>
           <h2 className="text-xl font-semibold text-gray-300 flex items-center gap-3 mt-4 "> <MdOutlineEmail />{userProfile?.email}</h2>
           <h2 className="text-xl font-semibold text-gray-300 flex items-center gap-3 mt-2  "> <MdRememberMe /> Member since {formatDate(userProfile?.createdAt)}</h2>
    </div>
    </div>
    <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
    Edit Profile
    </button>
           </div>
    
        </section>

        {/* Recent Activity + No of Events */}
<section className="px-6 lg:px-16 pb-20">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* LEFT: Recent Activity */}
    <div className="rounded-2xl shadow p-6 bg-[#060b1a]">
      <h3 className="font-semibold mb-2 text-3xl">Recent Activity</h3>
      <p className="text-xl mb-6 text-gray-300">
        Your latest event interactions
      </p>

      {/* Activity Card 1 */}
      {
        alluserEvents?.events?.length > 0 ?
        alluserEvents.events?.map((uevent,index)=>(
          <div key={index} className="flex items-start gap-4 p-4 border rounded-lg mb-4">
        <div className="h-10 w-10 rounded-full bg-purple-100 text-blue-600 flex items-center justify-center font-bold">
          E
        </div>

        <div className="flex-1">
          <span className="text-xl bg-purple-400 p-2 rounded-3xl inline-block mb-3">
            {uevent?.category}
          </span>

         <p className='flex items-center gap-3 text-xl p-2 mt-4'><MdOutlinePeopleAlt className='text-xl text-purple-600' /> {uevent?.title}</p>
                  <p className='flex items-center gap-3 text-xl p-2'><LuCalendarDays className='text-xl  text-purple-600' />{formatDate(uevent?.date)}</p>
                   <p className='flex items-center gap-3 text-xl p-2'><IoLocationOutline className='text-xl  text-purple-600' />{uevent?.location}</p>
        </div>

        {/* <span className="text-yellow-600 font-semibold flex gap-2 items-center">
          Pending <FaRegClock />
        </span> */}
      </div>
        ))
        
      :
      <p className='text-2xl text-red-800'>No registered events ...</p>
    }
    </div>

    {/* RIGHT: No of Events (STACKED) */}
    <div className="flex flex-col gap-6">

      {/* Total */}
      <div className="bg-white w-200 text-black border rounded-2xl overflow-hidden">
        <div className="h-10  bg-blue-600"></div>
        <div className="flex flex-col justify-center items-center py-6">
          <p className="text-2xl flex gap-2 items-center">
            Total Events <FaCalendar />
          </p>
          <h1 className="text-4xl font-bold">{alluserEvents?.totalEvents>0 ? alluserEvents?.totalEvents: 0}</h1>
          <p className="text-gray-600">Events registered</p>
        </div>
      </div>

      {/* Upcoming */}
      <div className="bg-white w-200 text-black border rounded-2xl overflow-hidden">
        <div className="h-10 bg-green-700"></div>
        <div className="flex flex-col justify-center items-center py-6">
          <p className="text-2xl flex gap-2 items-center">
            Upcoming <FaRegClock />
          </p>
          <h1 className="text-4xl font-bold">{alluserEvents?.upcomingCount>0 ? alluserEvents?.upcomingCount: 0}</h1>
          <p className="text-gray-600">Events coming up</p>
        </div>
      </div>

      {/* Completed */}
      <div className="bg-white w-200 text-black border rounded-2xl overflow-hidden">
        <div className="h-10 bg-red-500"></div>
        <div className="flex flex-col justify-center items-center py-6">
          <p className="text-2xl flex gap-2 items-center">
            Completed <FaTrophy />
          </p>
          <h1 className="text-4xl font-bold">{alluserEvents?.completedCount>0 ? alluserEvents?.completedCount: 0}</h1>
          <p className="text-gray-600">Events attended</p>
        </div>
      </div>

    </div>
  </div>
</section>


     </div>
        
    <Footer/>
    </>
  )
}

export default Profile