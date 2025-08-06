'use client';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Single continuous animated background for entire page */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        animate={{
          background: [
            "linear-gradient(135deg, #000000 0%, #1f2937 50%, #000000 100%)",
            "linear-gradient(135deg, #111827 0%, #374151 50%, #111827 100%)",
            "linear-gradient(135deg, #000000 0%, #1f2937 50%, #000000 100%)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Animated grid overlay */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-5">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="main-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#main-grid)" />
        </svg>
      </div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
