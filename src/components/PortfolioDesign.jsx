import "../assets/css/PortfolioDesign.css";
import ImgCard from "./ImgCard";

const PortfolioDesign = () => {
  let imgSources = [
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
    "https://picsum.photos/300/200",
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
              <ImgCard
                classNm="profile-pic"
                singleImg={"https://picsum.photos/300/200"}
              />
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
