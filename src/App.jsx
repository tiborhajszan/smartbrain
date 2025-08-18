//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Root Component Logic
//######################################################################################################################

import {useRef, useState} from "react";
import NavBar from "./header/NavBar.jsx";
import RegisterLogin from "./login/RegisterLogin.jsx";
import FaceDetector from "./main/FaceDetector.jsx";
import FooterBar from "./footer/FooterBar.jsx";
import "./App.css";

// root component renderer #############################################################################################

export default function App() {

  // ref and state -----------------------------------------------------------------------------------------------------

  const navRef = useRef(null);
  const [route, setRoute] = useState("Login");

  // click submit callback ---------------------------------------------------------------------------------------------

  function clickSubmit() {
    setRoute("Detector");
  };

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <>
      <NavBar refNav={navRef} />
      {route === "Register" || route === "Login" ? <RegisterLogin route={route} clickSubmit={clickSubmit} /> : null}
      {route === "Detector" ? <h1 id="title">SmartBrain Face Detector</h1> : null}
      {/* <FaceDetector refNav={navRef} /> */}
      <FooterBar />
    </>
  );
};
