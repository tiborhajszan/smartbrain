//######################################################################################################################
//  Complete Web Developer in 2026 : Zero to Mastery
//  Final Project | SmartBrain > Root Component Logic
//######################################################################################################################

import {useRef, useState, useEffect} from "react";
import Detector from "./pages/Detector.jsx";
import Login from "./pages/Login.jsx";
import "./App.css";

// root component renderer #############################################################################################
export default function App() {

  // ref and state -----------------------------------------------------------------------------------------------------
  const navRef = useRef(null);
  const [frontRoute, setFrontRoute] = useState("Login");
  const apiRoute = useRef(null);
  const payLoad = useRef({});
  const userObj = useRef({});

  // scroll to page top effect -----------------------------------------------------------------------------------------
  useEffect(() => window.scrollTo({top: 0, behavior: "instant"}), [frontRoute]);

  // rendering detector page -------------------------------------------------------------------------------------------
  if (frontRoute === "Detector") return (
    <Detector navRef={navRef} frontRoute={frontRoute} setFrontRoute={setFrontRoute} userObj={userObj} />
  );

  // rendering register/login page -------------------------------------------------------------------------------------
  return (<>
    <Login
      navRef={navRef} frontRoute={frontRoute} setFrontRoute={setFrontRoute}
      apiRoute={apiRoute} payLoad={payLoad} userObj={userObj}
    />
  </>);

// root component ends \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
};
