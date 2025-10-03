//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Navigation Bar Component Logic
//######################################################################################################################

import {useRef, useState, useEffect} from "react";
import Logo from "./Logo.jsx";
import Profile from "./Profile.jsx";
import "./NavBar.css";

// navigation bar component renderer ###################################################################################

export default function NavBar(props) {

  // ref and state -----------------------------------------------------------------------------------------------------

  const profileSwitchRef = useRef(null);
  const profileWindowRef = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // click outside callback --------------------------------------------------------------------------------------------
  
  function clickOutside(event) {
    if (!profileSwitchRef.current.contains(event.target)
    && !profileWindowRef.current.contains(event.target))
      setProfileOpen(false);
    return;
  };

  // close profile window effect ---------------------------------------------------------------------------------------

  useEffect(() => {
    if (props.route !== "Detector") return;
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  });

  // rendering detector page navigation bar ----------------------------------------------------------------------------

  if (props.route === "Detector") return (
    <nav ref={props.refNav}>
      <div>
        <span onClick={() => props.setRoute("Login")}>
          <i className="fa fa-sign-out fa-flip-horizontal"></i>&nbsp;&nbsp;Logout
        </span>
        <Logo />
        <span ref={profileSwitchRef} onClick={() => setProfileOpen(!profileOpen)}>
          <i className="fa fa-user"></i>&nbsp;&nbsp;Profile
        </span>
        <Profile refProfile={profileWindowRef} profileOpen={profileOpen} user={props.user} />
      </div>
    </nav>
  );

  // rendering register page navigation bar ----------------------------------------------------------------------------

  if (props.route === "Register") return (
    <nav ref={props.refNav}>
      <div>
        <span>SmartBrain</span>
        <Logo />
        <span onClick={() => props.setRoute("Login")}>
          <i className="fa fa-sign-in"></i>&nbsp;&nbsp;Login
        </span>
      </div>
    </nav>
  );

  // rendering login page navigation bar -------------------------------------------------------------------------------

  return (
    <nav ref={props.refNav}>
      <div>
        <span>SmartBrain</span>
        <Logo />
        <span onClick={() => props.setRoute("Register")}>
          <i className="fa fa-edit"></i>&nbsp;&nbsp;Register
        </span>
      </div>
    </nav>
  );

};
