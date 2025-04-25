import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const project = projects.find((project) => project.id === parseInt(id));

	if (!project) {
		return (
			<div className="flex justify-center items-center h-screen text-2xl font-semibold text-red-500">
				Project not found
			</div>
		);
	}

	return (
		<div className="flex flex-col justify-center items-center min-h-screen p-6 bg-gray-50">
			{/* Back Button */}
			<button
				onClick={() => navigate(-1)}
				className="absolute top-5 left-5 text-gray-800 text-3xl hover:text-gray-600 transition-transform hover:scale-110"
			>
				<FaArrowLeft />
			</button>

			{/* Content Wrapper */}
			<div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
				{/* Project Title */}
				<h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
					{project.title}
				</h2>

				{/* Project Video or Image */}
				<div className="mb-6">
					{project.video ? (
						<video
							src={project.video}
							alt={project.title}
							className="w-full max-h-96 object-cover rounded-lg shadow-md"
							autoPlay
							loop
							muted
						></video>
					) : (
						<img
							src={project.image}
							alt={project.title}
							className="w-full max-h-96 object-cover rounded-lg shadow-md"
						/>
					)}
				</div>

				{/* Project Description */}
				<p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
					{project.description}
				</p>

				{/* Buttons */}
				<div className="flex flex-wrap justify-center gap-4">
					<a
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-transform hover:scale-105 shadow"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/shadtorh/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-transform hover:scale-105 shadow"
					>
						LinkedIn
					</a>
					<a
						href={project.demoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-transform hover:scale-105 shadow"
					>
						Demo Project
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
