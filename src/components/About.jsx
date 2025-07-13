import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaGlobeAmericas, FaGraduationCap, FaSchool } from 'react-icons/fa';
import { SiGoogletranslate } from 'react-icons/si';
import { MdTranslate } from 'react-icons/md';
import { RiSpeakLine } from 'react-icons/ri';
import { FiDownload } from 'react-icons/fi';
import EducationModal from '../components/EducationModal';

const languages = [
  { name: 'English', icon: <FaGlobeAmericas className="text-blue-600 dark:text-blue-400" /> },
  { name: 'Hindi', icon: <SiGoogletranslate className="text-green-600 dark:text-green-400" /> },
  { name: 'Kannada', icon: <MdTranslate className="text-yellow-600 dark:text-yellow-400" /> },
  { name: 'Telugu', icon: <RiSpeakLine className="text-red-600 dark:text-red-400" /> },
];

export default function About() {
  // Modal control
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setIsOpen(true);
  };

  return (
    <section id="about" className="py-20 px-2 sm:px-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div data-aos="fade-up" className="max-w-5xl mx-auto text-center">

        {/* SECTION TITLE */}
        <motion.h2
          className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-12 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        {/* PROFILE IMAGE */}
        <motion.div
          data-aos="fade-up"className="relative w-44 h-44 mx-auto mb-10 rounded-full group"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
          viewport={{ once: true }}
        >
          {/* Gradient Ring */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 p-[2px] animate-pulse group-hover:scale-110 transition-transform duration-500 blur-sm z-0"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          {/* Blurry Glass Background Behind Image */}
          <div className="absolute inset-0 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-lg z-0" />
          {/* Image Container */}
          <motion.div
            whileHover={{ rotate: 2, scale: 1.07 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative w-full h-full rounded-full overflow-hidden shadow-2xl z-10"
          >
            <img
              src='/profile.jpg'
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Animated Typing Bio */}
        <motion.div
          className="text-center text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <ReactTyped
            strings={[
              "I'm a passionate 3rd-year Diploma student in Computer Science, specializing in Cyber Security.",
              "I love building systems, securing & optimizing them.",
              "Driven by curiosity, focused on excellence, and inspired to innovate."
            ]
            }
            typeSpeed={38}
            backSpeed={18}
            loop
          />
        </motion.div>

        {/* Highlights */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            'Tech Enthusiast',
            'FOSS Advocate',
            'Public Speaker',
            'Team Leader',
            'Creative Thinker',
            'Tech Explorer',
          ].map((tag, i) => (
            <motion.span
              key={i}
              className="px-5 py-2 text-sm rounded-full bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-100 font-semibold shadow transition-transform duration-300"
              whileHover={{ scale: 1.12, backgroundColor: "#3b82f6", color: "#fff" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a
            href="/your-resume.pdf"
            download
            className="inline-flex items-center gap-2 px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-semibold text-base"
          >
            <FiDownload /> Download Resume
          </a>
        </motion.div>

        {/* Why Me */}
        <motion.div
          className="mt-16 text-left max-w-3xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-5 text-center">
            Why Me?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
            I believe in building with purpose. Whether it’s presenting impactful ideas, developing secure systems, or leading a team, I bring passion, creativity, and resilience. My technical strengths in cybersecurity are matched by my leadership and communication skills, making me a strong candidate for both development and collaborative roles. I don't just deliver — I innovate, organize, and inspire.
          </p>
        </motion.div>

        {/* Languages Known */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mb-7">
            Languages Known
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {languages.map((lang, idx) => (
              <motion.div
                key={lang.name}
                className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-5 rounded-xl shadow-md w-40 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{lang.icon}</div>
                <p className="text-gray-800 dark:text-gray-200 font-semibold">{lang.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mb-7">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Certificate 1 */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-7 shadow hover:shadow-xl transition duration-300 flex items-start gap-4"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
            >
              <div className="text-4xl text-blue-600 dark:text-blue-400">🎯</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Job Ready Employability Skills
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Wadhwani Foundation</p>
                <a
                  href="https://drive.google.com/file/d/1jmRfBICYjMIJrgCWzqjVu0JX9i9zmUvG/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
            {/* Certificate 2 */}
            <motion.div
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-7 shadow hover:shadow-xl transition duration-300 flex items-start gap-4"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(139,92,246,0.15)" }}
            >
              <div className="text-4xl text-purple-600 dark:text-purple-400">☁️</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  Cloud Computing and Distributed Systems
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">NPTEL, IIT Kanpur</p>
                <a
                  href="https://drive.google.com/file/d/1XHLM0VRQJAqZT2jwWCv60znPsLU3kOwB/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12">
            Education Qualifications
          </h3>
          <div className="relative border-l-[3px] border-blue-500 dark:border-blue-400 pl-0 sm:pl-2 space-y-12 max-w-3xl mx-auto">
            {/* Diploma */}
            <motion.div
              className="relative flex items-start"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(59,130,246,0.10)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 absolute -left-7 top-4 shadow">
                <FaGraduationCap className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md ml-6 w-full">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-300">
                  Diploma in Computer Science & Engineering
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Karnataka Govt. Polytechnic, Mangalore <br /> 2023 – 2026
                </p>
                <button
                  onClick={() =>
                    openModal(
                      'Diploma in CSE – Courses & Projects',
                      <>
                        <ul className="mt-2 text-gray-700 dark:text-gray-200 text-sm space-y-1">
                          <li>1st Sem GPA: 9.78</li>
                          <li>2nd Sem GPA: 9.64</li>
                          <li>3rd Sem GPA: 10.00</li>
                          <li>4th Sem GPA: 10.00</li>
                          <li>5th Sem GPA: Current</li>
                        </ul>
                        <p className="mt-3"><strong>Core Subjects:</strong> Data Structures, Java, Networking, Cybersecurity, Python</p>
                        <p className="mt-2"><strong>Projects:</strong> Linux Distro from Scratch, Self-hosted VPN Server, Secure Web Auth</p>
                        <p className="mt-2">Actively involved as Class Representative and Student Council Member.</p>
                      </>
                    )
                  }
                  className="mt-4 text-blue-600 hover:underline font-semibold"
                >
                  View Details
                </button>
              </div>
            </motion.div>
            {/* 10th Grade */}
            <motion.div
              className="relative flex items-start"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(139,92,246,0.10)" }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 absolute -left-7 top-4 shadow">
                <FaSchool className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md ml-6 w-full">
                <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                  10th Grade – CBSE Board
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  The Narayana Group, BLR-BGT <br /> 2022 – 2023
                </p>
                <button
                  onClick={() =>
                    openModal(
                      '10th Grade Highlights',
                      <>
                        <p className="text-sm text-gray-800 dark:text-gray-200 mt-2">
                          Percentage: <strong>88.2%</strong>
                        </p>
                        <p>Achieved distinction with strong scores in Mathematics and Science.</p>
                        <p className="mt-2">Awarded <strong>Student of the Year</strong> and elected as Student Body President.</p>
                      </>
                    )
                  }
                  className="mt-4 text-purple-600 hover:underline font-semibold"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Modal */}
        <EducationModal isOpen={isOpen} setIsOpen={setIsOpen} title={modalContent.title} content={modalContent.content} />
      </div>
    </section>
  );
}
