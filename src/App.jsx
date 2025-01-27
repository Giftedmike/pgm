import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Partners from './components/Partners.jsx';
import Mission from './components/Mission.jsx';
import Projects from './components/Projects.jsx';
import Testimony from './components/Testimony.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';


const App = () => {
  const location = useLocation();

  // Scroll to the section based on the URL's path
  useEffect(() => {
    // Extract the section name from the URL path (remove leading '/')
    const sectionId = location.pathname.substring(1).toLowerCase();

    if (sectionId) {
      const element = document.getElementById(sectionId); // Find element by ID
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll to the section
      }
    }
  }, [location]);

  return (
    <>
      <NavBar />
      <div>
        <section id="banner">
          <Banner />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="service">
          <Service />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section id="mission">
          <Mission />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="testimony">
          <Testimony />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default App;
