import React from 'react'
import fc1 from '../images/pf1.jpg'
import fc2 from '../images/pf2.jpg'
import fc3 from '../images/pf3.jpg'
import fc4 from '../images/pf4.jpg'
import fc5 from '../images/pf5.jpg'
import fc6 from '../images/pf6.jpg'

const portfolio = () => {
  return (
    <>
        <div id='portfolio' className='w-full pt-32 mb-32'>
           <div className='w-36 border-[2px] border-blue-700 h-9 rounded-full mx-auto text-center pt-0.5 text-blue-800 font-semibold text-[17px]'>
                Our Portfolio
            </div> 

            <div className='text-center pt-7'>
              <h1 className='text-4xl font-[700] font-sans'>Our Recent Works</h1>
              <p className='pt-3 text-stone-500 text-[17px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
            </div>
                
                {/* grid div */}
                <div className="mt-10 mx-36 ">
      <div className="grid grid-cols-3 auto-rows-[300px] gap-4 ">
        
        {/* Card 1 */}
        <div className="flex flex-col items-start">
          <div className="relative w-full overflow-hidden rounded-md group">
            {/* Image */}
            <img
              src={fc1}
              alt=""
              className="object-cover w-full h-full transition-all duration-300 rounded-md"
            />
            
            {/* Overlay with hover size reduction */}
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:inset-1.5"></div>
          </div>
          <p className="mt-2 font-semibold text-[26px]">Graphics Design</p>
          <p>Short description for the ones who look for something new. Awesome!</p>
        </div>

        {/* Repeat similar structure for each card */}
        <div className="flex flex-col items-start">
          <div className="relative w-full h-full overflow-hidden rounded-md group">
            <img
              src={fc2}
              alt=""
              className="object-cover w-full h-full transition-all duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:inset-1.5"></div>
          </div>
          <p className="mt-2 font-semibold text-[26px]">Web Development</p>
          <p>Short description for the ones who look for something new. Awesome!</p>
        </div>

        {/* Repeat similar structure for other cards */}
        <div className="flex flex-col items-start">
          <div className="relative w-full h-full overflow-hidden rounded-md group">
            <img
              src={fc3}
              alt=""
              className="object-cover w-full h-full transition-all duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:inset-1.5"></div>
          </div>
          <p className="mt-2 font-semibold text-[26px]">App Development</p>
          <p>Short description for the ones who look for something new. Awesome!</p>
        </div>

        {/* Repeat for remaining cards */}
        <div className="flex flex-col items-start ">
          <div className="relative w-full h-full overflow-hidden rounded-md group">
            <img
              src={fc4}
              alt=""
              className="object-cover w-full h-full transition-all duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:inset-1.5"></div>
          </div>
          <p className="mt-2 font-semibold text-[26px]">Digital Marketing</p>
          <p>Short description for the ones who look for something new. Awesome!</p>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative w-full h-full overflow-hidden rounded-md group">
            <img
              src={fc5}
              alt=""
              className="object-cover w-full h-full transition-all duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:inset-1.5"></div>
          </div>
          <p className="mt-2 font-semibold text-[26px]">SEO Services</p>
          <p>Short description for the ones who look for something new. Awesome!</p>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative w-full h-full overflow-hidden rounded-md group">
            <img
              src={fc6}
              alt=""
              className="object-cover w-full h-full transition-all duration-300 rounded-md"
            />
            <div className="absolute inset-0 bg-white bg-opacity-60 rounded-md transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:inset-1.5"></div>
          </div>
          <p className="mt-2 font-semibold text-[26px]">Product Design</p>
          <p>Short description for the ones who look for something new. Awesome!</p>
        </div>

      </div>
    </div>


            











            
              
        </div>
    </>
  )
}

export default portfolio