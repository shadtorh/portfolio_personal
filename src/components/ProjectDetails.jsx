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
		<div className="flex flex-col justify-center items-center min-h-screen p-6 bg-white shadow-lg rounded-lg relative">
			{/* Back Button */}
			<button
				onClick={() => navigate(-1)}
				className="absolute top-5 left-5 text-gray-800 text-3xl hover:text-gray-600 transition-transform hover:scale-110"
			>
				<FaArrowLeft />
			</button>

			{/* Content Wrapper */}
			<div className="max-w-4xl w-full">
				{/* Project Title */}
				<h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
					{project.title}
				</h2>

				{/* Project Image */}
				<img
					src={project.image}
					alt={project.title}
					className="w-full max-h-64 object-cover rounded-lg shadow-md mb-4"
				/>

				{/* Project Description */}
				<p className="text-gray-700 text-lg text-center mb-4">
					{project.description}
				</p>

				{/* Buttons */}
				<div className="flex justify-center gap-4">
					<a
						href="https://github.com/shadtorh"
						target="_blank"
						rel="noopener noreferrer"
						className="px-5 py-2 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-transform hover:scale-105 shadow"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/shadtorh/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-transform hover:scale-105 shadow"
					>
						LinkedIn
					</a>
					<a
						href={project.demoLink}
						target="_blank"
						rel="noopener noreferrer"
						className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-transform hover:scale-105 shadow"
					>
						Demo Project
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
