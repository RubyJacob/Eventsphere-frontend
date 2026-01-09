import React, { useEffect } from 'react'
import Header from '../commoncmpt/Header'
import Footer from '../commoncmpt/Footer'
import { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { makePaymentAPI, viewEventRegisterAPI } from '../services/allAPI';
import { useParams } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';


function Register() {
    const [ticketCount, setTicketCount] = useState(1);
    const [singleEvent, setSingleEventDetails] = useState({})
    const user = JSON.parse(sessionStorage.getItem("user"));
    const email = user?.email;

    const {id} = useParams()
    const registerDetails = {
    email,
    eventId: id,
    eventtitle: singleEvent.title,
    ticketCount: ticketCount,
    ticketAmount: singleEvent.price * ticketCount,
  };
    //console.log(registerDetails);
    //console.log(singleEvent);
   

         useEffect(()=>{
         viewEventRegisterDetails()
         },[])
    
         const viewEventRegisterDetails = async()=>{
          const token = sessionStorage.getItem("token")
                  if(token){
                     const reqHeader = {
                           "Authorization":`Bearer ${token}`
                      }
          const result = await viewEventRegisterAPI(reqHeader,id)
          //console.log(result);
          if(result.status == 200){
               setSingleEventDetails(result.data)
          }
          else{
            console.log(result);           
          }
         
         }

        }

        const makePayment = async()=>{
           const stripe = await loadStripe('pk_test_51SkJDw2IihGp2GQrXb8jZ3IeekKaFo6tI2dGjZ2RgFvJbYKprtYuDePIq1TIPnykCpLTVApMbQ9GON0lQ8H1ae7U00XytiWOqB');
             //api call
           const token = sessionStorage.getItem("token")
                  if(token){
                     const reqHeader = {
                           "Authorization":`Bearer ${token}`
                           }
                      const result = await makePaymentAPI(reqHeader,registerDetails)
                     // console.log(result);  
                      if(result.status == 200){
                           const{url} = result.data
                            window.location.href = url
                      }
                      else{
                        console.log(result);                       
                      }                   
                  }
              }
       

    const increaseTicket = () => {
    setTicketCount((prev) => prev + 1);
  };

  const decreaseTicket = () => {
    if (ticketCount > 1) {
      setTicketCount((prev) => prev - 1);
    }
  };

  const formatDate = (date) =>
    new Date(date)
      .toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replaceAll("/", "-");
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-[#060b1a] flex justify-center items-center ">
        <div className="border rounded-xl w-full max-w-4xl  p-6 shadow-sm bg-gray-50 h-fit text-xl">
          <h3 className="text-3xl font-semibold mb-6 text-black text-center">
            Event Details
          </h3>

          <div className="space-y-4 text-gray-700">
            <div>
              <p className="font-medium text-black">Date & Time</p>
              <p>{formatDate(singleEvent?.date)}</p>
              <p>{singleEvent?.time}</p>
            </div>

            <div>
              <p className="font-medium text-black">Location</p>
              <p>{singleEvent?.location}</p>
            </div>

            <div>
              <p className="font-medium text-black">Category</p>
              <p>{singleEvent?.category}</p>
            </div>

            <div>
              <p className="font-medium text-black">Event</p>
              <p>{singleEvent?.title}</p>
            </div>
                <hr />
                </div>
        

        {/* Ticket Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg text-black">Tickets</p>
          <div className="flex items-center gap-4 py-3">
            <button
              onClick={decreaseTicket}
              className="w-8 h-8 rounded-full bg-purple-600 text-xl font-bold text-white hover:bg-purple-700"
            >
              −
            </button>

            <span className="text-lg font-semibold">
              {ticketCount}
            </span>

            <button
              onClick={increaseTicket}
              className="w-8 h-8 rounded-full bg-purple-600 text-white text-xl font-bold hover:bg-purple-700"
            >
              +
            </button>
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-semibold text-black">Total</p>
          <p className="flex items-center text-xl font-bold text-purple-700">
            <MdOutlineCurrencyRupee />
            {singleEvent?.price * ticketCount} 
          </p>
        </div>

        {/* Register Button */}
        <button onClick={makePayment} className="w-full py-3 rounded-xl bg-purple-600 text-white text-lg font-semibold hover:bg-purple-700 transition">
          Proceed to Payment
        </button>
      </div>
  </div>

    <Footer/>
    </>
  )
}

export default Register