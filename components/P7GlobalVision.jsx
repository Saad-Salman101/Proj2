/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Element, scroller} from 'react-scroll';

const P7GlobalVision = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
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
                <div class="tracking-[2px] text-center 3xl:text-[14px] text-[20px]  uppercase text-white"> WORK ON OUR INNOVATIVE SOFTWARE PRODUCTS.</div>
                <div class="tracking-[2px] pt-8 3xl:text-[14px] text-[20px]  uppercase pl-5 text-white">DESIGN AND BUILD THE SYSTEMS THAT ARE CHANGING THE WORLD.</div>
            </div>
        </div>
        
        
        <div className='h-[40%] w-full flex flex-row justify-center items-center'>
        <img src='/assets/P7Logo.png' alt='' className=''/>
        </div>
        
        
        <div className='h-[30%] w-full flex flex-col justify-start items-start ml-10'>
        <div class="tracking-[3px] uppercase 3xl:text-[22px] text-[30px] text-white ">GLOBAL vision</div>
        <h4 class="tracking-[2px] 3xl:text-[14px] text-[20px] pt-6 uppercase text-white ">With a remote culture, diversity is naturally in our DNA.</h4>
        <h4 class="tracking-[2px] 3xl:text-[14px] text-[20px] uppercase mt-2 text-white">Based across THE GLOBE, making up over 23 different nationalities.</h4>
        <div className='w-full flex flex-row items-end justify-center mt-8'>
        <a><img className="w-10 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 filter invert" src="/assets/DownArrow.png" alt="arrow" onClick={() => scrollToSection('page8')} /> </a>
        </div>
        </div>
    </div>
    </Element>
    </>
  )
}

export default P7GlobalVision