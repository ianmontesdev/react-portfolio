import PropTypes from "prop-types";

const ImgCard = ({ imgSrc, singleImg, classNm }) => {
  return (
    <>
      {singleImg ? (
        <img className={classNm} src={singleImg} alt="" />
      ) : (
        <div className="portfolio-gallery-container">
          {imgSrc.map((image, i) => {
            return (
              <div className="img-card" key={i}>
                <img
                  className="photo-rounded photo-listener"
                  src={image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

ImgCard.propTypes = {
  imgSrc: PropTypes.arrayOf(PropTypes.string),
  singleImg: PropTypes.string,
  classNm: PropTypes.string,
};

export default ImgCard;
