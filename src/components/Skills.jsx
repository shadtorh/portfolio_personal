import { motion } from "framer-motion";
import HTML from "../assets/icons/html-1.svg";
import CSS from "../assets/icons/css-3.svg";
import JS from "../assets/icons/logo-javascript.svg";
import REACT from "../assets/icons/react.svg";
import NODE from "../assets/icons/nodejs-3.svg";
import GITHUB from "../assets/icons/github-icon-1.svg";
import TAILWIND from "../assets/icons/tailwind-css-2.svg";
import NEXTJS from "../assets/icons/next-js.svg";
import TYPESCRIPT from "../assets/icons/typescript-2.svg";
import POSTGRESQL from "../assets/icons/postgresql.svg";
import EXPRESS from "../assets/icons/express-109.svg";
import MONGO_DB from "../assets/icons/mongodb-icon-2.svg";
import REACT_NATIVE from "../assets/icons/react-native-1.svg";
import EXPO from "../assets/icons/expo-1.svg";
import PRISMA from "../assets/icons/prisma-2.svg";
import REDUX from "../assets/icons/redux.svg";
import POSTMAN from "../assets/icons/postman.svg";
import PYTHON from "../assets/icons/python-5.svg";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: HTML },
      { name: "CSS", icon: CSS },
      { name: "JavaScript", icon: JS },
      { name: "TypeScript", icon: TYPESCRIPT },
      { name: "React", icon: REACT },
      { name: "Next.js", icon: NEXTJS },
      { name: "Tailwind", icon: TAILWIND },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: NODE },
      { name: "Express", icon: EXPRESS },
      { name: "PostgreSQL", icon: POSTGRESQL },
      { name: "MongoDB", icon: MONGO_DB },
      { name: "Prisma", icon: PRISMA },
      { name: "Python", icon: PYTHON },
    ],
  },
  {
    category: "Mobile & Tools",
    skills: [
      { name: "React Native", icon: REACT_NATIVE },
      { name: "Expo", icon: EXPO },
      { name: "Redux", icon: REDUX },
      { name: "GitHub", icon: GITHUB },
      { name: "Postman", icon: POSTMAN },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell bg-base-100 mesh-bg">
      <div className="section-inner">
        <SectionHeader
          label="Skills"
          title="Technologies I work with"
          description="The stack I use to build fast, accessible, and scalable applications."
        />

        <div className="space-y-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.08 }}
            >
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full" />
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="glass-card p-4 flex flex-col items-center gap-2 hover:border-primary/30 transition-colors"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.25,
                      delay: skillIndex * 0.04 + categoryIndex * 0.05,
                    }}
                    whileHover={{ y: -2 }}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-9 h-9 object-contain"
                    />
                    <span className="text-xs font-medium text-center text-base-content/80">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
