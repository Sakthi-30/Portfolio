import SectionHeading from "./SectionHeading";
import { skillGroups } from "../data/skills";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="skills" className="section section--muted">
      <div className="container">
        <SectionHeading
          kicker="Skills"
          title="Technologies I work with"
          description="Grouped by where they sit in the stack, from database up to UI."
        />

        <div
          ref={ref}
          className={`skills-grid ${isVisible ? "is-visible" : ""}`}
        >
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.category}>
              <h3 className="skill-card__title">{group.category}</h3>
              <div className="skill-card__tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
