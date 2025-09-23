//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Root Component Logic
//######################################################################################################################

import {useRef, useState, useEffect} from "react";
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
  const [user, setUser] = useState({});
  const [lastLogin, setLastLogin] = useState(null);

  // scroll to page top effect -----------------------------------------------------------------------------------------

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "instant"});
  }, [route, lastLogin]);

  // rendering detector page -------------------------------------------------------------------------------------------

  if (route === "Detector") return (
    <>
      <NavBar refNav={navRef} route={route} setRoute={setRoute} />
      <h1 id="title">SmartBrain Face Detector</h1>
      <FaceDetector refNav={navRef} />
      <FooterBar route={route} />
    </>
  );

  // rendering register/login page -------------------------------------------------------------------------------------

  return (
    <>
      <NavBar refNav={navRef} route={route} setRoute={setRoute} />
      <RegisterLogin route={route} setRoute={setRoute} setUser={setUser} setLastLogin={setLastLogin} />
      <FooterBar route={route} />
    </>
  );
};
