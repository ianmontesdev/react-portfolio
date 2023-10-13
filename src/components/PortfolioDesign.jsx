import "../assets/css/PortfolioDesign.css";
import ImgCard from "./ImgCard";
import { useState, useEffect } from "react";
import EndPoints from "./EndPoints";

const PortfolioDesign = () => {
  const [response, setResponse] = useState(null);

  const getCode = () => {
    fetch(EndPoints.ApiUrl + EndPoints.Design)
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
      <main className="portfolio-design-container">
        {response ? (
          <div className="portfolio-design">
            <div className="portfolio-gallery-container">
              <ImgCard imgSrc={response.gallery} />
            </div>
            <div className="portfolio-info-container">
              <div className="portfolio-photo-container">
                <div className="portfolio-title">
                  <span>Photographer</span>
                  <span>Graphic</span>
                  <span>
                    <span>&</span> Designer
                  </span>
                </div>
                <span className="mobile-title">
                  Photographer & Graphic Designer
                </span>
                <ImgCard
                  classNm="profile-pic"
                  singleImg={response.profilePic}
                />
              </div>
              <div className="data-detail">
                {response.education.map((education, i) => {
                  return (
                    <div key={i}>
                      <i className="fa-solid fa-graduation-cap"></i>
                      <div>
                        <span>{education.description}</span>
                        <span>{education.place}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="data-detail">
                {response.experience.map((experience, i) => {
                  return (
                    <div key={i}>
                      <i className="fa-solid fa-briefcase"></i>
                      <div>
                        <span>{experience.description}</span>
                        <span>{experience.place}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="stack-container">
                {response.techStack.map((tech, i) => {
                  return <img src={tech} key={i} />;
                })}
              </div>
            </div>
          </div>
        ) : (
          <p>Cargando datos</p>
        )}
      </main>
    </>
  );
};

export default PortfolioDesign;
