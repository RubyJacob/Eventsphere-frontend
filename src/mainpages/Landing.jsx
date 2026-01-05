import React, { useEffect } from 'react'
import Header from '../commoncmpt/Header'
import Footer from '../commoncmpt/Footer'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowRoundForward,IoIosArrowBack } from "react-icons/io";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineCurrencyRupee } from "react-icons/md";


import '../index.css'

import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { homeEventsAPI } from '../services/allAPI';



const slides = [
  {
    title: "Unforgettable Experiences",
    description: "Create memories that last a lifetime, where every moment is filled with joy, connection, and unforgettable experiences shared with the people who matter most.",
    image: "/land1.jpg"
  },
  {
    title: "Empowering Digital Future",
    description: "Join industry leaders, innovators, and professionals for insightful talks, networking opportunities, and discussions on the latest trends shaping the future of technology.",
    image: "/land2.jpg"
  },
  {
    title: "Music Night - Feel the Beat",
    description: "Experience an electrifying night with top music bands performing live. Immerse yourself in powerful rhythms, soulful melodies, and an unforgettable concert atmosphere.",
    image: "https://i.pinimg.com/1200x/f2/8b/5d/f28b5d4660ab33faab6778cecec87716.jpg"
  }
];

const reviews = [
  {
    name: "Anjali Menon - Marketing Manager",
    review:
      "The entire event was flawlessly organized from start to finish.The team paid attention to every detail and ensured a smooth experience.It truly felt premium and stress-free for both guests and organizers.",
    image:
      "https://images.rawpixel.com/image_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA4L3Jhd3BpeGVsX29mZmljZV8zNV9iZWF1dGlmdWxfc21pbGluZ195b3VuZ19pbmRpYW5fYnVzaW5lc3Nfd29tYV8yYWM3MjMyNS1jZmU3LTQ5ODgtODBkNi03YjViZTg3ODYzNjNfMS5qcGc.jpg",
  },
  {
    name: "Rahul Kumar - Startup Founder",
    review:
      "Exceptional planning and execution throughout the event.From registration to stage management, everything was seamless.Highly reliable team for corporate and large-scale events.",
    image:
      "https://axploreb2bvisa.com/wp-content/uploads/2023/08/Akshay-Kashid.webp",
  },
  {
    name: "Sneha Paul - Creative Director ",
    review:
      "Great creativity combined with perfect execution.The ambiance, flow, and audience engagement were spot on.They turned our vision into a memorable experience.Would absolutely partner with them again for future events",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.FuTWe2-C-vB3885QAALKxQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];



function Landing() {
     const [homeEvents,setHomeEvents] = useState([])
     console.log(homeEvents);
     
     
     useEffect(()=>{
     getHomeEvents()
     },[])

     const getHomeEvents = async()=>{
       const result = await homeEventsAPI()
       //console.log(result);
       setHomeEvents(result.data)

     }

   const [index, setIndex] = useState(0);

     const prev = () =>
       setIndex((index - 1 + reviews.length) % reviews.length);
      const next = () => setIndex((index + 1) % reviews.length);


  return (
    <>
     <Header/>
     <div className='bg-[#060b1a] text-gray-400'>
    {/* slidders */}
     <Swiper
      modules={[Autoplay, EffectFade]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      effect="fade"
      loop
      speed={1200}
      className="hero-swiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1 className="title">{slide.title}</h1>
              <p className='leading-relaxed'>{slide.description}</p>
              <Link to={'/events'} className='px-5 py-3 bg-purple-700 border border-black my-5 rounded-3xl inline-flex items-center justify-center'>Explore Events <IoIosArrowForward /></Link>
            </div> 
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
     {/* show few events */}
     <div className='w-full py-10 px-10  text-gray-400'>
       <div className='flex justify-between'>
          <div> 
          <h1 className='text-5xl '>Featured Events</h1>
          <p className=' text-2xl py-3'>Discover our handpicked selection of upcoming events</p>
          </div>
          <div>
             <Link to={'/events'} className='px-5 py-3 bg-purple-800 border border-black my-5 rounded-3xl inline-flex items-center justify-center text-white text-lg'>View All Events <IoIosArrowRoundForward className='text-2xl'/></Link>
          </div>
       </div>
       {/* show 3 events */}
       <div className='grid grid-cols-3 gap-4 py-10 text-black place-items-center'>
        {/* concert */}
         {
           homeEvents?.length>0 ?
           homeEvents?.map(events=>(
              <div key={events?._id} className='w-100 h-auto border rounded-2xl shadow bg-gray-200  transition delay-150 duration-500 ease-in-out hover:-translate-y-1 hover:scale-110'>
          <img className='w-100 rounded min-h-65' src={events?.eventImage} alt="Event image" />
           <h1 className='text-3xl font-bold px-3 py-3 text-purple-800'>{events?.category}</h1>
            <p className='flex items-center gap-3 text-xl p-2'><MdOutlinePeopleAlt className='text-xl text-purple-600' />{events?.title}</p>
            <p className='flex items-center gap-3 text-xl p-2'><LuCalendarDays className='text-xl  text-purple-600' />{new Date(events?.date).toLocaleDateString("en-GB").replaceAll("/", "-")}</p>
             <p className='flex items-center gap-3 text-xl p-2'><IoLocationOutline className='text-xl  text-purple-600' />{events?.location}</p>
             <hr />
             <div className='flex py-4 p-2 justify-between'>
              <p className='flex items-center text-xl'><MdOutlineCurrencyRupee className='text-xl  text-purple-600' />{events?.price}</p>
               {/* <Link className='flex items-center justify-center text-black  text-lg  hover:text-purple-600 hover:underline underline-offset-4'>View Details <IoIosArrowRoundForward className='text-2xl'/></Link> */}
             </div>
              </div>

            ) )
        
         :
         <p className='text-xl text-center'>No events..</p>
         }
       </div>
     </div>
     {/* category */}
     <div >
      <h1 className='text-center py-5 text-5xl font-extrabold text-gray-400'>Browse By Category</h1>
      <p className='text-center text-xl leading-relaxed text-gray-400'>Explore Events by category to find exactly what you're looking for, <br /> from concerts and conferences to workshops and festival fun activites </p>
         <div className='grid grid-cols-3 gap-6 p-10 max-w-7xl mx-auto'>
          {/* concert */}
          <div className="relative w-fit rounded-2xl overflow-hidden group">
            <img className="h-75 w-110 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
             src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg"
             alt="concert"/>

             {/* Hover Overlay */}
           <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" >
               <h2 className="text-white text-3xl font-bold"> Entertainment </h2>
         </div>
          </div>
          {/* exhibition */}
           <div className="relative w-fit rounded-2xl overflow-hidden group">
            <img className="h-75 w-110 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
             src="https://www.shutterstock.com/image-photo/woman-shopping-unique-handmade-items-600nw-2601321867.jpg"
             alt="exhibition"/>

             {/* Hover Overlay */}
           <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" >
               <h2 className="text-white text-3xl font-bold"> Exhibition</h2>
         </div>
          </div>
          {/* conference */}
           <div className="relative w-fit rounded-2xl overflow-hidden group">
            <img className="h-75 w-110 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
             src="https://www.shutterstock.com/image-photo/speaker-giving-talk-conference-hall-600nw-1117902230.jpg"
             alt="conference"/>

             {/* Hover Overlay */}
           <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" >
               <h2 className="text-white text-3xl font-bold">Conference</h2>
         </div>
          </div>
         </div>
         <div className='grid grid-cols-3 gap-6 p-10 max-w-7xl mx-auto'>
          {/* workshop */}
           <div className="relative w-fit rounded-2xl overflow-hidden group">
            <img className="h-75 w-110 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
             src="https://media.istockphoto.com/id/1348130126/photo/happy-couples-taking-dancing-lessons-in-a-studio.jpg?s=612x612&w=0&k=20&c=xmgKHNsvm06vTiDNWWTIrlGPa5_4V0Bgtd_bN2B31K4="
             alt="workshop"/>

             {/* Hover Overlay */}
           <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" >
               <h2 className="text-white text-3xl font-bold">Workshop</h2>
         </div>
          </div>
          {/* festival */}
           <div className="relative w-fit rounded-2xl overflow-hidden group">
            <img className="h-75 w-110 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
             src="https://blogs.tripzygo.in/wp-content/uploads/2025/02/holi-events-in-hyderabad.jpg"
             alt="festival"/>

             {/* Hover Overlay */}
           <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" >
               <h2 className="text-white text-3xl font-bold">Festival</h2>
         </div>
          </div>
           {/* comedy */}
           <div className="relative w-fit rounded-2xl overflow-hidden group">
            <img className="h-75 w-110 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
             src="https://cdn.shortpixel.ai/spai2/q_lossy+ret_img+to_webp/laverys.com/wp-content/uploads/2022/08/291A0517.jpg"
             alt="comedy"/>

             {/* Hover Overlay */}
           <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" >
               <h2 className="text-white text-3xl font-bold">Comedy Show</h2>
         </div>
          </div>
         </div>
     </div>
     {/* testimonial */}
     <h1 className='text-center text-5xl font-extrabold py-5 text-gray-400'>What Our Clients Say</h1>
      <div className="w-full h-100 flex justify-center items-center">
      <div style={{ width: "60%" }} className="h-80 shadow border rounded-2xl flex items-center px-10 relative bg-white">
        
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-4 text-3xl  text-gray-600 hover:text-black"
        >
          <IoIosArrowBack />
        </button>

        {/* Content */}
        <div className="flex ms-10 w-full items-center gap-10">
          {/* Left: Image */}
          <img
            src={reviews[index].image}
            alt={reviews[index].name}
            className="w-32 h-32 rounded-full object-cover border"
          />

          {/* Right: Review */}
          <div>
            <p className="text-2xl text-gray-700 mb-4 italic">
              “{reviews[index].review}”
            </p>
            <h3 className="text-2xl font-semibold text-purple-800">
              {reviews[index].name}
            </h3>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 text-3xl text-gray-600 hover:text-black"
        >
          <IoIosArrowForward />
        </button>
      </div>
       </div>
 
       </div>








    <Footer/>
    </>
  )
}

export default Landing