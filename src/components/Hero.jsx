import { FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import HeroImage from "../assets/HeroImage.svg";
import { CONTACT } from "../constants/contact";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center mesh-bg bg-base-200 pt-28 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--bc)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--bc)/0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="section-inner relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="w-full lg:w-[55%] text-center lg:text-left space-y-7"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-base-content/70 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Founder at Shadron Systems · Building CampusCore
            </div>

            <div className="space-y-2">
              <p className="text-primary font-semibold tracking-wide">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
                Shad <span className="gradient-text">Torh</span>
              </h1>
              <div className="h-10 md:h-12">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "SaaS Engineer",
                    2000,
                    "React & Next.js Specialist",
                    2000,
                  ]}
                  wrapper="p"
                  className="text-xl md:text-2xl font-medium text-base-content/80"
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="text-base-content/65 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I turn ideas into fast, reliable software — with a focus on clean
              design and code that scales.
            </p>

            <div className="flex justify-center lg:justify-start gap-3">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle border border-base-content/10"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle border border-base-content/10"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 pt-1">
              <ScrollLink to="projects" smooth duration={500} offset={-80}>
                <button
                  type="button"
                  className="btn btn-primary btn-lg rounded-xl btn-glow w-full sm:w-auto"
                >
                  See CampusCore
                </button>
              </ScrollLink>
              <ScrollLink to="contact" smooth duration={500} offset={-80}>
                <button
                  type="button"
                  className="btn btn-outline btn-lg rounded-xl border-base-content/20 w-full sm:w-auto"
                >
                  Get in touch
                </button>
              </ScrollLink>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[45%] flex justify-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/25 via-secondary/15 to-transparent blur-2xl" />
              <div className="relative glass-card p-6 rounded-3xl ring-1 ring-primary/10">
                <img
                  src={HeroImage}
                  alt="Developer illustration"
                  className="w-full max-w-sm md:max-w-md"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ScrollLink to="projects" smooth duration={500} offset={-80}>
          <button
            type="button"
            className="btn btn-ghost btn-circle"
            aria-label="Scroll down"
          >
            <FaArrowDown className="text-primary opacity-70" />
          </button>
        </ScrollLink>
      </motion.div>
    </section>
  );
};

export default Hero;
