import React from "react";
import { motion } from "framer-motion";
import HTML from "../assets/icons/html-1.svg";
import CSS from "../assets/icons/css-3.svg";
import JS from "../assets/icons/logo-javascript.svg";
import REACT from "../assets/icons/react.svg";
import NODE from "../assets/icons/nodejs-3.svg";
import GITHUB from "../assets/icons/github-icon-1.svg";
import TAILWIND from "../assets/icons/tailwind-css-2.svg";
import NEXTJS from "../assets/icons/next-js.svg";
import TYPESCRIPT from "../assets/icons/typescript-2.svg";
import POSTGRESQL from "../assets/icons/postgresql.svg";
import EXPRESS from "../assets/icons/express-109.svg";
import MONGO_DB from "../assets/icons/mongodb-icon-2.svg";
import REACT_NATIVE from "../assets/icons/react-native-1.svg";
import EXPO from "../assets/icons/expo-1.svg";
import PRISMA from "../assets/icons/prisma-2.svg";
import REDUX from "../assets/icons/redux.svg";
import POSTMAN from "../assets/icons/postman.svg";
import PYTHON from "../assets/icons/python-5.svg";

// Group skills by category
const skillCategories = [
	{
		category: "Frontend",
		skills: [
			{ name: "HTML", icon: HTML },
			{ name: "CSS", icon: CSS },
			{ name: "JavaScript", icon: JS },
			{ name: "React", icon: REACT },
			{ name: "Tailwind CSS", icon: TAILWIND },
			{ name: "Next.js", icon: NEXTJS },
		],
	},
	{
		category: "Backend",
		skills: [
			{ name: "Node.js", icon: NODE },
			{ name: "Express.js", icon: EXPRESS },
			{ name: "PostgreSQL", icon: POSTGRESQL },
			{ name: "MongoDB", icon: MONGO_DB },
			{ name: "Prisma", icon: PRISMA },
		],
	},
	{
		category: "Mobile",
		skills: [
			{ name: "React Native", icon: REACT_NATIVE },
			{ name: "Expo", icon: EXPO },
		],
	},
	{
		category: "Tools & Languages",
		skills: [
			{ name: "TypeScript", icon: TYPESCRIPT },
			{ name: "GitHub", icon: GITHUB },
			{ name: "Redux", icon: REDUX },
			{ name: "Postman", icon: POSTMAN },
			{ name: "Python", icon: PYTHON },
			{ name: "JavaScript", icon: JS },
		],
	},
];

const Skills = () => {
	return (
		<section id="skills" className="py-16 px-6 bg-base-200 text-base-content">
			<div className="max-w-6xl mx-auto">
				{/* Section Header with Accent Bar */}
				<div className="text-center mb-16">
					<div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
					<motion.h2
						className="text-4xl font-bold mb-4"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
					>
						Technical Skills
					</motion.h2>
					<motion.p
						className="text-base-content/70 text-lg max-w-2xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						I specialize in these technologies to build modern, responsive, and
						scalable applications
					</motion.p>
				</div>

				{/* Skills Categories */}
				<div className="space-y-12">
					{skillCategories.map((category, categoryIndex) => (
						<motion.div
							key={categoryIndex}
							className="mb-10"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
						>
							<h3 className="text-2xl font-semibold mb-6 border-l-4 border-primary pl-3">
								{category.category}
							</h3>

							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
								{category.skills.map((skill, skillIndex) => (
									<motion.div
										key={skillIndex}
										className="bg-base-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 flex flex-col items-center justify-center group hover:-translate-y-1"
										initial={{ opacity: 0, scale: 0.8 }}
										whileInView={{ opacity: 1, scale: 1 }}
										viewport={{ once: true, amount: 0.5 }}
										transition={{
											duration: 0.3,
											delay: skillIndex * 0.05 + categoryIndex * 0.1,
										}}
									>
										<div className="w-16 h-16 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
											<img
												src={skill.icon}
												alt={skill.name}
												className="w-10 h-10 object-contain"
											/>
										</div>
										<p className="font-medium text-sm text-center">
											{skill.name}
										</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
