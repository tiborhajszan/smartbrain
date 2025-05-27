//######################################################################################################################
//  Zero To Mastery Academy
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Navigation Bar Component Logic
//######################################################################################################################

import React from "react";
// import Logo from "./Logo.jsx";
import "./NavBar.css";

// navigation bar component renderer ###################################################################################

function NavBar() {
  return (
    <div className="nav-bar">
      <a href="#" target="_self"><i className="fa fa-sign-out fa-flip-horizontal"></i>&nbsp;&nbsp;Log Out</a>
      {/* <Logo className="app-logo" /> */}
      <i className="fa fa-navicon"></i>
    </div>
  );
};

// exports #############################################################################################################

export default NavBar;
