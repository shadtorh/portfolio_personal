import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ProfileImg from "../assets/about-image.jpeg";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { CONTACT } from "../constants/contact";

const stats = [
  { label: "Focus", value: "Full Stack & SaaS" },
  { label: "Stack", value: "React · Next.js · Node" },
  { label: "Based in", value: "Pennsylvania, USA" },
];

const AboutMe = () => {
  return (
    <section id="about" className="section-shell bg-base-100">
      <div className="section-inner">
        <SectionHeader
          label="About"
          title="Building software that scales"
          description="Full-stack developer passionate about clean architecture, polished UI, and shipping products that solve real problems."
          align="left"
        />

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <Reveal
            direction="left"
            className="w-full lg:w-2/5 flex justify-center shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/40 to-secondary/30 blur-md opacity-60" />
              <img
                src={ProfileImg}
                alt="Shad Torh"
                width={768}
                height={1024}
                loading="lazy"
                decoding="async"
                className="relative w-full max-w-sm rounded-3xl object-cover aspect-[3/4] border border-base-content/10 shadow-2xl"
              />
            </div>
          </Reveal>

          <Reveal direction="right" className="w-full lg:w-3/5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map(({ label, value }) => (
                <div key={label} className="glass-card p-4 rounded-xl">
                  <p className="text-xs uppercase tracking-wider text-base-content/50 mb-1">
                    {label}
                  </p>
                  <p className="font-semibold text-sm">{value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-base-content/75 leading-relaxed">
              <p>
                I&apos;m Shad Torh — a Full Stack Developer who loves building
                thoughtful, high-performing web and mobile applications. I
                specialize in React, Next.js, React Native, Node.js, Express,
                PostgreSQL, and MongoDB.
              </p>
              <p>
                I&apos;m building{" "}
                <strong className="text-base-content">Shadron Systems</strong>,
                and my first release —{" "}
                <strong className="text-base-content">CampusCore</strong> — is a
                multi-tenant school management SaaS for Liberian K–12 schools.
              </p>
              <p>
                I bring both frontend and backend together to ship complete,
                scalable solutions — with strong attention to UX, security, and
                maintainable code.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle border border-base-content/10"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-circle border border-base-content/10"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={CONTACT.mailto()}
                className="btn btn-ghost btn-circle border border-base-content/10"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
