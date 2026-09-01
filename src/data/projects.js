import {
  FaSatelliteDish,
  FaCartShopping,
  FaCircleCheck,
  FaUserGear,
  FaMusic,
  FaCalculator,
  FaCloudSunRain,
  FaSchoolFlag,
  FaUsers,
  FaBriefcase,
  FaShieldHalved,
} from "react-icons/fa6";

const projects = [
  {
    id: 1,
    icon: FaSatelliteDish,
    title: "File Share APP",
    desc: "A local, account-free web app that generates unique dynamic QR codes for seamless, wireless file transfers between PCs and mobile devices — no cables, no cloud.",
    tech: ["React", "Node.js","pdf.js", "HTML/CSS", "JavaScript"],
    image:
      "https://ik.imagekit.io/in11cpf6z/Screenshot%202026-09-01%20093213.png",
    live: "https://print-secure1.vercel.app/",
    github: "https://github.com/Rohit628-GitHub/Rohit",
  },
  {
    id: 2,
    icon: FaCloudSunRain,
    title: "Weather API App",
    desc: "A responsive weather dashboard that fetches real-time forecasts, displays current conditions, and presents weather data in a clean, user-friendly interface.",
    tech: ["React", "Weather API", "JavaScript", "CSS"],
    image:
      "https://ik.imagekit.io/in11cpf6z/Screenshot%202026-09-01%20093302.png",
    live: "https://weather-api-web-app-six.vercel.app/",
    github: "https://github.com/Rohit628-GitHub/Weather-API-web-app",
  },
  {
    id: 3,
    icon: FaSchoolFlag,
    title: "Student Management System",
    desc: "A full-featured academic dashboard for managing students, viewing records, and handling school administration workflows through a clean login and management interface.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://ik.imagekit.io/in11cpf6z/Screenshot%202026-09-01%20100233.png",
    live: "https://student-management-system-smoky-theta.vercel.app/login",
    github: "https://github.com/Rohit628-GitHub/Student-Management-System",
  },
  {
    id: 4,
    icon: FaUsers,
    title: "Social Media Post App",
    desc: "A modern social posting platform for creating, sharing, and browsing user-generated posts with a clean feed layout and interactive UX.",
    tech: ["React", "Node.js", "Express","multer", "JavaScript", "CSS"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    live: "https://social-media-post-app.vercel.app/",
    github: "https://github.com/Rohit628-GitHub/Social-media-post-app",
  },
  {
    id: 5,
    icon: FaBriefcase,
    title: "Student Placement Tracker",
    desc: "A student management system focused on tracking past students, placement records, and follow-up progress in a streamlined administrative dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://ik.imagekit.io/in11cpf6z/Screenshot%202026-09-01%20101721.png",
    live: "https://follow-up-project.vercel.app/",
    github: "https://github.com/Rohit628-GitHub/AU-STUDENT-FOLLOW-UP",
  },
  {
    id: 6,
    icon: FaShieldHalved,
    title: "Auth & Authorization Backend",
    desc: "A secure backend project implementing user authentication, role-based access control, JWT-based authorization, and protected API routes for real-world application security.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    live: "https://github.com/Rohit628-GitHub/authentication-and-authorization-Backend",
    github: "https://github.com/Rohit628-GitHub/authentication-and-authorization-Backend",
  },
  {
    id: 7,
    icon: FaUserGear,
    title: "Developer Portfolio",
    desc: "This very portfolio — a dark-themed, fully responsive personal site with smooth scroll, animated sections, and a clean minimal aesthetic built with pure HTML, CSS, and JS.",
    tech: ["React", "HTML", "CSS", "JavaScript", "Google Fonts"],
    image:
      "https://ik.imagekit.io/in11cpf6z/Screenshot%202026-09-01%20092844.png",
    live: "https://portfolio-wine-theta-27.vercel.app",
    github: "https://github.com/Rohit628-GitHub/Rohitsaini-portfolio",
  },

  {
    id: 8,
    icon: FaCalculator,
    title: "Calculator",
    desc: "A fully functional, responsive calculator supporting arithmetic operations, decimal inputs, keyboard support, and a clean button-grid layout with smooth hover animations.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
    image:
      "https://ik.imagekit.io/in11cpf6z/Screenshot%202026-09-01%20093121.png",
    live: "https://portfolio-wine-theta-27.vercel.app",
    github: "https://github.com/Rohit628-GitHub/Calculator",
  },
];

export default projects;
