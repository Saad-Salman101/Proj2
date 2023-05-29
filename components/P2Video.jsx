/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {Element, scroller} from 'react-scroll';

const P2Video = () => {

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };
  
  return (
    <>
        <Element name="page2" className="section">
        <div className='h-[100vh] w-full ] bg-[url("/assets/P2Pic.png")] bg-cover bg-center bg-no-repeat flex flex-col'>
          <div className='w-full h-[30%]'></div>
          <div className='w-full h-[40%]'></div>
          <div className='w-full h-[30%] flex justify-center items-end'>
          <a><img className="w-10 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 filter invert" src="/assets/DownArrow.png" alt="arrow" onClick={() => scrollToSection('page3')} />
                        </a>
          </div>
            
        </div>
        </Element>
    </>
  )
}

export default P2Video