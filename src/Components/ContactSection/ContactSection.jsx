import React from "react";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false); // To handle submission state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Reset the form after submission
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(true);
  };
  return (   
    <div className=" bg-gradient-to-r from-cyan to-pink"> 
    <section className=" py-12  px-6 md:px-20">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Get In Touch</h2>
        <p className="text-center text-gray-600 mb-6">
          Have any questions or inquiries? Fill out the form below, and I will get back to you!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-lightGrey text-blue py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
        {isSubmitted && (
          <p className="text-center text-darkCyan mt-4">Your message has been sent!</p>
        )}
        <div className="flex justify-center space-x-4 mt-6 text-black">
          <a href="https://www.facebook.com/harshpratik.srivastava" aria-label="Facebook">
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue" />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter className="text-2xl cursor-pointer hover:text-black" />
          </a>
          <a href="https://www.instagram.com/harsh__pratik__xx/" aria-label="Instagram">
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink" />
          </a>
          <a href="https://www.linkedin.com/in/harsh-pratik-601751303/" aria-label="LinkedIn">
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue" />
          </a>
        </div>
      </div>
    </section>   
    </div>
  
  );
};

export default ContactSection;
