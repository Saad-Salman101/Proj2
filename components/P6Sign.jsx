/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Element, scroller} from 'react-scroll';

const P6Sign = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 200,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };


  return (
    <>
    <Element name="page6" className="section">
    <div id='page13' className='h-[100vh] w-full flex-col flex justify-between '>
      <div className='w-full h-[40%] '></div>

      <div className=' h-[40%]  flex flex-col justify-between items-center md:w-full  '>
        <div className='w-[50%]  flex justify-center items-center' ><img src='/assets/P6Logo.png' alt='' /> </div>
        <div className='text-[#817e7ea4] text-[15px] md:text-[20px] font-lato tracking-[2px] text-center  ' >
          Document-signing technology that lets you sign documents online.
        </div>
        </div>

      <div className='w-full h-[20%] flex flex-col  items-center justify-between   mb-1'>
    
        <div className='w-full flex-col flex justify-between '>
          <div></div>

          <div className='w-full flex  justify-between md:justify-between lg:justify-between items-end  '>
            <div className='w-[30%]'></div>
            <div className='w-[40%] flex justify-center mt-20'>
            <a><img className="w-10 ml-10 mt-7 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 " src="/assets/DownArrow.png" alt="arrow" onClick={() => scrollToSection('page7')} /> </a>
            </div>
            <div className='w-[30%] flex flex-col md:mr-10 md:mb-5 items-end' >
              <div className='flex md:ml-72 ml-0 justify-end items-end md:w-[40%] w-[80%]  md:mr-20'>
                <img src='/assets/P6SmallLogo.png' alt='' className='md:w-[20%] h-[10%] w-[10%] '/>
                <img src='/assets/P6Sign.png' alt='' className='md:ml-10 ml-10 md:w-[100%]  h-[40%] w-[100%]  '/>
              </div>
              <div className='w-[40%] md:w-[75%] flex justify-end '>
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