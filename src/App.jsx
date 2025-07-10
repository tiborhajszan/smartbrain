//######################################################################################################################
//  Zero To Mastery Academy
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Root Component Logic
//######################################################################################################################

import {useRef} from "react";
import NavBar from "./header/NavBar.jsx";
import FaceDetector from "./main/FaceDetector.jsx";
import FooterBar from "./footer/FooterBar.jsx";
import "./App.css";

// root component renderer #############################################################################################

export default function App() {

  const navRef = useRef(null);

  return (
    <>
      <NavBar refNav={navRef} />
      <h1 id="title">SmartBrain Face Detector</h1>
      <FaceDetector refNav={navRef} />
      <FooterBar />
    </>
  );
};
