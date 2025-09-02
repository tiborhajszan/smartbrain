//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Application Webframe Logic
//######################################################################################################################

import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import Particles from "particles-bg";
import App from "./App.jsx";
import "./main.css";

// rendering application webframe ######################################################################################

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Particles bg={true} color="#eeeeee" type="cobweb" num={150} />
    <App />
  </StrictMode>
);
