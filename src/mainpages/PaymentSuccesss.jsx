import React, { useEffect, useState } from 'react'
import { saveBookingAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import Header from '../commoncmpt/Header';
import Footer from '../commoncmpt/Footer';

function PaymentSuccesss() {
const [ticket, setTicket] = useState(null);
const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
 useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const bookingData = {
    email: params.get("email"),
    eventId: params.get("eventId"),
    eventtitle: params.get("eventtitle"),
    ticketCount: params.get("ticketCount"),
    ticketAmount: params.get("ticketAmount"),
  };

    const token = sessionStorage.getItem("token")
                  if(token){
                     const reqHeader = {
                           "Authorization":`Bearer ${token}`
                           }
                   saveBookingAPI(reqHeader,bookingData)
               .then(res => {
             setTicket(res.data);
              setLoading(false);
               }).catch(() => navigate("/user/payment-error"));
            }
    
 }, [navigate]);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#060b1a] text-white flex items-center justify-center px-4">
        {loading ? (
          <h2 className="text-2xl">Generating your ticket...</h2>
        ) : ticket ? (
          <div className="bg-white text-black p-8 rounded-xl shadow-lg max-w-md w-full">
            <h1 className="text-3xl font-bold mb-4 text-green-600 text-center">
              🎉 Payment Successful
            </h1>

            <div className="space-y-2 text-lg">
              <p><strong>Event:</strong> {ticket.eventtitle}</p>
              <p><strong>Email:</strong> {ticket.email}</p>
              <p><strong>Tickets:</strong> {ticket.ticketCount}</p>
              <p><strong>Amount Paid:</strong> ${ticket.ticketAmount}</p>
              <p><strong>Ticket ID:</strong> {ticket.ticketId}</p>
            </div>

            <button
              onClick={() => navigate("/profile")}
              className="mt-6 w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
            >
              View My Bookings
            </button>
          </div>
        ) : (
          navigate("/user/payment-error")
        )}
      </div>

      <Footer />
    </>

  );
}
  
export default PaymentSuccesss