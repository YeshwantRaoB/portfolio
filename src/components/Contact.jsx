// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const contactLinks = [
  {
    href: "mailto:byeshwantrao@gmail.com",
    label: "Email",
    icon: <FaEnvelope />,
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    href: "https://www.linkedin.com/in/yeshwant-rao-b-9a9125288/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    href: "https://github.com/YeshwantRaoB",
    label: "GitHub",
    icon: <FaGithub />,
    color: "bg-gray-800 hover:bg-gray-900",
  },
  {
    href: "https://instagram.com/yeshwant_rao_",
    label: "Instagram",
    icon: <FaInstagram />,
    color: "bg-pink-500 hover:bg-pink-600",
  },
  {
    href: "https://youtube.com/@raobyeshwant",
    label: "YouTube",
    icon: <FaYoutube />,
    color: "bg-red-600 hover:bg-red-700",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-2 sm:px-6 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div data-aos="fade-up" className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-8 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Have a question or want to connect? I’m just a click away.
        </motion.p>
        <motion.div
          className="flex flex-row flex-nowrap justify-center gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {contactLinks.map((link, idx) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-lg shadow-lg transition-all duration-300 ${link.color}`}
              whileHover={{ scale: 1.08, y: -4, boxShadow: "0 8px 32px rgba(59,130,246,0.15)" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              aria-label={link.label}
            >
              {link.icon}
              {link.label}
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
         {/*  <motion.div
            className="inline-block px-8 py-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-blue-200 dark:border-blue-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="block text-lg text-blue-700 dark:text-blue-400 font-semibold mb-2">
              Or just drop me a message!
            </span>
            <form
              action="mailto:byeshwantrao@gmail.com"
              method="POST"
              encType="text/plain"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white"
                required
              />
              <textarea
                name="message"
                rows={3}
                placeholder="Your Message"
                className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-900 dark:text-white"
                required
              />
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
              </motion.button>
            </form>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
