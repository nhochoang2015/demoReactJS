import React from 'react'
import avatar from '../Components/assets/user-icon.png'
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../Actions/user';

const Navbar = () => {

  const handleLogOut = ()=>{
    localStorage.removeItem('dataStore');
  }

  return (
    

<nav className='bg-white h-16 w-full flex justify-between shadow-md'>
    <div className='h-16 inline-flex text-center align-middle'>
       User Management
    </div>
    <div className='float-end inline-flex'>
      <AiOutlineBell className='size-10 pt-3 mr-1 me-7 float-end '/>
      <AiOutlineMessage className='size-10 pt-3 mr-1 me-7 float-end '/>
      <Link className='text-lg  pt-3 mr-1 me-7 hover:underline'>
      <span className=''>email</span>
      </Link>
      <img src={avatar} alt="" className='h-12 rounded-full mr-2 shadow-sm'/>
      <button 
        onClick={handleLogOut}
      className='bg-red-600 w-24 h-10 mr-2 rounded-md'>Log Out</button>
    </div>
   
</nav>

  )
}

export default Navbar