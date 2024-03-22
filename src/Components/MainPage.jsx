import React from 'react'
import Navbar from './Navbar';
import DashBoard from './Dashboard'
import Content from './Content';
import Form_Component from './Form_Component';
const MainPage = () => {
  return (
    <div className='grid grid-cols-12 '>
        <div className='col-span-1'>
        <DashBoard/>
        </div>
       <div className='bg-gray-100 col-span-11'>
        <Navbar/>
        <Content/>
        <Form_Component/>
       </div>
       
    </div>
  )
}

export default MainPage