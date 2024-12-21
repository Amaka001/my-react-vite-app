import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='w-full h-[350px] bg-slate-150 mt-32'>
            <div className='flex gap-32 mx-32'>
                <div>
                  <h1 className='font-bold text-[32px] pb-5'>
                  Business
                  </h1>
                  <p className='w-72'>
                  Making the world a better place through constructing elegant hierarchies.
                  </p>
                </div>

                <div>
                  <h3 className='font-bold text-[22px] pb-5'>
                  Solutions
                  </h3>
                  <ul>
                    <li>Marketing</li>
                    <li>Analytics</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                  </ul>
                </div>

                <div>
                <h3 className='font-bold text-[22px] pb-5'>
                Support
                  </h3>
                  <ul>
                    <l>Pricing</l>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API Status</li>
                  </ul>
                  </div> 

                  <div>
                  <h3 className='font-bold text-[22px] pb-5'>
                  Subscribe
                  </h3>
                  <ul>
                    <li>Subscribe to our newsletter for the</li>
                    <li>latest updates</li>
                    
                  </ul>
                
                      <input type="email" name="" id="" placeholder='Email address'/>
                  </div> 
            </div>
            
        </div>
    </>
  )
}

export default Footer