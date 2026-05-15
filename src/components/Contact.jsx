import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { CONTACT } from "../constants/contact";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = CONTACT.mailto();
    }
  };

  return (
    <section
      id="contact"
      className="section-shell bg-base-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 mesh-bg opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-inner relative z-10">
        <SectionHeader
          label="Contact"
          title="Let's build something together"
          description="Open to freelance, contract, and full-time opportunities. Reach out directly — I read every message."
        />

        <motion.div
          className="contact-spotlight max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <a
              href={CONTACT.mailto("Hello Shad — I'd like to connect")}
              className="btn btn-primary btn-lg rounded-2xl btn-glow gap-2 text-base px-10"
            >
              <FaEnvelope />
              Email me directly
            </a>
            <p className="text-sm text-base-content/45 mt-4">
              Typically responds within 24 hours
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <a href={CONTACT.mailto()} className="contact-card group">
              <span className="contact-card-icon">
                <FaEnvelope />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-wider text-base-content/45 mb-1">
                  Email
                </p>
                <p className="font-semibold text-base truncate group-hover:text-primary transition-colors">
                  {CONTACT.email}
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  copyEmail();
                }}
                className="btn btn-ghost btn-sm btn-circle shrink-0"
                aria-label="Copy email"
              >
                {copied ? (
                  <FaCheck className="text-success text-sm" />
                ) : (
                  <FaCopy className="text-sm opacity-60" />
                )}
              </button>
            </a>

            <a href={`tel:${CONTACT.phone}`} className="contact-card group">
              <span className="contact-card-icon">
                <FaPhone />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-base-content/45 mb-1">
                  Phone
                </p>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  {CONTACT.phoneDisplay}
                </p>
              </div>
            </a>

            <div className="contact-card sm:col-span-2">
              <span className="contact-card-icon">
                <FaMapMarkerAlt />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-base-content/45 mb-1">
                  Location
                </p>
                <p className="font-semibold">{CONTACT.location}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-base-content/10">
            <p className="text-sm text-base-content/50">Also find me on</p>
            <div className="flex gap-3">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-xl gap-2 border-base-content/15 hover:border-primary/40"
              >
                <FaLinkedinIn /> LinkedIn
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rounded-xl gap-2 border-base-content/15 hover:border-primary/40"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
