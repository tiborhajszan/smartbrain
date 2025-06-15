//######################################################################################################################
//  Zero To Mastery Academy
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Footer Bar Component Logic
//######################################################################################################################

import Copyright from "./Copyright.jsx";
import viteLogo from "/vite.svg";
import reactLogo from "/src/assets/react.svg";
import "./FooterBar.css";

// footer bar component renderer #######################################################################################

export default function FooterBar() {
  return (
    <footer>
      <Copyright />
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} alt="Vite Logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} alt="React Logo" />
      </a>
    </footer>
  );
};
