import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/HeroImage.svg";

const Hero = () => {
	return (
		<section
			id="home"
			className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 px-6 md:px-10 lg:px-20 py-16 bg-base-200"
		>
			{/* Left Side: Content */}
			<motion.div
				className="w-full lg:w-1/2 text-center lg:text-left space-y-6 order-2 lg:order-1"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className="space-y-3">
					<h2 className="text-xl md:text-2xl font-medium text-primary">
						Hello, I'm
					</h2>
					<h1 className="text-5xl md:text-7xl font-bold tracking-wider">
						Shad Torh
					</h1>
					<div className="h-12 md:h-16">
						<TypeAnimation
							sequence={[
								"Full Stack Developer",
								2000,
								"Software Engineer",
								2000,
								"Mobile App Developer",
								2000,
								"UI/UX Enthusiast",
								2000,
							]}
							wrapper="h3"
							className="text-xl md:text-2xl font-semibold text-accent"
							repeat={Infinity}
						/>
					</div>
				</div>

				<p className="text-base-content/80 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
					I'm a Full Stack Developer crafting fast, modern web and mobile apps
					with React, Next.js, React Native, Node.js, and MySQL—bringing ideas
					to life through scalable, user-focused solutions.
				</p>

				{/* Social Media Icons */}
				<motion.div
					className="flex justify-center lg:justify-start space-x-4"
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<a
						href="https://github.com/shadtorh"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-circle btn-primary btn-sm"
						aria-label="GitHub Profile"
					>
						<FaGithub size={18} />
					</a>
					<a
						href="http://linkedin.com/in/shad-torh-9a2ab2352"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-circle btn-primary btn-sm"
						aria-label="LinkedIn Profile"
					>
						<FaLinkedinIn size={18} />
					</a>
				</motion.div>

				{/* Call to Action Buttons */}
				<motion.div
					className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<a href="/SHAD_RESUME.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
						View Resume
					</a>
					<Link to="/#projects" className="btn btn-outline btn-primary">
						See My Projects
					</Link>
				</motion.div>
			</motion.div>

			{/* Right Side: Image (Visible on all screens but resized) */}
			<motion.div
				className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<img
					src={HeroImage}
					alt="Developer Illustration"
					className="w-full max-w-xs md:max-w-md mx-auto"
				/>
			</motion.div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					delay: 1.2,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			>
				<ScrollLink to="about" smooth={true} duration={500}>
					<button className="btn btn-circle btn-ghost" aria-label="Scroll down">
						<FaArrowDown className="text-primary" />
					</button>
				</ScrollLink>
			</motion.div>
		</section>
	);
};

export default Hero;
