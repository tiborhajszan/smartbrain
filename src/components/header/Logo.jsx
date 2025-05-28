//######################################################################################################################
//  Zero To Mastery Academy
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Logo Component Logic
//######################################################################################################################

import React from "react";
import Tilt from "react-parallax-tilt";
import logoImg from "../../assets/icons8-brain-100.png";
import "./Logo.css";

// logo component renderer #############################################################################################

function Logo() {
  return (
    <Tilt className="logo-tilt" tiltMaxAngleX={30} tiltMaxAngleY={30} perspective={500}>
      <img src={logoImg} alt="brain" />
    </Tilt>
  );
};

// exports #############################################################################################################

export default Logo;
