import React, { useState } from 'react';
import NavbarBtn from './NavbarBtn';
import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menuOpen state between true and false
  };

  return (
    <nav className='max-w-[1300px] w-full fixed px-4 left-[50%] -translate-x-[50%] z-20 flex mt-2 gap-4'>
      <div className='flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange'>
        <NavbarLogo />
        <div className={`${menuOpen ? 'sm:block' : 'sm:hidden'} lg:block`}>
          <NavbarLinks />
        </div>
        <NavbarBtn />
      </div>

      <div className='flex lg:hidden sm:block p-6 bg-black items-center border-orange justify-center rounded-full border-[0.5px]'>
        <button
          className='text-2xl p-3 border-orange text-white rounded-full'
          onClick={toggleMenu} // Added the onClick event to trigger toggleMenu
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
