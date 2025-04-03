import {
	FaGlobe,
	FaMobileAlt,
	FaBezierCurve,
	FaPaintBrush,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
	{
		id: 1,
		title: "Web design",
		description: "Web development is the process of building, programming...",
		icon: <FaGlobe />,
	},
	{
		id: 2,
		title: "Mobile app",
		description: "Web development is the process of building, programming...",
		icon: <FaMobileAlt />,
	},
	{
		id: 3,
		title: "UI/UX design",
		description: "Web development is the process of building, programming...",
		icon: <FaBezierCurve />,
	},
	{
		id: 4,
		title: "Graphics design",
		description: "Web development is the process of building, programming...",
		icon: <FaPaintBrush />,
	},
];

const Service = () => {
	return (
		<section id="services" className="py-12 px-6 text-center">
			{/* Section Title */}
			<motion.h2
				className="text-4xl font-bold mb-4"
				initial={{ opacity: 0, y: -50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.2 }}
				transition={{ duration: 0.2 }}
			>
				My Services
			</motion.h2>

			{/* Section Description */}
			<motion.p
				className="text-gray-600 max-w-2xl mx-auto"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.2 }}
				transition={{ duration: 0.2, delay: 0.1 }}
			>
				I am a frontend developer with 10 years of experience in multiple
				companies like Microsoft, Tesla, and Apple.
			</motion.p>

			{/* Services Grid */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ amount: 0.2 }}
				transition={{ duration: 0.2, delay: 0.1 }}
			>
				{services.map((service, index) => (
					<motion.div
						key={service.id}
						className="p-6 rounded-xl border border-gray-200 hover:shadow-lg hover:scale-105 transition-all"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ amount: 0.2 }}
						transition={{ duration: 0.2, delay: index * 0.1 }}
					>
						<div className="text-pink-500 text-3xl mb-4">{service.icon}</div>
						<h3 className="text-xl font-semibold">{service.title}</h3>
						<p className="text-gray-500 text-sm mt-2">{service.description}</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Service;
