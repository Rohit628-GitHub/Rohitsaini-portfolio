import {
  FaDesktop,
  FaServer,
  FaDatabase,
  FaWrench,
  FaBrain,
  FaLightbulb,
} from "react-icons/fa6";

const categories = [
  {
    icon: <FaDesktop />,
    title: "Frontend",
    color: "",
    tags: ["React", "HTML5", "CSS3", "JavaScript", "Responsive Design", "Tailwind CSS", "Bootstrap"],
  },
  {
    icon: <FaServer />,
    title: "Backend",
    color: "purple",
    tags: ["Node.js", "Express.js", "Python", "Flask", "REST APIs", "Java"],
  },
  {
    icon: <FaDatabase />,
    title: "Database",
    color: "green",
    tags: ["MongoDB", "MySQL", "SQL", "NoSQL"],
  },
  {
    icon: <FaWrench />,
    title: "Tools & Platforms",
    color: "",
    tags: ["Git", "GitHub", "VS Code", "Cursor"],
  },
  {
    icon: <FaBrain />,
    title: "Programming Languages",
    color: "purple",
    tags: ["JavaScript", "Python", "Java", "SQL"],
  },
  {
    icon: <FaLightbulb />,
    title: "Concepts",
    color: "green",
    tags: ["OOP", "MVC Pattern", "Auth & JWT", "CRUD Apps", "Data Structures"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="content-wrap">
        <div className="section-header">
          <span className="section-num">02.</span>
          <h3 className="section-title">Skills</h3>
          <div className="section-line" />
        </div>

        <div className="skills-grid">
          {categories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <span className="skill-cat-icon">{cat.icon}</span>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-tags">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`skill-tag${cat.color ? " " + cat.color : ""}`}
                  >
                    {tag}
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
