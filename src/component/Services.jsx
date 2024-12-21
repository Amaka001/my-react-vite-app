import React from 'react'
import { TbPill } from "react-icons/tb";
import { DiBootstrap } from "react-icons/di";
import { MdChevronLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { IoLayersOutline } from "react-icons/io5";
import { TfiDashboard } from "react-icons/tfi";

function Services() {
  return (
    <>
        <div id='service' className='w-full pt-32'>
            <div className='w-32 border-[2px] border-blue-700 h-9 rounded-full mx-auto text-center pt-0.5 text-blue-800 font-semibold text-[18px]'>
              Services
            </div>

            <div className='text-center pt-7'>
              <h1 className='text-4xl font-[700] font-sans'>Our Best Services</h1>
              <p className='pt-3 text-stone-500 text-[17px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
            
            {/* grid box */}

            <div className=" grid grid-cols-3 auto-rows-[300px] gap-5 mx-28 h-[120vh] mt-10 ">
            <div className="transition-all duration-500 ease-in-out transform rounded-md border-[1px] border-stone-200 hover:scale-105 hover:shadow-lg group">
              
  <div className="flex items-center justify-center w-20 h-20 ml-8 bg-transparent border-2 border-blue-700 rounded-full mt-11 group-hover:bg-blue-700">
    <TbPill size={44} className="text-blue-700 group-hover:text-white" style={{ strokeWidth: 0.9 }} />
  </div>
  <h1 className='font-semibold text-[22px] pt-5 pb-3 pl-6'>Refreshing Design</h1>
  <p className='text-[#797979] pl-6 pr-5'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.</p>
</div>

  
<div className="transition-all duration-200 ease-in-out transform rounded-md border-[1px] border-stone-200  hover:scale-105 hover:shadow-lg group">
  <div className="flex items-center justify-center w-20 h-20 ml-8 bg-transparent border-2 border-blue-700 rounded-full mt-11 group-hover:bg-white hover:bg-white">
    <DiBootstrap size={44} className="text-blue-700 " style={{ strokeWidth: 0.9 }} />
  </div>
  <h2 className='font-semibold text-[22px] pt-5 pb-3 pl-6'>Solid Bootstrap 5</h2>
  <p className='text-[#797979] pl-6 pr-5'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.</p>
</div>

  
  
  <div className="transition-all duration-500 ease-in-out transform rounded-md hover:scale-105 hover:shadow-lg border-[1px] border-stone-200 ">
  <div className="flex items-center justify-center w-20 h-20 ml-8 bg-transparent border-2 border-blue-700 rounded-full mt-11">
    <MdChevronLeft size={29} color='blue'/> <p className='text-blue-700 text-1x'>S</p> <MdKeyboardArrowRight size={29} color='blue'/>
  </div>
  <h2 className='font-semibold text-[22px] pt-5 pb-3 pl-6'>100+ Components</h2>
  <p className='text-[#797979] pl-6 pr-5'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.</p>
  </div>

  
  <div className="border-[1px] border-stone-200  transition-all duration-500 ease-in-out transform  rounded-md  hover:scale-105 hover:shadow-lg">
  <div className="flex items-center justify-center w-20 h-20 ml-8 bg-transparent border-2 border-blue-700 rounded-full mt-11 group-hover:bg-blue-700">
  <TfiDashboard  size={44} className="text-blue-700 group-hover:text-white" style={{ strokeWidth: 0.0 }} />
  </div>
  <h2 className='font-semibold text-[22px] pt-5 pb-3 pl-6'>Speed Optimized</h2>
  <p className='text-[#797979] pl-6 pr-5'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.</p>
  </div>
  
  <div className="transition-all duration-500 ease-in-out transform  rounded-md hover:scale-105 hover:shadow-lg border-[1px] border-stone-200 ">
  <div className="flex items-center justify-center w-20 h-20 ml-8 bg-transparent border-2 border-blue-700 rounded-full mt-11 group-hover:bg-blue-700">
    <IoLayersOutline  size={44} className="text-blue-700 group-hover:text-white" style={{ strokeWidth: 0.1 }} />
  </div>
  <h2 className='font-semibold text-[22px] pt-5 pb-3 pl-6'>Fully Customizable</h2>
  <p className='text-[#797979] pl-6 pr-5'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.</p>
  </div>
  
  <div className="transition-all duration-500 ease-in-out transform rounded-md border-[1px] border-stone-200 hover:scale-105 hover:shadow-lg">
  <div className="flex items-center justify-center w-20 h-20 ml-8 bg-transparent border-2 border-blue-700 rounded-full mt-11 group-hover:bg-blue-700">
    <TfiReload  size={35} className="text-blue-700 group-hover:text-white" style={{ strokeWidth: 0.1 }} />
  </div>
  <h2 className='font-semibold text-[22px] pt-5 pb-3 pl-6'>Regular Updates</h2>
  <p className='text-[#797979] pl-6 pr-5'>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt labor dolore magna.</p>
  </div>
</div>

        </div>
    </>
  )
}

export default Services