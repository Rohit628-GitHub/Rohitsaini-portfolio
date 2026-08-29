export default function Hero() {
  return (
    <section id="hero">
      <div className="content-wrap hero-inner">
        <p className="hero-eyebrow fade-in">Hi, my name is</p>
        <h1 className="name fade-in">Rohit Saini.</h1>
        <h2 className="tagline fade-in">I build things for the web.</h2>
        <p className="hero-desc fade-in">
          An aspiring Web Developer &amp; Software Engineer specializing in
          clean, functional, and efficient web applications — from
          full-stack solutions to cloud environments.
        </p>
        <div className="btn-group fade-in">
          <a href="#projects" className="btn btn-outline">
            View my work →
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=1301rohitsaini@gmail.com"
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
          >
            Get in touch
          </a>
          <a
            href="/resume/RohitSainiResume.pdf"
            download="RohitSainiResume.pdf"
            className="btn btn-ghost"
          >
            Download Résumé
          </a>
        </div>
      </div>
    </section>
  );
}
