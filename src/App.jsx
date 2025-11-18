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
  const [frontRoute, setFrontRoute] = useState("Login");
  const apiRoute = useRef(null);
  const payLoad = useRef({});
  const [user, setUser] = useState({});
  const currentLogin = useRef(null);

  // scroll to page top effect -----------------------------------------------------------------------------------------

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "instant"});
    console.log(frontRoute);
    console.log(user);
    console.log(currentLogin);
    return;
  }, [frontRoute, user, currentLogin]);

  // rendering detector page -------------------------------------------------------------------------------------------

  if (frontRoute === "Detector") return (
    <>
      <NavBar refNav={navRef} route={frontRoute} setRoute={setFrontRoute} user={user} />
      <h1 id="title">SmartBrain Face Detector</h1>
      <FaceDetector refNav={navRef} />
      <FooterBar route={frontRoute} />
    </>
  );

  // rendering register/login page -------------------------------------------------------------------------------------

  return (
    <>
      <NavBar refNav={navRef} route={frontRoute} setRoute={setFrontRoute} />
      <RegisterLogin
        frontRoute={frontRoute} setFrontRoute={setFrontRoute}
        apiRoute={apiRoute} payLoad={payLoad}
        setUser={setUser} currentLogin={currentLogin}
      />
      <FooterBar route={frontRoute} />
    </>
  );

};
