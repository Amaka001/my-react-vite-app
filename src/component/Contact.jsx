import React from 'react';
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineTimer } from "react-icons/md";

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen '>
      <div className="grid h-screen grid-cols-10 mt-32 gap-14 px-28">
        <div className="col-span-4 ">
          <div className='grid grid-cols-1 gap-8'>
            <div className='rounded-lg contact h-36 '>
              <div className='flex gap-5 pt-7 pl-8 text-neutral-500 text-[18px]'>
                <div className='flex justify-center w-12 h-12 py-3 bg-blue-800 rounded-full '>
                  <FiPhone color='white' size={23} />
                </div>
                <ul>
                  <li className='pb-3 font-semibold text-blue-800'>Contact</li>
                  <li>0984537278623</li>
                  <li>yourmail@gmail.com</li>
                </ul>
              </div>
            </div>

            <div className='h-40 rounded-lg contact'>
              <div className='flex gap-5 pt-5 pl-8 text-neutral-500 text-[18px]'>
                <div className='flex justify-center w-12 h-12 py-3 bg-blue-800 rounded-full '>
                  <IoLocationOutline color='white' size={23} />
                </div>
                <ul className='font-[400]'>
                  <li className='pb-3 font-semibold text-blue-800'>Address</li>
                  <li>175 5th Ave, New York, NY</li>
                  <li>10010</li>
                  <li>United States</li>
                </ul>
              </div>
            </div>

            <div className='h-32 rounded-lg contact'>
              <div className='flex gap-5 pt-7 pl-8 text-neutral-500 text-[18px]'>
                <div className='flex justify-center w-12 h-12 py-3 bg-blue-800 rounded-full '>
                  <MdOutlineTimer color='white' size={23} />
                </div>
                <ul>
                  <li className='pb-3 font-semibold text-blue-800'>Schedule</li>
                  <li>24 Hours / 7 Days Open</li>
                  <li>Office time: 10 AM - 5:30 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6 contact main mb-28">
          <div className='mb-12 text-center pt-14'>
            <h3 className='text-[19px] font-bold text-blue-700'>Get in Touch</h3>
            <h1 className='text-[35px] font-bold text-[#353434]'>Ready to Get Started</h1>
            <p className='px-28 text-[#979696] text-[17px] font-semibold'>
              At vero eos et accusamus et iusto odio dignissimos ducimus quiblanditiis praesentium
            </p>
          </div>

          <form action="" className='mx-10'>
            <div className='grid grid-cols-2 gap-7'>
              <input
                type="text"
                placeholder='Name'
                className='px-3 py-2 border border-gray-300 rounded-md mail h-14 focus:outline-none focus:ring-1 focus:ring-blue-500'
              />
              <input
                type="email"
                placeholder='Email'
                className='px-3 py-2 border border-gray-300 rounded-md mail h-14 focus:outline-none focus:ring-1 focus:ring-blue-500'
              />
              <input
                type="tel"
                placeholder='Phone'
                className='px-3 py-2 border border-gray-300 rounded-md mail h-14 focus:outline-none focus:ring-1 focus:ring-blue-500'
              />
              <input
                type="text"
                placeholder='Subject'
                className='px-3 py-2 border border-gray-300 rounded-md mail h-14 focus:outline-none focus:ring-1 focus:ring-blue-500'
              />
            </div>

            <input
              type="text"
              placeholder='Type Message'
              className='w-full h-32 px-3 py-2 mt-10 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-blue-500'
            />
                <div className='flex justify-center'>
                  <input type="button" value="SEND MESSAGE" className='w-48 h-12 my-8 font-semibold text-white bg-blue-700 val hover:bg-blue-900'/>
              </div>
          </form>
            
            
        </div>
      </div>
    </div>
  );
};

export default Contact;
