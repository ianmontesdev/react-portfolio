import "../assets/css/PortfolioDesign.css";
import ImgCard from "./ImgCard";
import profileImg from "../assets/img/profile-design.jpg";
import gallery1 from "../assets/img/gallery/gallery1.jpg";
import gallery2 from "../assets/img/gallery/gallery2.jpg";

const PortfolioDesign = () => {
  let imgSources = [
    gallery1,
    gallery2,
    gallery2,
    gallery2,
    gallery2,
    gallery2,
    gallery2,
    "https://picsum.photos/300/200",
  ];
  return (
    <>
      <main className="portfolio-design-container">
        <div className="portfolio-design">
          <div className="portfolio-gallery-container">
            <ImgCard imgSrc={imgSources} />
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
              <ImgCard classNm="profile-pic" singleImg={profileImg} />
            </div>
            <div className="data-detail">
              <i className="fa-solid fa-briefcase"></i>

              <div>
                <span>
                  Certificate of higher education: Superior technician in
                  Artistic Photography and Laboratory
                </span>
                <span>School of Arts and Design of Gran Canaria</span>
              </div>
            </div>

            <div className="data-detail">
              <i className="fa-solid fa-graduation-cap"></i>

              <div>
                <span>
                  Certificate of higher education: Superior technician in
                  Artistic Photography and Laboratory
                </span>
                <span>School of Arts and Design of Gran Canaria</span>
              </div>
            </div>

            <div className="stack-container">
              <i className="fa-brands fa-figma"></i>
              <i className="fa-brands fa-figma"></i>
              <i className="fa-brands fa-figma"></i>
              <i className="fa-brands fa-figma"></i>
              <i className="fa-brands fa-figma"></i>
              <i className="fa-brands fa-figma"></i>
              <i className="fa-brands fa-figma"></i>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioDesign;
