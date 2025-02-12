import React, { useEffect } from 'react';
import AOS from 'aos';
import { motion } from 'framer-motion';
import { FaFacebook, FaClipboardList, FaShoppingCart, FaDumbbell } from 'react-icons/fa'; // Importing React Icons
import 'aos/dist/aos.css';
import NavbarMain from '../Components/Navbar/NavbarMain';
import Footer from '../Components/Footer/Footer';

const Projects = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
  
  return ( 
    <>
      <NavbarMain/> 
      <div className='bg-gradient-to-r from-cyan to-pink'>
      <div className="projects-section container  mx-auto py-10">
        <h2 className="text-3xl bg-gradient-to-r mt-24 font-semibold text-center mb-8">Projects</h2>

        <div className="projects-list  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Clone Websites */}
          <motion.div
            className="project-category  p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaFacebook className="mr-2 text-blue" /> Clone Websites
            </h3>
            <img
              src="https://picsum.photos/400/400?random=4"
              className='rounded-2xl w-full h-64 object-cover transform transition duration-300 ease-in-out hover:scale-110'
            />
          </motion.div>

          {/* Todo Websites */}
          <motion.div
            className="project-category p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaClipboardList className="mr-2 text-blue" /> Todo Websites
            </h3>
            <img
              src="https://picsum.photos/400/400?random=3"
              alt="Todo App" 
              className='rounded-2xl w-full h-64 object-cover transform transition duration-300 ease-in-out hover:scale-110'
            />
          </motion.div>

          {/* E-commerce Websites */}
          <motion.div
            className="project-category p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaShoppingCart className="mr-2 text-yellow" /> E-commerce Websites
            </h3>
            <img
              src="https://picsum.photos/400/400?random=1"
              alt="E-commerce Site" 
              className='rounded-2xl w-full h-64 object-cover transform transition duration-300 ease-in-out hover:scale-110'
            />
          </motion.div>

          {/* Gym Websites */}
          <motion.div
            className="project-category p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <FaDumbbell className="mr-2 text-darkCyan" /> Gym Websites
            </h3>
            <img
              src="https://picsum.photos/500/300?random=2"
              alt="Gym Website"
              className='rounded-2xl w-full h-64 object-cover transform transition duration-300 ease-in-out hover:scale-110'
            />
          </motion.div>
        </div>
      </div> 
      </div>  
      <Footer/>
    </>
  );
};

export default Projects;
