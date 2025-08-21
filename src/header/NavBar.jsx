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

  const userRef = useRef(null);
  const profileRef = useRef(null);
  const [profileOpen, setProfileOpen] = useState(false);

  // toggle profile callback -------------------------------------------------------------------------------------------

  function toggleProfile() {
    setProfileOpen(!profileOpen);
    return;
  };

  // click outside callback --------------------------------------------------------------------------------------------
  
  function clickOutside(event) {
    if (!userRef.current.contains(event.target) && !profileRef.current.contains(event.target)) setProfileOpen(false);
    return;
  };

  // close profile effect ----------------------------------------------------------------------------------------------

  useEffect(() => {
    if (props.route !== "Detector") return;
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  });

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <nav ref={props.refNav}>
      <div>
        {props.route === "Login" || props.route === "Register"
        ? <span>SmartBrain</span>
        : <span onClick={() => props.setRoute("Login")}>
            <i className="fa fa-sign-out fa-flip-horizontal"></i>&nbsp;&nbsp;Logout
          </span>}
        <Logo />
        {props.route === "Login"
        ? <span onClick={() => props.setRoute("Register")}>
            <i className="fa fa-edit"></i>&nbsp;&nbsp;Register
          </span>
        : null}
        {props.route === "Register"
        ? <span onClick={() => props.setRoute("Login")}>
            <i className="fa fa-sign-in"></i>&nbsp;&nbsp;Login
          </span>
        : null}
        {props.route === "Detector"
        ? <span ref={userRef} onClick={toggleProfile}>
            <i className="fa fa-user"></i>&nbsp;&nbsp;Profile
          </span>
        : null}
        {props.route === "Detector"
        ? <Profile
            refProfile={profileRef} profileOpen={profileOpen}
            userName={"Tibor Hajszan"}
            detectCount={"#110"}
            lastLogin={"2025.06.23"}
          />
        : null}
      </div>
    </nav>
  );
};
