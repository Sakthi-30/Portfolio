import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

const HIGHLIGHTS = [
  "~1 year building production ASP.NET Core Web APIs",
  "Comfortable across React, Angular and .NET MAUI front ends",
  "Hands-on with SQL Server and PostgreSQL, including query tuning",
];

export default function Resume() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="resume" className="section">
      <div className="container">
        <div ref={ref} className={`resume-panel ${isVisible ? "is-visible" : ""}`}>
          <div className="resume-panel__text">
            <p className="section-heading__kicker">Resume</p>
            <h2 className="resume-panel__title">
              Want the full breakdown?
            </h2>
            <p className="resume-panel__description">
              My resume covers project details, tooling and education in
              full. Download it below — replace{" "}
              <code>public/resume-placeholder.pdf</code> with your real file.
            </p>
            <ul className="resume-panel__highlights">
              {HIGHLIGHTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>

          <a href={profile.resumeUrl} className="btn btn--primary" download>
            Download resume
          </a>
        </div>
      </div>
    </section>
  );
}
