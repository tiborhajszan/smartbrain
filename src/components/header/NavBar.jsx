// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Final Project | SmartBrain | Navigation Bar Component Logic
// #####################################################################################################################

import React from "react";
import "./NavBar.css";

// navigation bar component renderer ###################################################################################

function NavBar() {
  return (
    <ul className="nav-bar">
      <li><a href="#" target="_self">Log Out &nbsp;<i className="fa fa-sign-out"></i></a></li>
      <li><i className="fa fa-navicon"></i></li>
    </ul>
  );
};

// exports #############################################################################################################

export default NavBar;
