//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Footer Bar Component Logic
//######################################################################################################################

import Copyright from "./Copyright.jsx";
import QuickLinks from "./QuickLinks.jsx";
import FrontEnd from "./FrontEnd.jsx";
import BackEnd from "./BackEnd.jsx";
import "./FooterBar.css";

// footer bar component renderer #######################################################################################

export default function FooterBar() {
  return (
    <footer>
      <div>
        <Copyright />
        <QuickLinks />
        <FrontEnd />
        <BackEnd />
      </div>
    </footer>
  );
};
