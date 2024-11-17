import React from 'react';
import banner from "../../../assets/banner.jpg"

const HeroSection = () => {
  return (
    <div className='relative'>
        <div>
            <img src={banner} alt='' className='w-full object-cover object-center'/>
        </div>

        <div className='absolute top-[30%] left-[1%]'>
            <h1 className='text-5xl font-bold text-red-500 '>Discover Your Next Adventure</h1>
            <p className='text-center text-2xl mt-5 font-semibold'>
                Shhop Our Latest Arrival & Unleash Yopur Style
            </p>
        </div>
    </div>
  )
}

export default HeroSection