//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Input Field Component Logic
//######################################################################################################################

import "./InputField.css";

// input field component renderer ######################################################################################

export default function InputField() {
  return (
    <div className="input-field">
      <input id="image-url" type="text" placeholder="Enter Image URL" />
      <button id="detect-btn">Detect</button>
    </div>
  );
};
