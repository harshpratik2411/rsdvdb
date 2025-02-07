import React from 'react';

const HeroText = () => {
  return (
    <div className='px-6 md:px-24 lg:px-48'>
      <div className='flex flex-col gap-4 justify-center md:text-left sm:text-center'>
        <h2 className='text-cyan uppercase text-xl sm:text-xl md:text-2xl lg:text-3xl'>
          Front-End Web Developer
        </h2>
        <h1 className='font-special text-orange font-bold text-3xl sm:text-2xl md:text-4xl lg:text-6xl'>
          Harsh Pratik
        </h1>
        <p className='text-white text-base sm:text-sm md:text-lg lg:text-xl'>
          Passionate web developer skilled in creating websites <br />
          using modern frameworks.
        </p>
      </div>
    </div>
  );
}

export default HeroText;
