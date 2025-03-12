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
				<li key={id}>
					<Link
						smooth={true}
						duration={500}
						to={url}
						className={({ isActive }) =>
							`capitalize px-4 py-2 rounded-md transition duration-300 ${
								isActive
									? "text-primary font-semibold border-b-2 border-primary"
									: "text-gray-600 hover:text-primary"
							}`
						}
					>
						{text}
					</Link>
				</li>
			))}
		</>
	);
};

export default NavLinks;
