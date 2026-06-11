import { useState, useCallback } from "react";
import Reveal from "./Reveal";
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

const COPY_FEEDBACK_MS = 2000;

const socialLinks = [
  {
    href: CONTACT.linkedin,
    label: "LinkedIn",
    icon: FaLinkedinIn,
  },
  {
    href: CONTACT.github,
    label: "GitHub",
    icon: FaGithub,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    } catch {
      window.location.href = CONTACT.mailto();
    }
  }, []);

  return (
    <section
      id="contact"
      className="section-shell bg-base-100 relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(400px,70vw)] w-[min(600px,100vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="section-inner relative z-10 w-full max-w-6xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's build something together"
          description="Open to freelance, contract, and full-time opportunities. Reach out directly — I read every message."
        />

        <Reveal className="contact-spotlight mx-auto w-full max-w-lg sm:max-w-2xl lg:max-w-3xl">
          <div className="mb-8 flex flex-col items-stretch gap-3 sm:mb-10 sm:items-center">
            <a
              href={CONTACT.mailto("Hello Shad — I'd like to connect")}
              className="btn btn-primary btn-lg h-auto min-h-12 w-full shrink-0 rounded-2xl btn-glow gap-2 px-6 py-3 text-base sm:w-auto sm:px-10"
            >
              <FaEnvelope className="shrink-0" />
              <span className="text-center leading-snug">
                Email me directly
              </span>
            </a>
            <p className="text-center text-sm text-base-content/45">
              I typically respond within 24 hours
            </p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="contact-card contact-card--interactive">
              <span className="contact-card-icon">
                <FaEnvelope aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-base-content/45">
                  Email
                </p>
                <a
                  href={CONTACT.mailto()}
                  className="block break-all font-semibold text-sm leading-snug text-base-content underline-offset-2 hover:text-primary hover:underline sm:text-base"
                >
                  {CONTACT.email}
                </a>
              </div>
              <button
                type="button"
                onClick={copyEmail}
                className="btn btn-ghost btn-sm btn-circle shrink-0 touch-manipulation"
                aria-label={copied ? "Email copied" : "Copy email address"}
              >
                {copied ? (
                  <FaCheck className="text-success text-sm" aria-hidden />
                ) : (
                  <FaCopy className="text-sm opacity-70" aria-hidden />
                )}
              </button>
            </div>

            <a
              href={`tel:${CONTACT.phone}`}
              className="contact-card contact-card--interactive group"
            >
              <span className="contact-card-icon">
                <FaPhone aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-base-content/45">
                  Phone
                </p>
                <p className="font-semibold text-sm sm:text-base group-hover:text-primary">
                  {CONTACT.phoneDisplay}
                </p>
              </div>
            </a>

            <div className="contact-card sm:col-span-2">
              <span className="contact-card-icon">
                <FaMapMarkerAlt aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-base-content/45">
                  Location
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  {CONTACT.location}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-stretch gap-4 border-t border-base-content/10 pt-6 sm:flex-row sm:items-center sm:justify-center sm:gap-6">
            <p className="text-center text-sm text-base-content/50 sm:text-left">
              Also find me on
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline h-11 min-h-11 w-full rounded-xl border-base-content/15 hover:border-primary/40 sm:h-10 sm:min-h-10 sm:w-auto sm:min-w-[8.5rem]"
                >
                  <Icon className="text-lg" aria-hidden />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
