import React from "react";
import {
	Hero,
	Skills,
	AboutMe,
	Service,
	Projects,
	ContactForm,
} from "../components";

const HomePage = () => {
	return (
		<>
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
