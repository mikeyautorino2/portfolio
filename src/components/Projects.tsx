'use client';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: 'degenstock',
    description: 'HackPrinceton. AWS-hosted FastAPI service for prediction market analytics with FAISS embeddings, arbitrage detection, and React dashboards.',
    github: 'https://github.com/mikeyautorino2/dghack',
  },
  {
    title: 'Distributed Cache in Go',
    description: 'System Programming Honors Section project where my friend and I are building a distributed caching system across multiple cpu cores and a raspberry pi',
    github: 'https://github.com/ArnavSaraogi/341h-distributed-cache',
  },
  {
    title: 'SlopCop',
    description: 'Used GeminiAPI to build an extenstion that blocks absolute slop from ever hitting your eyes on youtube',
    github: 'https://devpost.com/software/slopcop-rjop32',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-4">Projects</h2>

        <ul className="space-y-4">
          {projects.map((project, index) => (
            <motion.li
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium"
                >
                  {project.title}
                </a>
              ) : (
                <span className="font-medium">{project.title}</span>
              )}
              <span className="text-muted"> — {project.description}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
