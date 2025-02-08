import React from 'react'; 
import './index.css'; 
import NavbarMain from './Components/Navbar/NavbarMain'; 
import HeroMain from './Components/Hero/HeroMain'; 
import HeroGradient from './Components/Hero/HeroGradient';
import SubHero from './Components/Hero/SubHero';
import AboutMeMain from './Components/AboutMeSection/AboutMeMain';
import HelperSection from './Components/HelperSection';


function App() {
  return (
    <main className='font-body'>
    <HeroGradient/>
     <NavbarMain/>   
     <HeroMain/> 
     <SubHero/> 
     <AboutMeMain/> 
     <HelperSection/>
    </main>
  );
}

export default App;
