'use client';
import { motion } from 'framer-motion';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <motion.div 
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="inline-block bg-white px-12 py-6 mb-8 rounded-full border-2 border-primary shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-black">
            Michele Autorino
          </h1>
        </motion.div>
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
          className="flex flex-col items-center gap-5"
        >
          <a 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            href="#projects" 
            className="bg-white text-black hover:text-white px-12 py-6 text-2xl font-medium rounded-full hover:bg-primary transition-all duration-300 transform hover:scale-105 w-96 border-2 border-primary shadow-lg hover:shadow-xl cursor-pointer"
          >
            View My Work
          </a>
          <a 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            href="#contact" 
            className="bg-white text-black hover:text-white px-12 py-5 text-xl font-medium rounded-full hover:bg-accent transition-all duration-300 transform hover:scale-105 w-88 border-2 border-accent shadow-lg hover:shadow-xl cursor-pointer"
          >
            Contact Me
          </a>
          <a 
            href="/michele_a_resume_S7_16_25.pdf"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-white text-black hover:text-white px-12 py-5 text-lg font-medium rounded-full hover:bg-primary transition-all duration-300 transform hover:scale-105 w-80 border-2 border-primary shadow-lg hover:shadow-xl"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}