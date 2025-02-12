import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Experience = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing effect
      once: true, // Animation happens only once
      delay: 200, // Initial delay for the animations
    });
  }, []);
  
  return (
    <section id="experience" className="py-20 mt-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            data-aos="fade-up" // Add AOS animation here
          >
            My Experience
          </motion.span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Skill 1 */}
          <motion.div
            className="bg-lightPurple p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="100" // Set delay for this section
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Front-End Development
            </h3>
            <p  data-aos="fade-up" data-aos-delay="200" className="text-black mb-4">
              As a Front-End Developer, I specialize in building responsive and user-friendly websites. I have hands-on experience with HTML, CSS, and JavaScript to create interactive and visually appealing web pages.
            </p>
            <ul  data-aos="fade-up" data-aos-delay="200" className="list-disc list-inside text-gray-600">
              <li  data-aos="fade-up" data-aos-delay="100">HTML</li>
              <li  data-aos="fade-up" data-aos-delay="200">CSS</li>
              <li data-aos="fade-up" data-aos-delay="250">JavaScript</li>
              <li  data-aos="fade-up" data-aos-delay="300">Responsive Design</li>
              <li data-aos="fade-up" data-aos-delay="400">Tailwind CSS</li>
            </ul>
          </motion.div>

          {/* Skill 2 */}
          <motion.div
            className="bg-lightPurple p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="200" // Set delay for this section
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Python</h3>
            <p  data-aos="fade-up" data-aos-delay="200" className="text-gray-600 mb-4">
              I have a strong foundation in Python, and I’m passionate about solving problems with code. I’ve worked with Python in web development, automation scripts, and data manipulation.
            </p>
          </motion.div>

          {/* Skill 3 */}
          <motion.div
            className="bg-lightPurple p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="300" // Set delay for this section
          >
            <h3  data-aos="fade-up" data-aos-delay="100" className="text-2xl font-semibold text-gray-800 mb-4">
              Version Control & Collaboration
            </h3>
            <p  data-aos="fade-up" data-aos-delay="200" className="text-gray-600 mb-4">
              I have worked extensively with Git for version control, collaborating with teams and managing code through platforms like GitHub. I understand branching, merging, and resolving conflicts effectively.
            </p>
            <ul  data-aos="fade-up" data-aos-delay="300" className="list-disc list-inside text-gray-600">
              <li>Git (GitHub, GitLab)</li>
            </ul>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="bg-lightPurple p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="400" // Set delay for this section
          >
            <h3  data-aos="fade-up" data-aos-delay="200" className="text-2xl font-semibold text-gray-800 mb-4">
              Front-End Developer (Intern)
            </h3>
            <p  data-aos="fade-up" data-aos-delay="300" className="text-gray-600 mb-4">
              Worked on creating interactive UIs with React and Tailwind CSS. Involved in the design and implementation of new features for websites, ensuring responsiveness and optimal user experience.
            </p>
            <p  data-aos="fade-up" data-aos-delay="100" className="text-gray-600">Duration: 3 months</p>
            <p   data-aos="fade-up" data-aos-delay="200"className="mt-4 text-gray-600">Responsibilities:</p>
            <ul  data-aos="fade-up" data-aos-delay="300" className="list-disc list-inside text-gray-600">
              <li  data-aos="fade-up" data-aos-delay="100">Implemented UI components using React and Tailwind CSS</li>
              <li data-aos="fade-up" data-aos-delay="200">Worked closely with the design team to ensure pixel-perfect layouts</li>
              <li  data-aos="fade-up" data-aos-delay="300">Wrote clean, reusable code and maintained project structure</li>
              <li data-aos="fade-up" data-aos-delay="300">Collaborated with back-end developers for API integration</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
