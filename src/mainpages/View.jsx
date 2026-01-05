import React, { useEffect, useState } from 'react'
import {
  LuCalendarDays,
  LuClock,
  LuMapPin,
} from "react-icons/lu";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { MdOutlineCurrencyRupee, MdPeopleOutline } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import Header from '../commoncmpt/Header';
import Footer from '../commoncmpt/Footer';
import { Link, useParams } from 'react-router-dom';
import { viewEventAPI } from '../services/allAPI';

function View() {
  const [singleEvent, setSingleEventDetails] = useState({})
  const {id} = useParams()
   console.log(singleEvent);
   

         useEffect(()=>{
         viewEventDetails()
         },[])
    
         const viewEventDetails = async()=>{
          const token = sessionStorage.getItem("token")
                  if(token){
                     const reqHeader = {
                           "Authorization":`Bearer ${token}`
                      }
          const result = await viewEventAPI(reqHeader,id)
          //console.log(result);
          setSingleEventDetails(result.data)
         }

        }




  return (
    <>
    <Header/>
  <div className='bg-[#060b1a] text-white'>
    <section className="px-6 lg:px-16 py-10  pt-24 ">
      {/* Banner */}
      <div className="w-full h-110 rounded-xl overflow-hidden mb-8">
        <img
          src={singleEvent?.eventImage}
          alt="event banner"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          {/* Tags */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700">
             {singleEvent?.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold mb-6">
            {singleEvent?.title}
          </h1>

          {/* Meta info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg mb-8 text-white">
            <p className="flex items-center gap-3">
              <LuCalendarDays className="text-purple-600" />
             {new Date(singleEvent?.date)
  .toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })
  .replaceAll("/", "-")}
            </p>
            <p className="flex items-center gap-3">
              <LuClock className="text-purple-600" />
               {singleEvent?.time}
            </p>
              <p className="flex items-center gap-3">
              <FaRegHourglassHalf className="text-purple-600" />
               {singleEvent?.duration} Hours
            </p>
             <p className="flex items-center gap-3">
              <GoPeople className="text-purple-600" />
              Age Limit -  {singleEvent?.agelimit}
            </p>
            <p className="flex items-center gap-3">
              <LuMapPin className="text-purple-600" />
             {singleEvent?.location}
            </p>
            <p className="flex items-center gap-3">
              <MdOutlineCurrencyRupee className="text-purple-600" />
              {singleEvent?.price}
            </p>
          </div>

          <hr className="mb-6" />

          {/* About */}
          <h2 className="text-2xl font-semibold mb-3 underline underline-offset-4">
            About This Event
          </h2>
          <p className="text-xl leading-relaxed mb-3">
            {singleEvent?.description}
          </p>

            {/*organizer */}
          <h2 className="text-xl font-semibold mb-3 underline underline-offset-4">
            Organizer
          </h2>
          <p className="text-xl leading-relaxed">
            {singleEvent?.organizer}
          </p>
        </div>
         
            <div className='flex items-center justify-center'>
            <div>
             <Link to={`/event/${singleEvent?._id}/register`} className='btn bg-purple-700 w-full text-white p-3 rounded'>Register Now</Link>
            </div>
            </div>

       
      </div>
    </section>
   </div>

    <Footer/>
    </>
  )
}

export default View