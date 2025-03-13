import React from "react";
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
				<h3 className="text-2xl font-semibold ">MY SKILLS</h3>
				{/* <h2 className="text-2xl font-bold text-gray-800">
					Expert in this technical <br /> web software
				</h2> */}
			</div>

			<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 hover:cursor-pointer">
				{skills.map((skill, index) => (
					<div
						key={index}
						className="flex flex-col items-center p-4 bg-base-100 shadow-sm rounded-lg hover:scale-105 transition transform duration-300 "
					>
						<img src={skill.icon} alt={skill.name} className="w-12 h-12" />
						<p className="mt-2 font-medium">{skill.name}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
