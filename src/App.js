import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Achievements from './components/Achievements';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader'; // ✅ Add this import

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    // Smooth scroll for internal anchor links
    const scrollSmoothly = () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
          event.preventDefault();
          const targetId = anchor.getAttribute('href').slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest',
            });
          }
        });
      });
    };

    scrollSmoothly();

    // Simulate loading time (e.g., waiting for assets)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timeout);
  }, [darkMode]);

  return (
    <div className="font-poppins bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}

export default App;
