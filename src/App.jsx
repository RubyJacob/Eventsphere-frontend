import { Route, Routes } from 'react-router-dom'
import './App.css'
import  Landing from './mainpages/Landing'
import  Events from './mainpages/Events'
import Contact from './mainpages/Contact'
import About from './mainpages/About'
import View from './mainpages/View'
import Profile from './mainpages/Profile'
import Auth from './authorization/Auth'
import AdminHomee from './admin/adminpages/AdminHomee'
import AdminEvents from './admin/adminpages/AdminEvents'
import AdminProfile from './admin/adminpages/AdminProfile'
import AdminBooking from './admin/adminpages/AdminBooking'
import Register from './mainpages/Register'

function App() {
  return (
    <>
     <Routes>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister= {true}/>}/>
      <Route path="/" element={<Landing />}/>
      <Route path="/events" element={<Events />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/events/:id/view" element={<View />}/>
      <Route path="/event/:id/register" element={<Register />}/>
      <Route path="/profile" element={<Profile />}/>
      <Route path="/admin/home" element={<AdminHomee />}/>
      <Route path="/admin/profile" element={<AdminProfile />}/>
      <Route path="/admin/events" element={<AdminEvents />}/>
      <Route path="/admin/bookings" element={<AdminBooking />}/>

     </Routes>
    </>
  )
}

export default App
