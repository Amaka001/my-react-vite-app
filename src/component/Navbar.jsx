import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
    <nav className='fixed  lg:w-full md:pl-[100px] h-26 bg-[#3a3ae6] flex py-9 justify-between sm: w-full z-50 '>
        <h1 className='pl-8 text-3xl font-semibold text-white lg:ml-8 sm:'>Hello Amaka</h1>

        <ul className='lg:flex hidden gap-10 text-[#dfd9d9] text-lg font-medium  '>
            
            <li><a href="#home"className='text-white'>Home</a></li>
            <li><a href="#service" className='hover:text-white'>Service</a></li>
            <li><a href="#portfolio" className='hover:text-white'>Portfolio</a></li>
            <li><a href="#pricing" className='hover:text-white'>Pricing</a></li>
            <li><a href="#team" className='hover:text-white'>Team</a></li>
            <li><a href="#contact" className='hover:text-white'>Contact</a></li>
        </ul>
        <div className=' w-10 h-10  lg:border-[1px]   lg:border-gray-300 lg:rounded-full mr-24 lg:hover:bg-white sm:hover:bg-none  transition duration-300'>
        <a href=""><IoMenuOutline size={30} className='my-1 text-white lg:ml-1 md:ml-[400px] mr-28  lg:hover:text-blue-500 sm:hover:text-blue-none'/></a>

        {/* <a href=""></a><RiCloseLargeFill size={30} className='my-1 text-white lg:ml-1 md:ml-[400px] mr-28'/> */}
        </div>
        
    </nav>

        
    </>
  )
}

export default Navbar