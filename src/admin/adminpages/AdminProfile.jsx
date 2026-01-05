import React from 'react'
import AdminHeader from '../admincomponent/AdminHeader'
import AdminSideBar from '../admincomponent/AdminSideBar'

function AdminProfile() {
  return (
    <>
    <AdminHeader/>
     <div className='md:grid grid-cols-5'>
        <div className='col-span-1 '>
          <AdminSideBar />
        </div>
        <div className='col-span-4 p-10'>
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
      <p className="text-gray-600 mb-6">
        Manage your profile information, update your password, and control system preferences from here.
      </p>

      {/* Profile Information */}
      <h3 className="text-lg font-semibold mb-3">Profile Information</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input type="text" placeholder="Username" className="border p-2 rounded" />
         <input type="email" placeholder="Email" className="border p-2 rounded" />
      </div>

      {/* Password Section */}
      <h3 className="text-lg font-semibold mb-3">Change Password</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input type="password" placeholder="New Password" className="border p-2 rounded" />
        <input type="password" placeholder="Confirm New Password" className="border p-2 rounded" />
      </div>

      {/* Preferences */}
      <h3 className="text-lg font-semibold mb-3">Preferences</h3>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span>Email Notifications</span>
          <input type="checkbox" />
        </div>
        <div className="flex justify-between items-center">
          <span>Two-Factor Authentication</span>
          <input type="checkbox" />
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Update Profile
      </button>
    </div>
  
        </div>
      </div>
    </>
  )
}

export default AdminProfile