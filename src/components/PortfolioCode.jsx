import Highlight from "react-highlight";
import "../assets/css/PortfolioCode.css";
import EndPoints from "./EndPoints";

// Import images
import ImgCard from "./ImgCard";
import { useEffect } from "react";
import { useState } from "react";

const PortfolioSection = () => {
  const [response, setResponse] = useState(null);

  const getCode = () => {
    fetch(EndPoints.ApiUrl + EndPoints.Code)
      .then((datos) => datos.json())
      .then((datos) => {
        setResponse(datos);
      });
  };

  useEffect(() => {
    getCode();
  }, []);

  return (
    <>
      <main className="portfolio-container">
        {response ? (
          <section id="portfolio-code">
            <div className="portfolio-code-profile-container">
              <ImgCard
                singleImg={response.profilePic}
                classNm="profile-container-pic"
              />{" "}
              <img
                className="profile-container-bar-big"
                src={response.assets.barbig}
                alt=""
              />
              <img
                className="profile-container-bar-small"
                src={response.assets.barsmall}
                alt=""
              />
              <img
                className="profile-container-bar-small"
                src={response.assets.barsmall}
                alt=""
              />
              <img
                className="profile-container-bar-small"
                src={response.assets.barsmall}
                alt=""
              />
              <img
                className="profile-container-bar-big"
                src={response.assets.barbig}
                alt=""
              />
              <img
                className="profile-container-bar-small"
                src={response.assets.barsmall}
                alt=""
              />
              <div className="profile-container-ball"></div>
            </div>
            <div className="portfolio-code-divisor"></div>
            <div className="portfolio-code-text-container">
              <Highlight className="language-javascript">
                {response.title}
                {"\n\n//Tech Stack"}
              </Highlight>
              <div className="profile-container-stack-container">
                {response.techStack.map((tech, i) => {
                  return <img src={tech} key={i} />;
                })}
              </div>

              <Highlight className="language-javascript">
                {`let currentEducation = [];

// Currently onGoing studies
`}
              </Highlight>

              {response.education.map((ed, i) => {
                return (
                  <Highlight className="language-javascript" key={i}>
                    {ed}
                  </Highlight>
                );
              })}

              <Highlight className="language-javascript">
                {`let myExperience = []`}
              </Highlight>

              {response.experience.map((exp, i) => {
                return (
                  <Highlight className="language-javascript" key={i}>
                    {exp}
                  </Highlight>
                );
              })}

              <article className="powered-by">
                <p>{"Powered by"}</p>
                <section>
                  <img
                    className="power-logo"
                    src="https://storage.googleapis.com/fotoim-portfolio-app.appspot.com/images/react-icon.svg"
                  />
                  <img
                    className="power-logo"
                    src="https://storage.googleapis.com/fotoim-portfolio-app.appspot.com/images/mongodb-logo.svg"
                  ></img>
                  <img
                    className="power-logo"
                    src="https://storage.googleapis.com/fotoim-portfolio-app.appspot.com/images/spring-initializr.svg"
                  ></img>
                </section>
              </article>
            </div>
          </section>
        ) : (
          <p>Cargando datos</p>
        )}
      </main>
    </>
  );
};

export default PortfolioSection;
