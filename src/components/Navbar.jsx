import { NavLink } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";

const themes = {
	winter: "winter",
	dracula: "dracula",
};

const getTheme = () => {
	return localStorage.getItem("theme") || themes.winter;
};

const Navbar = () => {
	const [theme, setTheme] = useState(getTheme());

	const handleTheme = () => {
		const { winter, dracula } = themes;
		const newTheme = theme === winter ? dracula : winter;
		document.documentElement.setAttribute("data-theme", newTheme);
		setTheme(newTheme);
	};

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<div className="w-full flex justify-center py-6 fixed top-0 z-50">
			{/* Pill-shaped navbar */}
			<nav className="bg-base-300 rounded-full px-8 py-2 flex items-center shadow-lg max-w-3xl w-full">
				{/* Navigation links - centered */}
				<div className="flex-1 flex justify-center gap-6">
					<NavLinks />
				</div>

				{/* Theme toggle - right side */}
				<div className="flex items-center">
					<label className="swap swap-rotate">
						<input type="checkbox" onChange={handleTheme} />
						<BsSunFill className="swap-on h-5 w-5" />
						<BsMoonFill className="swap-off h-5 w-5" />
					</label>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
