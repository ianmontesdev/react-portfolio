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

export default ImgCard;
