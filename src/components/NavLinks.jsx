import { Link } from "react-scroll";

const links = [
	{ id: 1, url: "home", text: "Home" },
	{ id: 2, url: "skills", text: "Skills" },
	{ id: 4, url: "about", text: "About" },
	{ id: 5, url: "services", text: "Services" },
	{ id: 3, url: "projects", text: "Projects" },
	{ id: 6, url: "contact", text: "Contact" },
];

const NavLinks = () => {
	return (
		<>
			{links.map(({ id, url, text }) => (
				<Link
					key={id}
					smooth={true}
					duration={500}
					to={url}
					className="font-medium text-base-content hover:text-primary transition-colors duration-300 cursor-pointer px-2"
				>
					{text}
				</Link>
			))}
		</>
	);
};

export default NavLinks;
