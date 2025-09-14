import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data";
import {
	FaArrowLeft,
	FaGithub,
	FaLinkedin,
	FaExternalLinkAlt,
	FaCalendarAlt,
} from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";

const ProjectDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const project = projects.find((project) => project.id === parseInt(id));

	// Scroll to top when component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!project) {
		return (
			<div className="flex flex-col justify-center items-center h-screen">
				<div className="text-2xl font-semibold text-error mb-4">
					Project not found
				</div>
				<button onClick={() => navigate("/")} className="btn btn-primary">
					Back to Projects
				</button>
			</div>
		);
	}

	// Find related projects (same category, excluding current project)
	const relatedProjects = projects
		.filter((p) => p.category === project.category && p.id !== project.id)
		.slice(0, 3);

	return (
		<motion.div
			className="bg-base-200 min-h-screen"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{/* Breadcrumb Navigation */}
			<div className="text-sm breadcrumbs px-6 pt-6">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/#projects">Projects</Link>
					</li>
					<li className="text-primary">{project.title}</li>
				</ul>
			</div>

			{/* Back Button - Floating */}
			<button
				onClick={() => navigate(-1)}
				className="btn btn-circle btn-primary btn-sm fixed top-24 left-6 z-10"
				aria-label="Go back"
			>
				<FaArrowLeft />
			</button>

			{/* Main Content */}
			<div className="container mx-auto px-4 py-8 max-w-5xl">
				<div className="card bg-base-100 shadow-xl overflow-hidden">
					{/* Hero Section with Image */}
					<div className="relative">
						<img
							src={project.image}
							alt={project.title}
							className="w-full h-[400px] object-cover"
						/>

						{/* Overlay with Category Badge */}
						<div className="absolute top-4 right-4">
							<div className="badge badge-primary badge-lg">
								{project.category}
							</div>
						</div>
					</div>

					{/* Content */}
					<div className="card-body">
						{/* Title and Meta Info */}
						<div className="mb-6">
							<h1 className="text-4xl font-bold mb-4">{project.title}</h1>

							<div className="flex flex-wrap gap-2 items-center text-sm opacity-75 mb-4">
								<span className="flex items-center gap-1">
									<FaCalendarAlt /> {project.date || "2023"}
								</span>
								<span className="flex items-center gap-1">
									<BsBoxSeam /> {project.technology || "Web Application"}
								</span>
							</div>

							{/* Tags/Skills */}
							<div className="flex flex-wrap gap-2 my-3">
								{(project.tags || ["React", "Tailwind CSS", "JavaScript"]).map(
									(tag, index) => (
										<span key={index} className="badge badge-outline">
											{tag}
										</span>
									)
								)}
							</div>
						</div>

						{/* Project Description */}
						<div className="prose max-w-none mb-8 text-base-content">
							<h2 className="text-2xl font-semibold mb-4">
								Project Description
							</h2>
							<p className="text-lg leading-relaxed whitespace-pre-line">
								{project.description}
							</p>

							{/* Features List - if available */}
							{project.features && (
								<div className="mt-6">
									<h3 className="text-xl font-semibold mb-2">Key Features</h3>
									<ul className="list-disc pl-5 space-y-1">
										{project.features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</ul>
								</div>
							)}
						</div>

						{/* Action Buttons */}
						<div className="flex flex-wrap gap-4 justify-center sm:justify-start">
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-primary gap-2"
								>
									<FaGithub /> View Code
								</a>
							)}
							{project.demoLink && (
								<a
									href={project.demoLink}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-accent gap-2"
								>
									<FaExternalLinkAlt /> Live Demo
								</a>
							)}
							<a
								href="https://www.linkedin.com/in/shad-torh-9a2ab2352"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-neutral gap-2"
							>
								<FaLinkedin /> Connect
							</a>
						</div>
					</div>
				</div>

				{/* Related Projects Section */}
				{relatedProjects.length > 0 && (
					<div className="mt-12">
						<h2 className="text-2xl font-bold mb-6 text-center">
							Related Projects
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{relatedProjects.map((relatedProject) => (
								<Link
									to={`/project/${relatedProject.id}`}
									key={relatedProject.id}
									className="card bg-base-100 shadow-md hover:shadow-lg transition-all duration-300"
								>
									<figure className="h-48">
										<img
											src={relatedProject.image}
											alt={relatedProject.title}
											className="w-full h-full object-cover"
										/>
									</figure>
									<div className="card-body p-4">
										<h3 className="card-title text-lg">
											{relatedProject.title}
										</h3>
										<p className="text-sm opacity-75 line-clamp-2">
											{relatedProject.description}
										</p>
									</div>
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default ProjectDetails;
