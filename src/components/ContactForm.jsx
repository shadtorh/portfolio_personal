import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
	return (
		<div id="contact" className="bg-base-100  flex items-center">
			<section className="py-16 px-6 max-w-6xl mx-auto w-full">
				{/* Section Title */}
				<motion.h2
					className="text-5xl text-center mb-8"
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.5 }}
					transition={{ duration: 0.8 }}
				>
					Contact Me
				</motion.h2>

				{/* Section Description */}
				<motion.p
					className="text-lg text-center mb-12"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.5 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					Let's connect! Fill out the form or reach out via phone or email. I’d
					love to hear from you!
				</motion.p>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Left Side - Contact Info */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ duration: 0.8 }}
					>
						<div className="flex items-center space-x-4">
							<span className="text-3xl bg-secondary p-3 rounded-full shadow-lg">
								<FaPhoneAlt />
							</span>
							<p className="text-lg font-semibold text-accent">
								+1 484 830 2977
							</p>
						</div>

						<div className="flex items-center space-x-4">
							<span className="text-3xl  bg-secondary p-3 rounded-full shadow-lg">
								<FaEnvelope />
							</span>
							<p className="text-lg font-semibold text-accent">
								contact@shadtorh.com
							</p>
						</div>
					</motion.div>

					{/* Right Side - Contact Form */}
					<motion.form
						className="space-y-4 bg-base-200 p-6 rounded-lg shadow-md w-full max-w-md mx-auto"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ duration: 0.8 }}
					>
						<div>
							<label className="block font-semibold mb-1 text-sm">
								What's your name?
							</label>
							<input
								type="text"
								placeholder="e.g. John Doe"
								className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
							/>
						</div>

						<div>
							<label className="block font-semibold mb-1 text-sm">
								What's your email?
							</label>
							<input
								type="email"
								placeholder="e.g. john.doe@gmail.com"
								className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
							/>
						</div>

						<div>
							<label className="block font-semibold mb-1 text-sm">
								What are you reaching out about?
							</label>
							<textarea
								rows="3"
								placeholder="Enter your message here..."
								className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
							></textarea>
						</div>

						<button className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition text-sm">
							Send Message
						</button>
					</motion.form>
				</div>
			</section>
		</div>
	);
};

export default ContactForm;
