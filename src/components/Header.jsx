import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <a href="#" className="logo">
        RS<span>.</span>
      </a>

      <nav className={open ? "nav-open" : ""}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href="/resume/RohitSainiResume.pdf"
          download="RohitSainiResume.pdf"
          className="nav-resume"
        >
          Resume
        </a>
      </nav>

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
