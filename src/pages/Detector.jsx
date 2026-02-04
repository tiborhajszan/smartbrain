//######################################################################################################################
//  Complete Web Developer in 2026 : Zero to Mastery
//  Final Project | SmartBrain > Detector Page Logic
//######################################################################################################################

import NavBar from "../header/NavBar.jsx";
import FaceDetector from "../main/FaceDetector.jsx";
import FooterBar from "../footer/FooterBar.jsx";
import "./Detector.css";

// detector page renderer ##############################################################################################

export default function Detector(props) {

  // rendering detector page -------------------------------------------------------------------------------------------

  return (<>
      <NavBar refNav={props.navRef} route={props.frontRoute} setRoute={props.setFrontRoute} user={props.userObj} />
      <h1 id="title">SmartBrain Face Detector</h1>
      <FaceDetector refNav={props.navRef} />
      <FooterBar route={props.frontRoute} />
  </>);

};
