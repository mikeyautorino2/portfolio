'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-semibold text-foreground mb-1">
          Michele Autorino
        </h1>
        <p className="text-muted mb-6">CS & Statistics @ UIUC</p>

        <p className="text-foreground/90 mb-4">
          Building things at the intersection of software and data. Currently researching prediction markets!
        </p>

        <p className="text-muted text-sm mb-4">
          Outside of code: soccer, bjj, hiking, nature documentaries, rom-coms, meeting people
        </p>

        <div className="flex gap-4 text-sm">
          <a
            href="/michele_a_resume_1_1_26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Resume
          </a>
          <a href="mailto:ma152@illinois.edu" className="underline">
            Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}
