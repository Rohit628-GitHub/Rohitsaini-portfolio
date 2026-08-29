import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

export default function ProjectCard({ project }) {
  const { icon: Icon, title, desc, tech, image, live, github } = project;

  return (
    <div className="project-card">
      {/* Hover overlay: project photo + live link + github link */}
      <div className="card-hover-overlay">
        <img src={image} alt={`${title} preview`} className="card-hover-img" />
        <div className="card-hover-info">
          <h4 className="card-hover-title">{title}</h4>
          <div className="card-hover-links">
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="card-hover-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <FaArrowUpRightFromSquare /> Live Demo
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="card-hover-btn outline"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub /> GitHub Repo
            </a>
          </div>
        </div>
      </div>

      {/* Default (non-hover) card content */}
      <div className="card-top">
        <div className="card-icon">
          <Icon />
        </div>
        <a href={live} target="_blank" rel="noreferrer" className="card-link">
          View →
        </a>
      </div>
      <h4 className="project-title">{title}</h4>
      <p className="project-desc">{desc}</p>
      <div className="tech-stack">
        {tech.map((t) => (
          <span className="tech-tag" key={t}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
