//######################################################################################################################
//  Zero To Mastery Academy
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Root Component Logic
//######################################################################################################################

import NavBar from "./components/header/NavBar.jsx";
import FaceDetector from "./main/FaceDetector.jsx";
import FooterBar from "./footer/FooterBar.jsx";
import "./App.css";

// root component renderer #############################################################################################

export default function App() {
  return (
    <>
      <NavBar />
      <FaceDetector />
      <FooterBar />
    </>
  );
};
