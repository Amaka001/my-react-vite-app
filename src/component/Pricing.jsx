
import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

const pricing = () => {
  return (
    <div id='pricing' className='w-full h-[160vh] pt-32 bg-[#f8f8f8]'>
         <div className='w-24 border-[2px] border-blue-700 h-9 rounded-full mx-auto text-center pt-0.5 text-blue-800 font-semibold text-[17px]'>
         Pricing
            </div> 

            <div className='text-center pt-7'>
              <h1 className='text-4xl font-[700] font-sans'>Pricing & Plans</h1>
              <p className='pt-3 text-stone-500 text-[17px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>

            {/* grid */}
            <div class="flex items-center justify-center h-screen mt-12 "> 
  <div class="grid grid-cols-3 gap-4">
    <div class="w-[350px] h-[580px] text-white flex  justify-center rounded-lg border-[1px] border-[#e7e7e7] bg-white">
    
    <div class="w-[350px] h-[580px] text-white flex flex-col justify-start rounded-lg border-[1px] border-[#e7e7e7] bg-white shadow-[0_4px_15px_5px_rgba(211,211,211,0.5)]">

  <div class="w-24 border-[2px] border-blue-700 h-9 rounded-full text-center text-blue-800 font-semibold text-[17px] mt-14 mx-auto">
    Starter
  </div>
  
  
  <p class="text-gray-700 text-[17px] mt-4 px-4 text-center">
  Lorem Ipsum is simply dummy text of the printing and industry.

    
  </p>

  {/* <div class="flex  justify-center h-screen">
  <div class="text-[30px] font-bold text-gray-800">
    <sup class="text-[19px] font-medium text-gray-600">$</sup>0<sub class="text-[19px] font-medium text-gray-600">/mo</sub>
  </div>
</div> */}

{/* DOLLAR AND NUMBER AREA */}

<div class="flex justify-center  mt-6">
  <div class="relative text-gray-800 font-bold inline-flex items-baseline">
    <span class="text-[22px] font-medium text-gray-600 relative -top-10">$</span>
    <span class="text-[70px] font-medium">0</span>
    <span class="text-[16px] font-medium text-gray-600 relative top-1">/mo</span>
  </div>
  
</div>
<button class="hover:bg-[#2f2fd4] hover:text-white mt-4 mx-auto px-10 py-2  text-[#4141e0] border-[1px] border-[blue]  rounded-md">
  <a href="#" className='font-bold tracking-wider'>START FREE TRIAL</a>
</button>

{/* icon start */}
<div class="space-y-4 mt-10 ml-10">
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-blue-700 text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Cras justo odio.</span>
  </div>
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-blue-700 text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Dapibus ac facilisis in.</span>
  </div>
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-[grey] text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Morbi leo risus.</span>
  </div>
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-[grey] text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Excepteur sint occaecat velit.</span>
  </div>
</div>





</div>
    </div>




    <div class="w-[350px] h-[580px] text-white flex flex-col justify-start rounded-lg border-[1px] border-[#e7e7e7] bg-white shadow-[0_4px_15px_5px_rgba(211,211,211,0.5)]">
  <div class="w-[135px] bg-blue-600 text-white h-10 rounded-full mx-auto text-center pt-1 font-semibold text-[17px] mt-14">
    Exclusive
  </div>

  <p class="text-gray-700 text-[17px] mt-4 px-4 text-center">
    Lorem Ipsum is simply dummy text of the printing and industry.
  </p>

  <div class="flex justify-center mt-6">
    <div class="relative text-gray-800 font-bold inline-flex items-baseline">
      <span class="text-[22px] font-medium text-gray-600 relative">$</span>
      <span class="text-[70px] font-medium">99</span>
      <span class="text-[16px] font-medium text-gray-600 relative top-1">/mo</span>
    </div>
  </div>

  <button class="hover:bg-[#2d2d96] bg-[#2f2fd4] text-white mt-4 mx-auto px-10 py-2   rounded-md">
    <a href="#" className="font-bold tracking-wider">START FREE TRIAL</a>
  </button>

  {/* icon  */}

  <div class="space-y-4 mt-10 ml-10">
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-blue-700 text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Cras justo odio.</span>
  </div>
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-blue-700 text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Dapibus ac facilisis in.</span>
  </div>
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-[grey] text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Morbi leo risus.</span>
  </div>
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-[grey] text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Excepteur sint occaecat velit.</span>
  </div>
</div>
</div>


<div class="w-[350px] h-[580px] text-white flex flex-col justify-start rounded-lg border-[1px] border-[#e7e7e7] bg-white">

<div class="w-[117px] border-[2px] border-blue-700 h-9 rounded-full mx-auto text-center pt-0.5 text-blue-800 font-semibold text-[17px] mt-14">
  Premium
</div>

<p class="text-gray-700 text-[17px] mt-4 px-4 text-center">
  Lorem Ipsum is simply dummy text of the printing and industry.
</p>

<div class="flex justify-center mt-6">
  <div class="relative text-gray-800 font-bold inline-flex items-baseline">
    <span class="text-[22px] font-medium text-gray-600 relative -top-12">$</span>
    <span class="text-[70px] font-medium">150</span>
    <span class="text-[16px] font-medium text-gray-600 relative top-1">/mo</span>
  </div>
</div>

<button class="hover:bg-[#2f2fd4] hover:text-white mt-4 mx-auto px-10 py-2  text-[#4141e0] border-[1px] border-[blue]  rounded-md">
  <a href="#" className='font-bold tracking-wider'>START FREE TRIAL</a>
</button>

{/* icon  */}
<div class="space-y-4 mt-10 ml-10">
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-blue-700 text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Cras justo odio.</span>
  </div>
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-blue-700 text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Dapibus ac facilisis in.</span>
  </div>
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-[grey] text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Morbi leo risus.</span>
  </div>
  <div class="flex items-center space-x-2">
    <CiCircleCheck class="text-[grey] text-[19px]" />
    <span class="text-gray-700 text-[16px] font-medium">Excepteur sint occaecat velit.</span>
  </div>
</div>
</div>
</div>
</div>







    </div>

  )
}

export default pricing