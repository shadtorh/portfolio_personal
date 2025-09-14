// export const skills = [
// 	{ name: "HTML", icon: require("./assets/icons/html-1.svg") },
// 	// { name: "CSS", icon: "/icons/css.png" },
// 	// { name: "JavaScript", icon: "/icons/javascript.png" },
// 	// { name: "Bootstrap", icon: "/icons/bootstrap.png" },
// 	// { name: "jQuery", icon: "/icons/jquery.png" },
// 	// { name: "SASS", icon: "/icons/sass.png" },
// 	// { name: "WordPress", icon: "/icons/wordpress.png" },
// 	// { name: "React", icon: "/icons/react.png" },
// 	// { name: "GitHub", icon: "/icons/github.png" },
// 	// { name: "VS Code", icon: "/icons/vscode.png" },
// 	// { name: "Photoshop", icon: "/icons/photoshop.png" },
// 	// { name: "Illustrator", icon: "/icons/illustrator.png" },
// ];
import projectImage1 from "./assets/E-COMMERCES.jpg";
import projectImage2 from "./assets/JOBCONNECTS.jpg";
// import project3Image from "./assets/Person-coding-laptop-computer-desktop-desk-office.jpg";

export const projects = [
	{
		id: 1,
		title: "E-Commerce Platform",
		category: "Web Applications",
		tags: [
			"React",
			"Node.js",
			"MongoDB",
			"Stripe",
			"Tailwind CSS",
			"JWT",
			"Express",
			"Framer Motion",
		],
		image: projectImage1, // Path to the video file
		link: "https://github.com/shadtorh/e-commerce_store-web-app",
		demoLink: "https://e-commerce-store-web-app-brown.vercel.app",
		description: `
					Torh Mart | Full-Stack E-Commerce Platform with React, Node.js & Stripe Integration
					I developed a comprehensive e-commerce solution featuring a responsive React frontend and robust Node.js backend. This full-stack application delivers a seamless shopping experience with secure authentication, real-time analytics, and integrated payment processing.

					Technologies Used:

					Frontend: React, Tailwind CSS, Framer Motion, Zustand for state management
					Backend: Node.js, Express.js, MongoDB, JWT authentication
					Payments: Stripe payment gateway with custom checkout flow
					Deployment: Vercel (frontend), backend hosted with continuous integration
					Key Features:

					Responsive design optimized for all devices with intuitive UI/UX
					Secure JWT-based authentication with protected routes
					Comprehensive product catalog with filtering and search functionality
					Real-time inventory management system
					Interactive analytics dashboard with sales metrics and data visualization
					Admin panel for product, user, and order management
					Custom coupon system with automatic discount calculation
					Stripe payment integration with custom success/failure handling
					Cart persistence across sessions
					This project demonstrates my ability to create production-ready applications with modern web technologies while implementing best practices for security, performance, and user experience.`,
	},
	{
		id: 2,
		title: "JobConnect",
		category: "Web Applications",
		tags: [
			"React",
			"Node.js",
			"PostgreSQL",
			"Express",
			"Tailwind CSS",
			"VAPI AI",
			"JWT",
			"Gemini AI",
		],
		image: projectImage2,
		link: "https://example.com/project2",
		demoLink: "https://jobconnect-eight.vercel.app",
		description: `JobConnect is a modern full-stack web application built to simplify and enhance the hiring process for both recruiters and job seekers. It offers a streamlined platform where recruiters can easily post, update, close, and manage job listings, as well as review, accept, or reject applications efficiently.
		On the other side, job seekers can search for available opportunities, apply directly through the platform, and even take AI-powered mock interviews tailored to job descriptions using VAPI AI technology, helping them better prepare for real interviews.

		The application is built with React for the frontend, Node.js and Express for the backend, and PostgreSQL for database management.

		JobConnect aims to modernize traditional recruitment methods by reducing hiring friction, improving candidate readiness, and creating a smoother experience for both employers and applicants.`,
	},

];
