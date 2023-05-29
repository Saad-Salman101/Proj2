/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Element, scroller} from 'react-scroll';

const P6Sign = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };


  return (
    <>
    <Element name="page6" className="section">
    <div id='page13' className='h-[100vh] w-full flex-col flex justify-between '>
      <div className='w-full h-[30%] '></div>

      <div className=' h-[20%]  flex flex-row justify-center items-center md:w-full  '>
        <div className='w-[50%]  flex justify-center items-center' ><img src='/assets/P6Logo.png' alt='' /> </div>
        </div>

      <div className='w-full h-[80%] flex flex-col  items-center justify-end   mb-5'>
        <div></div>
        <div className='text-[black] text-[20px] md:text-[30px] font-lato tracking-[2px] text-center mb-3' >
          Document-signing technology that lets you sign documents online.
        </div>
        <div className='w-full flex-col justify-between '>
          <div></div>
          
          <div className='w-full flex justify-between md:justify-between lg:justify-between items-end '>
            <div className='w-[30%]'></div>
            <div className='w-[40%] flex justify-center mt-48'>
            <a><img className="w-10 ml-10 mt-7 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 " src="/assets/DownArrow.png" alt="arrow" onClick={() => scrollToSection('page7')} /> </a>
            </div>
            <div className='w-[30%] flex flex-col md:mr-10 md:mb-5 items-end' >
              <div className='flex md:ml-0 ml-0 justify-end items-end'>
                <img src='/assets/P6SmallLogo.png' alt='' className='md:w-[100%] h-[10%] w-[10%] '/>
                <img src='/assets/P6Sign.png' alt='' className='md:ml-20 ml-10 md:w-[100%]  h-[40%] w-[40%]  '/>
              </div>
              <div className='w-[40%] md:w-[90%] flex justify-end'>
              <img src='/assets/P6Line.png' alt=''/>
              </div>
              <div className='flex justify-end'>
              <img src='/assets/P6Code.png' alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </Element>

    </>
  )
}

export default P6Sign