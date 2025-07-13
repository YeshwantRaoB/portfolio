import React from 'react';
import logo from '../assets/logo.jpg'; // Update with your logo path

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-300 dark:from-gray-800 dark:to-gray-700 transition-opacity duration-700 animate-gradient">
      <style>
        {`
          .animate-gradient {
            background-size: 300% 300%;
            animation: gradientAnimation 8s ease infinite;
          }

          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      <div className="flex flex-col items-center gap-4 animate-pulse">
        <img
          src={logo}
          alt="Logo"
          className="w-24 h-24 rounded-full shadow-xl animate-bounce object-cover"
        />
        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;
