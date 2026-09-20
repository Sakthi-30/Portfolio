import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

const FACTS = [
  { label: "Focus", value: "ASP.NET Core + React" },
  { label: "Experience", value: `~${profile.experienceYears} year` },
  { label: "Based in", value: profile.location },
  { label: "Open to", value: "Full-time roles" },
];

export default function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          kicker="About me"
          title="Backend-minded, comfortable up and down the stack"
        />

        <div
          ref={ref}
          className={`about__grid ${isVisible ? "is-visible" : ""}`}
        >
          <div className="about__text">
            <p>{profile.intro}</p>
            <p>
              Most of my day-to-day work is in ASP.NET Core — designing Web
              API endpoints, modelling data with Entity Framework Core, and
              writing the SQL that keeps things fast. On the front end, I'm
              equally comfortable in React or Angular, and I've started
              exploring .NET MAUI for cross-platform mobile work.
            </p>
            <p>
              I'm early in my career, which means I still double-check my
              assumptions and ask good questions — but I move fast, ship
              working software, and genuinely enjoy the debugging part of the
              job as much as the building part.
            </p>
          </div>

          <div className="about__facts">
            <div className="facts-panel">
              <p className="facts-panel__label">Quick facts</p>
              <dl className="facts-panel__list">
                {FACTS.map((fact) => (
                  <div className="facts-panel__row" key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
