import React from 'react'
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook from react-router-dom

function NavbarLogo() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate('/'); // Redirect to the home page when the logo is clicked
  }

  return (
    <div>
      <h1 
        className='text-white cursor-pointer text-2xl sm:hidden md:block' 
        onClick={handleClick} 
      >
        Harsh Pratik
      </h1>
      <h1 className='text-white font-special font-extrabold text-4xl sm:block md:hidden'>
        HP
      </h1>
    </div>
  );
}

export default NavbarLogo;
