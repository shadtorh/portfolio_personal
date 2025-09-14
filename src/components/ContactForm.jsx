import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaLinkedinIn,
	FaGithub,
} from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:3001";

// Updated sendEmail function using axios
const sendEmail = async (formData) => {
	try {
		const response = await axios.post(`${API}/send-email`, formData, {
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.data;
	} catch (error) {
		console.error("Error sending email:", error);

		if (error.response) {
			throw new Error(`Server error: ${error.response.status}`);
		} else if (error.request) {
			throw new Error(
				"No response from server. Please check if the server is running."
			);
		} else {
			throw error;
		}
	}
};

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [formErrors, setFormErrors] = useState({});
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const validateForm = () => {
		const errors = {};
		if (!formData.name.trim()) errors.name = "Name is required";
		if (!formData.email.trim()) errors.email = "Email is required";
		else if (!/^\S+@\S+\.\S+$/.test(formData.email))
			errors.email = "Please enter a valid email";
		if (!formData.message.trim()) errors.message = "Message is required";

		setFormErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });

		// Clear error when user starts typing
		if (formErrors[name]) {
			setFormErrors({
				...formErrors,
				[name]: null,
			});
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			toast.error("Please fill all required fields correctly.");
			return;
		}

		setIsLoading(true);

		try {
			const data = await sendEmail(formData);
			if (data.success) {
				setIsSuccess(true);
				toast.success("Message sent successfully! I'll get back to you soon.");
				setFormData({ name: "", email: "", message: "" });

				// Reset success state after 5 seconds
				setTimeout(() => setIsSuccess(false), 5000);
			} else {
				toast.error(
					data.message || "Failed to send email. Please try again later."
				);
			}
		} catch (error) {
			console.error("Error sending email:", error);
			toast.error(
				error.message ||
					"An error occurred while sending the message. Please try again later."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div
			id="contact"
			className="min-h-screen flex items-center bg-base-200 text-base-content py-20"
		>
			<section className="px-6 max-w-6xl mx-auto w-full">
				{/* Section Title with Accent Bar */}
				<div className="text-center mb-16">
					<div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
					<motion.h2
						className="text-5xl font-extrabold mb-4"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ duration: 0.8 }}
					>
						Get In Touch
					</motion.h2>

					<motion.p
						className="text-lg opacity-80 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Let's connect! Feel free to reach out if you have a question or just
						want to say hi.
					</motion.p>
				</div>

				<div className="grid md:grid-cols-5 gap-8 items-start">
					{/* Left Side - Contact Info Card */}
					<motion.div
						className="md:col-span-2 bg-base-100 rounded-2xl shadow-lg p-8 h-full"
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ duration: 0.8 }}
					>
						<h3 className="text-2xl font-bold mb-6">Contact Information</h3>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<span className="text-xl bg-primary/10 text-primary p-3 rounded-full">
									<FaMapMarkerAlt />
								</span>
								<div>
									<h4 className="font-semibold">Location</h4>
									<p className="opacity-75">Pennsylvania, USA</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<span className="text-xl bg-primary/10 text-primary p-3 rounded-full">
									<FaPhoneAlt />
								</span>
								<div>
									<h4 className="font-semibold">Phone</h4>
									<p className="opacity-75">+1 484 830 2977</p>
								</div>
							</div>

							<div className="flex items-start space-x-4">
								<span className="text-xl bg-primary/10 text-primary p-3 rounded-full">
									<FaEnvelope />
								</span>
								<div>
									<h4 className="font-semibold">Email</h4>
									<p className="opacity-75 break-words">shadtorh90@gmail.com</p>
								</div>
							</div>

							<div className="pt-6 border-t">
								<h4 className="font-semibold mb-3">Connect With Me</h4>
								<div className="flex space-x-3">
									<a
										href="https://linkedin.com/in/shad-torh-9a2ab2352"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-circle btn-sm btn-primary"
										aria-label="LinkedIn Profile"
									>
										<FaLinkedinIn />
									</a>
									<a
										href="https://github.com/shadtorh"
										target="_blank"
										rel="noopener noreferrer"
										className="btn btn-circle btn-sm btn-primary"
										aria-label="GitHub Profile"
									>
										<FaGithub />
									</a>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Side - Contact Form */}
					<motion.div
						className="md:col-span-3"
						initial={{ opacity: 0, x: 100 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ amount: 0.5 }}
						transition={{ duration: 0.8 }}
					>
						{isSuccess ? (
							<div className="bg-base-100 rounded-2xl p-8 shadow-lg text-center">
								<div className="text-5xl text-success mb-4">✓</div>
								<h3 className="text-2xl font-bold mb-2">Thank You!</h3>
								<p className="text-lg mb-6">
									Your message has been sent successfully.
								</p>
								<p className="opacity-75">
									I'll get back to you as soon as possible.
								</p>
								<button
									onClick={() => setIsSuccess(false)}
									className="btn btn-primary mt-4"
								>
									Send Another Message
								</button>
							</div>
						) : (
							<form
								className="space-y-6 bg-base-100 p-8 rounded-2xl shadow-lg"
								onSubmit={handleSubmit}
							>
								<h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

								<div className="form-control w-full">
									<label className="label">
										<span className="label-text font-medium">Your Name</span>
									</label>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="John Doe"
										className={`input input-bordered w-full ${formErrors.name ? "input-error" : ""}`}
									/>
									{formErrors.name && (
										<label className="label">
											<span className="label-text-alt text-error">
												{formErrors.name}
											</span>
										</label>
									)}
								</div>

								<div className="form-control w-full">
									<label className="label">
										<span className="label-text font-medium">Your Email</span>
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="john.doe@example.com"
										className={`input input-bordered w-full ${formErrors.email ? "input-error" : ""}`}
									/>
									{formErrors.email && (
										<label className="label">
											<span className="label-text-alt text-error">
												{formErrors.email}
											</span>
										</label>
									)}
								</div>

								<div className="form-control w-full">
									<label className="label">
										<span className="label-text font-medium">Your Message</span>
									</label>
									<textarea
										name="message"
										value={formData.message}
										onChange={handleChange}
										rows="5"
										placeholder="Type your message here..."
										className={`textarea textarea-bordered w-full ${formErrors.message ? "textarea-error" : ""}`}
									></textarea>
									{formErrors.message && (
										<label className="label">
											<span className="label-text-alt text-error">
												{formErrors.message}
											</span>
										</label>
									)}
								</div>

								<button
									type="submit"
									disabled={isLoading}
									className={`btn btn-primary w-full ${isLoading ? "loading" : ""}`}
								>
									{isLoading ? "Sending..." : "Send Message"}
								</button>
							</form>
						)}
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default ContactForm;
