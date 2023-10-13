import "../assets/css/About.css";

const About = () => {
  return (
    <>
      <main id="about-container">
        <aside>
          <section>
            <img
              src="https://storage.googleapis.com/fotoim-portfolio-app.appspot.com/images/about.jpeg"
              alt=""
            />
            <div>
              <p>Ian</p>
              <p>Montes</p>
            </div>
            <div className="divisor"></div>
            <div className="text-small">
              <p>Full-Stack Developer</p>
            </div>
          </section>
          <footer>
            <a
              href="https://www.instagram.com/tyrec_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/ianmontesdev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/ian-montes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </footer>
        </aside>
        <section>
          <header>
            <span>{"<Hello"}</span>
            <span> {"World  />"}</span>
          </header>
          <article>
            <pre>
              {`
            Junior web developer.
            
            I have been a graphic designer my entire career, but then discovered my passion about coding in 2022 while undergoing a VUE3 bootcamp, since then joined Higher Vocational Training on Web Apps Development (CFGS DAW).
            
            Currently studying 2nd year and, at the same time, studying 2nd year of Multiplatform Apps Development (CFGS DAM).`}
            </pre>
          </article>
        </section>
      </main>
    </>
  );
};

export default About;
