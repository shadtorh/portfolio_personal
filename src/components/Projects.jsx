import { FaAngleRight } from "react-icons/fa6";
import { projects } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<section id="projects" className="py-12 px-6 text-center">
			{/* Section Title */}
			<motion.h2
				className="text-4xl font-bold mb-4"
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.2 }}
				transition={{ duration: 0.8 }}
			>
				My Latest Work
			</motion.h2>

			{/* Section Description */}
			<motion.p
				className="max-w-2xl mx-auto"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.2 }}
				transition={{ duration: 0.1 }}
			>
				Welcome to my web development portfolio! Explore a collection of
				projects showcasing my expertise in front-end development.
			</motion.p>

			{/* Projects Grid */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ amount: 0.5 }}
				transition={{ duration: 0.8, delay: 0.1 }}
			>
				{projects.map((project, index) => (
					<motion.div
						key={project.id}
						className="relative group rounded-xl overflow-hidden shadow-lg"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
					>
						{/* Project Image */}
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
						/>

						{/* Project Details */}
						<div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-md flex items-center justify-between w-[80%]">
							<div>
								<h3 className="text-lg font-semibold">{project.title}</h3>
								<p className="text-sm text-gray-500">{project.category}</p>
							</div>
							<Link
								to={`/project/${project.id}`}
								className="bg-lime-400 w-8 h-8 flex items-center justify-center rounded-full text-black text-lg"
							>
								<FaAngleRight />
							</Link>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Projects;
