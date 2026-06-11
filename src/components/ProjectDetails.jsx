import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../data";
import {
  FaArrowLeft,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { CONTACT } from "../constants/contact";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center gap-4 px-6">
        <p className="text-xl font-semibold text-error">Project not found</p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="btn btn-primary rounded-xl"
        >
          Back home
        </button>
      </div>
    );
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="bg-base-200 min-h-screen pt-24 pb-16 hero-animate-in">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="text-sm breadcrumbs mb-6 opacity-70">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#projects">Projects</Link>
            </li>
            <li className="text-primary">{project.title}</li>
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="btn btn-ghost btn-sm gap-2 mb-6 -ml-2"
        >
          <FaArrowLeft /> Back
        </button>

        <article className="glass-card overflow-hidden">
          <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              width={800}
              height={400}
              loading="lazy"
              decoding="async"
              className={`w-full h-full ${project.imageClass || "object-cover"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              {project.company && (
                <p className="text-base-content/60 text-sm mb-1">
                  {project.company}
                </p>
              )}
              {project.subtitle && (
                <p className="text-primary text-sm font-medium mb-1">
                  {project.subtitle}
                </p>
              )}
              <h1 className="text-3xl md:text-4xl font-bold">
                {project.title}
              </h1>
            </div>
          </div>

          <div className="p-6 md:p-10">
            <div className="flex flex-wrap gap-3 items-center text-sm text-base-content/60 mb-6">
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt /> {project.date || "2024"}
              </span>
              <span className="flex items-center gap-1.5">
                <BsBoxSeam /> {project.technology || project.category}
              </span>
              {project.featured && (
                <span className="badge badge-primary badge-sm">
                  Latest project
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            {project.excerpt && (
              <p className="text-lg text-base-content/80 leading-relaxed mb-8 border-l-4 border-primary pl-4">
                {project.excerpt}
              </p>
            )}

            <div className="prose prose-invert max-w-none mb-8">
              <h2 className="text-xl font-bold mb-3">Overview</h2>
              <p className="text-base-content/75 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {project.features?.length > 0 && (
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-4">Key features</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-base-content/75"
                    >
                      <span className="text-primary shrink-0">▸</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-wrap gap-3 pt-6 border-t border-base-content/10">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary rounded-xl gap-2"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline rounded-xl gap-2 border-base-content/20"
                >
                  <FaExternalLinkAlt /> Visit site
                </a>
              )}
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost rounded-xl gap-2"
              >
                <FaLinkedin /> Connect
              </a>
            </div>
          </div>
        </article>

        {relatedProjects.length > 0 && (
          <div className="mt-14">
            <h2 className="text-2xl font-bold mb-6">More projects</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {relatedProjects.map((related) => (
                <Link
                  key={related.id}
                  to={`/project/${related.id}`}
                  className="glass-card overflow-hidden hover:border-primary/30 transition-colors group"
                >
                  <figure className="h-40 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      width={400}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full group-hover:scale-105 transition-transform duration-300 ${related.imageClass || "object-cover"}`}
                    />
                  </figure>
                  <div className="p-4">
                    <h3 className="font-bold">{related.title}</h3>
                    <p className="text-sm text-base-content/60 line-clamp-2 mt-1">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
