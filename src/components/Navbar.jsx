// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${showNavbar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}
        bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700
      `}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center rounded-xl">
        {/* Logo and Title */}
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

        {/* Navigation Links and Dark Mode Toggle */}
        <div className="flex items-center gap-6">
          {['About', 'Projects', 'Skills', 'Achievements', 'Contact'].map((section) => (
  <a
    key={section}
    href={`#${section.toLowerCase()}`}
    className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition px-2 py-1 rounded hover:bg-blue-50 dark:hover:bg-gray-700"
  >
    {section}
  </a>
))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-gray-600 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition p-2 rounded-full bg-gray-100 dark:bg-gray-700"
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
