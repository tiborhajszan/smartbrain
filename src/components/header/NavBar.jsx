//######################################################################################################################
//  Zero To Mastery Academy
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Navigation Bar Component Logic
//######################################################################################################################

import { useRef, useState, useEffect } from "react";
import Logo from "./Logo.jsx";
import Profile from "./Profile.jsx";
import "./NavBar.css";

// navigation bar component renderer ###################################################################################

export default function NavBar() {

  // reference and state -----------------------------------------------------------------------------------------------

  const refIcon = useRef(null);
  const refProfile = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleProfile = () => setIsOpen(!isOpen);

  // effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!refIcon.current.contains(event.target)
      && !refProfile.current.contains(event.target)) {
        setIsOpen(false);
      };
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {document.removeEventListener("mousedown", handleClickOutside);};
  });

  // render ------------------------------------------------------------------------------------------------------------

  return (
    <div className="nav-bar">
      <Logo />
      <a href="#" target="_self"><i className="fa fa-sign-out fa-flip-horizontal"></i>&nbsp;&nbsp;Log Out</a>
      <i ref={refIcon} className="fa fa-user" onClick={toggleProfile}></i>
      <Profile ref={refProfile} profileOpen={isOpen} />
    </div>
  );
};
