import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/HeroImage.svg";

const Hero = () => {
	return (
		<section
			id="home"
			className="h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-16 bg-base-400"
		>
			{/* Left Side: Image (Hidden on small screens) */}
			<motion.div
				className="hidden lg:block w-1/2"
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ amount: 0.5 }} // Triggers animation every time 50% of the section is visible
				transition={{ duration: 0.8 }}
			>
				<img
					src={HeroImage}
					alt="Developer"
					className="w-full max-w-md mx-auto"
				/>
			</motion.div>

			{/* Right Side: Content */}
			<motion.div
				className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ amount: 0.5 }} // Triggers animation every time 50% of the section is visible
				transition={{ duration: 0.8 }}
			>
				<h1 className="text-7xl font-bold tracking-wider text-primary">
					I'm Shad
				</h1>

				<p className="text-gray-600">
					a Full Stack Developer specializing in building fast, modern web and
					mobile applications with React, Next.js, React Native, Node.js, and
					MySQL. I create scalable, user-centered solutions from backend APIs to
					polished frontend experiences, helping businesses and ideas come to
					life through powerful technology.
				</p>

				{/* Social Media Icons */}
				<motion.div
					className="flex justify-center lg:justify-start space-x-4"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ amount: 0.5 }} // Triggers animation every time 50% of the section is visible
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<a
						href="https://github.com/shadtorh"
						target="_blank"
						className="text-white bg-orange-500 p-3 rounded-full hover:bg-orange-600"
					>
						<FaGithub size={20} />
					</a>
					<a
						href="http://linkedin.com/in/shad-torh-9a2ab2352"
						target="_blank"
						className="text-white bg-orange-500 p-3 rounded-full hover:bg-orange-600"
					>
						<FaLinkedinIn size={20} />
					</a>
				</motion.div>

				{/* Buttons */}
				<motion.div
					className="flex justify-center lg:justify-start space-x-4 mt-6"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.5 }} // Triggers animation every time 50% of the section is visible
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<button className="px-6 py-3 text-white bg-gray-800 rounded-lg hover:bg-gray-900">
						Know More
					</button>
					<button className="px-6 py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
						Demo Work
					</button>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
