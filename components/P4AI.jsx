/* eslint-disable @next/next/no-img-element */
import React from 'react'

const P4AI = () => {
  return (
    <>
        <div className='w-full h-[100vh]'>

        <div className='w-full h-[20%] flex flex-row justify-end items-start '>
            <img src='/assets/P1Location.png' alt='' className=' w-[20%] mr-10 mt-4'/>
        </div>

            <div className='w-full h-[50%] flex justify-center items-center'>
                <img src='/assets/P4AiLogo.png' alt='' /> 
            </div>

            <div className='w-full h-[30%] flex flex-row justify-between items-center'>
                <div className='w-[30%]'></div>
                <div className='w-[40%] h-full flex flex-col justify-between items-center'> 
                <div></div>
                <div class="uppercase 3xl:text-[14px] text-[20px] tracking-[2px] text-[#737373] mb-8 md:mb-4">ARTIFICIAL INTELLIGENCE FOR EVERYONE</div>
                <div><img src='/assets/DownArrow.png' alt='' /></div>
                </div>
                <div className='w-[30%] h-full flex justify-end items-end'> <img src='/assets/P4AiSmallLogo.png' alt='' className='mb-10 mr-6' /></div>
            </div>

        </div>
    </>
  )
}

export default P4AI