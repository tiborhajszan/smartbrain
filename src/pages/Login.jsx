//######################################################################################################################
//  Complete Web Developer in 2026 : Zero to Mastery
//  Final Project | SmartBrain > Login Page Logic
//######################################################################################################################

import NavBar from "../header/NavBar.jsx";
import RegisterLogin from "../login/RegisterLogin.jsx";
import FooterBar from "../footer/FooterBar.jsx";

// login page renderer #################################################################################################
export default function Login(props) {

  // rendering register/login page -------------------------------------------------------------------------------------
  return (<>
    <NavBar refNav={props.navRef} route={props.frontRoute} setRoute={props.setFrontRoute} />
    <RegisterLogin
      frontRoute={props.frontRoute} setFrontRoute={props.setFrontRoute}
      apiRoute={props.apiRoute} payLoad={props.payLoad}
      userObj={props.userObj}
    />
    <FooterBar route={props.frontRoute} />
  </>);

// login page ends \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
};
