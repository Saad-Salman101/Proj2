/* eslint-disable @next/next/no-img-element */
import React from 'react'

const P5 = () => {
  return (
    <>
    <div className='h-[100vh] w-full bg-black relative'>
        <div className='bg-[url("/assets/P5Background.png")  w-full h-full bg-cover bg-no-repeat  flex-col justify-between items-center'>
                <img src='/assets/P5Background.png' alt='' className='absolute left-1 w-[100%] h-[100%]'/>
                <div className='w-full h-[30%]'> </div>
                <div className='w-full h-[40%] flex justify-center items-center'><img src='/assets/P5Logo.png' alt=''  className='blur-lg'/></div>
                <div className='w-full h-[30%]  flex justify-center items-end'><img src='/assets/DownArrow.png' alt='' className='filter invert' /></div>
                 
        </div>
        {/* <img src='/assets/P5Logo.png' alt='' /> */}

    </div>
    </>
  )
}

export default P5