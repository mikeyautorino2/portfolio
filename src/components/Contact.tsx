'use client';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="pt-8 border-t border-foreground/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex items-center gap-6"
      >
        <a
          href="mailto:ma152@illinois.edu"
          className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <FiMail className="text-lg" />
          <span>Email</span>
        </a>
        <a
          href="https://github.com/mikeyautorino2"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <FiGithub className="text-lg" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/michele-autorino"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
        >
          <FiLinkedin className="text-lg" />
          <span>LinkedIn</span>
        </a>
      </motion.div>
    </section>
  );
}
