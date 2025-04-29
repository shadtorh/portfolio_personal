import { motion } from "framer-motion";
import ProfileImg from "../assets/Shad.jpg";

const AboutMe = () => {
	return (
		<section id="about" className="py-20 px-4 bg-base-200 text-base-content">
			<div className="container mx-auto max-w-7xl">
				<div className="flex flex-col lg:flex-row items-center gap-12">
					{/* Left - Profile Image */}
					<motion.div
						className="w-full lg:w-1/2 flex justify-center"
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 0.2 }}
						transition={{ duration: 0.5 }}
					>
						<img
							src={ProfileImg}
							alt="Profile"
							className="w-full max-w-md h-auto rounded-3xl shadow-2xl object-cover"
						/>
					</motion.div>

					{/* Right - Text Content */}
					<motion.div
						className="w-full lg:w-1/2 space-y-6"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 0.2 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-4xl font-bold mb-6 text-primary">About Me</h2>
						<p className="text-lg leading-relaxed">
							Hi, I&apos;m Shad — a passionate Full Stack Developer who loves
							building thoughtful, high-performing web and mobile applications.
							I specialize in creating seamless user experiences using
							technologies like React, Next.js, React Native, Node.js, Express,
							PostgreSQL, MySQL, and Mongoose.
						</p>
						<p className="text-lg leading-relaxed">
							I enjoy bringing both the frontend and backend together to build
							complete, scalable solutions. Right now, I&apos;m focused on
							developing full-stack projects that bridge design and
							functionality, helping users and businesses connect in smarter
							ways.
						</p>
						<p className="text-lg leading-relaxed">
							When I&apos;m not coding, you&apos;ll find me exploring new
							technologies, solving challenging problems, and continuously
							leveling up my skills. I&apos;m excited to bring my creativity,
							technical skills, and dedication to a forward-thinking team.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
