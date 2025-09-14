import { motion } from "framer-motion";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileImg from "../assets/Shad.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
	return (
		<section id="about" className="py-24 px-6 bg-base-200 text-base-content">
			<div className="container mx-auto max-w-7xl">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
					<motion.h2
						className="text-4xl md:text-5xl font-bold"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.5 }}
					>
						About Me
					</motion.h2>
				</div>

				{/* Content Container */}
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
					{/* Left - Profile Image with Frame */}
					<motion.div
						className="w-full lg:w-2/5 flex justify-center"
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6 }}
					>
						<div className="relative">
							<div className="absolute inset-0 border-2 border-primary rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
							<img
								src={ProfileImg}
								alt="Shad Torh"
								className="w-full max-w-md rounded-3xl shadow-xl object-cover aspect-[4/5]"
							/>
						</div>
					</motion.div>

					{/* Right - Text Content */}
					<motion.div
						className="w-full lg:w-3/5 space-y-6"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.2 }}
						transition={{ duration: 0.6 }}
					>
						{/* Intro & Greeting */}
						<div className="space-y-2">
							<h3 className="text-xl font-medium text-primary">Hello there!</h3>
							<h2 className="text-3xl font-bold">I'm Shad Torh</h2>
							<p className="text-lg font-medium">Full Stack Developer</p>
						</div>

						{/* Bio Paragraphs */}
						<div className="space-y-4">
							<p className="text-lg leading-relaxed">
								I'm a passionate Full Stack Developer who loves building
								thoughtful, high-performing web and mobile applications. I
								specialize in creating seamless user experiences using
								technologies like React, Next.js, React Native, Node.js,
								Express, PostgreSQL, MySQL, and MongoDB.
							</p>
							<p className="text-lg leading-relaxed">
								I enjoy bringing both the frontend and backend together to build
								complete, scalable solutions. Currently, I'm focused on
								developing full-stack projects that bridge design and
								functionality, helping users and businesses connect in smarter
								ways.
							</p>
							<p className="text-lg leading-relaxed">
								When I'm not coding, you'll find me exploring new technologies,
								solving challenging problems, and continuously leveling up my
								skills. I'm excited to bring my creativity, technical skills,
								and dedication to your next project.
							</p>
						</div>

						{/* Key Facts / Quick Stats */}
						{/* <div className="grid grid-cols-2 gap-4 mt-6 md:mt-8">
							<div className="bg-base-100 p-4 rounded-lg shadow-md">
								<h4 className="text-sm uppercase opacity-70">Experience</h4>
								<p className="text-xl font-bold">3+ Years</p> 
						</div>
							<div className="bg-base-100 p-4 rounded-lg shadow-md">
								<h4 className="text-sm uppercase opacity-70">Projects</h4>
								<p className="text-xl font-bold">20+ Completed</p>
							</div>
						</div> */}

						{/* Action Buttons */}
						<div className="flex flex-wrap gap-4 pt-6">
							<a href="/SHADTORH_resumeV3.pdf" download className="btn btn-primary gap-2">
								<FaDownload /> Download Resume
							</a>
							<div className="flex gap-3">
								<a
									href="https://github.com/shadtorh"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-circle btn-outline"
								>
									<FaGithub className="text-xl" />
								</a>
								<a
									href="https://linkedin.com/in/shad-torh-9a2ab2352"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-circle btn-outline"
								>
									<FaLinkedin className="text-xl" />
								</a>
								<a
									href="mailto:shadtorh90@gmail.com"
									className="btn btn-circle btn-outline"
								>
									<FaEnvelope className="text-xl" />
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
