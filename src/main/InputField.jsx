//######################################################################################################################
//  Complete Web Developer in 2025: Zero to Mastery
//  Final Project | SmartBrain | Input Field Component Logic
//######################################################################################################################

import "./InputField.css";

// input field component renderer ######################################################################################

export default function InputField(props) {
  return (
    <div className="input-field">
      <input ref={props.refInput} type="search" placeholder="Enter Image URL" onKeyDown={props.pressEnter} />
      <button onClick={props.clickDetect}>Detect</button>
    </div>
  );
};
