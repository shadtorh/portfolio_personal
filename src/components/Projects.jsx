import { FaAngleRight, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const project = projects[0];

const Projects = () => {
  return (
    <section id="projects" className="section-shell bg-base-200">
      <div className="section-inner">
        <SectionHeader
          label="Product"
          title="CampusCore"
          description="The first release from Shadron Systems — a school management platform built for Liberian K–12 schools."
        />

        <motion.article
          className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <figure className="relative h-64 md:h-80 overflow-hidden">
            <img
              className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${project.imageClass || "object-cover"}`}
              src={project.image}
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent opacity-90" />
            <div className="absolute top-4 left-4">
              <span className="badge badge-ghost bg-base-100/80 border-0">
                {project.category}
              </span>
            </div>
          </figure>

          <div className="p-6 md:p-10">
            <p className="text-primary text-sm font-medium mb-1">
              {project.subtitle}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {project.title}
            </h3>
            <p className="text-base-content/65 leading-relaxed mb-6 max-w-3xl">
              {project.excerpt}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-6 border-t border-base-content/10">
              <Link
                to={`/project/${project.id}`}
                className="btn btn-outline rounded-xl gap-2 border-base-content/20"
              >
                Full case study <FaAngleRight className="text-xs" />
              </Link>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-xl gap-2 btn-glow"
                >
                  Visit getcampuscore.com{" "}
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Projects;
