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
    description: 'HackPrinceton project (30/180+ teams). AWS-hosted FastAPI service for prediction market analytics with FAISS embeddings, arbitrage detection, and React dashboards.',
    github: 'https://github.com/mikeyautorino2/dghack',
  },
  {
    title: 'MRI Classification Model',
    description: 'PyTorch pipeline for brain MRI classification and tumor segmentation on 3,200+ images. 89% classification, 90% segmentation accuracy.',
    github: 'https://github.com/mikeyautorino2/MRIClassificationModel',
  },
  {
    title: 'NBA Player Valuation Model',
    description: 'ML pipeline predicting player value (VORP) with Gradient Boosting, achieving R² of 0.90.',
    github: 'https://github.com/mikeyautorino2/NBAVORPMODEL',
  },
  {
    title: 'Fraud Call Detection',
    description: 'NLP-based fraud detection using NLTK and logistic regression with 89% accuracy.',
    github: 'https://github.com/mikeyautorino2/DSclubprojclone',
  },
  {
    title: 'Link Analyzer',
    description: 'Full-stack web app for extracting metadata and analyzing website structure.',
    github: 'https://github.com/mikeyautorino2/webcrawler',
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
