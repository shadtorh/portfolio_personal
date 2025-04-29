import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios"; // Import axios
import "react-toastify/dist/ReactToastify.css";

const API = import.meta.env.VITE_API_URL;

// Updated sendEmail function using axios
const sendEmail = async (formData) => {
	try {
		// Fix URL format and use API variable
		const response = await axios.post(`${API}/send-email`, formData, {
			headers: {
				"Content-Type": "application/json",
			},
		});

		// Axios automatically parses JSON responses
		return response.data;
	} catch (error) {
		console.error("Error sending email:", error);

		// Handle axios specific errors
		if (error.response) {
			// The server responded with a status code outside 2xx range
			throw new Error(`Server error: ${error.response.status}`);
		} else if (error.request) {
			// The request was made but no response was received
			throw new Error(
				"No response from server. Please check if the server is running."
			);
		} else {
			// Something happened in setting up the request
			throw error;
		}
	}
};

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) {
			toast.error("Please fill in all fields.");
			return;
		}
		setIsLoading(true);

		try {
			const data = await sendEmail(formData);
			if (data.success) {
				toast.success("Email sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			} else {
				toast.error(
					data.message || "Failed to send email. Please try again later."
				);
			}
		} catch (error) {
			console.error("Error sending email:", error);
			toast.error(
				error.message ||
					"An error occurred while sending the email. Please try again later."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div
			id="contact"
			className="min-h-screen flex items-center bg-base-200 text-base-content"
		>
			<section className="py-16 px-6 max-w-6xl mx-auto w-full">
				{/* Section Title */}
				<motion.h2
					className="text-5xl font-extrabold text-center mb-8"
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
							<span className="text-3xl bg-primary text-primary-content p-3 rounded-full shadow-lg">
								<FaPhoneAlt />
							</span>
							<p className="text-lg font-semibold">+1 484 830 2977</p>
						</div>

						<div className="flex items-center space-x-4">
							<span className="text-3xl bg-primary text-primary-content p-3 rounded-full shadow-lg">
								<FaEnvelope />
							</span>
							<p className="text-lg font-semibold">shadtorh90@gmail.com</p>
						</div>
					</motion.div>

					{/* Right Side - Contact Form */}
					<motion.form
						className="space-y-6 bg-base-100 text-base-content p-8 rounded-xl shadow-lg w-full max-w-md mx-auto"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ duration: 0.8 }}
						onSubmit={handleSubmit}
					>
						<div>
							<label className="block font-semibold mb-2">
								What's your name?
							</label>
							<input
								required
								name="name"
								value={formData.name}
								onChange={handleChange}
								type="text"
								placeholder="e.g. John Doe"
								className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>

						<div>
							<label className="block font-semibold mb-2">
								What's your email?
							</label>
							<input
								type="email"
								required
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="e.g. john.doe@gmail.com"
								className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>

						<div>
							<label className="block font-semibold mb-2">
								What are you reaching out about?
							</label>
							<textarea
								rows="4"
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Enter your message here..."
								className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
							></textarea>
						</div>

						<button
							type="submit"
							disabled={isLoading}
							className={`w-full bg-primary text-primary-content cursor-pointer font-bold py-3 rounded-lg hover:bg-primary-focus transition ${
								isLoading ? "opacity-50 cursor-not-allowed" : ""
							}`}
						>
							{isLoading ? "Sending..." : "Send Message"}
						</button>
					</motion.form>
				</div>
			</section>
		</div>
	);
};

export default ContactForm;
