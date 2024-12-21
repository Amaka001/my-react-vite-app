import React from 'react';
import blur1 from '../images/team-1.jpg'
import blur2 from '../images/team-2.jpg';
import blur3 from '../images/team-3.jpg';

const Team = () => {
  return (
    <>
      <div id="team" className="w-full h-[116vh]  pt-28">
        <div className="w-32 border-[2px] border-blue-700 h-9 rounded-full mx-auto text-center pt-0.5 text-blue-800 font-semibold text-[16px] ">
          Our Team
        </div>

        <div className="text-center pt-7">
          <h1 className="text-4xl font-[700] font-sans">Our Creative Team</h1>
          <p className="pt-3 text-stone-500 text-[17px]">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
        </div>

       {/* Grid Div */}
<div className="grid grid-cols-3 gap-8 auto-rows-[300px] mx-28 mt-10">
  {/* First Grid Item */}
  <div className="relative rounded-md h-[360px] group overflow-hidden shadow-lg">
    {/* Image Div */}
    <div className="h-[240px] overflow-hidden">
      <img src={blur1} alt="Team Member" className="object-fill w-full h-full" />
    </div>

    {/* Text Div */}
    <div className="h-[120px] flex flex-col items-center justify-center bg-white break-words">
      <p className="text-xl font-semibold text-black">Jeffery Riley</p>
      <p className="text-lg font-medium text-blue-800">Art Director</p>
    </div>

    {/* Hover Overlay Div */}
    <div className="absolute bottom-0 left-0 w-full h-[150px] bg-blue-700 flex flex-col items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
      <h1 className="text-xl font-semibold">Jeffery Riley</h1>
      <p className="text-lg font-medium">Art Director</p>
    </div>
  </div>

  {/* Other Grid Items */}

  {/* second div  */}
  <div className="relative rounded-md h-[360px] group overflow-hidden shadow-lg">
  <div className="h-[240px] overflow-hidden">
      <img src={blur2} alt="Team Member" className="object-fill w-full h-full" />
    </div>

    {/* Text Div */}
    <div className="h-[120px] flex flex-col items-center justify-center bg-white break-words">
      <p className="text-xl font-semibold text-black">Riley Beata</p>
      <p className="text-lg font-medium text-blue-800">Web Developer</p>
    </div>

    {/* Hover Overlay Div */}
    <div className="absolute bottom-0 left-0 w-full h-[150px] bg-blue-700 flex flex-col items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
      <h1 className="text-xl font-semibold">Jeffery Riley</h1>
      <p className="text-lg font-medium">Web Developer</p>
    </div>
  </div>

    
  


  {/* third div  */}
  <div className="relative rounded-md h-[360px] group overflow-hidden shadow-lg">
  <div className="h-[240px] overflow-hidden">
      <img src={blur3} alt="Team Member" className="object-fill w-full h-full" />
    </div>

    {/* Text Div */}
    <div className="h-[120px] flex flex-col items-center justify-center bg-white break-words">
      <p className="text-xl font-semibold text-black">Jeffery Riley</p>
      <p className="text-lg font-medium text-blue-800">Art Director</p>
    </div>

    {/* Hover Overlay Div */}
    <div className="absolute bottom-0 left-0 w-full h-[150px] bg-blue-700 flex flex-col items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
      <h1 className="text-xl font-semibold">Jeffery Riley</h1>
      <p className="text-lg font-medium">Art Director</p>
    </div>
  </div>
</div>

      </div>
    </>
  );
};

export default Team;
