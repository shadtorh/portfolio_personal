import { NavLink } from "react-router-dom";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState, useRef } from "react";
import NavLinks from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";

const themes = {
	winter: "winter",
	dracula: "dracula",
};

const getTheme = () => {
	return localStorage.getItem("theme") || themes.winter;
};

const Navbar = () => {
	const [theme, setTheme] = useState(getTheme());
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);
	const buttonRef = useRef(null);

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

	// Fixed click outside handler
	useEffect(() => {
		const handleClickOutside = (event) => {
			// Don't close if clicking the toggle button itself
			if (buttonRef.current && buttonRef.current.contains(event.target)) {
				return;
			}

			// Close menu if clicking outside menu content and menu is open
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target) &&
				isMenuOpen
			) {
				setIsMenuOpen(false);
			}
		};

		// Add event listener when menu is open
		if (isMenuOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		// Clean up event listener
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isMenuOpen]);

	// Close menu when window is resized to desktop size
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768 && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isMenuOpen]);

	const toggleMenu = (e) => {
		e.stopPropagation();
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="w-full flex justify-center py-6 fixed top-0 z-50">
			{/* Pill-shaped navbar */}
			<nav className="bg-base-300 rounded-full px-4 sm:px-8 py-2 flex items-center shadow-lg max-w-3xl w-full">
				{/* Logo or brand name - visible on mobile */}
				<div className="md:hidden">
					<NavLink to="/" className="font-bold text-lg text-primary">
						ST
					</NavLink>
				</div>

				{/* Navigation links - centered (hidden on mobile) */}
				<div className="hidden md:flex flex-1 justify-center gap-6">
					<NavLinks />
				</div>

				{/* Right side controls */}
				<div className="flex items-center gap-3 ml-auto">
					{/* Theme toggle */}
					<label className="swap swap-rotate">
						<input
							type="checkbox"
							onChange={handleTheme}
							checked={theme === themes.dracula}
						/>
						<BsSunFill className="swap-on h-5 w-5" />
						<BsMoonFill className="swap-off h-5 w-5" />
					</label>

					{/* Mobile menu toggle - only visible on mobile */}
					<button
						ref={buttonRef}
						className="md:hidden btn btn-sm btn-circle btn-ghost"
						onClick={toggleMenu}
						aria-label="Toggle menu"
						aria-expanded={isMenuOpen}
					>
						{isMenuOpen ? (
							<HiX className="h-5 w-5" />
						) : (
							<HiMenu className="h-5 w-5" />
						)}
					</button>
				</div>
			</nav>

			{/* Mobile menu overlay */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						ref={menuRef}
						className="fixed inset-0 bg-base-100 bg-opacity-95 flex flex-col items-center justify-center z-40 pt-20"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex flex-col items-center gap-8 text-xl font-medium">
							<NavLinks setIsMenuOpen={setIsMenuOpen} />
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Navbar;
