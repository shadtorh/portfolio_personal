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

const skills = [
	{ name: "HTML", icon: HTML },
	{ name: "CSS", icon: CSS },
	{ name: "Tailwind CSS", icon: TAILWIND },
	{ name: "Next.js", icon: NEXTJS },
	{ name: "JavaScript", icon: JS },
	{ name: "TypeScript", icon: TYPESCRIPT },
	{ name: "React", icon: REACT },
	{ name: "Node.js", icon: NODE },
	{ name: "GitHub", icon: GITHUB },
	{ name: "PostgreSQL", icon: POSTGRESQL },
	{ name: "Express.js", icon: EXPRESS },
	{ name: "MongoDB", icon: MONGO_DB },
	{ name: "React Native", icon: REACT_NATIVE },
	{ name: "Expo", icon: EXPO },
	{ name: "Prisma", icon: PRISMA },
];

const Skills = () => {
	return (
		<section id="skills" className="py-12 bg-base-200 mx-auto md:p-8">
			<div className="text-center">
				<h3 className="text-3xl font-bold text-primary mb-4">MY SKILLS</h3>
				<p className="text-gray-600">Technologies I work with</p>
			</div>

			<div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 px-4">
				{skills.map((skill, index) => (
					<motion.div
						key={index}
						className="flex flex-col items-center p-2 bg-base-100 shadow-md rounded-md hover:shadow-lg transition-all duration-300"
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ amount: 0.5 }} // Triggers animation every time 50% of the section is visible
						transition={{ duration: 0.3, delay: index * 0.1 }}
					>
						<img src={skill.icon} alt={skill.name} className="w-7 h-7" />
						<p className="mt-1 font-medium text-[10px] text-center">
							{skill.name}
						</p>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Skills;
