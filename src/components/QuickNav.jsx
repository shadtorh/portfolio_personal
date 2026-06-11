import { Link } from "react-scroll";
import {
  FaRocket,
  FaUser,
  FaCode,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import Reveal from "./Reveal";

const items = [
  {
    id: "projects",
    icon: FaRocket,
    title: "CampusCore",
    description: "My product work at Shadron Systems",
    color: "from-primary/20 to-primary/5 border-primary/25",
    iconColor: "text-primary",
  },
  {
    id: "about",
    icon: FaUser,
    title: "About me",
    description: "Background, stack & what I build",
    color: "from-secondary/20 to-secondary/5 border-secondary/25",
    iconColor: "text-secondary",
  },
  {
    id: "skills",
    icon: FaCode,
    title: "Skills",
    description: "Technologies I use day to day",
    color: "from-accent/20 to-accent/5 border-accent/25",
    iconColor: "text-accent",
  },
  {
    id: "contact",
    icon: FaEnvelope,
    title: "Contact",
    description: "Email, phone & social links",
    color:
      "from-primary/15 via-secondary/10 to-accent/10 border-base-content/15",
    iconColor: "text-primary",
  },
];

const QuickNav = () => {
  return (
    <section className="relative z-10 -mt-8 pb-4 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-center text-sm font-medium text-base-content/50 mb-4 tracking-wide uppercase">
            Find what you&apos;re looking for
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  duration={500}
                  offset={-80}
                  className="quick-nav-card group"
                >
                  <Reveal
                    delay={index * 60}
                    className={`h-full p-5 rounded-2xl border bg-gradient-to-br ${item.color} backdrop-blur-sm transition-all duration-300 group-hover:border-primary/40 group-hover:-translate-y-1`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl bg-base-100/80 flex items-center justify-center mb-3 ${item.iconColor}`}
                    >
                      <Icon className="text-lg" />
                    </div>
                    <h3 className="font-bold text-base mb-1 flex items-center gap-2">
                      {item.title}
                      <FaArrowRight className="text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                    </h3>
                    <p className="text-sm text-base-content/55 leading-snug">
                      {item.description}
                    </p>
                  </Reveal>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default QuickNav;
