import { FaCode, FaGraduationCap, FaFolderOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import ProfileImg from "../assets/Person-coding-laptop-computer-desktop-desk-office.jpg";

const AboutMe = () => {
	return (
		<section id="about" className="py-16 px-4 md:px-20 bg-base-100">
			<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
				{/* Left - Profile Image */}
				<motion.div
					className="flex justify-center"
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ amount: 0.2 }}
					transition={{ duration: 0.2 }}
				>
					<img
						src={ProfileImg}
						alt="Profile"
						className="w-72 h-72 rounded-2xl shadow-lg object-cover"
					/>
				</motion.div>

				{/* Right - Text Content */}
				<motion.div
					className="space-y-6"
					initial={{ opacity: 0, x: 100 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ amount: 0.2 }}
					transition={{ duration: 0.2 }}
				>
					<h2 className="text-4xl font-bold text-center md:text-left mb-4 text-orange-500">
						About Me
					</h2>
					<p className="text-lg leading-relaxed text-center md:text-left">
						I’m DevTorh, a passionate full-stack developer specializing in the
						MERN stack. I build modern, scalable, and user-friendly web and
						mobile apps, from e-commerce stores to music platforms and voter
						systems. With a focus on clean design and performance, I turn ideas
						into reality using React, Node.js, MongoDB, and Tailwind CSS. Let’s
						build something amazing! 🚀
					</p>

					{/* Info Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
						{[
							{
								icon: <FaCode className="text-3xl text-blue-600 mb-2" />,
								title: "Languages",
								description: "HTML, CSS, JavaScript, React.js, Next.js",
							},
							{
								icon: (
									<FaGraduationCap className="text-3xl text-blue-600 mb-2" />
								),
								title: "Education",
								description: "B.Tech in Computer Science",
							},
							{
								icon: <FaFolderOpen className="text-3xl text-blue-600 mb-2" />,
								title: "Projects",
								description: "Built more than 5 projects",
							},
						].map((card, index) => (
							<motion.div
								key={index}
								className="bg-base-100 shadow-lg rounded-xl p-4 flex flex-col items-center border border-gray-200"
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ amount: 0.2 }}
								transition={{ duration: 0.2 }}
							>
								{card.icon}
								<h3 className="font-semibold">{card.title}</h3>
								<p className="text-sm text-gray-600 text-center">
									{card.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutMe;
