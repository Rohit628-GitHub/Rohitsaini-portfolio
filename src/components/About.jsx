export default function About() {
  return (
    <section id="about">
      <div className="content-wrap">
        <div className="section-header">
          <span className="section-num">01.</span>
          <h3 className="section-title">About Me</h3>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer who loves solving problems
              through code. My interest in software development sparked
              when I realized how powerful web technologies are for
              creating instant, global impact.
            </p>
            <p>
              I enjoy designing and building applications from scratch —
              from crafting responsive user interfaces to architecting
              backends and databases.
            </p>
            <p>
              I'm currently looking for new graduate opportunities and
              internships where I can contribute and continue to grow.
            </p>
            <p className="skills-label">Technologies I work with</p>
            <ul className="skills-list">
              <li>MongoDB / Express / React / Node</li>
              <li>Java</li>
              <li>Python / Flask</li>
              <li>SQL / NoSQL</li>
              <li>HTML / CSS / JavaScript</li>
            </ul>
          </div>

          <div className="about-panel">
            <div className="panel-stat">
              <div className="panel-stat-val">6+</div>
              <div className="panel-stat-label">Projects built</div>
            </div>
            <div className="panel-divider" />
            <div className="panel-stat">
              <div className="panel-stat-val">MERN</div>
              <div className="panel-stat-label">Primary stack</div>
            </div>
            <div className="panel-divider" />
            <div>
              <span className="status-dot" />
              <span className="status-text">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
