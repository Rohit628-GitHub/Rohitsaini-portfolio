import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa6";

const cards = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    val: "1301rohitsaini@gmail.com",
    href: "mailto:1301rohitsaini@gmail.com",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    val: "+91 70733 13081",
    href: "tel:+917073313081",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    val: "rohit-saini-442237345",
    href: "https://linkedin.com/in/rohit-saini-442237345",
    external: true,
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    val: "Rohit628-GitHub",
    href: "https://github.com/Rohit628-GitHub",
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="content-wrap">
        <div className="section-header">
          <span className="section-num">05.</span>
          <h3 className="section-title">Get In Touch</h3>
          <div className="section-line" />
        </div>

        <div style={{ textAlign: "left", maxWidth: "100%" }}>
          <p className="contact-label">What's next?</p>
          <h3 className="contact-heading">Let's work together.</h3>
          <p className="contact-desc" style={{ maxWidth: 520 }}>
            I'm currently looking for new graduate opportunities and
            internships. Whether you have a question or just want to say hi
            — my inbox is always open.
          </p>

          <div className="contact-cards">
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="contact-card"
              >
                <div className="contact-card-icon">{c.icon}</div>
                <div>
                  <div className="contact-card-label">{c.label}</div>
                  <div className="contact-card-val">{c.val}</div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=1301rohitsaini@gmail.com&su=Hello&body=Hello%20this%20is%20a%20test%20message"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              style={{ fontSize: "0.82rem" }}
            >
              Say Hello →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
