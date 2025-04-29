import { FaAngleRight, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<section id="projects" className="py-20 px-6 bg-base-200 text-base-content">
			{/* Section Header with Accent Bar */}
			<div className="text-center mb-16">
				<div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
				<motion.h2
					className="text-5xl font-extrabold mb-6"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					My Latest Work
				</motion.h2>

				<motion.p
					className="max-w-3xl mx-auto text-lg opacity-80"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Welcome to my portfolio! Here are some of the projects I've worked on,
					showcasing my skills in web development, mobile apps, and UI/UX
					design.
				</motion.p>
			</div>

			{/* Projects Grid */}
			<motion.div
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.3 }}
			>
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						className="card bg-base-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						{/* Project Image Container with Gradient Overlay */}
						<figure className="relative h-56 overflow-hidden group">
							<img
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								src={project.image}
								alt={project.title}
							/>

							{/* Category Badge */}
							<div className="absolute top-4 right-4">
								<span className="badge badge-primary">{project.category}</span>
							</div>
						</figure>

						{/* Project Details */}
						<div className="card-body p-6">
							<h3 className="card-title text-xl mb-2">{project.title}</h3>
							<p className="text-sm opacity-70 mb-4 line-clamp-3">
								{project.description.slice(0, 120)}...
							</p>

							<div className="card-actions justify-between items-center mt-auto pt-2 border-t border-base-300">
								<Link
									to={`/project/${project.id}`}
									className="text-primary font-medium hover:underline flex items-center gap-1"
								>
									Read More <FaAngleRight className="text-xs" />
								</Link>
								<Link
									to={project.demoLink}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary btn-sm gap-1 normal-case"
								>
									View Demo <FaExternalLinkAlt className="text-xs" />
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
