import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="projects" className="section section--muted">
      <div className="container">
        <SectionHeading
          kicker="Projects"
          title="A few things I've built"
          description="Sample projects below — swap in your own repos, screenshots and live links in src/data/projects.js."
        />

        <div ref={ref} className={`projects-grid ${isVisible ? "is-visible" : ""}`}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
