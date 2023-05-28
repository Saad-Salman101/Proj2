/* eslint-disable @next/next/no-img-element */
import React from 'react'

const P10Submitted = () => {
  return (
    <>
    <div className='h-[100vh] w-full'>
    <div className='h-[15%] w-full'></div>

    <div className='h-[70%] w-full flex justify-center items-start'>
    <div className="  font-Lato border-[1px] rounded-xl  w-[80%]  md:w-[700px] border-3 border-golden h-full">
    <div className='h-[20%] flex-row flex justify-between'><div></div> <img src='/assets/P10ZimoCareer.png' alt='' className='mt-4' /> <img src='/assets/P10ZimoIntern.png' alt='' className='m-4' /> </div>
    <div className='h-[20%] flex flex-col text-center  justify-end text-[12px] text-[#737373] mt-2'>
         <div className='mb-3'>Thank you for submitting an application for the ZIMO Internship Programme. </div>
         <div>We are super delighted to hear from you and we look forward to welcoming you to the world of ZIMO.</div>
    </div>
    <div className='h-[40%] flex justify-center items-center'><img src='/assets/P10ThankYou.png' alt='' className='h-[40%]' /></div>
    <div className='h-[20%] flex justify-center items-center'> <img src='/assets/P10ZimoTeam.png' alt='' /></div>
    </div>
    </div>

    <div className='h-[15%] w-full'></div>
    </div>
    </>
  )
}

export default P10Submitted