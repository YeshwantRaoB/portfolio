import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBrain,
  FaTools,
  FaNetworkWired,
  FaTerminal,
  FaCogs,
} from 'react-icons/fa';
import {
  SiVirtualbox,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiReact,
  SiTailwindcss,
  SiLinux,
} from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';

const skills = [
  {
    id: 1,
    title: 'Linux',
    icon: <SiLinux />,
    desc: 'Command line, scripting, and system administration.',
    color: 'text-black dark:text-gray-100',
  },
  {
    id: 4,
    title: 'Computer Hardware',
    icon: <FaTools />,
    desc: 'Hands-on expertise in system assembly and troubleshooting.',
    color: 'text-yellow-500',
  },
  {
    id: 13,
    title: 'Problem Solving',
    icon: <FaCogs />,
    desc: 'Debugging and designing logical systems.',
    color: 'text-indigo-500',
  },
   {
    id: 2,
    title: 'Virtualization',
    icon: <SiVirtualbox />,
    desc: 'KVM, Docker, and Proxmox for virtual infrastructure.',
    color: 'text-purple-500',
  },
  {
    id: 3,
    title: 'Open Source Software',
    icon: <SiGithub />,
    desc: 'Using and contributing to FOSS tools.',
    color: 'text-black dark:text-white',
  },
  {
    id: 1,
    title: 'AI Prompt Engineering',
    icon: <FaBrain />,
    desc: 'Crafting efficient prompts for ChatGPT, DALL·E, and Sora.',
    color: 'text-pink-500',
  },
  {
    id: 5,
    title: 'Networking',
    icon: <FaNetworkWired />,
    desc: 'IP, DNS, routing, VPN, firewalls, and remote access.',
    color: 'text-blue-500',
  },
  {
    id: 6,
    title: 'HTML',
    icon: <SiHtml5 />,
    desc: 'Semantic and accessible markup for modern websites.',
    color: 'text-orange-600',
  },
  {
    id: 7,
    title: 'CSS',
    icon: <SiCss3 />,
    desc: 'Animations, layout systems (Flexbox & Grid).',
    color: 'text-blue-400',
  },
  {
    id: 8,
    title: 'React.js',
    icon: <SiReact />,
    desc: 'Component-based frontend development with hooks.',
    color: 'text-cyan-400',
  },
  {
    id: 9,
    title: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    desc: 'Utility-first styling framework for modern UIs.',
    color: 'text-teal-500',
  },
  
  {
    id: 12,
    title: 'Terminal & Scripting',
    icon: <FaTerminal />,
    desc: 'Bash automation, scripting, and CLI mastery.',
    color: 'text-gray-600 dark:text-gray-300',
  },
  {
  id: 14,
  title: 'Python',
  icon: <SiPython />,
  desc: 'Proficient in scripting, automation, and building backend systems with Python.',
  color: 'text-yellow-400',
},
{
  id: 15,
  title: 'Java',
  icon: <FaJava />,
  desc: 'Strong grasp of OOP concepts and application development using Java.',
  color: 'text-red-600',
},
{
  id: 16,
  title: 'PL/SQL',
  icon: <FaDatabase />,
  desc: 'Experience writing stored procedures, triggers, and queries using Oracle PL/SQL.',
  color: 'text-green-600',
},

  
];

const Skills = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 transition duration-500">
      <motion.div
        data-aos="fade-up" initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-12">
          Skills & Technologies
        </h2>

        <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill) => (
            <motion.div
              data-aos="fade-up" key={skill.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition transform hover:scale-105 ${
                expandedCard === skill.id ? 'shadow-2xl' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => toggleCard(skill.id)}
            >
              <div data-aos="fade-up" className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {skill.title}
              </h3>

              <AnimatePresence>
                {expandedCard === skill.id && (
                  <motion.p
                    className="mt-4 text-sm text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {skill.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
