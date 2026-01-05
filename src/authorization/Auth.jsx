import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import { loginAPI, registerAPI } from '../services/allAPI';


function Auth({insideRegister}) {
     const [viewPassword, setPassword] = useState(false)
     const [userDetails,setUserDetails] = useState({
      username:"",email:"",password:""
     })
     const navigate = useNavigate()
     console.log(userDetails);

    //handleregister
   const handleRegister = async (e)=>{
   e.preventDefault()
   const{username,email,password}= userDetails
   if(email && password && username){
    //toast.success("API Call")
    try{
      const result = await registerAPI(userDetails)
      console.log(result);
      if(result.status == 200){
        toast.success("Register Successfull !!!")
        setUserDetails({ username:"", email: "", password:""})
        navigate('/login')
      }
      else if(result.status == 409){
        toast.warning(result.response.data)
        setUserDetails({ username:"", email: "", password:""})
        navigate('/login')
      }
      else{
         console.log(result);
         toast.error("Something went wrong")
        setUserDetails({ username:"", email: "", password:""})
      }
      

    }
    catch(err){
      console.log(err);  
    }
   }
   else{
    toast.info("Please fill the form completely")
   }
    }
    //handlelogin
    const handleLogin = async(e)=>{
       e.preventDefault()
      const{email,password}= userDetails
      if(email && password ){
        try{
            //toast.success("API Call")
            const result = await loginAPI(userDetails)
            if(result.status == 200){
              toast.success("Login Successfull !!!")
              sessionStorage.setItem("token",result.data.token)
              sessionStorage.setItem("user",JSON.stringify(result.data.user))
              setTimeout(()=>{
                if(result.data.user.role == "admin"){
                    navigate('/admin/home')
                }
                else{
                  navigate('/')
                }
              },2500)
            }
            else if(result.status == 401 || result.status == 404)
            {
              toast.warning(result.response.data)
              setUserDetails({email: "", password:""})
            }
            else{
              toast.error("Something went Wrong !!")
              setUserDetails({email: "", password:""})
            }
        }
        catch(err){
          console.log(err);
        }
        }
       else{
           toast.info("Please fill the form completely")
          }
        }

     
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-[#060b1a]">
      <div
        className={`w-[90%] md:w-[80%] lg:w-[70%] h-137.5 flex rounded-lg overflow-hidden shadow-lg
        ${insideRegister ? "flex-row-reverse" : "flex-row"}`}
      >
        {/* IMAGE SECTION */}
        <div
          className="w-1/2 hidden md:block bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://warriormom.com/wp-content/uploads/2022/12/Events-page.jpg)",
          }}
        ></div>

        {/* FORM SECTION */}
        <div className="w-full md:w-1/3 bg-gray-100 flex flex-col justify-center items-center px-10">
          <h1 className="text-3xl font-bold mb-2">EVENTSPHERE</h1>

          <div className="w-full flex flex-col items-center">
            <div className="w-24 h-24 border rounded-full flex items-center justify-center mb-4">
              <FaUser className="text-3xl" />
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              {insideRegister ? "REGISTER" : "LOGIN"}
            </h2>

            <form className="w-full">
              {insideRegister && (
                <input value={userDetails.username} onChange={(e)=>setUserDetails({...userDetails,username:e.target.value})}
                  type="text"
                  placeholder="Username"
                  className="w-full p-2 border rounded mb-4"
                />
              )}

              <input value={userDetails.email} onChange={(e)=>setUserDetails({...userDetails,email:e.target.value})}
                type="email"
                placeholder="Email"
                className="w-full p-2 border rounded mb-4"
              />

              <div className="relative mb-4">
                <input value={userDetails.password} onChange={(e)=>setUserDetails({...userDetails,password:e.target.value})}
                  type={viewPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-500"
                  onClick={() => setPassword(!viewPassword)}
                >
                  {viewPassword ? <FaEye /> :  <FaEyeSlash />}
                </span>
              </div>

              {!insideRegister && (
                <div className="text-right text-sm mb-4">
                  <button className="underline text-blue-600">
                    Forgot Password?
                  </button>
                </div>
              )}

              <div className='text-center'>
              {  insideRegister ?
                <button onClick={handleRegister} type='button' className='bg-green-700 w-full rounded p-2 mt-3'>Register</button>:
                  <button onClick={handleLogin}  type='button' className='bg-green-700 w-full rounded p-2  '>Login</button>
                }
             </div>
              <p className="text-center mt-4 text-blue-600">
                {insideRegister ? (
                  <>
                    Already a user?
                    <Link to="/login" className="underline ml-2">
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    New user?
                    <Link to="/register" className="underline ml-2">
                      Register
                    </Link>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
       {/* toast */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"
      />
    </div>

  )}
export default Auth