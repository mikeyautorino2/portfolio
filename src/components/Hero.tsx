'use client';
import React, { useEffect, useState } from 'react';
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

// Floating particles component
const FloatingParticle = ({ delay = 0, duration = 4 }: { delay?: number; duration?: number }) => {
  const [windowSize, setWindowSize] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (windowSize.width === 0) return null;

  return (
    <motion.div
      className="absolute w-2 h-2 bg-accent/30 rounded-full"
      initial={{ 
        x: Math.random() * windowSize.width,
        y: windowSize.height + 50,
        opacity: 0 
      }}
      animate={{ 
        y: -50,
        opacity: [0, 1, 1, 0],
        x: Math.random() * windowSize.width 
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  );
};


export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 2} duration={6 + Math.random() * 4} />
      ))}

      {/* Parallax geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 bg-accent/10 rounded-full blur-sm"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          rotate: 360,
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-16 h-16 bg-accent-light/20 rounded-lg blur-sm"
        animate={{
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5,
          rotate: -360,
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 bg-primary/10 rounded-full blur-sm"
        animate={{
          x: mousePosition.x * 3,
          y: mousePosition.y * 3,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <motion.div 
        className="text-center max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
        }}
      >
        <motion.div 
          className="inline-block bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-sm px-12 py-6 mb-8 rounded-full border-2 border-gray-600 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"
            animate={{
              background: [
                "linear-gradient(90deg, rgba(55, 65, 81, 0.2) 0%, rgba(75, 85, 99, 0.3) 50%, rgba(55, 65, 81, 0.2) 100%)",
                "linear-gradient(90deg, rgba(75, 85, 99, 0.3) 0%, rgba(55, 65, 81, 0.2) 50%, rgba(75, 85, 99, 0.3) 100%)",
                "linear-gradient(90deg, rgba(55, 65, 81, 0.2) 0%, rgba(75, 85, 99, 0.3) 50%, rgba(55, 65, 81, 0.2) 100%)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.h1 
            className="text-6xl sm:text-7xl lg:text-8xl font-bold relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #3B82F6 50%, #ffffff 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #3B82F6 50%, #ffffff 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Michele Autorino
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p 
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-200"
          >
            ECE & Stats @ Illinois | Interested in NLP, Cloud Computing, and Backend Development
          </motion.span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-5"
        >
          <motion.a 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            href="#projects" 
            className="bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm text-white hover:text-white px-12 py-6 text-2xl font-medium rounded-full border-2 border-gray-600 hover:border-accent shadow-xl hover:shadow-2xl cursor-pointer relative overflow-hidden group transition-all duration-500"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            role="button"
            aria-label="Navigate to projects section"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <span className="relative z-10">View My Work</span>
          </motion.a>

          <motion.a 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            href="#contact" 
            className="bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm text-white px-12 py-5 text-xl font-medium rounded-full border-2 border-gray-600 hover:border-accent shadow-xl hover:shadow-2xl cursor-pointer relative overflow-hidden group transition-all duration-500"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            role="button"
            aria-label="Navigate to contact section"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <span className="relative z-10">Contact Me</span>
          </motion.a>

          <motion.a 
            href="/michele_a_resume_S7_20_25c.pdf"
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-gradient-to-r from-gray-800 to-gray-900 backdrop-blur-sm text-white px-12 py-5 text-lg font-medium rounded-full border-2 border-gray-600 hover:border-accent shadow-xl hover:shadow-2xl relative overflow-hidden group transition-all duration-500"
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download Michele Autorino's resume (PDF)"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
            <span className="relative z-10">Resume</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}