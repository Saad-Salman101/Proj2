/* eslint-disable @next/next/no-img-element */
import React from 'react'

const P1Zimoteam = () => {
  return (
    <>
    
    <div className='h-[100Vh] w-full flex flex-col overflow-x-hidden'>
        <div className='w-full h-[20%] flex flex-row justify-end items-start '>
            <img src='/assets/P1Location.png' alt='' className=' w-[20%] mr-10 mt-4'/>
        </div>

        <div className='w-full h-[50%] flex flex-col justify-center items-start ml-10'>
            <div>
                <img src='/assets/P1ZimoTeam.png' alt='' />
            </div>
            <div className='mt-4'> 
                <img src='/assets/P1ZimoGroup.png' alt='' />
            </div>
            

        </div>

        <div className='w-full h-[30%] flex flex-col justify-end items-center '>
            <div className='mb-12'><img src='/assets/P1BringingThe.png' alt='' /></div>
            <div><img src='/assets/DownArrow.png' alt='' className='md:w-[80%] w-[40px]'/></div>
        </div>
        
        
    </div>   



    </>
  )
}

export default P1Zimoteam