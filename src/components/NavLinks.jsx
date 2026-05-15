import { Link } from "react-scroll";

const links = [
  { id: 1, url: "home", text: "Home" },
  { id: 2, url: "about", text: "About" },
  { id: 3, url: "projects", text: "CampusCore" },
  { id: 4, url: "skills", text: "Skills" },
  { id: 5, url: "services", text: "Services" },
  { id: 6, url: "contact", text: "Contact" },
];

const NavLinks = ({ setIsMenuOpen, mobile = false }) => {
  const handleClick = () => {
    if (setIsMenuOpen) {
      setTimeout(() => setIsMenuOpen(false), 200);
    }
  };

  return (
    <>
      {links.map(({ id, url, text }) => (
        <Link
          key={id}
          smooth
          duration={500}
          offset={-80}
          to={url}
          spy
          activeClass="!text-primary"
          className={`font-medium text-base-content/75 hover:text-primary transition-colors cursor-pointer ${
            mobile
              ? "py-2"
              : "px-3 py-1.5 rounded-lg hover:bg-base-200/80 text-sm"
          }`}
          onClick={handleClick}
        >
          {text}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
