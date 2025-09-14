import { Link } from "react-scroll";

const links = [
	{ id: 1, url: "home", text: "Home" },
	{ id: 2, url: "about", text: "About" },
	{ id: 3, url: "skills", text: "Skills" },
	{ id: 4, url: "services", text: "Services" },
	{ id: 5, url: "projects", text: "Projects" },
	{ id: 6, url: "contact", text: "Contact" },
];

const NavLinks = ({ setIsMenuOpen }) => {
	const handleClick = () => {
		// Only close menu if setIsMenuOpen prop exists
		if (setIsMenuOpen) {
			setTimeout(() => {
				setIsMenuOpen(false);
			}, 200); // Small delay to allow scroll to begin
		}
	};

	return (
		<>
			{links.map(({ id, url, text }) => (
				<Link
					key={id}
					smooth={true}
					duration={500}
					to={url}
					className="font-medium text-base-content hover:text-primary transition-colors duration-300 cursor-pointer px-4 py-2 rounded-full hover:bg-base-200"
					onClick={handleClick}
				>
					{text}
				</Link>
			))}
		</>
	);
};

export default NavLinks;
