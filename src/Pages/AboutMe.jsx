import React, { useEffect } from 'react';
import NavbarMain from '../Components/Navbar/NavbarMain';
import Footer from '../Components/Footer/Footer';
import AOS from 'aos'; 

import 'aos/dist/aos.css'; 

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []); 

  return (  
    <>
      <NavbarMain/>  
      <br />
      <section  className="bg-gradient-to-r from-cyan/60 to-pink/60 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-6xl font-bold mt-20 text-center text-cyan mb-8 animate__animated animate__fadeIn">
            About Me
          </h2>
          <div  className="bg-gray-700 ease-in-out duration-500  bg-gradient-to-t p-10 rounded-lg shadow-2xl">
            <p className="text-xl mb-6 leading-relaxed animate__animated animate__fadeInUp" data-aos="fade-up">
              Hello! I’m a passionate and dedicated web developer with a focus on
              React, JavaScript, and modern front-end technologies. Over the last 3
              months, I have immersed myself in the world of web development, gaining
              hands-on experience with React, JSX, JavaScript, and Tailwind CSS. During
              this time, I’ve worked on several small projects, learning key concepts
              such as state management, functional components, hooks, and responsive
              design, all while continuously honing my skills.
            </p>
            <p className="text-xl mb-6 leading-relaxed animate__animated animate__fadeInUp" data-aos="fade-up">
              My journey began with a deep curiosity about how websites are built and
              how user interactions can be transformed into dynamic, engaging
              experiences. After starting with HTML and CSS, I quickly realized that I
              wanted to explore the world of JavaScript to bring life and interactivity
              to my web pages. React caught my attention because of its component-based
              architecture and how it allows developers to build scalable, maintainable
              applications. As I delved deeper into React, I found myself captivated by
              its powerful features like hooks, context, and state management.
            </p>
            <p className="text-xl mb-6 leading-relaxed animate__animated animate__fadeInUp" data-aos="fade-up">
              In addition to React, I’ve adopted Tailwind CSS for styling. The utility-first
              approach of Tailwind has significantly improved my productivity and allowed
              me to build responsive, mobile-first designs with ease. I’ve learned to
              appreciate how Tailwind’s flexible class-based system streamlines the
              styling process, making it easier to implement designs quickly and efficiently.
              I am passionate about creating visually appealing, accessible, and user-friendly
              interfaces that provide an exceptional experience for end-users.
            </p>
            <p className="text-xl mb-6 leading-relaxed animate__animated animate__fadeInUp" data-aos="fade-up">
              As a beginner, I’ve taken a hands-on approach to learning, building several
              small projects that challenge me to apply what I’ve learned. These projects
              range from simple to-do list applications to more complex web apps, where I’ve
              had the opportunity to implement authentication, routing, and state management.
              With each project, I’ve gained a deeper understanding of React’s ecosystem
              and improved my problem-solving skills.
            </p>
            <p className="text-xl mb-6 leading-relaxed animate__animated animate__fadeInUp" data-aos="fade-up">
              I am constantly seeking opportunities to enhance my knowledge and skills. I
              stay updated with the latest industry trends, tools, and best practices to
              ensure that I’m always improving as a developer. I believe that coding is
              not just about writing lines of code but about solving problems, collaborating
              with others, and contributing to meaningful projects that can make a difference.
            </p>
            <p className="text-xl mb-6 leading-relaxed animate__animated animate__fadeInUp" data-aos="fade-up">
              While I’m still in the early stages of my career, I’m eager to grow into
              a professional full-stack developer. I’m excited to continue learning more
              about advanced JavaScript concepts, front-end frameworks, and back-end technologies
              to become a well-rounded developer. I’m also very interested in exploring
              areas such as UI/UX design, performance optimization, and testing to improve
              the overall quality of my applications.
            </p>
            <p className="text-xl mb-6 leading-relaxed animate__animated animate__fadeInUp" data-aos="fade-up">
              Outside of development, I’m a curious individual who enjoys learning about
              new technologies, solving puzzles, and collaborating with like-minded people
              to create innovative solutions. Whether it's contributing to open-source projects
              or experimenting with new features on my personal projects, I’m always looking
              for ways to grow as both a developer and a person.
            </p>
            <p className="text-xl mb-6 leading-relaxed animate__animated animate__fadeInUp" data-aos="fade-up">
              In conclusion, I am driven by my passion for web development, my eagerness to
              learn, and my commitment to creating high-quality, user-centered applications.
              I look forward to the journey ahead, and I am excited about the opportunities
              to collaborate, learn from others, and contribute to meaningful projects. Thank
              you for visiting my portfolio, and I look forward to connecting with you!
            </p>
          </div>
        </div>
      </section>  
      <Footer/>
    </>
  );
};

export default AboutMe;
