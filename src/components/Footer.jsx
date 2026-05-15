import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-scroll";
import { CONTACT } from "../constants/contact";

const footerLinks = [
  { to: "home", label: "Home" },
  { to: "projects", label: "CampusCore" },
  { to: "about", label: "About" },
  { to: "contact", label: "Contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-base-content/10 bg-base-300/50 py-10">
      <div className="section-inner max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="text-center md:text-left">
            <p
              className="font-bold text-lg"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Shad <span className="text-primary">Torh</span>
            </p>
            <p className="text-sm text-base-content/50 mt-1">
              Full Stack Developer · Shadron Systems
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            {footerLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth
                duration={500}
                offset={-80}
                className="text-base-content/60 hover:text-primary cursor-pointer transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-base-content/10">
          <p className="text-sm text-base-content/50">
            © {year} Shad Torh. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={CONTACT.mailto()}
              className="text-base-content/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg" />
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base-content/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
