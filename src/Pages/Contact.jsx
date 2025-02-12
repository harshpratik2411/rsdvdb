import React from 'react'
import NavbarMain from '../Components/Navbar/NavbarMain'
import ContactSection from '../Components/ContactSection/ContactSection'
import Footer from '../Components/Footer/Footer'

const Contact = () => { 

  return ( 
    <>  
  <NavbarMain/>   
  <br />
     <div className='mt-24'>

  <ContactSection /> 
  <Footer/>
     </div>
     
   
    </>
  )
}

export default Contact 
