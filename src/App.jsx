import React from 'react'; 
import { Outlet } from 'react-router-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'; 
import AboutMe from './Pages/AboutMe'
import Skills from './Pages/Skills';
import Projects from './Pages/Projects'
import Contact from './Pages/Contact';



function App() {
  return (
    <Router>
      <main className="font-body">
        {/* Defining the structure with Routes */}
        <Routes> 
          {/* Main homepage route */}
          <Route path="/" element={<HomePage />} />
          {/* Add routes for other pages */}
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
