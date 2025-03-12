import { FaCode, FaGraduationCap, FaFolderOpen } from "react-icons/fa";
import ProfileImg from "../assets/Person-coding-laptop-computer-desktop-desk-office.jpg";
// import {
// 	SiVisualstudiocode,
// 	SiFirebase,
// 	SiMongodb,
// 	SiFigma,
// 	SiGit,
// } from "react-icons/si";

const AboutMe = () => {
	return (
		<section id="about" className="py-16 px-4 md:px-20 bg-base-300">
			<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
				{/* Left - Profile Image */}
				<div className="flex justify-center">
					<img
						src={ProfileImg} // Replace with actual image path
						alt="Profile"
						className="w-72 h-72 rounded-2xl shadow-lg object-cover"
					/>
				</div>

				{/* Right - Text Content */}
				<div>
					<h2 className="text-4xl font-bold text-center md:text-left mb-4 text-orange-500">
						About Me
					</h2>
					<p className="text-lg leading-relaxed text-center md:text-left">
						I am an experienced Frontend Developer with over a decade of
						professional expertise in the field. Throughout my career, I have
						had the privilege of collaborating with prestigious organizations,
						contributing to their success and growth.
					</p>

					{/* Info Cards */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
						<div className="bg-base-100 shadow-lg rounded-xl p-4 flex flex-col items-center border border-gray-200">
							<FaCode className="text-3xl text-blue-600 mb-2" />
							<h3 className="font-semibold">Languages</h3>
							<p className="text-sm text-gray-600 text-center">
								HTML, CSS, JavaScript, React.js, Next.js
							</p>
						</div>
						<div className="bg-base-100 shadow-lg rounded-xl p-4 flex flex-col items-center border border-gray-200">
							<FaGraduationCap className="text-3xl text-blue-600 mb-2" />
							<h3 className="font-semibold">Education</h3>
							<p className="text-sm text-gray-600 text-center underline cursor-pointer">
								B.Tech in Computer Science
							</p>
						</div>
						<div className="bg-base-100 shadow-lg rounded-xl p-4 flex flex-col items-center border border-gray-200">
							<FaFolderOpen className="text-3xl text-blue-600 mb-2" />
							<h3 className="font-semibold">Projects</h3>
							<p className="text-sm text-gray-600 text-center">
								Built more than 5 projects
							</p>
						</div>
					</div>

					{/* Tools */}
					{/* <div className="mt-6">
						<h4 className="text-lg font-semibold">Tools I use</h4>
						<div className="flex space-x-4 mt-3">
							{[SiVisualstudiocode, SiFirebase, SiMongodb, SiFigma, SiGit].map(
								(Icon, index) => (
									<div
										key={index}
										className="p-3 border rounded-lg shadow-md bg-white flex items-center justify-center"
									>
										<Icon className="text-2xl text-gray-700" />
									</div>
								)
							)}
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
