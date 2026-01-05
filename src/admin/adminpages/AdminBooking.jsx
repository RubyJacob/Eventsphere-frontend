import React from 'react'
import AdminHeader from '../admincomponent/AdminHeader'
import AdminSideBar from '../admincomponent/AdminSideBar'

function AdminBooking() {
  const bookings = {
  musicEvents: [
    {
      id: "B001",
      userId: "U101",
      ticketCount: 2,
      ticketAmount: 2000,
      paymentStatus: "Paid",
      bookingDate: "2025-01-10",
    },
    {
      id: "B002",
      userId: "U102",
      ticketCount: 1,
      ticketAmount: 1200,
      paymentStatus: "Pending",
      bookingDate: "2025-01-12",
    },
  ],

  techEvents: [
    {
      id: "B003",
      userId: "U103",
      ticketCount: 3,
      ticketAmount: 4500,
      paymentStatus: "Paid",
      bookingDate: "2025-01-15",
    },
    {
      id: "B004",
      userId: "U104",
      ticketCount: 2,
      ticketAmount: 3000,
      paymentStatus: "Failed",
      bookingDate: "2025-01-18",
    },
  ],
};

const BookingTable = ({ title, data }) => (
  <div className="mb-10">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>

    <table className="w-full border border-gray-300 text-center">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Booking ID</th>
          <th className="p-2">User ID</th>
          <th className="p-2">Tickets</th>
          <th className="p-2">Amount</th>
          <th className="p-2">Booking Date</th>
          <th className="p-2">Payment Status</th>
         </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-t">
            <td className="p-2">{item.id}</td>
            <td className="p-2">{item.userId}</td>
            <td className="p-2">{item.ticketCount}</td>
            <td className="p-2">₹{item.ticketAmount}</td>
            <td className="p-2">{item.bookingDate}</td>
            <td
              className={`p-2 font-semibold ${
                item.paymentStatus === "Paid"
                  ? "text-green-600"
                  : item.paymentStatus === "Pending"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {item.paymentStatus}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

  return (
    <>
    <AdminHeader/>
     <div className='md:grid grid-cols-5'>
        <div className='col-span-1 '>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
          <div className="p-6">
      <BookingTable title="Music Event Bookings" data={bookings.musicEvents} />
      <BookingTable title="Tech Event Bookings" data={bookings.techEvents} />
    </div>
        </div>
    </div>
    
    </>
  )
}

export default AdminBooking