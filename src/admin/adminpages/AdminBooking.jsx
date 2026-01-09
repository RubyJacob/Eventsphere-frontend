import React, { useEffect, useState } from 'react'
import AdminHeader from '../admincomponent/AdminHeader'
import AdminSideBar from '../admincomponent/AdminSideBar'
import { allEventBookingDetailsAPI } from '../../services/allAPI'


function AdminBooking() {
  const [allEvents,setAllEvents] = useState([])
  console.log(allEvents);
  const formatDate = (date) =>
    new Date(date)
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replaceAll("/", "-");
  
  useEffect(()=>{
    allEventDetails()
  },[])

   const allEventDetails = async()=>{
       const token = sessionStorage.getItem("token")
                        if(token){
                           const reqHeader = {
                                 "Authorization":`Bearer ${token}`
                            }
                  const result = await allEventBookingDetailsAPI(reqHeader)
                  //console.log(result);   
                  if(result.status == 200){
                    setAllEvents(result.data)
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
          <div className="p-6">
            <div className="mb-10">
  

   
    
    {
    allEvents?.length > 0 ?
    allEvents?.map((events,index)=>(
      <div  key={index}>
    <h2 className="text-2xl font-semibold mb-4 text-red-800">{events?.eventTitle}</h2>
    <table className="w-full border border-gray-300 text-center mb-10">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">User ID</th>
          <th className="p-2">Tickets</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Booking Date</th>
          <th className="p-2">Payment Status</th>
         </tr>
      </thead>

      <tbody>
         { 
         events.users.map((user,index)=>(
            <tr  key={index} className="border-t">
            <td className="p-2">{user?.email}</td>
            <td className="p-2">{user?.ticketCount}</td>
            <td className="p-2">₹ {user?.ticketAmount}</td>
            <td className="p-2">{formatDate(user?.bookingDate)}</td>
            <td
              className={`p-2 font-semibold ${
                user?.paymentStatus  === "Paid"
                  ? "text-green-600"
                  : user?.paymentStatus === "Pending"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {user?.paymentStatus}
            </td> 
          </tr>
         ))
        }
      </tbody>
    </table>
    </div>
    ))
    
    :
    <div className='text-3xl text-center text-red-900'>No Bookings Yet...</div>
    }
  </div>
    </div>
        </div>
    </div>
    
    </>
  )
}

export default AdminBooking