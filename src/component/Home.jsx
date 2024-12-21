import React from 'react'
import hero from '../images/hero.jpg'
import { CiPlay1 } from "react-icons/ci";
import { DiAtom } from "react-icons/di";
import { FaAngleUp } from "react-icons/fa6";

function Home () {
  return (
    < >
    
    <div
  id="home"
  className="pt-28 w-full lg:h-[120vh] md:h-[930px] sm:h-[1000px] md:pb-44 bg-[#3a3ae6] block md:block lg:flex justify-around lg:px-24 md:px-[97px] sm:px-[32px] sm:pb-20"
>
  <div className="lg:w-1/2 lg:mt-32 sm:mt-3">
    <h1 className="sm: ml-8  pb-3 font-bold text-white  md:text-[40px] lg:text-5xl  sm: text-4xl ">
      Corporate & Business 
    </h1>
    <h1 className="sm: text-4xl sm: ml-8   font-sans font-bold text-white sm:text-[30px] lg:text-[40px]">
      Site Template by Ayro UI.
    </h1>
    <p className="sm: ml-8   pt-9 text-[#c9c9ec] lg: text-[16.9px] font-medium ">
      We are a digital agency that helps brands to achieve their business
      outcomes. We see technology as a tool to create amazing things.
    </p>
    <div className="flex gap-6 mt-9">
      <button className=" sm: ml-8  hover:text-white hover:border-[1px] hover:bg-[#3a3ae6] rounded-md w-44 h-12 bg-white text-[#5353f1] text-[17px] uppercase font-semibold tracking-wider">
        <a href="#" className="hover:text-white">
          Get Started
        </a>
      </button>
      <button className="bg-white w-12 h-12 rounded-full border-[1px] text-[#3a3ae6] px-3">
        <a href="facebook.com">
          <CiPlay1 size={25} />
        </a>
      </button>
      <p className="pt-3 font-sans text-[17px] font-medium text-white">
        <a href="#">watch intro</a>
      </p>
    </div>
  </div>

  <div className="mt-16 sm: pb-[39px]  sm: px-[15px]">
    <img
      src={hero}
      alt=""
      className="object-cover object-center w-[550px]  h-[420px] rounded-md"
    />
  </div>

  {/* Fixed Button */}
  <button className="fixed left-0 z-10 flex h-10 px-3 py-2 font-semibold transition-transform duration-300 transform bg-white rounded-md bottom-4 hover:-translate-y-1 w-52 ml-7">
    <a href="#">
      <DiAtom size={27} />
    </a>
    <a href="#"> Built with Amaka UI</a>
  </button>

  <button className='fixed z-10 flex h-10 px-3 py-2 font-semibold transition-transform duration-300 transform rounded-md hover:bg-zinc-700 bg-amber-400 w-11 right-8 bottom-4 hover:-translate-y-1 ml-7'>
    <a href="#home"><FaAngleUp  color='white '/></a>
  </button>
</div>

      
      
    </>
  )
}

export default Home
