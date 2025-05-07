// #####################################################################################################################
// Zero To Mastery Academy
// Complete Web Developer in 2025: Zero to Mastery
// Final Project | SmartBrain | Input Field Component Logic
// #####################################################################################################################

import React from "react";
import "./InputField.css";

// input field component renderer ######################################################################################

function InputField() {
  return (
    <div className="input-field">
      <p>
        Enter an image URL below and click "Detect". Our AI agent will find and mark human faces in the image.
      </p>
      <div>
        <input id="image-url" type="text" placeholder="Enter Image URL" />
        <button id="detect-btn">Detect</button>
      </div>
    </div>
  );
};

// exports #############################################################################################################

export default InputField;
