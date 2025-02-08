import React from 'react'

const AboutMeImage = () => {
  return (
    <div className='h-[500px] w-[300px] md:h-[350px] md:w-[200px] sm:h-[250px] sm:w-[100]  relative'> 
      <div className=' h-[500px] w-[300px] md:h-[350px] md:w-[200px] sm:h-[250px] sm:w-[100px] rounded-[80px] absolute overflow-hidden'>
        <img 
          src="../../src/assets/Port.jpg" 
          alt="About me image" 
          className='h-full w-auto object-cover'
        />
      </div> 
      <div className='h-[500px] w-[250px] md:h-[350px] md:w-[200px] sm:h-[250px] sm:w-[100px] bg-pink absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10'>
      </div>
    </div>
  )
}

export default AboutMeImage
