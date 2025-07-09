'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <motion.div 
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="inline-block text-6xl sm:text-7xl lg:text-8xl font-bold text-black mb-8 cursor-pointer hover:text-accent transition-colors duration-300 bg-white px-12 py-4 rounded-full shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => window.open('/michele_a_resume_S25 copy.pdf', '_blank')}
        >
          Michele Autorino
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          ECE & Stats @ Illinois | Interested in NLP, Cloud Computing, and Backend Development
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a 
            href="#projects" 
            className="inline-block bg-white text-black px-10 py-5 text-xl font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            View My Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}