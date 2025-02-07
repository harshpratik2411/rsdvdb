import React from 'react'; 
import './index.css'; 
import NavbarMain from './Components/Navbar/NavbarMain'; 
import HeroMain from './Components/Hero/HeroMain'; 
import HeroGradient from './Components/Hero/HeroGradient';
import SubHero from './Components/Hero/SubHero';


function App() {
  return (
    <main className='font-body'>
    <HeroGradient/>
     <NavbarMain/>   
     <HeroMain/> 
     <SubHero/>
    </main>
  );
}

export default App;
