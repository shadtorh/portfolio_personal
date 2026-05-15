import {
  Hero,
  QuickNav,
  Projects,
  AboutMe,
  Skills,
  Service,
  Contact,
  Navbar,
} from "../components";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <QuickNav />
      <Projects />
      <AboutMe />
      <Skills />
      <Service />
      <Contact />
    </>
  );
};

export default HomePage;
