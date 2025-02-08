import React from 'react'

const AboutMeText = () => {
  return (
    <div>
      <h2 className='lg:text-4xl md:text-2xl sm:text-xl text-cyan'>
        About Me
      </h2> 
      <p className='text-white text-base sm:text-l md:text-xl lg:text-2xl'>
        I'm Harsh, a dedicated front-end web developer passionate about creating visually stunning and user-friendly websites. With expertise in HTML, CSS, Tailwind-CSS, JavaScript, and frameworks like React. I design responsive, fast-loading pages that offer seamless user experiences across all devices. I focus on clean code, intuitive interfaces, and ensuring websites are both functional and aesthetically pleasing. I stay current with industry trends to deliver modern solutions and enjoy collaborating with designers and developers to bring creative concepts to life. My goal is to transform ideas into dynamic, interactive web applications.
      </p> 
      <button className='rounded-2xl cursor-pointer hover:bg-brown border-2 mt-6 border-orange text-white py-2 px-4'>
        My Projects
      </button>
    </div>
  )
}

export default AboutMeText
