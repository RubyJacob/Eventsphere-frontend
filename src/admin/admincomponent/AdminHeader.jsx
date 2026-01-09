import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { GiHolosphere } from "react-icons/gi";
import { useState } from 'react';
import { useEffect } from 'react';


function AdminHeader() {
  const navigate = useNavigate()
  const navClass = ({ isActive }) =>
  `px-3 py-2 text-xl font-medium transition ${
    isActive
      ? 'underline underline-offset-4 text-purple-600'
      : 'text-white hover:text-purple-600 '
  }`;

  const logOut = async()=>{
     sessionStorage.clear()
     navigate('/')
  }
  return (
    <>
    <header className='top-0 left-0 w-full z-50 bg-black'>
    <nav class="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
  <div class="mx-auto w-full px-4 sm:px-6 lg:px-8">
    <div class="relative flex h-20 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* <!-- Mobile menu button--> */}
        <button type="button" command="--toggle" commandfor="mobile-menu" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex shrink-0 items-center text-white text-3xl italic">
         <GiHolosphere /> EVENTSPHERE
          {/* <img src="/logo.png" alt="Your Company" className="h-15 w-45" /> */}
        </div>
       
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
       

        {/* <!-- Profile dropdown --> */}
         
     <el-dropdown class="relative ml-3">
               <button className="relative flex rounded-full focus:outline-none">
                <span className="sr-only">Open user menu</span>
                 <img
                  src="https://pro-bel.com/wp-content/uploads/2019/11/blank-avatar-1-450x450.png"
                  alt="User Login Image"
                className="w-13 h-13 rounded-full object-cover cursor-pointer "/>
                </button>
     
     
               <el-menu anchor="bottom end" popover class="w-48 origin-top-right rounded-md shadow border-0 py-1 outline -outline-offset-1 outline-white/10 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
               
                 <button onClick={logOut} href="#" class="block px-4 py-2 text-sm text-black focus:bg-white/5 focus:outline-hidden">Sign out</button>
               </el-menu>
             </el-dropdown>
      </div>
    </div>
  </div>
  </nav>
    </header>
    </>
  )
}

export default AdminHeader