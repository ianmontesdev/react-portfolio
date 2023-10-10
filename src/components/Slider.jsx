import PortfolioCode from "./PortfolioCode";
import PortfolioDesign from "./PortfolioDesign";
import "../assets/css/Slider.css";
import { useSelector } from "react-redux";

const Slider = () => {
  const sliderState = useSelector((state) => state.navState);

  return (
    <>
      <main className="slider">
        <section className={sliderState ? "slider-on-right" : ""}>
          <PortfolioCode />
          <PortfolioDesign />
        </section>
      </main>
    </>
  );
};

export default Slider;
