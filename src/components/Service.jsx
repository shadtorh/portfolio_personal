import {
	FaGlobe,
	FaMobileAlt,
	FaBezierCurve,
	FaPaintBrush,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaDatabase } from "react-icons/fa6";

const services = [
	{
		id: 1,
		title: "Full Stack Web & Mobile Development",
		description: `I build complete, production-ready websites and mobile apps using React, Next.js, React Native, Node.js, and modern databases.`,
		icon: <FaGlobe />,
		color: "primary",
	},
	{
		id: 2,
		title: "Database Architecture & Optimization",
		description: `I create and optimize databases (PostgreSQL, MySQL, MongoDB) to ensure your applications are fast, reliable, and scalable.`,
		icon: <FaDatabase />,
		color: "secondary",
	},
	{
		id: 3,
		title: "Custom API & Backend Solutions",
		description: `I design secure, scalable APIs and backend systems to power complex applications and connect services seamlessly.`,
		icon: <FaBezierCurve />,
		color: "accent",
	},
	{
		id: 4,
		title: "UI/UX-Focused Frontend Development",
		description: `I turn great designs into clean, fast, and accessible user interfaces that deliver an outstanding user experience.`,
		icon: <FaPaintBrush />,
		color: "primary",
	},
];

const Service = () => {
	return (
		<section id="services" className="py-20 px-6 bg-base-100">
			<div className="max-w-6xl mx-auto">
				{/* Section Header */}
				<div className="text-center mb-16">
					<div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
					<motion.h2
						className="text-4xl font-bold mb-4"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
					>
						Services I Offer
					</motion.h2>

					<motion.p
						className="text-base-content/70 max-w-2xl mx-auto text-lg"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						I leverage modern technologies to deliver high-quality solutions
						that solve real business problems.
					</motion.p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							className="bg-base-100 rounded-xl shadow-lg border border-base-300 hover:border-primary transition-all overflow-hidden"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							whileHover={{
								y: -5,
								boxShadow:
									"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
							}}
						>
							{/* Colorful Top Bar */}
							<div className={`h-2 bg-${service.color}`}></div>

							<div className="p-6">
								{/* Icon with Circular Background */}
								<div className="mx-auto mb-5 bg-base-200 w-16 h-16 rounded-full flex items-center justify-center">
									<span className={`text-${service.color} text-3xl`}>
										{service.icon}
									</span>
								</div>

								{/* Service Title */}
								<h3 className="text-xl font-bold mb-3 text-center">
									{service.title}
								</h3>

								{/* Service Description */}
								<p className="text-base-content/70 leading-relaxed">
									{service.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Service;
