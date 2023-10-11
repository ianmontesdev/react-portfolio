import Highlight from "react-highlight";
import "../assets/css/PortfolioCode.css";
import EndPoints from "./EndPoints";

// Import images
import barBig from "../assets/img/bar-big.svg";
import barSmall from "../assets/img/bar-small.svg";
import profilePic from "../assets/img/profile-web.jpeg";
import ImgCard from "./ImgCard";
import { useEffect } from "react";
import { useState } from "react";

const PortfolioSection = () => {
  const [response, setResponse] = useState("");

  const getCode = () => {
    fetch(EndPoints.ApiUrl + EndPoints.Code)
      .then((datos) => datos.json())
      .then((datos) => {
        setResponse(datos);
        console.log(datos);
      });
  };

  useEffect(() => {
    getCode();
  }, []);
  return (
    <>
      <main className="portfolio-container">
        <section id="portfolio-code">
          <div className="portfolio-code-profile-container">
            <ImgCard singleImg={profilePic} classNm="profile-container-pic" />{" "}
            <img className="profile-container-bar-big" src={barBig} alt="" />
            <img
              className="profile-container-bar-small"
              src={barSmall}
              alt=""
            />
            <img
              className="profile-container-bar-small"
              src={barSmall}
              alt=""
            />
            <img
              className="profile-container-bar-small"
              src={barSmall}
              alt=""
            />
            <img className="profile-container-bar-big" src={barBig} alt="" />
            <img
              className="profile-container-bar-small"
              src={barSmall}
              alt=""
            />
            <div className="profile-container-ball"></div>
          </div>
          <div className="portfolio-code-divisor"></div>
          <div className="portfolio-code-text-container">
            <Highlight className="language-javascript">
              {response.title}
            </Highlight>
            <div className="profile-container-stack-container">
              <i className="fa-brands fa-square-js"></i>
              <i className="fa-brands fa-angular"></i>
              <i className="fa-brands fa-react"></i>
              <i className="fa-brands fa-java"></i>
              <i className="fa-brands fa-python"></i>
            </div>

            <Highlight className="language-javascript">
              {`
let currentEducation = [];

// Currently onGoing studies

currentEducation[0] = {
  description: 'Higher Technician in Development of Web Applications',
  date-start: '2022-2023',
  date-end: '2024-2025',
  place: 'IES El Rincón',
  details: "Currently studying 2º DAW"}

/* I am simultaneously studying WebApps and Multiplatform dev, but I will finish them at different time due to the impossibility to study the 3rd year at the same time */

currentEducation[1] = {
  description: 'Higher Technician in Multi-platform Applications Development',
  date-start: '2023-2024',
  date-end: '2025-2026',
  place: 'IES El Rincón',
  details: "Currently studying 2º DAM"}

// Other courses

currentEducation[2] = {
  description: 'Curso de diseño y Desarrollo Web Front-End',
  date-start: '14-03-2022',
  date-end: '03-06-2022',
  place: 'EOI'
  details: {
    framework-used: 'Vue3',
    imparted-by: 'ManzDev',
    final-project: {
      video-presentation: 'https://www.youtube.com/watch?v=fGUKov9ht9o',
      demo-url: 'https://amigaria.vercel.app'
    }
  }
}


let myExperience = []

myExperience[0] = {
  info: {
    name: 'NASA Api',
    description: "Consuming NASA's API to provide Picture of the Day and access to NASA's multimedia database"
  }
  was-hired: false,
  framework: 'Angular',
  demo-url: 'https://nasa-api.ianmontes.dev/'
}
`}
            </Highlight>
          </div>
        </section>
      </main>
    </>
  );
};

export default PortfolioSection;
