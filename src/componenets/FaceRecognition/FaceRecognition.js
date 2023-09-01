import React from "react";
import girlface from "../../images/girlface.jpeg";

const FaceRecognition = ({box}) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img src={girlface} alt="tops" width="500px" heigh="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
