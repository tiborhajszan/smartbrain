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
  };

  // click outside callback --------------------------------------------------------------------------------------------
  
  function clickOutside(event) {
    if (!userRef.current.contains(event.target) && !profileRef.current.contains(event.target)) setProfileOpen(false);
  };

  // close profile effect ----------------------------------------------------------------------------------------------

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => document.removeEventListener("mousedown", clickOutside);
  });

  // rendering component -----------------------------------------------------------------------------------------------

  return (
    <nav ref={props.refNav}>
      <div>
        <span>
          <i className="fa fa-sign-out fa-flip-horizontal"></i>&nbsp;&nbsp;Logout
        </span>
        <Logo />
        <span ref={userRef} className="user" onClick={toggleProfile}>
          <i className="fa fa-user"></i>&nbsp;&nbsp;Profile
        </span>
        <Profile
          refProfile={profileRef} profileOpen={profileOpen}
          userName={"Tibor Hajszan"}
          detectCount={"#110"}
          lastLogin={"2025.06.23"}
        />
      </div>
    </nav>
  );
};
