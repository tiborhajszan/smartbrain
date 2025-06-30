//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Copyright Component Logic
//######################################################################################################################

import logoTH from "/src/assets/tH.svg";
import "./Copyright.css";

// copyright component renderer ########################################################################################

export default function Copyright() {
  return (
    <div className="footer-item copyright">
      <img src={logoTH} alt="Tibor Hajszan Logo" />
      <a href="https://www.linkedin.com/in/tibor-hajszan/" target="_blank">
        &copy; 2025 Tibor Hajszan
      </a>
      <p>SmartBrain is the guided final project of:</p>
      <a href="https://zerotomastery.io/courses/coding-bootcamp/" target="_blank">
        Complete Web Developer in 2025 : Zero to Mastery
      </a>
    </div>
  );
};
