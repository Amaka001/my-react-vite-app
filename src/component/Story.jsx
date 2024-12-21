import React from 'react'
import { useState } from 'react';
import story from '../images/story.jpg'
import { MdOutlineHorizontalRule } from "react-icons/md";

function Story() {
  const [activeDiv, setActiveDiv] = useState('whoAreWe');
  return (
    <>
    <div className='lg:flex lg:justify-center w-full lg: gap-16 lg:pt-32 pt-16 lg:pl-16 sm: px-5 lg:h-[117vh] sm: h-[200vh] bg-slate-100 md:block '>
        <img className='w-[500px] h-[480px] ' src={story} alt="" />
        <div className='w-[550px] ml-'>
          <span className='flex mb-5 sm: mt-9'>
            <MdOutlineHorizontalRule className='mt-1' size={22} color='blue '/>
            <p className='font-semibold text-[19px] uppercase ml-1 '> our story </p>
          
          </span> 
          <span className="text-[32px] font-semibold leading-[36px] sm:text-[24px] sm:leading-[28px] sm:m-0 sm:p-0 w-full">
            <p>Our team brings</p>
            <p>experience and knowledge</p>
         </span>

         
                
                
          <div className="lg:grid lg:grid-cols-3 sm: block lg:gap-6 lg:h-[65px] sm: h-40 lg:w-[500px] sm: w-[450px] bg-neutral-200 mt-12 py-3 lg:px-5 pr-14 rounded-md">
      {/* Who Are We div */}
      <div
        onClick={() => setActiveDiv('whoAreWe')}
        className={`sm: h-10 sm: ml-[12px] sm: mb-2.5 lg-w-96 rounded-md  justify-items-center cursor-pointer ${
          activeDiv === 'whoAreWe' ? 'bg-blue-800 text-white' : 'bg-white text-black'
        }`}
      >
        <p className="pt-1 capitalize text-[18px] text-center">Who Are We</p>
      </div>

      {/* Our Vision div */}
      <div
        onClick={() => setActiveDiv('ourVision')}
        className={`sm: h-10 sm: ml-[12px] sm: mb-2.5  rounded-md cursor-pointer ${
          activeDiv === 'ourVision' ? 'bg-blue-800 text-white' : 'bg-white text-black'
        }`}
      >
        <p className="pt-1 capitalize text-[18px] text-center">Our Vision</p>
      </div>

      {/* Our History div */}
      <div
        onClick={() => setActiveDiv('ourHistory')}
        className={`sm: h-10 sm: ml-[12px] rounded-md cursor-pointer ${
          activeDiv === 'ourHistory' ? 'bg-blue-800 text-white' : 'bg-white text-black'
        }`}
      >
        <p className="pt-1 capitalize text-[18px] text-center">Our History</p>
      </div>
    </div>
                <p className='text-[17px] mt-7 text-zinc-600'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, look like readable English.</p>

                <p className='lg:text-[17px] sm: text-[15px] sm:pr-10th mt-7 text-zinc-600'>
                There are many variations of passages of Lorem Ipsum available, but the majority have in some form, by injected humour. 
                </p>
        </div>
    </div>
    
    
    </>
  )
}

export default Story