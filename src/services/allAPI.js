import serverURL from "./serverURL";
import commonAPI from "./commonAPI";

//register
export const registerAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)
}

//login
export const loginAPI = async(userDetails)=>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

//add event
export const addEventAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/event-add`,reqBody,reqHeader)
}

//get home events - Landing page
export const homeEventsAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/home-events`,{})
}

//get all events - Events page
export const allEventsAPI = async()=>{
    return await commonAPI("GET",`${serverURL}/all-events`,{})
}

//view EventDetails
export const viewEventAPI = async(reqHeader,id)=>{
    return await commonAPI("GET",`${serverURL}/events/${id}/view`,{},reqHeader)
}


//view EventDetails for register
export const viewEventRegisterAPI = async(reqHeader,id)=>{
    return await commonAPI("GET",`${serverURL}/events/${id}/register`,{},reqHeader)
}

//get add EventDetails of user for register
export const makePaymentAPI = async(reqHeader,reqBody)=>{
    return await commonAPI("POST",`${serverURL}/events/register-event`,reqBody,reqHeader)
}

//get event registered details for each event  by admin
export const allEventBookingDetailsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/grouped-users`,{},reqHeader)
}

//get each user registered events for profile page
export const allUserBookedEventsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-registered-events`,{},reqHeader)
}

//get all events - Admin page
export const allAdminEventsAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/all-admin-events`,{},reqHeader)
}

//delete Event by admin
export const deleteEventAPI = async(reqHeader,id)=>{
    return await commonAPI("DELETE",`${serverURL}/event/${id}/delete`,{},reqHeader)
}

//save booking details to bookings  
export const saveBookingAPI = async(reqHeader,bookingData)=>{
    return await commonAPI("POST",`${serverURL}/save-details`,bookingData,reqHeader)
}


