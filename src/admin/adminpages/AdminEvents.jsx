import React, { useState } from 'react'
import AdminHeader from '../admincomponent/AdminHeader'
import AdminSideBar from '../admincomponent/AdminSideBar'
import { ToastContainer, toast } from 'react-toastify';
import { addEventAPI } from '../../services/allAPI';

function AdminEvents() {
    const [eventDetails,setEventDetails] = useState({
        title:"",organizer:"",category:"",date:"",description:"",time:"",duration:"",location:"",agelimit:"",price:"",eventImage:""
    })
    console.log(eventDetails);
    
    const resetform =()=>{
        setEventDetails({title:"",organizer:"",category:"",date:"",description:"",time:"",duration:"",location:"",agelimit:"",price:"",eventImage:"" }
     )}
    
  const handleAddEvent = async(req,res)=>{
    const {title, organizer, category, date, description, time, duration, location, agelimit, price, eventImage} = eventDetails
    if( !title || !organizer || !category || !date || !description || !time || !duration || !location || !agelimit || !price || !eventImage){
        toast.info("Please fill the fom completely !!!")
    }
    else{
        const token = sessionStorage.getItem("token")
        if(token){
           const reqHeader = {
                 "Authorization":`Bearer ${token}`
            }
            const result = await addEventAPI(eventDetails,reqHeader)
            console.log(result);
            
            if(result.status == 200){
                toast.success("Event Added Succesfully !!!")
            }
            else if(result.status == 401)
            {
                toast.info(result.response.data)
            }
            else{
                toast.error("Something went wrong...")
            }
            resetform()
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
           <div>
             <h1 className='text-3xl text-center '>CREATE EVENT </h1>
              <div className='p-10 my-20 mx-5 bg-gray-300 '>
            <h1 className='text-center text-3xl font-bold'>Event Details</h1>
            <div className='md:grid grid-cols-2 mt-10 w-full '>
                    <div className='px-3'>
                        <div className='mb-4'>
                            <input value={eventDetails.title} onChange={(e)=>setEventDetails({...eventDetails,title:e.target.value})}  type="text" placeholder='Event Title'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={eventDetails.organizer} onChange={(e)=>setEventDetails({...eventDetails,organizer:e.target.value})}  type="text" placeholder='Organizer'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={eventDetails.category} onChange={(e)=>setEventDetails({...eventDetails,category:e.target.value})}  type="text" placeholder='Category'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={eventDetails.date} onChange={(e)=>setEventDetails({...eventDetails,date:e.target.value})}  type="date" placeholder='Date'  className='p-3 bg-white w-full rounded '/>
                        </div>
                        <div className='mb-4'>
                            <textarea value={eventDetails.description} onChange={(e)=>setEventDetails({...eventDetails,description:e.target.value})}  type="text" rows={5} placeholder='Description'  className='p-3 bg-white w-full rounded'/>
                        </div>
                    </div>
                      <div className='px-3'>
                         <div className='mb-4'>
                            <input value={eventDetails.time} onChange={(e)=>setEventDetails({...eventDetails,time:e.target.value})}  type="text" placeholder='Time'  className='p-3 bg-white w-full rounded'/>
                        </div>
                         <div className='mb-4'>
                            <input value={eventDetails.duration} onChange={(e)=>setEventDetails({...eventDetails,duration:e.target.value})}  type="text" placeholder='Duration'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={eventDetails.location} onChange={(e)=>setEventDetails({...eventDetails,location:e.target.value})}  type="text" placeholder='Location'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={eventDetails.agelimit} onChange={(e)=>setEventDetails({...eventDetails,agelimit:e.target.value})}  type="text" placeholder='Age Limit'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={eventDetails.price} onChange={(e)=>setEventDetails({...eventDetails,price:e.target.value})}  type="text" placeholder='Price'  className='p-3 bg-white w-full rounded'/>
                        </div>
                        <div className='mb-4'>
                            <input value={eventDetails.eventImage} onChange={(e)=>setEventDetails({...eventDetails,eventImage:e.target.value})}  type="text" placeholder='Event Image'  className='p-3 bg-white w-full rounded'/>
                        </div>
                    </div>
            </div>
            <div className='flex justify-end'>
                <button onClick={resetform}  className='bg-gray-600 text-white p-3 rounded me-5 '>RESET</button>
                <button onClick={handleAddEvent}  className='bg-green-900 text-white p-3 rounded me-5 '>ADD EVENT</button>
            </div>
        </div>
           </div>
        </div>
         <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="colored"
        />
      </div>

    </>
  )
}

export default AdminEvents