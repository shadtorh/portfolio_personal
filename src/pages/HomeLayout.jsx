import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components";

const HomeLayout = () => {
	const location = useLocation();
	const isHomePage = location.pathname === "/";

	return (
		<div className="flex flex-col min-h-screen">
			{/* Main content with proper padding */}
			<main className="flex-grow w-full pt-24 px-4 md:px-8 lg:px-16 pb-12 max-w-7xl mx-auto">
				{/* Outlet renders route content */}
				<Outlet />
			</main>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default HomeLayout;
