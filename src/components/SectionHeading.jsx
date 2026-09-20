import { useReveal } from "../hooks/useReveal";

export default function SectionHeading({ kicker, title, description }) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`section-heading ${isVisible ? "is-visible" : ""}`}
    >
      {kicker && <p className="section-heading__kicker">{kicker}</p>}
      <h2 className="section-heading__title">{title}</h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
}
