import React from "react";
import { Tilt } from "react-tilt";
import  Face from "./Face.png"
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma2">
      <Tilt className='Tilt' options={{ max : 55}} style={{ height: 250, width: 250 }}>
        <div className="poster">
          <img alt="logo" src={Face} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
