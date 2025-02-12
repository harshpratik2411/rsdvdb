import React from 'react'; 
import HeroGradient from '../Components/Hero/HeroGradient';
import NavbarMain from '../Components/Navbar/NavbarMain';
import HeroMain from '../Components/Hero/HeroMain'; 
import SubHero from '../Components/Hero/SubHero';
import AboutMeMain from '../Components/AboutMeSection/AboutMeMain';
import SkillMain from '../Components/SkillsSection/SkillMain'; 
import Experience from '../Components/Experience/Experience';
import ContactSection from '../Components/ContactSection/ContactSection';  
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const HomePage = () => {
  return (
    <>
      <HeroGradient />
      <NavbarMain /> 
      <HeroMain />
      <SubHero />
      <AboutMeMain />
      <SkillMain /> 
       <Experience/>
      <ContactSection />  
      <Footer/>
      </>
  );
};

export default HomePage;
