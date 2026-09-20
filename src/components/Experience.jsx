import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";
import { useReveal } from "../hooks/useReveal";

export default function Experience() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading kicker="Experience" title="Where I've worked" />

        <div
          ref={ref}
          className={`timeline ${isVisible ? "is-visible" : ""}`}
        >
          {experience.map((item) => (
            <article className="timeline__item" key={`${item.role}-${item.period}`}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3 className="timeline__role">{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <p className="timeline__company">{item.company}</p>
                <ul className="timeline__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
