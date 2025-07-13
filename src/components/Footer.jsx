// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-6 border-t border-blue-200 dark:border-blue-900">
      <motion.div
        data-aos="fade-up" className="max-w-4xl mx-auto flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.p
          data-aos="fade-up" className="text-gray-600 dark:text-gray-300 text-base mb-2 font-medium"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()}{' '}
          <span className="font-bold text-blue-700 dark:text-blue-400">
            Yeshwant Rao
          </span>{' '}
          | All rights reserved.
        </motion.p>
        <motion.p
          data-aos="fade-up" className="text-sm text-blue-700 dark:text-blue-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Made with{' '}
          <span className="animate-pulse text-pink-500">♥</span> in Mangalore,
          India
        </motion.p>
        <motion.div
          data-aos="fade-up" className="mt-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200 font-semibold shadow transition-all duration-300">
            Portfolio v1.0
          </span>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
