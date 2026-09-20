import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Full stack .NET developer</p>
          <h1 className="hero__name">{profile.name}</h1>
          <p className="hero__intro">{profile.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View projects
            </a>
            <a href={profile.resumeUrl} className="btn btn--secondary" download>
              Download resume
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="hero__social-link"
            >
              GitHub
            </a>
            <span className="hero__social-sep" aria-hidden="true">
              /
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="hero__social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="code-panel">
            <div className="code-panel__bar">
              <span className="code-panel__dot code-panel__dot--red" />
              <span className="code-panel__dot code-panel__dot--yellow" />
              <span className="code-panel__dot code-panel__dot--green" />
              <span className="code-panel__filename">Developer.cs</span>
            </div>
            <pre className="code-panel__body">
              <code>
                <span className="tok-kw">public class</span>{" "}
                <span className="tok-type">Developer</span>
                {"\n"}
                {"{"}
                {"\n"}
                {"    "}
                <span className="tok-kw">public string</span> Name {"=>"}{" "}
                <span className="tok-str">"Sakthi Ganesh"</span>;{"\n"}
                {"    "}
                <span className="tok-kw">public string</span> Role {"=>"}{" "}
                <span className="tok-str">"Full Stack .NET Developer"</span>;
                {"\n"}
                {"    "}
                <span className="tok-kw">public int</span> ExperienceYears{" "}
                {"=>"} <span className="tok-num">1</span>;{"\n\n"}
                {"    "}
                <span className="tok-kw">public string</span>[] Stack {"=>"}
                {" new"}[]{"\n"}
                {"    "}
                {"{"}
                {"\n"}
                {"        "}
                <span className="tok-str">"C#"</span>,{" "}
                <span className="tok-str">".NET 8"</span>,{" "}
                <span className="tok-str">"React"</span>,{"\n"}
                {"        "}
                <span className="tok-str">"Angular"</span>,{" "}
                <span className="tok-str">"SQL Server"</span>,{" "}
                <span className="tok-str">"PostgreSQL"</span>{"\n"}
                {"    "}
                {"};"}
                {"\n"}
                {"}"}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
