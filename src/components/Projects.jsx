import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <div className="content-wrap">
        <div className="section-header">
          <span className="section-num">04.</span>
          <h3 className="section-title">Things I've Built</h3>
          <div className="section-line" />
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
