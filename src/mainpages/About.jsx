import React from 'react'
import Header from '../commoncmpt/Header'
import Footer from '../commoncmpt/Footer'
import { FaPlay } from "react-icons/fa";

function About() {
  return (
    <>
    <Header/>
    
     <div className="bg-[#060b1a] text-white">

      {/* HERO SECTION */}
      <section
        className="h-[60vh] bg-cover bg-bottom flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4)), url(https://i.pinimg.com/1200x/64/9f/c9/649fc909ab5eae511299d92b1670b0fc.jpg)",
        }}
      >
        <h1 className="text-5xl font-bold tracking-wide">About Us</h1>
      </section>

      {/* INTRO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">Our Introduction</h2>
            <p className="text-gray-400 leading-relaxed text-xl">
              We specialize in crafting unforgettable event experiences.
              From live concerts and corporate conferences to creative
              workshops, our team ensures flawless execution and memorable
              moments.
            </p>
          </div>

          <div className="text-gray-400 leading-relaxed text-xl">
            Our passion lies in blending creativity with precision.
            Every event is designed with attention to detail, seamless
            coordination, and a deep understanding of audience engagement.
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          {[
            { value: "15L+", label: "Attendees" },
            { value: "35+", label: "Live Events" },
            { value: "40+", label: "Artists & Speakers" },
            { value: "5M+", label: "Online Reach" },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-400 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MEDIA SECTION */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden">
           <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source
      src="https://previews.customer.envatousercontent.com/h264-video-previews/13e29508-bab3-4c07-8de8-572e45b5774f/24037783.mp4"
      type="video/mp4"
    />
  </video>
          </div>

          {/* Team Image */}
          <img
            src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg"
            className="rounded-2xl object-cover"
            alt="team"
          />
        </div>
      </section>

      {/* TEAM */}
      <section>
        <h3 className="text-center text-4xl text-gray-400 mb-8 uppercase tracking-widest">
          Meet Our Team
        </h3>
        {/* Team Members */}
         <div className=" flex flex-wrap justify-center gap-20 opacity-70">
          {[
            { image: "https://img.freepik.com/free-photo/portrait-cute-smiling-boy-cafe_23-2148436234.jpg?semt=ais_hybrid&w=740&q=80", name: "Oliver Smith",designation : "Founder & Creative Director" },
            { image: "https://img.freepik.com/free-photo/business-owner-working-their-strategy_23-2149241318.jpg?semt=ais_hybrid&w=740&q=80", name: "Amelia Brown",designation : "Event Operations Manager"  },
            { image: "https://img.freepik.com/free-photo/happy-smiling-long-haired-woman-with-big-blue-eyes-red-shirt-grey-coat-walks-near-sea_291650-354.jpg?semt=ais_hybrid&w=740&q=80", name: "Sophia Williams",designation : "Logistics Coordination Lead" },
            { image: "https://img.freepik.com/free-photo/close-up-smiley-man-therapy_23-2148928793.jpg?semt=ais_hybrid&w=740&q=80", name: "Ethan Johnson",designation : " Marketing Head" },
          ].map((item, index) => (
            <div key={index} className='flex flex-col justify-center items-center '>
              <img src={item.image} alt="" className='w-50 h-50 rounded-full object-cover border' />
              <h3 className="text-3xl font-bold py-3">{item.name}</h3>
              <p className="text-gray-400 mt-2 text-xl pb-10">{item.designation}</p>
            </div>
          ))}
        </div>
      </section>







    </div>
  














    
    <Footer/>
    </>
  )
}

export default About