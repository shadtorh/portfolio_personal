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
import project3Image from "./assets/Person-coding-laptop-computer-desktop-desk-office.jpg";
import project4Image from "./assets/Person-coding-laptop-computer-desktop-desk-office.jpg";

export const projects = [
	{
		id: 1,
		title: "E-Commerce Platform",
		category: "Web Applications",
		image: projectImage1, // Path to the video file
		link: "https://github.com/shadtorh/e-commerce_store-web-app",
		demoLink: "https://e-commerce-store-web-app-brown.vercel.app",
		description: "A modern e-commerce platform built with MERN stack...",
	},
	{
		id: 2,
		title: "JobConnect",
		category: "Web Applications",
		image: projectImage2,
		link: "https://example.com/project2",
		demoLink: "https://jobconnect-eight.vercel.app",
		description:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolores!Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley ",
	},
	{
		id: 3,
		title: "Photography Site",
		category: "web design",
		image: project3Image,
		link: "https://example.com/project3",
		demoLink: "https://example.com/project3",
		description:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galleyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
	},
];
