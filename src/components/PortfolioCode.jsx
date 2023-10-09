import Highlight from "react-highlight";

const PortfolioSection = () => {
  return (
    <>
      <Highlight className="javascript">
        {`
        console.log("Hello World")
        `}
      </Highlight>
    </>
  );
};

export default PortfolioSection;
