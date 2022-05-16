import water from "../images/water.png";

const ImageDisplay = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={water} alt="Water mask picture" height={600} width={450} />
    </div>
  );
};

export default ImageDisplay;
