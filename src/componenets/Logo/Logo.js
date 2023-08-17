import React from "react";
import { Tilt } from "react-tilt";
import  Face from "./Face.png"
import './Logo.css';

const Logo = () => {
  return (
    <div className="">
      <Tilt className='Tilt' options={{ max : 75}} style={{ height: 150, width: 200 }}>
        <div className="poster">
          <img alt="logo" src={Face} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
