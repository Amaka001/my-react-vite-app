import React, { useState } from 'react';

const Make = () => {
  // State to track if the button is active
  const [isActive, setIsActive] = useState(false);

  // Function to toggle active state
  const handleClick = () => {
    setIsActive(true);
  };

  // Function to reset active state when clicking outside the button
  const handleReset = (e) => {
    if (!e.target.closest('button')) {
      setIsActive(false);
    }
  };

  // Add event listener to reset state when clicking outside
  React.useEffect(() => {
    document.addEventListener('click', handleReset);
    return () => document.removeEventListener('click', handleReset);
  }, []);

  return (
    <>
      <div className="relative z-0 mt-24 make">
        {/* Circle Shapes */}
        <div className="absolute z-0 rounded-b-full box1 w-72 h-36 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        <div className="absolute rounded-full shadow-[#6666b6a6] shadow-2xl box2 w-72 h-72 bg-gradient-to-r from-blue-600 to-blue-800 left-6 z-0"></div>
        <div className="absolute z-0 semi-circle bg-gradient-to-t from-blue-300 to-blue-900"></div>

        {/* Text */}
        <div className="relative z-10 mt-16 text-center text">
          <h2 className="pt-16 text-2xl text-[40px] font-bold pb-2">We love to make perfect</h2>
          <h2 className="font-bold text-[40px]">solutions for your business</h2>
          <p className="mx-auto mt-4 leading-relaxed text-[#fcfcff] max-w-[598px] pt-4 text-lg font-semibold">
            Why I say old chap that is, spiffing off his nut cor blimey guvnords geeza bloke knees up bobby, sloshed arse William cack Richard. Bloke
            fanny around chesed of bum bag old lost the pilot say there spiffing off his nut.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
          className={`flex items-center justify-center h-12 mx-auto mt-10 font-bold tracking-wider rounded-md w-44 border-[1px] ${
            isActive
              ? 'bg-white text-[#1b1db1] border-[#1b1db1]'
              : 'bg-transparent text-white border-white hover:bg-white hover:text-[#1b1db1]'
          }`}
        >
          <a href="www.facebook.com">GET STARTED</a>
        </button>
      </div>
    </>
  );
};

export default Make;
