const items = [
  {
    period: "2023 — Present",
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "University of Rajasthan, Jaipur",
    desc: "Pursuing BCA with a focus on programming fundamentals, web technologies, database management, and software development. Building hands-on projects alongside coursework to strengthen practical skills.",
    badges: ["Data Structures", "DBMS", "Web Technologies", "OOP", "Networking"],
  },
  {
    period: "May 2026 — Present",
    degree: "Full Stack Developer — AU IGNITE",
    institute: "3-Month Intensive Program",
    desc: "An intensive, industry-focused bootcamp covering the complete full-stack development lifecycle — from responsive frontend design to backend APIs and database integration. Working on real-world projects to build job-ready skills.",
    badges: ["HTML / CSS", "JavaScript", "React", "Node.js", "MongoDB", "Full Stack"],
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="content-wrap">
        <div className="section-header">
          <span className="section-num">03.</span>
          <h3 className="section-title">Education</h3>
          <div className="section-line" />
        </div>

        <div className="education-timeline">
          {items.map((item) => (
            <div className="edu-item" key={item.degree}>
              <div className="edu-period">{item.period}</div>
              <div className="edu-degree">{item.degree}</div>
              <div className="edu-institute">{item.institute}</div>
              <div className="edu-desc">{item.desc}</div>
              <div className="edu-badges">
                {item.badges.map((b) => (
                  <span className="edu-badge" key={b}>
                    {b}
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
