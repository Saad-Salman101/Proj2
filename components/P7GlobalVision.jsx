/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Element, scroller} from 'react-scroll';

const P7GlobalVision = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 200,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };


  return (
    <>
    <Element name="page7" className="section">
    <div className='h-[100vh] w-full bg-black relative flex flex-col justify-between items-center overflow-x-hidden overflow-y-hidden'>
        <img src='/assets/P7Background.png' alt='' className='absolute h-full w-full '/>
        
        
        <div className='h-[30%] w-full flex flex-row justify-center items-center'>
            <div>
                <div class="tracking-[2px] text-left 3xl:text-[14px] md:text-[20px] text-[12px] md:ml-20 ml-5 uppercase text-white"> WORK ON OUR INNOVATIVE SOFTWARE PRODUCTS.</div>
                <div class="tracking-[2px] pt-8 3xl:text-[14px] text-[12px] md:text-[20px] uppercase pl-5 text-white">DESIGN AND BUILD THE SYSTEMS THAT ARE CHANGING THE WORLD.</div>
            </div>
        </div>
        
        
        <div className='h-[40%] w-full flex flex-row justify-center items-center'>
        <img src='/assets/P7Logo.png' alt='' className='md:w-[20%] w-[40%]'/>
        </div>
        
        
        <div className='h-[30%] w-full flex flex-col justify-between items-start '>
        <div class="tracking-[3px] uppercase 3xl:text-[22px] md:text-[20px] text-[20px] text-white ml-10 ">GLOBAL vision</div>
        <h4 class="tracking-[2px] 3xl:text-[14px] text-[12px] md:text-[20px] pt-6 uppercase text-white ml-10 ">With a remote culture, diversity is naturally in our DNA.</h4>
        <h4 class="tracking-[2px] 3xl:text-[14px] text-[12px] md:text-[20px] uppercase mt-2 text-white ml-10">Based across THE GLOBE, making up over 23 different nationalities.</h4>
        <div className='w-full flex flex-row items-end justify-center mt-8 '>
        <a><img className="w-10 mr-10 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 filter invert" src="/assets/DownArrow.png" alt="arrow" onClick={() => scrollToSection('page8')} /> </a>
        </div>
        </div>
    </div>
    </Element>
    </>
  )
}

export default P7GlobalVision