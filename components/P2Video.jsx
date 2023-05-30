/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Element, scroller } from 'react-scroll';

const P2Video = () => {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 100,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <>
      <Element name="page2" className="section">
        <div className="h-screen w-full bg-black flex flex-col justify-center items-center relative">
          <video
            className="absolute top-0 left-0 object-cover w-full h-full"
            src="/assets/video.mp4"
            controls
            autoPlay
            muted
            playsInline
          />
          <div className="w-full h-1/3"></div>
          <div className="w-full h-1/3"></div>
          <div className="w-full h-1/3 flex justify-center items-end">
            <a>
              <img
                className="w-10 cursor-pointer hover:scale-100 animate-bounce hover:animate-ping transition-all py-1 filter invert"
                src="/assets/DownArrow.png"
                alt="arrow"
                onClick={() => scrollToSection('page3')}
              />
            </a>
          </div>
        </div>
      </Element>
    </>
  );
};

export default P2Video;
