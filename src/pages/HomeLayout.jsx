import React from "react";
import { Outlet } from "react-router-dom";
import {
	Navbar,
	AboutMe,
	Hero,
	ContactForm,
	Projects,
	Skills,
	Footer,
	Service,
} from "../components";

const HomeLayout = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Skills />
			<AboutMe />
			<Service />
			<Projects />
			<ContactForm />
			<Footer />
			<section>
				<Outlet />
			</section>
		</div>
	);
};

export default HomeLayout;
