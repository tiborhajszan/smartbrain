// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Final Project | SmartBrain | Logo Component Logic
// #####################################################################################################################

import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";

// logo component renderer #############################################################################################

function Logo() {
  return (
    <Tilt className="tilt" tiltMaxAngleX={30} tiltMaxAngleY={30} perspective={500}>
    </Tilt>
  );
};

// exports #############################################################################################################

export default Logo;
