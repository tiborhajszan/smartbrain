// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Final Project | SmartBrain | Application Webframe Logic
// #####################################################################################################################

import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import App from "./App.jsx";
import "./main.css";

// rendering application webframe ######################################################################################

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
