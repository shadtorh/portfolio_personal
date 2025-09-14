import React from "react";
import {
	Hero,
	Skills,
	AboutMe,
	Service,
	Projects,
	ContactForm,
	Navbar,
} from "../components";

const HomePage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Skills />
			<AboutMe />
			<Service />
			<Projects />
			<ContactForm />
		</>
	);
};

export default HomePage;
