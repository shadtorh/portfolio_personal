import { FaGlobe, FaPaintBrush } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const services = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "End-to-end web and mobile apps with React, Next.js, React Native, and Node.js — from database to deployment.",
    icon: FaGlobe,
    accent: "primary",
  },
  {
    id: 2,
    title: "SaaS & Multi-Tenant Systems",
    description:
      "Scalable platforms with auth, RBAC, tenant isolation, and production integrations (payments, SMS, storage).",
    icon: TbApi,
    accent: "secondary",
  },
  {
    id: 3,
    title: "Database Architecture",
    description:
      "PostgreSQL, MongoDB, and Prisma schemas designed for performance, reliability, and clean data models.",
    icon: FaDatabase,
    accent: "accent",
  },
  {
    id: 4,
    title: "UI/UX Frontend",
    description:
      "Polished, accessible interfaces with Tailwind CSS and design systems that users love.",
    icon: FaPaintBrush,
    accent: "primary",
  },
];

const accentMap = {
  primary: "text-primary border-primary/30",
  secondary: "text-secondary border-secondary/30",
  accent: "text-accent border-accent/30",
};

const Service = () => {
  return (
    <section id="services" className="section-shell bg-base-200">
      <div className="section-inner">
        <SectionHeader
          label="Services"
          title="What I can help you build"
          description="From MVPs to production SaaS — I deliver solutions that solve real business problems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal
                key={service.id}
                delay={index * 80}
                className={`glass-card p-6 md:p-8 border-l-4 hover:-translate-y-0.5 transition-transform duration-200 ${accentMap[service.accent]}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-base-200 flex items-center justify-center mb-4 ${accentMap[service.accent].split(" ")[0]}`}
                >
                  <Icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-base-content/65 leading-relaxed">
                  {service.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
