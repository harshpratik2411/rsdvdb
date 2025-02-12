import React from 'react';
import { FaLinkedin, FaGithub, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // For LinkedIn, GitHub, Phone, and Email icons

const Footer = () => {
  return (
    <footer  className="bg-gray-800   text-white py-8">
      <div  className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h1 className="text-3xl font-bold text-cyan ">Harsh Pratik</h1>
            <p className="mt-2 text-l text-white">Your friendly web developer</p>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-right">
            <h3 className="text-xl text-cyan font-semibold mb-3">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-end">
                <FaPhoneAlt className="mr-2 text-teal-500 text-blue" />
                <span>+91 6388865950</span>
              </li>
              <li className="flex items-center justify-center sm:justify-end">
                <FaEnvelope className="mr-2 text-teal-500" />
                <span>harshsrivastava2357@Gmail.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-end">
                <a
                  href="https://www.linkedin.com/in/harshpratik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-500 hover:text-teal-400"
                >
                  <FaLinkedin className="mr-2 text-cyan" />
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-end">
                <a
                  href="https://github.com/harshpratik2411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-teal-500 hover:text-teal-400"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-xl text-white">
          <p>&copy; {new Date().getFullYear()} Harsh Pratik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
