import {
	FaGlobe,
	FaMobileAlt,
	FaBezierCurve,
	FaPaintBrush,
} from "react-icons/fa";

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
			<h2 className="text-4xl font-bold mb-4">My Services</h2>
			<p className="text-gray-600 max-w-2xl mx-auto">
				I am a frontend developer with 10 years of experience in multiple
				companies like Microsoft, Tesla, and Apple.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
				{services.map((service) => (
					<div
						key={service.id}
						className={`p-6 rounded-xl border transition-all "bg-purple-100 border-black" : "border-gray-200"
						} hover:shadow-lg hover:scale-105`}
					>
						<div className="text-pink-500 text-3xl mb-4">{service.icon}</div>
						<h3 className="text-xl font-semibold">{service.title}</h3>
						<p className="text-gray-500 text-sm mt-2">{service.description}</p>
						{/* <button className="text-pink-500 mt-4 flex items-center gap-1">
							Read more →
						</button> */}
					</div>
				))}
			</div>
		</section>
	);
};

export default Service;
