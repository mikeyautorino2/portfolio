'use client';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Contact</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ma152@illinois.edu"
              className="flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-light transition-colors duration-300"
            >
              <FiMail className="text-xl" />
              <span>Email Me</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/michele-autorino"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006396] transition-colors duration-300"
            >
              <FiLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/mikeyautorino2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#24292E] text-white rounded-lg hover:bg-[#1B1F23] transition-colors duration-300"
            >
              <FiGithub className="text-xl" />
              <span>GitHub</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}