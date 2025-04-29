import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { toast } from "react-toastify"; // Import toast for notifications
import "react-toastify/dist/ReactToastify.css";

const API = import.meta.env.VITE_API_URL; // Import API URL from environment variables

// Function to send form data to the server
const sendEmail = async (formData) => {
	try {
		const response = await fetch(`${API}/send-email`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});
		const data = await response.json();
		return data; // Return the response data
	} catch (error) {
		console.error("Error sending email:", error);
		throw error; // Throw the error to handle it in the calling function
	}
};

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false); // State to manage loading status
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target; // Correctly destructure 'name' and 'value'
		setFormData({ ...formData, [name]: value }); // Update the specific field in formData
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.name || !formData.email || !formData.message) {
			toast.error("Please fill in all fields.");
			return;
		}
		setIsLoading(true); // Set loading state to true

		try {
			const data = await sendEmail(formData); // Call the sendEmail function
			if (data.success) {
				toast.success("Email sent successfully!");
				setFormData({ name: "", email: "", message: "" }); // Clear form fields
			} else {
				toast.error("Failed to send email. Please try again later.");
			}
		} catch (error) {
			console.error("Error sending email:", error);
			toast.error(
				"An error occurred while sending the email. Please try again later."
			);
		} finally {
			setIsLoading(false); // Set loading state to false
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
							disabled={isLoading} // Disable button while loading
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
