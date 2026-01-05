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
