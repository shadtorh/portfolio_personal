import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
	FaDribbble,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import HeroImage from "../assets/HeroImage.svg";

const Hero = () => {
	return (
		<section
			id="home"
			className="h-screen flex flex-col lg:flex-row items-center justify-between px-10 lg:px-20 py-16 bg-base-400"
		>
			{/* Left Side: Image (Hidden on small screens) */}
			<div className="hidden lg:block w-1/2">
				<img
					src={HeroImage}
					alt="Developer"
					className="w-full max-w-md mx-auto"
				/>
			</div>

			{/* Right Side: Content */}
			<div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
				<h1 className="text-7xl font-bold tracking-wider text-primary">
					I'm Shad
				</h1>

				<p className="text-gray-600">
					Helping design your business and personal websites built with your
					demand using HTML, React, and TailwindCSS. Click the demo work button
					to see my previous projects.
				</p>

				{/* Social Media Icons */}
				<div className="flex justify-center lg:justify-start space-x-4">
					<a
						href="#"
						className="text-white bg-orange-500 p-3 rounded-full hover:bg-orange-600"
					>
						<FaFacebookF size={20} />
					</a>
					<a
						href="#"
						className="text-white bg-orange-500 p-3 rounded-full hover:bg-orange-600"
					>
						<FaTwitter size={20} />
					</a>
					<a
						href="#"
						className="text-white bg-orange-500 p-3 rounded-full hover:bg-orange-600"
					>
						<FaLinkedinIn size={20} />
					</a>
					<a
						href="#"
						className="text-white bg-orange-500 p-3 rounded-full hover:bg-orange-600"
					>
						<FaInstagram size={20} />
					</a>
					<a
						href="#"
						className="text-white bg-orange-500 p-3 rounded-full hover:bg-orange-600"
					>
						<FaDribbble size={20} />
					</a>
				</div>

				{/* Buttons */}
				<div className="flex justify-center lg:justify-start space-x-4 mt-6">
					<button className="px-6 py-3 text-white bg-gray-800 rounded-lg hover:bg-gray-900">
						Know More
					</button>
					<button className="px-6 py-3 text-white bg-orange-500 rounded-lg hover:bg-orange-600">
						Demo Work
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
