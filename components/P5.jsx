/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Element, scroller} from 'react-scroll';

const P5 = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 200,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };


  return (
    <>
            <Element name="page5" className="section">
    <div className='h-[100vh] w-full bg-black relative flex justify-center items-center'>
        <div className='bg-[url("/assets/P5Background.png")  w-full h-full md:bg-contain object-contain bg-no-repeat  flex-col justify-between items-center'>
                <img src='/assets/P5Background.png' alt='' className='absolute bg-contain object-contain left-16 md:left-52 w-[70%] h-[90%] top-8'/>
                <div className='w-full h-[30%]'> </div>
                <div className='w-full h-[40%] flex justify-center items-center'><img src='/assets/P5Logo.png' alt=''  className='blur-sm md:blur-md  w-[70%] md:w-[50%]'/></div>
                <div className='w-full h-[30%]  flex justify-center items-end'>
                <a><img className="w-10 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 filter invert" src="/assets/DownArrow.png" alt="arrow"  onClick={() => scrollToSection('page6')} />
                        </a>
                </div>
                 
        </div>
        {/* <img src='/assets/P5Logo.png' alt='' /> */}

    </div>
    </Element>
    </>
  )
}

export default P5