//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Navigation Bar Component Logic
//######################################################################################################################

import { useRef, useState, useEffect } from "react";
import Logo from "./Logo.jsx";
import Profile from "./Profile.jsx";
import "./NavBar.css";

// navigation bar component renderer ###################################################################################

export default function NavBar(props) {

  // reference and state -----------------------------------------------------------------------------------------------

  const refSpan = useRef(null);
  const refProfile = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleProfile = () => setIsOpen(!isOpen);

  // effect ------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!refSpan.current.contains(event.target)
      && !refProfile.current.contains(event.target)) {
        setIsOpen(false);
      };
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {document.removeEventListener("mousedown", handleClickOutside);};
  });

  // rendering ---------------------------------------------------------------------------------------------------------

  return (
    <nav ref={props.refNav}>
      <Logo />
      <a href="#" target="_self"><i className="fa fa-sign-out fa-flip-horizontal"></i>&nbsp;&nbsp;Log Out</a>
      <span ref={refSpan} onClick={toggleProfile}><i className="fa fa-user"></i></span>
      <Profile
        ref={refProfile} profileOpen={isOpen}
        userName={"Tibor Hajszan"} detectCount={"#110"} lastLogin={"2025.06.23"}
      />
    </nav>
  );
};
