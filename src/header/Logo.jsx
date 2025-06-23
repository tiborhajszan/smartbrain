//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Logo Component Logic
//######################################################################################################################

import Tilt from "react-parallax-tilt";
import imgLogo from "/brain-icons8.svg";
import "./Logo.css";

// logo component renderer #############################################################################################

export default function Logo() {
  return (
    <Tilt className="logo-tilt" tiltMaxAngleX={30} tiltMaxAngleY={30} perspective={500} tiltReverse={true}>
      <img src={imgLogo} alt="brain" />
    </Tilt>
  );
};
