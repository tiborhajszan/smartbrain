//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Footer Bar Component Logic
//######################################################################################################################

import Copyright from "./Copyright.jsx";
import Links from "./Links.jsx";
import Tools from "./Tools.jsx";
import BackEnd from "./BackEnd.jsx";
import "./FooterBar.css";

// footer bar component renderer #######################################################################################

export default function FooterBar() {
  return (
    <footer>
      <div>
        <Copyright />
        <Links />
        <Tools />
        <BackEnd />
      </div>
    </footer>
  );
};
