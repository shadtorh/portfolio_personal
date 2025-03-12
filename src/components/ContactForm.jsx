import React from "react";

const ContactForm = () => {
	return (
		<div id="contact" className="bg-base-300 ">
			<section className="bg-base-300 py-12 px-6 max-w-6xl mx-auto">
				<h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
				<p className="text-gray-600 text-center mb-10">
					Let's connect! Fill out the form or reach out via phone or email.
				</p>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Left Side - Contact Info */}
					<div className="space-y-6">
						<div className="flex items-center space-x-4">
							<span className="text-2xl text-gray-500"> 📞 </span>
							<p className="text-lg font-semibold text-gray-700">
								+1 484 830 2977
							</p>
						</div>

						<div className="flex items-center space-x-4">
							<span className="text-2xl text-gray-500">✉️</span>
							<p className="text-lg font-semibold text-gray-700">
								contact@shadtorh.com
							</p>
						</div>
					</div>

					{/* Right Side - Contact Form */}
					<form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md">
						<div>
							<label className="block font-semibold text-gray-700">
								What's your name?
							</label>
							<input
								type="text"
								placeholder="e.g. John Doe"
								className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
						</div>

						<div>
							<label className="block font-semibold text-gray-700">
								What's your email?
							</label>
							<input
								type="email"
								placeholder="e.g. john.doe@gmail.com"
								className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
						</div>

						<div>
							<label className="block font-semibold text-gray-700">
								What are you reaching out about?
							</label>
							<textarea
								rows="4"
								placeholder="Enter your message here..."
								className="w-full mt-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
							></textarea>
						</div>

						<button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition">
							Send Message
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default ContactForm;
