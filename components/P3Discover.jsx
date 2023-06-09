/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Element, scroller} from 'react-scroll';

const P3Discover = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 100,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <>
    <Element name="page3" className="section">
    <div className='h-[100vh] w-full flex flex-col bg-black'>


        <div className='h-[25%] w-full flex flex-row justify-between items-start'>
            <div className='w-[30%]'></div>
            <div className='w-[40%] flex justify-center items-center'><img src='/assets/P3Team.png' alt='' className='mt-20 md:w-[50%] w-[100%]'/></div>
            <div className='w-[30%]'></div>
        </div>


        <div className='h-[50%] w-full flex justify-start items-center '>
           <div className='bg-[url("/assets/P3Background.png")] md:w-[60%] w-[80%] h-[100%] bg-contain bg-no-repeat mt-32' >
            <img src='/assets/P3Discover.png' alt='' className='md:w-[70%] w-[100%] mt-10 ml-10'/>
             </div>
            

        </div>


        <div className='h-[25%] flex flex-col justify-end items-center '>
            <div class="uppercase 3xl:text-[14px] text-[15px] tracking-[2px] text-white ml-10 md:ml-0   mb-6">Services in over hundred and twenty countries.</div>
            <div className='mt-4'> 
            <a><img className="w-10 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 filter invert" src="/assets/DownArrow.png" alt="arrow" onClick={() => scrollToSection('page4')} />
                        </a>
            </div>
        </div>

    </div>
    </Element>
    </>
  )
}

export default P3Discover