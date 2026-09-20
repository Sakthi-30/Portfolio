export default function ProjectCard({ project }) {
  const { name, description, tech, githubUrl, liveUrl, imageAlt, sample } =
    project;

  return (
    <article className="project-card">
      <div className="project-card__image" role="img" aria-label={imageAlt}>
        <span className="project-card__image-glyph">{"</>"}</span>
        {sample && <span className="project-card__badge">Sample project</span>}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="project-card__tech" aria-label="Technologies used">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__links">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="project-card__link"
          >
            Code
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="project-card__link project-card__link--primary"
          >
            Live demo
          </a>
        </div>
      </div>
    </article>
  );
}
