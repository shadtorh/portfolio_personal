import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-base-200 py-6 text-gray-500 text-sm">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
				<p>© 2025 Shad. All rights reserved.</p>

				{/* Social Media Icons */}
				<div className="flex space-x-4 text-xl">
					<a
						href="http://linkedin.com/in/shad-torh-9a2ab2352"
						target="_blank"
						className="hover:text-gray-700"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/shadtorh"
						target="_blank"
						className="hover:text-gray-700"
					>
						<FaGithub />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
