'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">About</h2>
            <div className="space-y-4 text-secondary text-lg">
              <p>
                I&apos;m a studentstudying Computer Engineering & Statistics at UIUC, constantly learning how math and code can come together to solve real-world problems.
              </p>
              <p>
                I&apos;ve built sentiment-analysis pipelines, explored 3D graphics research in Unreal Engine, and prototyped fraud-call detectors using NLP.
              </p>
              <p>
               Outside of programming, you&apos;ll find me watching UFC fights, playing soccer and basketball with friends, or relaxing to some Bossa Nova.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src="/IMG_4939.jpeg"
              alt="Michele Autorino"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              style={{ objectPosition: 'center' }}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}