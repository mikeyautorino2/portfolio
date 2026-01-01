'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg font-semibold text-foreground mb-4">Experience</h2>

        <div className="space-y-4 text-foreground/80">
          <p>
            <span className="text-foreground">Software Engineer Intern @ PlayTogether</span>
            <span className="text-muted"> — Aug 2025-Dec 2025</span>
            <br />
            <span className="text-muted text-sm">
              TypeScript, React, GraphQL, Keycloak auth. Reduced API latency 10%, login errors 20%.
            </span>
          </p>

          <p>
            <span className="text-foreground">Researcher @ Illinois Geometry Lab</span>
            <span className="text-muted"> — Sep 2025–Dec 2025</span>
            <br />
            <span className="text-muted text-sm">
              Built Python data pipelines to study skill vs. luck across tens of thousands of games.
            </span>
          </p>

          <p>
            <span className="text-foreground">Software Engineer Intern @ Electronic Visualization Lab</span>
            <span className="text-muted"> — May 2025–Aug 2025</span>
            <br />
            <span className="text-muted text-sm">
              C++/Unreal Engine real-time 3D visualization. Achieved 2–3× frame-rate improvement.
            </span>
          </p>

          <p>
            <span className="text-foreground">Software Developer @ UIUC Physics Dept</span>
            <span className="text-muted"> — Jan 2025–May 2025</span>
            <br />
            <span className="text-muted text-sm">
              JavaScript signal processing extension for FPGA rigs used by 100+ students.
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
