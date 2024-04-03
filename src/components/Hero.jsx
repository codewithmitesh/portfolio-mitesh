/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

// import Typewriter from "typewriter-effect";
import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';
import { mine } from "../assets";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas";

const Hero = () => {

  // function TypingComponent() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          'Websites.',
          'Mobile Apps.',
          'Infrastructures.',
          'DevOps Solutions'
        ],
        typeSpeed: 50, // typing speed in milliseconds
        backSpeed: 50, // backspacing speed in milliseconds
        loop: true, // loop the animation
      };

      const typed = new Typed(typedRef.current, options);

      // Cleanup on unmount
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <StarsCanvas />
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#A3CFCD]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className="text-5xl subpixel-antialiased font-light tracking-wide leading-loose ">
            Hi, I'm Mitesh😎

          </h1>
          <p className={`${styles.heroSubText} mt-2 text-slate-300 font-light tracking-wide`}>
            A Software Engineer and Freelancer
          </p>
          <br></br>
          <h1 className="text-4xl subpixel-antialiased font-sans font-light tracking-wide leading-loose ">
            <p>
              I build <br></br><span ref={typedRef}></span>
            </p>
          </h1>
          {/* <p className="text-2xl subpixel-antialiased font-light tracking-wide leading-loose display: flex; ">
            I build
          </p> */}
        </div>
      </div>

      {/* <div className="flex-shrink-0 w-1/4 h-1/4 ">
        <img src={mine} alt="Hero" className="object-cover w-full h-full" />
      </div> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[65px] h-[64px] rounded-1xl border-4 border-secondary flex justify-center items-start p-2'>
            Click me!
            {/* <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            /> */}
          </div>
        </a>
      </div >
    </section >
  );
};

export default Hero;