/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Element, scroller} from 'react-scroll';

const P4AI = () => {

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
          duration: 200,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      };

  return (
    <>
        <Element name="page4" className="section">
        <div className='w-full h-[100vh]'>

        <div className='w-full h-[20%] flex flex-row justify-end items-start '>
           
        </div>

            <div className='w-full h-[50%] flex justify-center items-center'>
                <img src='/assets/P4AiLogo.png' alt='' className='md:w-[40%] w-[80%]' /> 
            </div>

            <div className='w-full h-[30%] flex flex-row justify-between items-center'>
                <div className='w-[30%]'></div>
                <div className='w-[40%] h-full flex flex-col justify-between items-center'> 
                <div></div>
                <div class="uppercase 3xl:text-[14px] md:text-[20px] text-[15px] w-[300px] md:w-auto  tracking-[2px] text-[#737373] mb-8 md:mb-4">ARTIFICIAL INTELLIGENCE FOR EVERYONE</div>
                <div>
                <a><img className="w-10 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 " src="/assets/DownArrow.png" alt="arrow" onClick={() => scrollToSection('page5')} />
                        </a>
                </div>
                </div>
                <div className='w-[30%] h-full flex justify-end items-end'> <img src='/assets/P4AiSmallLogo.png' alt='' className='mb-10 mr-6 md:w-[40%] w-[70%]' /></div>
            </div>

        </div>
        </Element>
    </>
  )
}

export default P4AI