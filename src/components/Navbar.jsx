import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import NavLinks from "./NavLinks";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current?.contains(event.target)) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <nav
          className={`glass-nav rounded-2xl px-4 sm:px-6 py-3 flex items-center gap-4 transition-shadow ${
            scrolled ? "shadow-xl" : ""
          }`}
        >
          <NavLink
            to="/"
            className="font-bold text-lg tracking-tight shrink-0"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-primary">S</span>
            <span className="text-base-content">had</span>
          </NavLink>

          <div className="hidden md:flex flex-1 justify-center">
            <NavLinks />
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="hidden md:inline-flex btn btn-primary btn-sm rounded-xl"
            >
              Let&apos;s talk
            </ScrollLink>
            <button
              ref={buttonRef}
              className="md:hidden btn btn-ghost btn-sm btn-circle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden mt-2 mx-4 glass-nav rounded-2xl p-6"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <div className="flex flex-col items-center gap-4 text-lg font-medium">
              <NavLinks setIsMenuOpen={setIsMenuOpen} mobile />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
