import React, { useEffect, useState } from 'react'
import Header from '../commoncmpt/Header'
import Footer from '../commoncmpt/Footer'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward,IoIosArrowBack } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { Link } from 'react-router-dom';
import { allEventsAPI } from '../services/allAPI';


function Events() {

      const [allEvents,setAllEvents] = useState([])
       console.log(allEvents);
       
       
       useEffect(()=>{
       getAllEvents()
       },[])
  
       const getAllEvents = async()=>{
         const result = await allEventsAPI()
         //console.log(result);
         if(result.status == 200)
         {
            setAllEvents(result.data)
         }
         else{
          console.log(result);
          
         }
         
         
       }

  return (
    <>
    <Header/>
    <div className='bg-[#060b1a] text-white'>
       <section
        className="h-[60vh] bg-cover bg-bottom flex items-center justify-center pt-28"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(https://i.pinimg.com/1200x/56/95/e0/5695e03b5ccddf3f65ab4eccc233e2b2.jpg)",
        }}
      >
        <h1 className="text-5xl font-bold tracking-wide text-white">Events</h1>
      </section>
      {/* heading */}
      <section>
        <div className='flex flex-col py-10 justify-center items-center gap-10'>
        <h1 className='text-5xl '>Upcoming Events</h1>
        <p className='text-xl text-center max-w-6xl'>Discover exciting upcoming events curated just for you.
          From live concerts and creative workshops to inspiring conferences, there’s something for everyone.
        Stay tuned and be part of experiences that create lasting memories.</p>
        </div>
        <div className='flex py-10 justify-center items-center'>
        <input type="text" placeholder=' Search for events ....'  className='w-[40%] text-xl mx-10  px-5 py-3 border'/>
{/* filter */}
<el-dropdown class="inline-block">
  <button class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-lg font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
   Filter
    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="-mr-1 size-5 text-gray-400">
      <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
    </svg>
  </button>

  <el-menu anchor="bottom end" popover class="w-56 origin-top-right rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
    <div class="py-1">
      <a href="#" class="block px-4 py-2 text-lg text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">All</a>
      <a href="#" class="block px-4 py-2 text-lg text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Concert</a>
      <a href="#" class="block px-4 py-2 text-lg text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Workshop</a>
      <a href="#" class="block px-4 py-2 text-lg text-gray-300 focus:bg-white/5 focus:text-white focus:outline-hidden">Conference</a>
    </div>
  </el-menu>
</el-dropdown>

        </div>
      </section>
      {/* events */}
      <section>
        {/* show 3 events */}
              <div className='px-8'>
                 <div className='grid grid-cols-3 gap-3 py-10 text-black place-items-center'>
                  {/* concert */}
                 { 

                 allEvents?.length > 0 ?
                 allEvents?.map(events=>(
                   <div key={events?._id} className='w-100 h-auto border mb-5 rounded-2xl shadow bg-gray-200 '>
                    <img className='w-100 h-65 rounded-t-2xl ' src={events?.eventImage} alt="" />
                     <h1 className='text-3xl font-bold px-3 py-3 text-purple-800'>{events?.category}</h1>
                      <p className='flex items-center gap-3 text-xl p-2'><MdOutlinePeopleAlt className='text-xl text-purple-600' />{events?.title}</p>
                      <p className='flex items-center gap-3 text-xl p-2'><LuCalendarDays className='text-xl  text-purple-600' /> {new Date(events?.date).toLocaleDateString("en-GB").replaceAll("/", "-")}</p>
                       <p className='flex items-center gap-3 text-xl p-2'><IoLocationOutline className='text-xl  text-purple-600' />{events?.location}</p>
                       <hr />
                       <div className='flex py-4 p-2 justify-between'>
                        <p className='flex items-center text-xl'><MdOutlineCurrencyRupee className='text-xl  text-purple-600' />{events?.price}</p>
                         <Link to={`/events/${events?._id}/view`} className='flex items-center justify-center text-black  text-lg  hover:text-purple-600 hover:underline underline-offset-4'>View Details <IoIosArrowRoundForward className='text-2xl'/></Link>
                       </div>
                   </div>
                 ))
                 
                   :
                     <p className='text-xl text-center text-white'>No events..</p>
                   }
                 </div>
              </div>
      </section>
      {/* NEWSLETTER */}
      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg)",
        }}
      >
        <div className="max-w-xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">
            Sign Up Newsletter
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Subscribe to receive updates on upcoming events, concerts,
            and exclusive experiences.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-l-xl bg-white text-black outline-none"
            />
            <button className="bg-yellow-600 px-6 py-3 rounded-r-xl hover:bg-pink-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>




    </div>
    <Footer/>
    </>
  )
}

export default Events