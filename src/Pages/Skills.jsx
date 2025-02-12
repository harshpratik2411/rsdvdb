import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaPython } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri'; 
import Footer from '../Components/Footer/Footer';
import NavbarMain from '../Components/Navbar/NavbarMain'; // Import NavbarMain

const Skills = () => {
  const skills = [
    { icon: <FaReact size={50} />, name: 'React', color: 'text-cyan', description: 'React is a JavaScript library for building user interfaces. It allows for the creation of reusable components and provides a fast, efficient way to build dynamic UIs.' },
    { icon: <IoLogoJavascript size={50} />, name: 'Javascript', color: 'text-yellow', description: 'JavaScript is a programming language that enables dynamic content on web pages, making them interactive and functional.' },
    { icon: <RiTailwindCssFill size={50} />, name: 'Tailwind', color: 'text-cyan', description: 'Tailwind CSS is a utility-first CSS framework that allows for fast custom design and styling of web pages.' },
    { icon: <FaHtml5 size={50} />, name: 'HTML', color: 'text-blue', description: 'HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure and layout of a webpage.' },
    { icon: <FaCss3Alt size={50} />, name: 'CSS', color: 'text-orange', description: 'CSS (Cascading Style Sheets) controls the layout and design of a web page. It adds style to HTML elements like colors, fonts, and spacing.' },
    { icon: <FaPython size={50} />, name: 'Python', color: 'text-yellow', description: 'Python is a high-level, interpreted programming language known for its readability and wide range of applications from web development to data science.' },
    { icon: <FaGitAlt size={50} />, name: 'Git', color: 'text-pink', description: 'Git is a version control system that helps track changes in code, collaborate with other developers, and manage project history.' }
  ];

  return ( 
    <>
   <NavbarMain />
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-cyan/80 to-pink/80 items-center justify-center bg-gray-100 py-10">
      {/* Add NavbarMain here */}

      <h2 className="text-3xl font-semibold mb-10">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 text-3xl gap-8 px-4">
        {skills.map((skill, index) => (
          <motion.div
            className="flex flex-col items-center text-3xl text-center bg-white shadow-lg p-6 rounded-xl transform hover:scale-105 transition duration-500"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <motion.div
              className={`mb-4 ${skill.color}`}  // Apply color dynamically based on the skill
              whileHover={{ scale: 1.2 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <motion.h3
              className="text-2xl font-semibold text-black mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.5 }}
            >
              {skill.name}
            </motion.h3>
            <motion.p
              className="text-base text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.7 }}
            >
              {skill.description}
            </motion.p>
          </motion.div>
        ))}
      </div> 
    </div> 
    <Footer/>
      </>
  );
};

export default Skills;
