/* eslint-disable @next/next/no-img-element */
import React,{useEffect} from 'react'
import { scroller} from 'react-scroll';


const P1Zimoteam = () => {

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
      };

  return (
    <>
    
    <div className='h-[100Vh] w-full flex flex-col overflow-x-hidden'>
        <div className='w-full h-[20%] flex flex-row justify-end items-start '>
            <img src='/assets/P1Location.png' alt='' className='w-[40%] md:w-[20%] mr-10 mt-4'/>
        </div>

        <div className='w-full h-[50%] flex flex-col justify-center items-start ml-10'>
            <div>
                <img src='/assets/P1ZimoTeam.png' alt='' className='md:w-[100%] w-[60%]' />
            </div>
            <div className='mt-4'> 
                <img src='/assets/P1ZimoGroup.png' alt=''  className='md:w-[100%] w-[60%]' />
            </div>
            

        </div>

        <div className='w-full h-[30%] flex flex-col justify-end items-center mb-4 '>
            <div className='mb-12'><img src='/assets/P1BringingThe.png' alt='' /></div>
            <a><img className="w-10 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 " src="/assets/DownArrow.png" alt="arrow"  onClick={() => scrollToSection('page2')}/>
                        </a>
        </div>
        
        
    </div>   



    </>
  )
}

export default P1Zimoteam