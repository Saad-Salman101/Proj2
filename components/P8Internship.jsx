/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const P8Internship = () => {

  const images = [
    '/assets/P8Code.png',
    '/assets/P8CREATE.png',
    '/assets/P8BUILD.png',
    '/assets/P8DESIGN.png',
  ]; 

  const images2 = [
    '/assets/P8Logo.png',
    '/assets/P8Logo2.png',
    '/assets/P8Logo3.png',
    '/assets/P8Logo4.png',
  ];


  const images3 = [
    '/assets/P8ForEveryone.png',
    '/assets/P8ForEveryone2.png',
    '/assets/P8ForEveryone3.png',
    '/assets/P8ForEveryone4.png',
  ]; 

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Function to change image index every second
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, []);

  return (
    <>
      <div className='w-full h-[100vh] overflow-x-hidden'>


        <div className='w-full h-[30%] flex justify-between items-start'>
          <div className='h-full w-[30%]'></div>
          <div className='h-full w-[40%] flex justify-center items-center'>
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                alt=""
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>  </div>
          <div className='h-full w-[30%] flex justify-end items-start'><img src='/assets/P1Location.png' alt='' className=' w-[60%] mr-10 mt-4' /> </div>
        </div>


        <div className='w-full h-[40%] flex justify-center items-center'>    
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={images2[currentIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                alt=""
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence></div>
        
        
        <div className='w-full h-[30%] flex justify-between items-center '>
          <div></div>
          <div className='flex flex-col justify-between items-center h-full'>
            <div>
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={images3[currentIndex]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                alt=""
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
              </div>
            <div className='flex flex-col justify-end h-full '> <img src='/assets/DownArrow.png' alt='' /></div> </div>
          <div></div>
        </div>

      </div>
    </>
  )
}

export default P8Internship