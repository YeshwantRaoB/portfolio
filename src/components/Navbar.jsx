// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const sections = ['about', 'projects', 'skills', 'achievements', 'contact'];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [underlineStyle, setUnderlineStyle] = useState({});
  const linkRefs = useRef({});

  // Handle scroll and active section
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY > 20);
      const scrollY = window.scrollY + 150;

      let current = '';
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollY) {
          current = id;
        }
      });

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Update underline position
  useEffect(() => {
    const el = linkRefs.current[activeSection];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentElement.getBoundingClientRect();
      setUnderlineStyle({
        left: rect.left - parentRect.left + 'px',
        width: rect.width + 'px',
      });
    }
  }, [activeSection]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
        bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700
      `}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center rounded-xl relative">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="inline-block w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden">
            <img
              src={require('../assets/logo.jpg')}
              alt="Logo"
              className="w-8 h-8 object-cover rounded-full"
            />
          </span>
          <span className="text-2xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 drop-shadow group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
            Yeshwant Rao
          </span>
        </a>

        {/* Navigation Links */}
        <div className="relative flex items-center gap-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              ref={(el) => (linkRefs.current[section] = el)}
              className={`relative capitalize px-2 py-1 text-gray-700 dark:text-gray-200 font-medium transition hover:text-blue-600 dark:hover:text-blue-400`}
            >
              {section}
            </a>
          ))}

          {/* Sliding underline */}
          <span
            className="absolute bottom-0 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-500 ease-in-out rounded-full"
            style={underlineStyle}
          />

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 text-xl text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition p-2 rounded-full bg-gray-100 dark:bg-gray-700"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
