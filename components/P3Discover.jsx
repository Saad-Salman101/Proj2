/* eslint-disable @next/next/no-img-element */
import React from 'react'

const P3Discover = () => {
  return (
    <>
    <div className='h-[100vh] w-full flex flex-col bg-black'>


        <div className='h-[25%] w-full flex flex-row justify-between items-start'>
            <div className='w-[30%]'></div>
            <div><img src='/assets/P3Team.png' alt='' className='mt-20 w-[70%]'/></div>
        <img src='/assets/P3Location.png' alt='' className=' w-[20%] mr-10 mt-4'/>
        </div>


        <div className='h-[50%] w-full flex justify-start items-center '>
           <div className='bg-[url("/assets/P3Background.png")] w-[50%] h-[100%] bg-contain bg-no-repeat mt-32' >
            <img src='/assets/P3Discover.png' alt='' className='w-[70%] mt-10 ml-20'/>
             </div>
            

        </div>


        <div className='h-[25%] flex flex-col justify-end items-center'>
            <div class="uppercase 3xl:text-[14px] text-[20px] tracking-[2px] text-white ">Services in over hundred and twenty countries.</div>
            <div className='mt-4'> 
                <img src='/assets/DownArrow.png' alt='' className="filter invert" />
            </div>
        </div>

    </div>
    </>
  )
}

export default P3Discover