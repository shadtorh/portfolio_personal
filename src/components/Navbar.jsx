import { NavLink } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
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
		<nav className=" bg-base-200 sticky top-0 z-50 ">
			<div className="navbar align-element">
				<div className="navbar-start">
					{/* Title */}
					<NavLink to="/" className="hidden md:flex text-3xl items-center ">
						<h1 className="text-3xl font-bold text-orange-500">DevTorh</h1>
					</NavLink>
					{/* DROPDOWN */}
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost md:hidden">
							<FaBarsStaggered className="h-6 w-6" />
						</label>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-200 rounded-box w-52"
						>
							<NavLinks />
						</ul>
					</div>
				</div>

				<div className="navbar-center  hidden md:flex ">
					<ul className="menu menu-horizontal px-1">
						<NavLinks />
					</ul>
				</div>

				<div className="navbar-end">
					{/* THEME ICONS */}
					<label className="swap swap-rotate ">
						{/* this hidden checkbox controls the state */}
						<input type="checkbox" onChange={handleTheme} />

						{/* sun icon */}
						<BsSunFill className="swap-on h-4 w-4" />

						{/* moon icon */}
						<BsMoonFill className="swap-off h-4 w-4" />
					</label>
					{/* CART LINK*/}
					<a
						href="/SHAD_RESUME.pdf"
						download="SHAD_RESUME.pdf"
						className=" text-primary px-4 py-2 rounded-lg font-medium hover:bg-base-200 hover:text-primary hover:cursor-pointer hover:scale-105 hover:duration-300"
					>
						Download CV
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
