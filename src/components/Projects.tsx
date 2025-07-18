'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
	{
		title: 'Personal Portfolio Website',
		description:
			'A modern, responsive portfolio website showcasing my projects and skills with smooth animations and a clean design.',
		tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
		image: '/projectonepreview.png',
		github: 'https://github.com/mikeyautorino2/portfolio'
	},
	{
		title: 'NBA Player Valuation Model',
		description: 'Scraped NBA stats from multiple sources, evaluated player contributions using Lasso regression and clustering, and visualized insights.',
		tech: [
			'Python',
			'BeautifulSoup',
			'scikit-learn',
			'matplotlib',
			'seaborn'
		],
		image: '/nba_player_valuation_model.png',
		github: 'https://github.com/mikeyautorino2/NBAVORPMODEL'
	},
	{
		title: 'Fraud Call Detection Model',
		description: 'Used NLTK and bag-of-words to vectorize call transcripts and built a logistic regression pipeline with scikit-learn, achieving 89% accuracy in detecting fraud.',
		tech: ['Python', 'NLTK', 'scikit-learn', 'pandas', 'NumPy'],
		image: '/fraud-call-detection.jpg',
		github: 'https://github.com/mikeyautorino2/DSclubprojclone'
	},
	{
		title: 'Link Analyzer Webcrawler',
		description: 'A modern web application that analyzes websites by extracting metadata, counting links and images, and providing valuable insights about web pages.',
		tech: ['Node.js', 'Express.js', 'PostgreSQL', 'React', 'CSS3'],
		image: '/fraud-call-detection.jpg',
		github: 'https://github.com/mikeyautorino2/webcrawler'
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
			<div className="max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold text-primary mb-4">
						Featured Projects
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
							className="group relative bg-surface rounded-lg overflow-hidden
							shadow-lg hover:shadow-2xl hover:shadow-accent/20
							transition-all duration-300 cursor-pointer"
							onClick={() => window.open(project.github, '_blank')}
						>
							<div className="aspect-w-16 aspect-h-9 bg-gray-100 relative">
								<Image
									src={project.image}
									alt={`Preview of ${project.title}`}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="p-6 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
								<h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-white transition-colors duration-300">
									{project.title}
								</h3>
								<p className="text-secondary mb-4 group-hover:text-white/90 transition-colors duration-300">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="text-sm px-3 py-1 bg-accent/10 text-accent rounded-full
											group-hover:bg-white/10 group-hover:text-white
											transition-colors duration-300"
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