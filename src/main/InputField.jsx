//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Input Field Component Logic
//######################################################################################################################

import "./InputField.css";

// input field component renderer ######################################################################################

export default function InputField(props) {
  return (
    <div className="input-field">
      <input type="text" placeholder="Enter Image URL" />
      <button onClick={props.callBack}>Detect</button>
    </div>
  );
};
