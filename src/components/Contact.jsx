import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const { ref, isVisible } = useReveal();

  const contactMethods = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    },
    {
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: `https://wa.me/${profile.whatsapp}`,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/sakthiganesh",
      href: profile.linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/sakthiganesh",
      href: profile.github,
    },
  ];

  return (
    <section id="contact" className="section section--muted">
      <div className="container">
        <SectionHeading
          kicker="Contact"
          title="Let's talk about your team"
          description="Reach out on whichever channel is easiest — all placeholders below, swap in your real details in src/data/profile.js."
        />

        <div ref={ref} className={`contact-grid ${isVisible ? "is-visible" : ""}`}>
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.label === "WhatsApp" ? "_blank" : undefined}
              rel={method.label === "WhatsApp" ? "noreferrer noopener" : undefined}
              className="contact-card"
            >
              <span className="contact-card__label">{method.label}</span>
              <span className="contact-card__value">{method.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
