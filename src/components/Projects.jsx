import { FaAngleRight } from "react-icons/fa6";
import { projects } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<section id="projects" className="py-16 px-6 bg-base-200 text-base-content">
			{/* Section Title */}
			<motion.h2
				className="text-5xl font-extrabold text-center mb-6"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				My Latest Work
			</motion.h2>

			{/* Section Description */}
			<motion.p
				className="max-w-3xl mx-auto text-lg text-center mb-12"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				Welcome to my portfolio! Here are some of the projects I’ve worked on,
				showcasing my skills in web development, mobile apps, and UI/UX design.
			</motion.p>

			{/* Projects Grid */}
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.3 }}
			>
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						className="relative group rounded-lg overflow-hidden shadow-lg bg-base-100 hover:shadow-xl transition-shadow duration-300"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						{/* Project Video */}
						<div className="overflow-hidden">
							<video
								src={project.video}
								alt={project.title}
								className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
								autoPlay
								loop
								muted
							></video>
						</div>

						{/* Project Details */}
						<div className="p-6">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-sm text-gray-500 mb-4">{project.category}</p>
							<p className="text-sm leading-relaxed mb-4">
								{project.description.slice(0, 100)}...
							</p>
							<div className="flex justify-between items-center">
								<Link
									to={`/project/${project.id}`}
									className="text-primary font-semibold hover:underline"
								>
									Read More
								</Link>
								<Link
									to={project.demoLink}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary btn-sm"
								>
									View Demo
								</Link>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Projects;
