'use client';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;

}

const projects: Project[] = [
	{
		title: 'Personal Portfolio Website',
		description: 'A modern, responsive portfolio website showcasing my projects and skills with smooth animations and a clean design.                             ',
		tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		github: 'https://github.com/mikeyautorino2/portfolio',
	},
	{
		title: 'NBA Player Valuation Model',
		description: 'Developed a machine learning pipeline to predict NBA player value (VORP) using advanced feature engineering and Gradient Boosting, achieving a test R^2 of 0.90.',
		tech: ['Python', 'BeautifulSoup', 'scikit-learn', 'matplotlib', 'seaborn'],
		github: 'https://github.com/mikeyautorino2/NBAVORPMODEL',
	},
	{
		title: 'Fraud Call Detection Model',
		description: 'Used NLTK and bag-of-words to vectorize call transcripts and built a logistic regression pipeline with scikit-learn, achieving 89% accuracy in detecting fraud.',
		tech: ['Python', 'NLTK', 'scikit-learn', 'pandas', 'NumPy'],
		github: 'https://github.com/mikeyautorino2/DSclubprojclone',
	},
	{
		title: 'Link Analyzer',
		description: 'A full-stack web application that analyzes websites by extracting metadata, counting links and images, and providing valuable insights about web pages.',
		tech: ['Node.js', 'Express.js', 'Vercel','React', 'CSS3', 'PostgreSQL'],
		github: 'https://github.com/mikeyautorino2/webcrawler',
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-white mb-4">
						Projects
					</h2>
				</motion.div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							whileHover={{ 
								scale: 1.05, 
								y: -8,
							}}
							transition={{
								duration: 0.2,
								delay: index * 0.09,
							}}
							viewport={{ once: true }}
							className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden
							shadow-xl hover:shadow-2xl hover:shadow-accent/40 border border-gray-700
							transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-accent/30"
							onClick={() => window.open(project.github, '_blank')}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									window.open(project.github, '_blank');
								}
							}}
							tabIndex={0}
							role="button"
							aria-label={`View ${project.title} on GitHub`}
						>
							<div className="p-6 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-800 group-hover:to-black">
								<h3 className="text-xl font-semibold text-white mb-3 transition-colors duration-300">
									{project.title}
								</h3>
								<p className="text-gray-300 mb-4 transition-colors duration-300 leading-relaxed group-hover:text-white">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="text-sm px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 rounded-full
											group-hover:from-accent group-hover:to-blue-600 group-hover:text-white
											transition-all duration-300"
										>
											{tech}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}